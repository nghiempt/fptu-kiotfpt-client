"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import { DarkModeProvider } from "./dark-mode-context";

const ProvidersContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </SessionProvider>
  );
};

export default ProvidersContext;
