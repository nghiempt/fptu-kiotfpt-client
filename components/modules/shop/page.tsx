"use client";

import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import { Divider, Pagination } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import CategoryMenu from "@/components/common/category-menu";
import { useSearchParams } from "next/navigation";
import { ShopService } from "@/service/shop";
import CardProduct from "@/components/common/card-product";

interface CustomTabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({
  children,
  value,
  index,
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Shop() {

  const searchParams = useSearchParams();
  const itemsToShowInitially = 8;

  const [value, setValue] = React.useState(0);
  const [valueProduct, setValueProduct] = React.useState(0);
  const [showAllItems, setShowAllItems] = useState(false);

  const [products, setProducts] = useState([]);
  const [currentShop, setCurrentShop] = useState({} as any);

  const items = Array.from(
    { length: 12 },
    (_, index) => `Phone - Computer ${index + 1}`
  );

  const handleChangeProduct = (event: any, newValue: any) => {
    setValueProduct(newValue);
  };

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const toggleShowAllItems = () => {
    setShowAllItems((prevShowAllItems) => !prevShowAllItems);
  };

  React.useEffect(() => {
    const fetch = async () => {
      const pros = await ShopService.getProductByShopID(searchParams.get('id') || "", "1", "15");
      if (pros?.result) {
        setProducts(pros?.data);
      }

      const s = await ShopService.getShopByID(searchParams.get('id') || "");
      if (s?.result) {
        setCurrentShop(s?.data);
      }
    }
    fetch();
  }, [searchParams]);

  return (
    <div className="w-full flex flex-col justify-center items-center mb-5">
      <CategoryMenu />
      <div className="w-3/4 p-4 bg-blue-100 rounded-lg box-border">
        <div className="w-full flex items-center gap-x-5">
          <img src={currentShop?.thumbnail} alt="img" style={{ width: "80px", height: "80px" }} />
          <div className="flex flex-col gap-2">
            <h1 className="text-[16px] font-semibold">{currentShop?.name}</h1>
            <div className="w-1/2 flex justify-center items-center bg-[rgb(var(--quaternary-rgb))] py-1 rounded-md">
              <CheckIcon style={{ color: "white" }} />
              <h1 className="text-white">
                Official
              </h1>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="flex justify-center items-center gap-1">
                <StarIcon className="text-[#FF9017]" />
                <h1 className="text-[12px]">4.9&nbsp;/&nbsp;5.0</h1>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FavoriteIcon className="text-red-500" />
                <h1 className="text-[12px]">Followers: {currentShop?.follower}</h1>
              </div>
            </div>
          </div>
          <Divider orientation="vertical" flexItem className="bg-blue-200" />
          <button className="border border-2 font-semibold border-[rgb(var(--quaternary-rgb))] rounded-md py-2 px-8 text-[rgb(var(--quaternary-rgb))]">+ Follow</button>
        </div>
        <div className="w-full flex items-center mt-4">
          <div className="w-3/4">
            <Box sx={{ width: "100%" }}>
              <Box>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="shop"
                >
                  <Tab label="All Products" {...a11yProps(0)} sx={{ textTransform: "none", fontSize: "16px" }} />
                  <Tab label="Collection" {...a11yProps(1)} sx={{ textTransform: "none", fontSize: "16px" }} />
                  <Tab label="Store Profile" {...a11yProps(2)} sx={{ textTransform: "none", fontSize: "16px" }} />
                </Tabs>
              </Box>
            </Box>
          </div>
          <div className="w-1/4 flex gap-x-4 h-[35px] px-4 rounded-md items-center bg-white border border-gray-400">
            <SearchIcon style={{ color: "#888" }} />
            <input
              className="outline-none w-full"
              type="text"
              placeholder="Search for products at the store"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 flex mt-4 gap-4">
        <div className="w-1/5">
          <div className="box-border gap-4 bg-gray-100 p-4 rounded-lg">
            <h1 className="font-semibold text-[18px] mb-2">Categories</h1>
            <div className="flex flex-col gap-2">
              {
                []?.map((item: any, index: any) => {
                  return (
                    <div key={index} className="flex jusitfy-center items-center gap-x-2 p-2 border-b border-gray-200">
                      <img src={item?.img} alt="img" width={30} />
                      <div>
                        {item?.name}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="w-4/5 box-border bg-gray-100 p-4 rounded-lg">
          <CustomTabPanel value={value} index={0}>
            <div>
              <div className="flex items-center">
                <h1 className="font-semibold text-[20px]">
                  All Products: &nbsp;{" "}
                </h1>
                <h1 className="text-[16px]">16+ results</h1>
              </div>
              <div>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={valueProduct}
                      onChange={handleChangeProduct}
                      aria-label="basic tabs example"
                    >
                      <Tab label="Popular" {...a11yProps(0)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Latest" {...a11yProps(1)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Top Deal" {...a11yProps(2)} sx={{ textTransform: "none", fontSize: "14px" }} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={valueProduct} index={0}>
                    <div className="w-full">
                      <div className="flex justify-end p-2 py-4">
                        <h1>Delivered to&nbsp;</h1>
                        <u>Binh Thuy, Can Tho, Vietnam</u>
                        <p className="px-2">/</p>
                        <h1 className="text-blue-500 cursor-pointer font-medium">
                          Change
                        </h1>
                      </div>
                      <div className="w-full flex grid grid-cols-4 gap-2">
                        {products.slice(0, 12)?.map((item: any, index: any) => {
                          return (
                            <CardProduct key={index} item={item} index={index} limit={100} />
                          );
                        })}
                      </div>
                      <div className="flex justify-end mt-8">
                        <Pagination count={10} variant="outlined" shape="rounded" />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={1}>
                    <h1 className="mt-4">Feature Under Development</h1>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={2}>
                    <h1 className="mt-4">Feature Under Development</h1>
                  </CustomTabPanel>
                </Box>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <h1 className="mt-4">Feature Under Development</h1>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <h1 className="mt-4">Feature Under Development</h1>
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}
