"use client";

import React from "react";
import Image from 'next/image';

export default function LocalImage({ url, width, height, alt, cN }: { url: string, width?: number, height?: number, alt: string, cN?: string }) {
    return (
        <Image src={url} width={width} height={height} alt={alt} className={cN} />
    );
}
