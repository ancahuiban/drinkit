import React, { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const getSize = () => ({
    isDesktop: window.innerWidth >= 1440,
    isTablet: window.innerWidth <= 1024,
    isMobile: window.innerWidth < 768,
  });
  const [device, setDevice] = useState(getSize());
  const [drawerOpen, setdrawerOpen] = useState(false);

  const [photo, setPhoto] = useState("");
  const [isPhotoCropped, setIsPhotoCropped] = useState(false);

  const [cropDetails, setCropDetails] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => setDevice(getSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultContext = {
    photo,
    setPhoto,
    drawerOpen,
    setdrawerOpen,
    isPhotoCropped,
    setIsPhotoCropped,
    cropDetails,
    setCropDetails,
    ...device,
  };

  return (
    <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
