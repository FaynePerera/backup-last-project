import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const GlobalContext = React.createContext();

export const useGlobalState = () => useContext(GlobalContext);

export default function GlobalContextProvider({ children }) {
  // Toggle hidding or showing the devTools bar on the right
  const router = useRouter();
  const devTools = !!router.query.devTools;
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState(null);
  const [showDevToolsBar, setShowDevToolsBar] = useState(devTools);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setView({ width: window.innerWidth, height: window.innerHeight });
    setIsMobile(window.innerWidth < 992);
    setIsTablet(window.innerWidth >= 992 && window.innerWidth < 1200);
    setIsDesktop(window.innerWidth >= 1200);
    setLoading(false);
    window.addEventListener('resize', () => {
      setView({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 992);
      setIsTablet(window.innerWidth >= 992 && window.innerWidth < 1200);
      setIsDesktop(window.innerWidth >= 1200);
    });
    return () => {
      window.addEventListener('resize', () => {
        setView({ width: window.innerWidth, height: window.innerHeight });
        setIsMobile(window.innerWidth < 992);
        setIsTablet(window.innerWidth >= 992 && window.innerWidth < 1200);
        setIsDesktop(window.innerWidth >= 1200);
      });
    };
  }, []);

  useEffect(() => {
    setShowDevToolsBar(devTools);
  }, [devTools]); // DO NOT ADD STATE HERE OR IT WILL LOOP

  return (
    <GlobalContext.Provider
      value={{
        loading,
        isMobile,
        view,
        showDevToolsBar,
        isLoggedIn,
        setIsLoggedIn,
        isTablet,
        isDesktop
      }}
    >
      {!loading && children}
    </GlobalContext.Provider>
  );
}
