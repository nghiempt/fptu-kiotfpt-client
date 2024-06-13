"use client";

import React from "react";

export default function NetworkImage({ url, width, height, alt, cN }: { url: string, width?: number, height?: number, alt: string, cN?: string }) {
    return (
        <img src={url} alt={alt} width={width} height={height} className={cN} />
    );
}
