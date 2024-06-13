"use client";

import { createContext, useState } from "react";

const SnackBarContext = createContext({
  isSnackBar: {
    open: false,
    message: "message",
    severity: "success" as "success" | "error" | "warning" | "info",
    duration: 2000,
    vertical: "top" as "top" | "bottom",
    horizontal: "center" as "center" | "left" | "right",
  },
  setSnackBar: (isSnackBar: any) => { },
});

export default SnackBarContext;

export const SnackBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isSnackBar, setGlobalSnackBar] = useState({
    open: false,
    message: "message",
    severity: "success",
    duration: 2000,
    vertical: "top",
    horizontal: "center",
  });

  const setSnackBar = (isSnackBar: any) => {
    console.log(isSnackBar);
    setGlobalSnackBar(isSnackBar);
  };

  const contextValue: any = {
    isSnackBar,
    setSnackBar,
  };

  return (
    <SnackBarContext.Provider value={contextValue}>
      {children}
    </SnackBarContext.Provider>
  );
};
