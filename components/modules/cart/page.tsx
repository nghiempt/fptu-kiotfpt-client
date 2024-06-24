"use client";

import CardProduct from "@/components/common/card-product";
import CategoryMenu from "@/components/common/category-menu";
import SuperDiscount from "@/components/common/super-discount";
import DelModal from "@/components/pop-up/del-cart-product";
import { ROUTE } from "@/constant/route";
import { CartService } from "@/service/cart";
import { ProductService } from "@/service/product";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import EuroIcon from "@mui/icons-material/Euro";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockIcon from "@mui/icons-material/Lock";
import MessageIcon from "@mui/icons-material/Message";
import PixIcon from "@mui/icons-material/Pix";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import StyleIcon from "@mui/icons-material/Style";
import { Divider } from "@mui/material";
import Cookie from "js-cookie";
import Link from "next/link";
import React from "react";

type SelectedItems = {
  all: boolean;
  shops: { [key: number]: boolean };
  products: { [key: string]: boolean };
};

type CartItem = {
  shopIndex: number;
  id: string;
  quantity: number;
  note: string;
  total: number;
  section_id: string;
  shop: any[];

  product: {
    id: string;
    name: string;
    thumbnail: any[];
  };
  variant: {
    id: string;
    price: number;
    quantity: number;
    color: {
      id: string;
      value: string;
    };
    size: {
      id: string;
      value: string;
    };
  };
};

type ShopItem = {
  name: string;
  thumbnail: string;
};

export default function Card() {
  const accountID = Cookie.get("accountID");
  const [openDel, setOpenDel] = React.useState(false);
  const [idDel, setIdDel] = React.useState("" as any);
  const [cart, setCart] = React.useState([] as any);
  const [products, setProducts] = React.useState([] as any);

  const [totalProduct, setTotalProduct] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState<any>({
    all: false,
    shops: {},
    products: {},
  });

  React.useEffect(() => {
    const fetch = async () => {
      const c = await CartService.getCartByID(JSON.parse(accountID || ""));
      if (c?.result) {
        setCart(c?.data);
      }
      const p = await ProductService.getAllProducts("1","16");
      if (p?.result) {
        setProducts(p?.data);
      }
    };

    fetch();
  }, []);

  const UpdateAmount = async (id: any, amount: any) => {
    const upP = await CartService.updateAmountProduct(id, amount);
    if (upP) {
      window.location.reload();
    } else {
      alert("Update fail");
    }
  };

  const handleOpenDel = (id: any) => {
    setOpenDel(true);
    setIdDel(id);
  };
  const handleCloseDel = () => {
    setOpenDel(false);
  };
  const handleSelectAll = () => {
    const newSelectedItems = { ...selectedItems };
    newSelectedItems.all = !selectedItems.all;
    newSelectedItems.shops = {};
    newSelectedItems.products = {};

    if (newSelectedItems.all) {
      cart.forEach((shop: any, shopIndex: number) => {
        newSelectedItems.shops[shopIndex] = true;
        shop.items.forEach((item: any, itemIndex: number) => {
          newSelectedItems.products[`${shopIndex}-${itemIndex}`] = true;
        });
      });
    }

    setSelectedItems(newSelectedItems);
  };

  const handleSelectShop = (shopIndex: number) => {
    const newSelectedItems: SelectedItems = { ...selectedItems };

    // Toggle shop selection status
    newSelectedItems.shops[shopIndex] = !newSelectedItems.shops[shopIndex];

    // Update product selection status for the shop
    cart[shopIndex].items.forEach((item: any, itemIndex: any) => {
      newSelectedItems.products[`${shopIndex}-${itemIndex}`] =
        newSelectedItems.shops[shopIndex];
    });

    // Update all selection status
    newSelectedItems.all = cart.every(
      (shop: any, index: any) => newSelectedItems.shops[index]
    );

    setSelectedItems(newSelectedItems);
  };

  const handleSelectProduct = (shopIndex: number, itemIndex: number) => {
    const newSelectedItems = { ...selectedItems };
    newSelectedItems.products[`${shopIndex}-${itemIndex}`] =
      !newSelectedItems.products[`${shopIndex}-${itemIndex}`];

    // Update shop selection status
    newSelectedItems.shops[shopIndex] = cart[shopIndex].items.every(
      (item: any, i: number) => newSelectedItems.products[`${shopIndex}-${i}`]
    );

    // Update all selection status
    const allProductsSelected = cart.every((shop: any, sIndex: number) =>
      shop.items.every(
        (item: any, iIndex: number) =>
          newSelectedItems.products[`${sIndex}-${iIndex}`]
      )
    );

    newSelectedItems.all = allProductsSelected;

    setSelectedItems(newSelectedItems);
  };

  const getSelectedProductsInfo = (): CartItem[] => {
    const selectedProductsInfo: CartItem[] = [];

    cart.forEach((section: any, shopIndex: any) => {
      section?.items?.forEach((item: any, itemIndex: any) => {
        if (selectedItems.products[`${shopIndex}-${itemIndex}`]) {
          selectedProductsInfo.push({
            id: item?.id,
            quantity: item?.quantity,
            note: item?.note,
            total: item?.total,
            section_id: section?.section_id,
            shopIndex: shopIndex,
            shop: section?.shop,
            product: item?.product,
            variant: item?.variant,
          });
        }
      });
    });

    return selectedProductsInfo;
  };

  const getSelectedShopInfo = (): { [key: string]: ShopItem } => {
    const selectedShopInfo: { [key: string]: ShopItem } = {};
    cart.forEach((section: any, shopIndex: any) => {
      if (selectedItems.shops[shopIndex]) {
        selectedShopInfo[shopIndex] = {
          name: section?.shop?.name,
          thumbnail: section?.shop?.thumbnail,
        };
      }
    });

    return selectedShopInfo;
  };

  const selectedProducts = getSelectedProductsInfo();
  const selectedShopInfo = getSelectedShopInfo();

  React.useEffect(() => {
    const t = selectedProducts.reduce(
      (sum, product) => sum + (product?.total || 0),
      0
    );
    setTotalProduct(t);
    localStorage.setItem("dataCart", JSON.stringify(selectedProducts));
  }, [selectedProducts, selectedShopInfo]);

  return (
    <div className="w-full pt-4 flex flex-col justify-center items-center">
      <DelModal open={openDel} handleClose={handleCloseDel} id={idDel} />
      <CategoryMenu />
      <div className="w-3/4 flex justify-start font-black text-2xl text-gray-700">
        My Cart
      </div>
      <div className="w-3/4 flex gap-x-4">
        <div className="w-full border border-gray-200 rounded-md px-6 py-3 my-5">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <div className="w-full p-4">
              <input
                type="checkbox"
                checked={selectedItems.all}
                onChange={handleSelectAll}
              />
              <label className="ml-2 font-bold">Select All</label>
            </div>
            {cart?.map((section: any, shopIndex: number) => {
              return (
                <div key={shopIndex} className="w-full p-4">
                  <div className="w-full bg-gray-100 p-2 flex items-center gap-2 rounded-lg">
                    <input
                      type="checkbox"
                      checked={selectedItems.shops[shopIndex] || false}
                      onChange={() => handleSelectShop(shopIndex)}
                    />
                    <img
                      src={section?.shop?.thumbnail}
                      alt="img"
                      style={{ width: 50 }}
                    />
                    <h1>{section?.shop?.name}</h1>
                  </div>
                  {section?.items?.map((item: any, itemIndex: number) => {
                    return (
                      <div
                        key={itemIndex}
                        className="w-full flex justify-between pl-5 box-border"
                      >
                        <div className="flex justify-center items-center gap-x-5 mt-4">
                          <input
                            type="checkbox"
                            checked={
                              selectedItems.products[
                                `${shopIndex}-${itemIndex}`
                              ] || false
                            }
                            onChange={() =>
                              handleSelectProduct(shopIndex, itemIndex)
                            }
                          />
                          <img
                            src={item?.product?.thumbnail[0]?.link}
                            alt="img"
                            style={{
                              width: 100,
                            }}
                          />
                          <div>
                            <div className="font-medium text-[16px] mb-1">
                              {item?.product?.name}
                            </div>
                            <div className="font-regular text-gray-500 mb-2">
                              <span>Price: ${item?.variant?.price}</span>
                            </div>
                            <div className="font-regular text-gray-500 mb-2">
                              <div>
                                <span>
                                  Color: {item?.variant?.color?.value}
                                </span>
                                <span>
                                  {" "}
                                  / Size: {item?.variant?.size?.value}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-5 flex gap-x-4 items-center">
                          <div>
                            <div className="mb-2 text-center text-xl font-semibold border rounded-md py-2">
                              ${item?.total}
                            </div>
                            <div className="flex">
                              <div className="flex justify-end gap-x-1">
                                <button
                                  type="submit"
                                  className="px-4 text-[16px] font-semibold border border-gray-200 rounded-sm"
                                  style={{ color: "gray" }}
                                  onClick={() =>
                                    UpdateAmount(item?.id, item?.quantity - 1)
                                  }
                                >
                                  -
                                </button>
                                <input
                                  type="text"
                                  className="w-12 text-center text-white font-bold border border-[rgb(var(--quaternary-rgb))] rounded-sm bg-[rgb(var(--quaternary-rgb))]"
                                  value={item?.quantity}
                                />
                                <button
                                  type="submit"
                                  className="px-4 text-[16px] font-semibold border border-gray-200 rounded-sm"
                                  style={{ color: "gray" }}
                                  onClick={() =>
                                    UpdateAmount(item?.id, item?.quantity + 1)
                                  }
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="bg-[rgb(var(--primary-rgb))] p-1 rounded-md text-white "
                              onClick={() => handleOpenDel(item?.id)}
                            >
                              <DeleteIcon className="cursor-pointer" />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex justify-between pt-8 pb-4">
            <button
              type="submit"
              className="py-2 px-4 text-[12px] font-semibold border border-gray-200 rounded-md"
              style={{ color: "black" }}
            >
              <ArrowBackIcon />
              &nbsp;Back to shop
            </button>
            {/* <button
              type="submit"
              className="bg-[rgb(var(--primary-rgb))] py-2 px-4 text-[14px] font-semibold rounded-md"
              style={{ color: "white" }}
            >
              Remove all
            </button> */}
          </div>
        </div>
        <div className="w-1/4">
          <div className="border border-gray-200 rounded-md p-5 mt-4">
            <div className="flex justify-between">
              <div className="pb-1 text-[16px]">Subtotal</div>
              <div className="text-black pb-1 text-[16px] text-left font-semibold">
                ${totalProduct}
              </div>
            </div>

            <Divider className="pt-2" />
            <div className="flex justify-between font-bold pt-2">
              <div className="text-[18px]">Total</div>
              <div className="text-[18px] font-bold">${totalProduct}</div>
            </div>
            <div className="my-2">
              <Link
                href={{
                  pathname: ROUTE.CHECKOUT,
                }}
              >
                <button className="w-full py-3 bg-[rgb(var(--primary-rgb))] text-white text-[16px] border rounded-md hover:opacity-80 font-black mt-4">
                  PAY
                </button>
              </Link>
            </div>
            <div className="flex p-2 gap-2">
              <CreditCardIcon />
              <PixIcon />
              <PriceChangeIcon />
              <StyleIcon />
              <EuroIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 flex justify-start py-4 gap-20">
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <LockIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Secure payment</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <MessageIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Customer support</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="p-2 border rounded-full bg-[#DEE2E7]">
            <LocalShippingIcon style={{ color: "#8B96A5" }} />
          </div>
          <div>
            <div className="font-regular text-[#1C1C1C]">Free delivery</div>
            <div className="font-regular text-[#A9ACB0]">
              Have you ever finally just
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <SuperDiscount />
      </div>
      <div className="w-3/4 mt-6 mb-10">
        <div className="">
          <h1 className="font-black text-2xl mb-4 text-gray-700">
            Related Products
          </h1>
          <div className="grid grid-cols-6 gap-x-4">
            {products.slice(0, 6)?.map((item: any, index: any) => {
              return <CardProduct item={item} index={index} limit={100} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
