"use client";

import { createContext, useState } from "react";

const DarkModeContext = createContext({
  isDarkMode: null,
  setDarkMode: (isDarkMode: any) => {},
});

export default DarkModeContext;

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setGlobalDarkMode] = useState(null);

  const setDarkMode = (isDarkMode: any) => {
    setGlobalDarkMode(isDarkMode);
  };

  const contextValue = {
    isDarkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};
