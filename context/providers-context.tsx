"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { DarkModeProvider } from "./dark-mode-context";
import { SnackBarProvider } from "./snackbar-context";

const ProvidersContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <DarkModeProvider>
        <SnackBarProvider>
          {children}
        </SnackBarProvider>
      </DarkModeProvider>
    </SessionProvider>
  );
};

export default ProvidersContext;
