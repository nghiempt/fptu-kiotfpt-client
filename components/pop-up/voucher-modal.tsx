"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import { useEffect, useState } from "react";
import { CheckoutService } from "@/service/checkout";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function VoucherModal({
  open,
  handleClose,
  shopID,
}: {
  open: boolean;
  handleClose: any;
  shopID: any;
}) {
  const [voucher, setVoucher] = useState<any[]>([]);
  const [idVoucher, setIdVoucher] = useState<string>("");
  const [valueVoucher, setValueVoucher] = useState<string>("");

  useEffect(() => {
    const getVoucher = async () => {
      if (!shopID) {
        alert("shopID is required")
        return;
      }

      // Handling case where shopID is an array of IDs
      if (Array.isArray(shopID) && shopID.length > 0) {
        try {
          const voucherPromises = shopID.map((id) =>
            CheckoutService.getVoucherByShopID(id)
          );
          const vouchers = await Promise.all(voucherPromises);
          const validVouchers = vouchers
            .filter((v) => v?.result)
            .map((v) => v?.data);
          setVoucher(validVouchers.flat()); // Flatten the array of arrays into a single array
        } catch (error) {
          console.error("Error fetching vouchers", error);
        }
      } else {
        // Handling case where shopID is a single ID
        const v = await CheckoutService.getVoucherByShopID(shopID);
        if (v?.result) {
          setVoucher([v.data]); // Ensuring voucher is always an array
        }
      }
    };
    getVoucher();
  }, [shopID]);

  const handleApply = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const codeInput = event.currentTarget.elements.namedItem(
      "code"
    ) as HTMLInputElement;
    const code = codeInput.value;
    if (code) {
      setIdVoucher(code);
      const codeNumber = parseInt(code, 10);
      const selectedVoucher = voucher.find(
        (item: any) => item.id === codeNumber
      );

      if (selectedVoucher) {
        setValueVoucher(selectedVoucher.value);
      }
      alert("Voucher selected");
    }
  };
  useEffect(() => {
    if (idVoucher) {
      localStorage.setItem("idVoucher", idVoucher);
      localStorage.setItem("valueVoucher", valueVoucher);
    }
  }, [idVoucher, valueVoucher]);

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
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mb-4">
              <form onSubmit={handleApply}>
                <input
                  type="text"
                  name="code"
                  placeholder="Enter the code"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--quaternary-rgb))] mb-2"
                />
                <button className="w-full px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
                  Apply
                </button>
              </form>
            </div>
            <h4 className="font-medium mb-2">Mã Giảm Giá</h4>
            <div className="space-y-4">
              {voucher?.length > 4 ? (
                <div className="overflow-y-auto max-h-48">
                  {voucher?.map((item: any, index: any) => (
                    <div
                      key={index}
                      className="p-4 border rounded-lg flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <img
                          src="https://cdn-icons-png.flaticon.com/128/726/726476.png"
                          alt="Tiki"
                          className="w-12 h-12 rounded-md mr-4"
                        />
                        <div>
                          <p className="text-sm font-medium">
                            Code: {item?.id}
                          </p>
                          <p className="text-sm font-medium">
                            {item?.value}% off
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                voucher?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/726/726476.png"
                        alt="Tiki"
                        className="w-12 h-12 rounded-md mr-4"
                      />
                      <div>
                        <p className="text-sm font-medium">Code: {item?.id}</p>
                        <p className="text-sm font-medium">
                          {item?.value}% off
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 bg-[rgb(var(--quaternary-rgb))] text-white font-semibold rounded-md"
                onClick={handleClose}
              >
                Done
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
