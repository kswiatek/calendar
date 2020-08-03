import { useState, useEffect } from 'react'

export const useMobile = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 700);

  const handleWindowResize = () => {
    setMobile(window.innerWidth <= 700);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return { isMobile };
}
