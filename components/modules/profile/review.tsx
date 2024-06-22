"use client";

import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Divider from "@mui/material/Divider";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import MoodIcon from "@mui/icons-material/Mood";
import { ProfileService } from "@/service/profile";
import Cookie from 'js-cookie';

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

export default function Review() {
  const accountID = JSON.parse(Cookie.get('accountID') || "0");
  const [value, setValue] = useState(0);
  const [reviewedList, setReviewedList] = useState<any>([]);
  const [needReviewList, setNeedReviewList] = useState<any>([]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetch = async () => {
      const prof = await ProfileService.getAllCommentByAccountID(accountID);
      if (prof?.result) {
        setReviewedList(prof?.data);
        console.log(prof?.data);
      } else {
        console.log("wrong");
      }
    }
    fetch();

  }, []);

  useEffect(() => { }, [reviewedList, needReviewList]);

  return (
    <div className="w-full box-border flex flex-col gap-4 pb-36">
      <div>
        <div className="w-full bg-[rgb(var(--quaternary-rgb))] rounded-t-md pt-5">
          <div className="justify-center items-center flex flex-col">
            <h1 className="font-medium text-white text-[16px]">
              Congratulations! Your review has been received
            </h1>
            <div className="flex gap-x-4 mb-5">
              <div className="flex gap-x-2 items-center">
                <VisibilityIcon className="text-yellow-500" />
                <h1 className="text-white text-[18px] font-bold">200</h1>
                <h1 className="text-white text-[12px]">Views</h1>
              </div>
              <Divider orientation="vertical" flexItem />
              <div className="flex gap-x-2 items-center">
                <ThumbUpIcon className="text-yellow-500" />
                <h1 className="text-white text-[18px] font-bold">0</h1>
                <h1 className="text-white text-[12px]">Likes</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center">
          <div className="w-full flex">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              style={{ backgroundColor: "white", width: "100%" }}
            >
              <Tab
                label="Waiting"
                {...a11yProps(0)}
                sx={{ textTransform: "none", fontSize: "16px", width: "50%" }}
              />
              <Tab
                label="Reviewed"
                {...a11yProps(1)}
                sx={{ textTransform: "none", fontSize: "16px", width: "50%" }}
              />
            </Tabs>
          </div>
        </div>
      </div>

      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-4">
          {[1, 2, 3]?.map((item: any, index: any) => {
            return (
              <div key={index} className="w-full bg-gray-50 rounded-lg p-2">
                <div className="w-full flex gap-x-2 items-start">
                  <img src="https://salt.tikicdn.com/cache/750x750/ts/product/b3/bc/60/2b8f73b45b9a7745c429ef69dad316cf.png.webp" alt="" className="w-1/6 rounded-md" />
                  <div className="w-5/6 flex flex-col gap-3 p-2">
                    <div className="flex justify-between">
                      <h1 className="text-[16px] font-medium">
                        Quạt sạc Sunhouse SHD7116 (25W) - Hàng chính hãng
                      </h1>
                      <EditIcon className="text-gray-400" />
                    </div>
                    <div>
                      {[1, 2, 3, 4, 5]?.map((item: any, index: any) => {
                        return (
                          <StarIcon key={index} className="text-[#FF9017]" />
                        );
                      })}
                    </div>

                    <h1>Good.</h1>
                    <div className="flex gap-x-4">
                      <ThumbUpIcon className="text-gray-400" />
                      <ChatBubbleIcon className="text-gray-400" />
                    </div>
                    <div className="w-full flex gap-x-4 items-center">
                      <MoodIcon className="text-gray-400" />
                      <div className="relative w-full box-border">
                        <input
                          type="text"
                          placeholder="Write something..."
                          className="w-full border border-gray-300 rounded-md outline-none py-2 px-3"
                        />
                        <SendIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="flex flex-col gap-4">
          {reviewedList?.map((item: any, index: any) => {
            return (
              <div className="w-full bg-gray-50 rounded-lg p-2">
                <div className="w-full flex gap-x-2 items-start">
                  <img src="https://salt.tikicdn.com/cache/750x750/ts/product/b3/bc/60/2b8f73b45b9a7745c429ef69dad316cf.png.webp" alt="" className="w-1/6 rounded-md" />
                  <div className="w-5/6 flex flex-col gap-3 p-2">
                    <div className="flex justify-between">
                      <h1 className="text-[16px] font-medium">
                        Quạt sạc Sunhouse SHD7116 (25W) - Hàng chính hãng
                      </h1>
                      <EditIcon className="text-gray-400" />
                    </div>
                    <div>
                      {[1, 2, 3, 4, 5]?.map((item: any, index: any) => {
                        return (
                          <StarIcon key={index} className="text-[#FF9017]" />
                        );
                      })}
                    </div>

                    <h1>{item?.content}</h1>
                    {/* <div className="flex gap-x-4">
                      <ThumbUpIcon className="text-gray-400" />
                      <ChatBubbleIcon className="text-gray-400" />
                    </div>
                    <div className="w-full flex gap-x-4 items-center">
                      <MoodIcon className="text-gray-400" />
                      <div className="relative w-full box-border">
                        <input
                          type="text"
                          placeholder="Write something..."
                          className="w-full border border-gray-300 rounded-md outline-none py-2 px-3"
                        />
                        <SendIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CustomTabPanel>
    </div>
  );
}
