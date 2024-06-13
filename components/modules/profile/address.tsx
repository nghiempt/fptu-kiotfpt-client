"use client";

import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreateAddress from './create-address';
import UpdateAddress from './update-address';


const YourComponent = () => {
  const [currentPage, setCurrentPage] = useState('addressList');

  const handleAddNewAddress = () => {
    setCurrentPage('createAddress');
  };

  const handleEditAddress = () => {
    setCurrentPage('updateAddress');
  };

  const handleCancel = () => {
    setCurrentPage('addressList');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'createAddress':
        return <CreateAddress onCancel={handleCancel} />;
      case 'updateAddress':
        return <UpdateAddress onCancel={handleCancel} />;
      default:
        return (
          <div className="w-full box-border flex flex-col gap-4 pb-48">
            <h1 className="font-semibold text-[20px] py-4">Address Management</h1>
            <div className='flex justify-center items-center mb-6'>
              <button
                className="w-1/6 flex gap-x-2 bg-[rgb(var(--quaternary-rgb))] rounded-md p-4 justify-center"
                onClick={handleAddNewAddress}
              >
                <AddIcon style={{ color: '#fff' }} />
                <h1 className="text-white font-medium">Add Address</h1>
              </button>
            </div>
            <div className="w-full flex flex-col bg-gray-50 rounded-lg p-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-x-4">
                  <h1 className="font-semibold text-[14px]">Nhà Riêng</h1>
                  <div className="flex gap-x-1 items-center bg-[rgb(var(--quaternary-rgb))] text-white px-2 rounded-md">
                    <CheckCircleOutlineIcon style={{ fontSize: "12px" }} />
                    <h1 className="text-[12px]">Default</h1>
                  </div>
                </div>
                <button onClick={handleEditAddress} className="text-[rgb(var(--quaternary-rgb))] box-border border border-[rgb(var(--quaternary-rgb))] py-1 px-8 rounded-md">
                  Edit
                </button>
              </div>
              <div className="flex gap-x-2 pt-2">
                <h1>Address:</h1>
                <h1 className="font-medium">
                  200 Tô Vĩnh Diện, Long Tuyền, Bình Thuỷ, Cần Thơ
                </h1>
              </div>
              <div className="flex gap-x-2">
                <h1>Phone:</h1>
                <h1 className="font-medium">09xxxxxxxx</h1>
              </div>
            </div>

            <div className="w-full flex flex-col bg-gray-50 rounded-lg p-5">
              <div className="flex justify-between items-center">
                <div className="flex gap-x-4">
                  <h1 className="font-semibold text-[14px]">Công Ty</h1>
                </div>
                <div className="flex gap-x-2 items-center">
                  <button onClick={handleEditAddress} className="text-[rgb(var(--quaternary-rgb))] box-border border border-[rgb(var(--quaternary-rgb))] py-1 px-8 rounded-md">
                    Edit
                  </button>
                  <button className="text-[rgb(var(--primary-rgb))] box-border border border-[rgb(var(--primary-rgb))] py-1 px-6 rounded-md">
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex gap-x-2 pt-2">
                <h1>Address:</h1>
                <h1 className="font-medium">
                  600 Nguyễn Văn Cừ Nối Dài, An Bình, Ninh Kiều, Cần Thơ
                </h1>
              </div>
              <div className="flex gap-x-2">
                <h1>Phone:</h1>
                <h1 className="font-medium">09xxxxxxxx</h1>
              </div>
            </div>
          </div>
        );
    }
  };

  return <div>{renderContent()}</div>;
};

export default YourComponent;
