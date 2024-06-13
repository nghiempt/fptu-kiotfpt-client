"use client";

import React, { useContext } from "react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import SnackBarContext from "@/context/snackbar-context";

export const MyAlert = () => {

    const snackBarContext = useContext(SnackBarContext);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        snackBarContext.setSnackBar({
            open: false,
            message: snackBarContext?.isSnackBar?.message,
            severity: snackBarContext?.isSnackBar?.severity,
            duration: snackBarContext?.isSnackBar?.duration,
            vertical: snackBarContext?.isSnackBar?.vertical,
            horizontal: snackBarContext?.isSnackBar?.horizontal,
        });
    };

    return (
        <Snackbar
            open={snackBarContext?.isSnackBar?.open}
            autoHideDuration={snackBarContext?.isSnackBar?.duration}
            anchorOrigin={{ vertical: snackBarContext?.isSnackBar?.vertical || 'top', horizontal: snackBarContext?.isSnackBar?.horizontal || 'center' }}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={snackBarContext?.isSnackBar?.severity || "success"}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackBarContext?.isSnackBar?.message || "message"}
            </Alert>
        </Snackbar>
    )
}