"use client";

import { createContext, useState } from "react";

const DarkModeContext = createContext({
  isDarkMode: false,
  setDarkMode: (isDarkMode: boolean) => {},
});

export default DarkModeContext;

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkMode, setGlobalDarkMode] = useState(false);

  const setDarkMode = (isDarkMode: boolean) => {
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
