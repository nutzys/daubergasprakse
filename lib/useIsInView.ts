import { useState, useEffect, useRef, RefObject } from "react";

export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.1
): [React.RefObject<T | null>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isInView];
}
