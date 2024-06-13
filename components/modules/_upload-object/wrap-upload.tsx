"use client";

import React from "react";
import { UploadSingleObject } from "./single-object";

const WrapUpload = () => {
  return (
    <div>
      <UploadSingleObject
        onUploadSuccess={(result) => console.log(JSON.stringify(result))}
      />
    </div>
  );
};

export default WrapUpload;
