import { useCallback, useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 768) {
  const get = useCallback(
    () => (typeof window !== "undefined" ? window.innerWidth < breakpoint : false),
    [breakpoint]
  );

  const [isMobile, setIsMobile] = useState(get());

  useEffect(() => {
    const onResize = () => setIsMobile(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [get]);

  return isMobile;
}
