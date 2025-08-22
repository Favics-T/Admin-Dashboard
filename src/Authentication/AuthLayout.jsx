import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SplashCard from "./components/SplashCard";
import useIsMobile from "../hooks/useIsMobile";

const AuthLayout = () => {
  const isMobile = useIsMobile();

  // Show the splash overlay initially ONLY if we're on mobile at first render.
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
   
    
  });

  const handleGetStarted = () => setShowSplash(false);

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Mobile: overlay splash OR the auth form */}
      {isMobile ? (
        showSplash ? (
          <SplashCard onGetStarted={handleGetStarted} />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <Outlet />
          </div>
        )
      ) : (
        
        <>
          <div className="md:w-1/2 w-full">
            <SplashCard />
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default AuthLayout;
