import { useEffect, useRef } from 'react';

const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeIn');
    } else {
      entry.target.classList.remove('animate__animated', 'animate__fadeIn');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return containerRef;
};

export default useIntersectionObserver;

