import {useEffect, useRef, useState} from 'react';

const AnimatedOnScroll = ({children}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      {threshold: 0.1}
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`animated ${isVisible ? 'fade-in' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
