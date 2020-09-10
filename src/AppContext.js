import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const getSize = () => ({
    isDesktop: window.innerWidth >= 1440,
    isTablet: window.innerWidth >= 768,
    isMobile: window.innerWidth < 768,
  });
  const [device, setDevice] = useState(getSize());
  const [drawerOpen, setdrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setDevice(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultContext = {
    drawerOpen,
    setdrawerOpen,
    ...device,
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
