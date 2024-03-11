"use client";

import { GET_API } from "@/constant/crud";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React from "react";

export default function CallAPISample() {
  const [listUser, setListUser] = React.useState([]);

  const init = async () => {
    const listUserResponse = await GET_API();
    setListUser(listUserResponse);
  };

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {}, [listUser]);

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className="flex flex-col justify-center items-center"
    >
      {listUser?.map((value: any, index: any) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={index} disablePadding className="mb-2">
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt="avatar" src="" />
              </ListItemAvatar>
              <div>
                <ListItemText
                  id={labelId}
                  primary={`${value?.name}`}
                  className="!text-[20px] !font-semibold"
                />
                <ListItemText id={labelId} primary={`${value?.website}`} />
              </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
