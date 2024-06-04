import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useCookie = (cookieName: string) => {
  const [cookieValue, setCookieValue] = useState<string | undefined>(() =>
    Cookies.get(cookieName)
  );

  useEffect(() => {
    const handleCookieChange = () => {
      setCookieValue(Cookies.get(cookieName));
    };

    // Create a MutationObserver to watch for changes to the cookie
    const observer = new MutationObserver(handleCookieChange);
    observer.observe(document, { subtree: true, childList: true });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [cookieName]);
  return cookieValue;
};

export default useCookie;
