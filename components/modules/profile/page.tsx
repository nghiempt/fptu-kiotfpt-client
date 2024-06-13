"use client";

import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";
import AccountProfile from "./account-profile";
import Address from "./address";
import Review from "./review";
import Order from "./order";
import Wishlist from "./wishlist";
import Notify from "./notify";
import Transaction from "./transaction";
import CategoryMenu from "@/components/common/category-menu";

export default function Profile() {

  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };

  const renderContent = () => {
    switch (selectedIndex) {
      case 2:
        return <AccountProfile />
      case 3:
        return <Notify />
      case 4:
        return <Order />
      case 5:
        return <Transaction />;
      case 6:
        return <Address />
      case 7:
        return <Review />
      case 8:
        return <Wishlist />
      default:
        return <AccountProfile />
    }
  }

  return (
    <div className="w-full flex flex-col justify-center items-center mb-5">
      <CategoryMenu />
      <div className="w-3/4 flex gap-x-4">
        <div className="w-1/5">
          <div className="flex gap-x-2 my-2 items-center">
            <div className="p-1 border rounded-full bg-white">
              <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" alt="avatar" className="rounded-full w-12 h-12" />
            </div>
            <div>
              <h1>Noname</h1>
              <h1 className="text-xs text-gray-400 mt-[1px]">nghiempt.dev+5@gmail.com</h1>
            </div>
          </div>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Account Information"
                sx={{
                  color: selectedIndex === 2 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Notification"
                sx={{
                  color: selectedIndex === 3 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 4}
              onClick={(event) => handleListItemClick(event, 4)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Order Management"
                sx={{
                  color: selectedIndex === 4 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 5}
              onClick={(event) => handleListItemClick(event, 5)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Transaction Management"
                sx={{
                  color: selectedIndex === 5 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 6}
              onClick={(event) => handleListItemClick(event, 6)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Address Management"
                sx={{
                  color: selectedIndex === 6 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 7}
              onClick={(event) => handleListItemClick(event, 7)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Product Reviews"
                sx={{
                  color: selectedIndex === 7 ? "black" : "gray",
                }}
              />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 8}
              onClick={(event) => handleListItemClick(event, 8)}
              sx={{
                borderRadius: "4px",
              }}
            >
              <ListItemText
                primary="Wishlist Product"
                sx={{
                  color: selectedIndex === 8 ? "black" : "gray",
                }}
              />
            </ListItemButton>
          </List>
        </div>
        <div className="w-4/5">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
