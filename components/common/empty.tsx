"use client";

import React from "react";
import WebhookIcon from "@mui/icons-material/Webhook";

export default function Empty() {
  return (
    <div className="flex flex-col justify-center items-center">
      <WebhookIcon style={{ fontSize: "40px" }} />
      <h1 className="text-gray-700 text-[22px] font-medium mt-2">
        Feature Is Under Development
      </h1>
    </div>
  );
}
