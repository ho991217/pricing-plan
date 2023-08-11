import { useEffect, useState } from "react";

export const useMediaQuery = () => {
   const [isMobile, setIsMobile] = useState(false);
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

   const handleResize = () => {
      setScreenWidth(window.innerWidth);
   };

   useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
   }, []);

   useEffect(() => {
      if (screenWidth < 768) {
         setIsMobile(true);
      } else {
         setIsMobile(false);
      }
   }, [screenWidth]);

   return { isMobile, screenWidth };
};
