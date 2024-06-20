"use client";

import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { ProfileService } from '@/service/profile';
import { useContext } from 'react';
import SnackBarContext from '@/context/snackbar-context';
import Cookie from 'js-cookie';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UpdatePasswordModal({ open, handleClose }: { open: boolean, handleClose: any }) {

    const snackBarContext = useContext(SnackBarContext);
    const accountID = JSON.parse(Cookie.get('accountID') || "0");

    const [newPassword, setNewPassword] = React.useState('');
    const [oldPassword, setOldPassword] = React.useState('');
    const [retypePassword, setRetypePassword] = React.useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (newPassword !== retypePassword) {
            handleOpenNotMatchAlert();
            return;
        }
        if (newPassword.length < 6 || retypePassword.length < 6 || oldPassword.length < 6) {
            handleOpenAtLeastAlert();
            return;
        }
        if (newPassword.length > 255 || retypePassword.length > 255 || oldPassword.length > 255) {
            handleOpenLongerAlert();
            return;
        }
        const payload = {
            newPassword: newPassword,
            oldPassword: oldPassword,
            retypePassword: retypePassword,
            account_id: accountID,
        };
        const fetch = await ProfileService.updatePassword(payload);
        if (fetch?.result) {
            handleOpenSuccessAlert();
            handleClose();
        } else {
            handleOpenWrongAlert();
        }
    };

    const handleOpenSuccessAlert = () => {
        const alertSuccess = document.getElementById('alertSuccess');
        if (alertSuccess) {
            alertSuccess.style.display = 'flex';
            setTimeout(() => {
                alertSuccess.style.display = 'none';
            }, 5000);
        }
    }
    const handleOpenNotMatchAlert = () => {
        const alertSuccess = document.getElementById('alertNotMatch');
        if (alertSuccess) {
            alertSuccess.style.display = 'flex';
            setTimeout(() => {
                alertSuccess.style.display = 'none';
            }, 5000);
        }
    }
    const handleOpenAtLeastAlert = () => {
        const alertSuccess = document.getElementById('alertAtLeast');
        if (alertSuccess) {
            alertSuccess.style.display = 'flex';
            setTimeout(() => {
                alertSuccess.style.display = 'none';
            }, 5000);
        }
    }
    const handleOpenLongerAlert = () => {
        const alertSuccess = document.getElementById('alertLonger');
        if (alertSuccess) {
            alertSuccess.style.display = 'flex';
            setTimeout(() => {
                alertSuccess.style.display = 'none';
            }, 5000);
        }
    }
    const handleOpenWrongAlert = () => {
        const alertSuccess = document.getElementById('alertWrong');
        if (alertSuccess) {
            alertSuccess.style.display = 'flex';
            setTimeout(() => {
                alertSuccess.style.display = 'none';
            }, 5000);
        }
    }

    return (
        <div>
            <div style={{
                position: 'fixed',
                top: '150px',
                right: '20px',
                zIndex: 10,
                width: '300px',
            }}>
                <Alert variant="filled" severity="success" className='w-full' id="alertSuccess" style={{ display: 'none', alignItems: 'center' }}>
                    Update password successfully!
                </Alert>
                <Alert variant="filled" severity="warning" className='w-full' id="alertNotMatch" style={{ display: 'none', alignItems: 'center' }}>
                    New password and retype password not match!
                </Alert>
                <Alert variant="filled" severity="warning" className='w-full' id="alertAtLeast" style={{ display: 'none', alignItems: 'center' }}>
                    Your input must be at least 6 characters!
                </Alert>
                <Alert variant="filled" severity="warning" className='w-full' id="alertLonger" style={{ display: 'none', alignItems: 'center' }}>
                    Your input must be longer 6 characters!
                </Alert>
                <Alert variant="filled" severity="error" className='w-full' id="alertWrong" style={{ display: 'none', alignItems: 'center' }}>
                    Wrong old password, please try again!
                </Alert>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
            >
                <section className="">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full relative bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className='absolute top-4 right-4 cursor-pointer' onClick={handleClose}>
                                <CloseIcon />
                            </div>
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Update your password
                                </h1>
                                <form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
                                        <input
                                            value={oldPassword}
                                            onChange={(e) => setOldPassword(e.target.value)}
                                            type="password" name="oldPassword" id="oldPassword" placeholder="Enter old password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            type="password" name="newPassword" id="newPassword" placeholder="Enter new password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            value={retypePassword}
                                            onChange={(e) => setRetypePassword(e.target.value)}
                                            type="password" name="retypePassword" id="retypePassword" placeholder="Enter new password again" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <button onClick={handleSubmit} type="submit" className="w-full text-white bg-[rgb(var(--quaternary-rgb))] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Update Password</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </div>
    );
}