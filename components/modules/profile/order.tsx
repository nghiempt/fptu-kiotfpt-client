"use client";

import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StoreIcon from "@mui/icons-material/Store";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import Cookie from 'js-cookie';
import { ProfileService } from "@/service/profile";

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

export default function Order() {
  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [value, setValue] = React.useState(0);
  const [orders, setOrders] = React.useState([] as any);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    const fetch = async () => {
      const prof = await ProfileService.getAllOrderByAccountID(accountID);
      if (prof?.result) {
        setOrders(prof?.data);
        console.log(prof?.data);
      } else {
        console.log("wrong");
      }
    }
    fetch();
  }, []);

  useEffect(() => { }, [orders]);

  return (
    <div className="w-full box-border flex flex-col gap-5">
      <h1 className="font-semibold text-[20px] pt-4">Order Management</h1>
      <div className="w-full flex gap-x-4 rounded-md">
        <div className="w-full  flex items-center ">
          <div className="w-full bg-gray-100 flex">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tab"
              style={{ backgroundColor: 'white', width: "100%" }}
            >
              <Tab
                label="All Orders"
                {...a11yProps(0)}
                sx={{ textTransform: "none", fontSize: "14px" }}
              />
              <Tab
                label="Pending"
                {...a11yProps(1)}
                sx={{ textTransform: "none", fontSize: "14px" }}
              />
              <Tab
                label="Delivering to you"
                {...a11yProps(2)}
                sx={{ textTransform: "none", fontSize: "14px" }}
              />
              <Tab
                label="Delivered"
                {...a11yProps(3)}
                sx={{ textTransform: "none", fontSize: "14px" }}
              />
            </Tabs>
          </div>
        </div>
      </div>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-4">
          {orders?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full flex flex-col gap-4 gap-x-4 bg-gray-50 rounded-lg p-5">
                <div className="flex gap-x-2 text-gray-500">
                  <LocalShippingIcon />
                  {item?.status?.id === 27 && <h1>Successful Delivery</h1>}
                  {item?.status?.id === 21 && <h1>Pending Shop</h1>}
                  {item?.status?.id === 24 && <h1>Delivering</h1>}
                  {item?.status?.id === 25 && <h1>Cancel</h1>}
                  {item?.status?.id === 26 && <h1>Returning</h1>}
                  {item?.status?.id === 23 && <h1>Rejected</h1>}
                  - {item?.shop?.name}
                </div>
                <Divider className="pt-2" />
                {item?.product?.map((item2: any, index: any) => {
                  return (
                    <div key={index} className="w-full flex gap-x-2">
                      <img className="rounded-md" src={item2?.thumbnail} alt="" style={{ width: "10%" }} />
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h1 className="font-medium text-[14px]">
                            {item2?.name}
                          </h1>
                          <h1 className="text-[16px] font-medium"> ${item2?.variant?.price}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <StoreIcon />
                          <h1>Amount: {item2?.amount}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <IntegrationInstructionsIcon />
                          <h1>{item2?.variant?.color?.value} - {item2?.variant?.size?.value}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Divider />
                <div className="flex gap-x-2 justify-end text-[16px] items-center">
                  <h1 className="text-gray-400">Total amount:</h1>
                  <h1 className="font-semibold text-xl">${item?.total}</h1>
                </div>
                <div className="flex gap-x-2 justify-end text-blue-500">
                  <button className="bg-[rgb(var(--primary-rgb))] text-white rounded-md p-2">
                    Repurchase
                  </button>
                  <button className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md p-2">
                    See details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col gap-4">
          {orders?.filter((item: any) => item?.status?.id === 21)?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full flex flex-col gap-4 gap-x-4 bg-gray-50 rounded-lg p-5">
                <div className="flex gap-x-2 text-gray-500">
                  <LocalShippingIcon />
                  {item?.status?.id === 27 && <h1>Successful Delivery</h1>}
                  {item?.status?.id === 21 && <h1>Pending Shop</h1>}
                  {item?.status?.id === 24 && <h1>Delivering</h1>}
                  {item?.status?.id === 25 && <h1>Cancel</h1>}
                  {item?.status?.id === 26 && <h1>Returning</h1>}
                  {item?.status?.id === 23 && <h1>Rejected</h1>}
                  - {item?.shop?.name}
                </div>
                <Divider className="pt-2" />
                {item?.product?.map((item2: any, index: any) => {
                  return (
                    <div key={index} className="w-full flex gap-x-2">
                      <img className="rounded-md" src={item2?.thumbnail} alt="" style={{ width: "10%" }} />
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h1 className="font-medium text-[14px]">
                            {item2?.name}
                          </h1>
                          <h1 className="text-[16px] font-medium"> ${item2?.variant?.price}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <StoreIcon />
                          <h1>Amount: {item2?.amount}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <IntegrationInstructionsIcon />
                          <h1>{item2?.variant?.color?.value} - {item2?.variant?.size?.value}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Divider />
                <div className="flex gap-x-2 justify-end text-[16px] items-center">
                  <h1 className="text-gray-400">Total amount:</h1>
                  <h1 className="font-semibold text-xl">${item?.total}</h1>
                </div>
                <div className="flex gap-x-2 justify-end text-blue-500">
                  <button className="bg-[rgb(var(--primary-rgb))] text-white rounded-md p-2">
                    Repurchase
                  </button>
                  <button className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md p-2">
                    See details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="flex flex-col gap-4">
          {orders?.filter((item: any) => item?.status?.id === 24)?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full flex flex-col gap-4 gap-x-4 bg-gray-50 rounded-lg p-5">
                <div className="flex gap-x-2 text-gray-500">
                  <LocalShippingIcon />
                  {item?.status?.id === 27 && <h1>Successful Delivery</h1>}
                  {item?.status?.id === 21 && <h1>Pending Shop</h1>}
                  {item?.status?.id === 24 && <h1>Delivering</h1>}
                  {item?.status?.id === 25 && <h1>Cancel</h1>}
                  {item?.status?.id === 26 && <h1>Returning</h1>}
                  {item?.status?.id === 23 && <h1>Rejected</h1>}
                  - {item?.shop?.name}
                </div>
                <Divider className="pt-2" />
                {item?.product?.map((item2: any, index: any) => {
                  return (
                    <div key={index} className="w-full flex gap-x-2">
                      <img className="rounded-md" src={item2?.thumbnail} alt="" style={{ width: "10%" }} />
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h1 className="font-medium text-[14px]">
                            {item2?.name}
                          </h1>
                          <h1 className="text-[16px] font-medium"> ${item2?.variant?.price}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <StoreIcon />
                          <h1>Amount: {item2?.amount}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <IntegrationInstructionsIcon />
                          <h1>{item2?.variant?.color?.value} - {item2?.variant?.size?.value}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Divider />
                <div className="flex gap-x-2 justify-end text-[16px] items-center">
                  <h1 className="text-gray-400">Total amount:</h1>
                  <h1 className="font-semibold text-xl">${item?.total}</h1>
                </div>
                <div className="flex gap-x-2 justify-end text-blue-500">
                  <button className="bg-[rgb(var(--primary-rgb))] text-white rounded-md p-2">
                    Repurchase
                  </button>
                  <button className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md p-2">
                    See details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="flex flex-col gap-4">
          {orders?.filter((item: any) => item?.status?.id === 27)?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full flex flex-col gap-4 gap-x-4 bg-gray-50 rounded-lg p-5">
                <div className="flex gap-x-2 text-gray-500">
                  <LocalShippingIcon />
                  <h1>Successful Delivery</h1>

                  - {item?.shop?.name}
                </div>
                <Divider className="pt-2" />
                {item?.product?.map((item2: any, index: any) => {
                  return (
                    <div key={index} className="w-full flex gap-x-2">
                      <img className="rounded-md" src={item2?.thumbnail} alt="" style={{ width: "10%" }} />
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between">
                          <h1 className="font-medium text-[14px]">
                            {item2?.name}
                          </h1>
                          <h1 className="text-[16px] font-medium"> ${item2?.variant?.price}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <StoreIcon />
                          <h1>Amount: {item2?.amount}</h1>
                        </div>
                        <div className="flex gap-x-1 text-gray-400 text-[12px] items-center">
                          <IntegrationInstructionsIcon />
                          <h1>{item2?.variant?.color?.value} - {item2?.variant?.size?.value}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <Divider />
                <div className="flex gap-x-2 justify-end text-[16px] items-center">
                  <h1 className="text-gray-400">Total amount:</h1>
                  <h1 className="font-semibold text-xl">${item?.total}</h1>
                </div>
                <div className="flex gap-x-2 justify-end text-blue-500">
                  <button className="bg-[rgb(var(--primary-rgb))] text-white rounded-md p-2">
                    Repurchase
                  </button>
                  <button className="bg-[rgb(var(--quaternary-rgb))] text-white rounded-md p-2">
                    See details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
    </div>
  );
}
