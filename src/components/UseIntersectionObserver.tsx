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
    const currentRef = containerRef.current;
    const observer = new IntersectionObserver(callbackFunction, options);
    
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return containerRef;
};

export default useIntersectionObserver;


