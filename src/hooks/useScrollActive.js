import { useState, useEffect, useRef } from 'react';

/**
 * A hook that uses Intersection Observer to detect when an element is in view.
 * Useful for triggering animations or "active" states on mobile scroll.
 */
export const useScrollActive = (options = {}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const elementRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', // More forgiving trigger for mobile focus
      threshold: 0.2, // Trigger sooner
      ...options
    };

    const handleIntersect = (entries) => {
      // Trigger logic primarily for touch devices where hover isn't natural
      if (window.innerWidth < 1024) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-scroll-index'));
            if (!isNaN(index)) {
              setActiveIdx(index);
            }
          }
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    elementRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [options]);

  const setRef = (index) => (el) => {
    elementRefs.current[index] = el;
  };

  return { activeIdx, setActiveIdx, setRef };
};
