import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(
    typeof window === "undefined" ? 0 : window.scrollY
  );

  const listener = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  });

  return {
    scrollY
  };
}
