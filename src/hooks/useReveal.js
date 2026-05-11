import { useEffect } from 'react';

/**
 * Hook to handle "reveal" animations on scroll.
 * It finds all elements with the 'reveal' class and adds the 'active' class
 * when they enter the viewport.
 */
export const useReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // If you want it to trigger only once, keep this:
          // observer.unobserve(entry.target);
        } else {
          // Re-trigger animations when scrolling back up (optional but professional)
          entry.target.classList.remove('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
