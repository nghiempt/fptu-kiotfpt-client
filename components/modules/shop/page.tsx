"use client";

import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import { CircularProgress, Pagination } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
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

  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [valueProduct, setValueProduct] = React.useState(0);

  const [products, setProducts] = useState([] as any);
  const [currentShop, setCurrentShop] = useState({} as any);

  const handleChangeProduct = (event: any, newValue: any) => {
    setValueProduct(newValue);
    loadProductByPage("1")
  };

  const renderResult = (totalPage: any) => {
    switch (totalPage) {
      case 1:
        return "4"
      case 2:
        return "12"
      case 3:
        return "24"
      case 4:
        return "36"
      case 5:
        return "48"
      default:
        return "0"
    }
  }

  const handleFollowShop = () => {
    alert('follow')
  }

  const checkFollow = () => {
    return false
  }

  const handleChangePage = (e: any, page: any) => {
    loadProductByPage(page)
  }

  const handleChangeCategory = (catID: string) => {
    loadProductByPage("1")
  }

  const loadProductByPage = async (page: string) => {
    setLoading(true)
    const pros = await ShopService.getProductByShopID(searchParams.get('id') || "", page, "12");
    if (pros?.result) {
      setProducts(pros?.data);
      setLoading(false)
    }
  }

  React.useEffect(() => {
    const fetch = async () => {
      loadProductByPage("1")
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
      <div className="w-3/4 p-4 bg-blue-50 rounded-lg box-border">
        <div className="w-full flex items-center gap-x-5">
          <div className="w-1/5 flex gap-3 border-r border-gray-500">
            <img src={currentShop?.thumbnail} alt="img" style={{ width: "86px", height: "86px" }} className="rounded-md" />
            <div className="flex flex-col gap-2">
              <h1 className="text-[16px] font-semibold">{currentShop?.name}</h1>
              <div className="flex justify-center items-center bg-[rgb(var(--quaternary-rgb))] py-1 px-2 rounded-md">
                <CheckIcon style={{ color: "white" }} />
                <h1 className="text-white">
                  Official
                </h1>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="flex justify-center items-center gap-1">
                  <StarIcon className="text-[#FF9017]" />
                  <h1 className="text-[12px]">{currentShop?.rate}&nbsp;/&nbsp;5</h1>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <FavoriteIcon className="text-red-500" />
                  <h1 className="text-[12px]">Followers: {currentShop?.follower}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-4/5 flex flex-col justify-center items-start gap-2">
            <div className="flex justify-center items-center gap-1">
              <EmailIcon />
              <h1 className="text-[12px]">Email: {currentShop?.email}</h1>
            </div>
            <div className="flex justify-center items-center gap-1">
              <PhoneAndroidIcon />
              <h1 className="text-[12px]">Phone: {currentShop?.phone}</h1>
            </div>
            <div className="flex justify-center items-center gap-1">
              <FmdGoodIcon />
              <h1 className="text-[12px]">Location: {currentShop?.address?.value} - {currentShop?.address?.district?.value} - {currentShop?.address?.province?.value}</h1>
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className="w-1/5 mt-4">
          {
            checkFollow()
              ?
              <button className="w-full flex justify-center items-center font-medium bg-[rgb(var(--quaternary-rgb))] rounded-md py-1.5 text-white cursor-text">Followed</button>
              :
              <button onClick={handleFollowShop} className="w-full flex justify-center items-center border border-2 font-semibold border-[rgb(var(--quaternary-rgb))] hover:bg-blue-200 rounded-md py-1 text-[rgb(var(--quaternary-rgb))]">+ Follow</button>
          }
        </div>
      </div>
      <div className="w-3/4 flex mt-8 gap-4">
        <div className="w-1/5">
          <div className="box-border gap-4">
            <h1 className="font-semibold text-[18px] mb-2">Shop categories</h1>
            <div className="flex flex-col gap-2">
              {
                currentShop?.shopcategories?.map((item: any, index: any) => {
                  return (
                    <div key={index} onClick={() => handleChangeCategory(item?.id)} className="flex jusitfy-center items-center gap-x-2 p-2 shadow-md rounded-lg cursor-pointer hover:bg-gray-100">
                      <img src={item?.category?.thumbnail} alt="img" width={30} />
                      <div>
                        {item?.category?.name}
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="w-4/5 box-border px-4 rounded-lg">
          <CustomTabPanel value={value} index={0}>
            <div>
              <div className="flex items-center">
                <h1 className="font-semibold text-[20px]">
                  All Products: &nbsp;{" "}
                </h1>
                <h1 className="text-[16px]">{renderResult(products?.totalPage)}+ results</h1>
              </div>
              <div>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={valueProduct}
                      onChange={handleChangeProduct}
                      aria-label="basic tabs example"
                    >
                      <Tab label="All" {...a11yProps(0)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Official" {...a11yProps(1)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Top Deal" {...a11yProps(2)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Best Seller" {...a11yProps(3)} sx={{ textTransform: "none", fontSize: "14px" }} />
                      <Tab label="Popular" {...a11yProps(4)} sx={{ textTransform: "none", fontSize: "14px" }} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={valueProduct} index={0}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={1}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={2}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={3}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={4}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                  <CustomTabPanel value={valueProduct} index={5}>
                    <div className="w-full">
                      {
                        loading
                          ?
                          <div className="flex w-full justify-center items-center h-[800px] mt-4">
                            <CircularProgress />
                          </div>
                          :
                          <div className="w-full flex grid grid-cols-4 gap-2 mt-4">
                            {
                              products?.products?.map((item: any, index: any) => {
                                return (
                                  <CardProduct key={index} item={item} index={index} limit={100} />
                                );
                              })
                            }
                          </div>
                      }
                      <div className="flex justify-end mt-8">
                        <Pagination
                          count={products?.totalPage}
                          variant="outlined"
                          shape="rounded"
                          onChange={(e, page) => handleChangePage(e, page)}
                        />
                      </div>
                    </div>
                  </CustomTabPanel>
                </Box>
              </div>
            </div>
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
}
