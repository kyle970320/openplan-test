import { useEffect, useState } from "react";
import { matchMediaQuery } from "../utils/mediaQuery";

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<string>(() => {
    return matchMediaQuery() || "lg";
  });

  useEffect(() => {
    const handleResize = () => {
      const queryValue = matchMediaQuery();
      setMediaQuery(queryValue || "");
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { mediaQuery, setMediaQuery };
};
