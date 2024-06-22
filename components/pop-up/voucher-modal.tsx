"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { VoucherService } from '@/service/voucher';
import { useState } from 'react';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

// const [voucher, setVoucher] = useState([]);


//     const getVoucher = async (shopID:any) => {
//       const v = await VoucherService.getVoucherByShopID((shopID || "")
//       );
//       if (v?.result) {
//         setVoucher(v?.data);
//       }
//       console.log(v?.data);
//     };



export default function VoucherModal({ open, handleClose }: { open: boolean, handleClose: any }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="relative bg-white rounded-lg w-full max-w-md mx-auto">
                        <div className="flex justify-between items-center pb-3">
                            <h3 className="text-lg font-medium">KIOTFPT Discount</h3>
                            <button className="text-gray-500 hover:text-gray-700" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="mb-4">
                            <input type="text" placeholder="Enter the code" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--quaternary-rgb))]" />
                            <button className="mt-2 w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Apply</button>
                        </div>
                        <h4 className="font-medium mb-2">Mã Giảm Giá</h4>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/726/726476.png" alt="Tiki" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <p className="text-sm font-medium">Giảm 2%</p>
                                        <p className="text-sm text-gray-500">Đơn hàng từ 10 triệu</p>
                                        <p className="text-sm text-gray-500">HSD: 31/05/24</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 text-[10px] bg-gray-200 text-gray-600 rounded-md">ĐIỀU KIỆN</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-blue-500 hover:underline">Xem thêm (4)</a>
                        </div>
                        <h4 className="font-medium mt-6 mb-2">Mã Vận Chuyển</h4>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/726/726476.png" alt="Free Ship" className="w-12 h-12 rounded-md mr-4" />
                                    <div>
                                        <p className="text-sm font-medium">Giảm 25K</p>
                                        <p className="text-sm text-gray-500">Đơn hàng từ 250K</p>
                                        <p className="text-sm text-gray-500">HSD: 31/05/24</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 text-[10px] bg-gray-200 text-gray-600 rounded-md">ĐIỀU KIỆN</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <a href="#" className="text-blue-500 hover:underline">Xem thêm (5)</a>
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 bg-[rgb(var(--quaternary-rgb))] text-white font-semibold rounded-md">Done</button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}