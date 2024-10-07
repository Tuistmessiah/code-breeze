import { useEffect, useState } from 'react';

// Custom hook using styleMixer and CSS modules
export function useScrolledView(s: (className: string) => string, ref: React.RefObject<HTMLElement>, baseClass: string, visibleClass: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom >= 0;

        if (inView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  // Return the dynamic class based on visibility
  return isVisible ? s(`${baseClass} ${visibleClass}`) : s(baseClass);
}
