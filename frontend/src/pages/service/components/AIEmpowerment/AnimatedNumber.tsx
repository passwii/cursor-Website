import React, { useEffect, useRef, useState } from 'react';
import styles from './AIEmpowerment.module.css';

interface AnimatedNumberProps {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  end,
  duration = 2000,
  delay = 0,
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;
      
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(end * percentage);
      
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(step);
      }
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [end, duration, delay, isVisible]);

  return (
    <div 
      ref={elementRef}
      className={`${styles['stat-number']} ${isVisible ? styles.animate : ''}`}
    >
      {count.toLocaleString()}{suffix}
    </div>
  );
}; 