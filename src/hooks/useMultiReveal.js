import { useEffect, useRef, useState } from "react";

export const useMultiReveal = (keys) => {
  const refs = useRef({});
  const [visible, setVisible] = useState(
    Object.fromEntries(keys.map((key) => [key, false])),
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const key = entry.target.dataset.reveal;

        if (entry.isIntersecting && key) {
          setVisible((prev) => ({
            ...prev,
            [key]: true,
          }));

          observer.unobserve(entry.target);
        }
      });
    });

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const register = (key) => (el) => {
    if (el) refs.current[key] = el;
  };

  return { visible, register };
};
