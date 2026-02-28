import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean that becomes `true` once the element
 * scrolls into view (15 % visible). The transition is one-way — once
 * visible it stays visible so the fade-in doesn't replay.
 */
export function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold },
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}
