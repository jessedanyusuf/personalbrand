import { useState, useEffect } from 'react';

/**
 * Custom hook for responsive media queries
 * Prevents multiple resize listeners by using a shared approach
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === 'undefined') return;

    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);

    // Create event listener function
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Use addEventListener for modern browsers
    if (media.addEventListener) {
      media.addEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
    }

    // Cleanup
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener);
      } else {
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
};

