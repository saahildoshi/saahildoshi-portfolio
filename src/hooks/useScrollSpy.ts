'use client';

import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string | null>(sectionIds[0] ?? null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionIds.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.2, 0.5, 0.8],
        ...options,
      },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is Element => Boolean(el));

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [options, sectionIds]);

  return activeId;
}

export default useScrollSpy;
