import { useEffect, useState } from "react";

/**
 * Watches a list of section IDs and returns the one currently in view.
 * Uses a top offset so the navbar doesn't obscure the active section.
 */
export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      const sections = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s): s is { id: string; el: HTMLElement } => s.el !== null);

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].el.offsetTop <= scrollPos) {
          setActive(sections[i].id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return active;
}
