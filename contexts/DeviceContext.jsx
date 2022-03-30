import { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext();

export const useDevice = () => {
  const ctx = useContext(DeviceContext);
  return ctx;
};

export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleWindowSizeChange = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", handleWindowSizeChange);

    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};
