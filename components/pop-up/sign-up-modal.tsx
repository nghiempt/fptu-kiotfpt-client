"use client";

import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { AuthService } from '@/service/auth';
import { useContext } from 'react';
import SnackBarContext from '@/context/snackbar-context';

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

export default function SignUpModal({ open, handleClose }: { open: boolean, handleClose: any }) {

    const snackBarContext = useContext(SnackBarContext);

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [rePassword, setRePassword] = React.useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const payload = {
            username: email,
            password: password,
            retypePassword: rePassword
        };
        const fetch = await AuthService.signUp(payload);
        if (fetch?.result) {
            snackBarContext.setSnackBar({
                open: true,
                message: fetch?.message || "Sign up success",
                severity: "success",
                duration: 2000,
                vertical: "top",
                horizontal: "center",
            });
            window.location.reload();
        }
    };

    return (
        <div>
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
                                    Create your account
                                </h1>
                                <form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                        <input
                                            value={rePassword}
                                            onChange={(e) => setRePassword(e.target.value)}
                                            type="password" name="password" id="re-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <button onClick={handleSubmit} type="submit" className="w-full text-white bg-[rgb(var(--quaternary-rgb))] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        You already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Modal>
        </div>
    );
}