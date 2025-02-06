import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';
import styles from './AnimatedNumber.module.css';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const roundedWithSuffix = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={styles.number}
    >
      {roundedWithSuffix}
    </motion.div>
  );
};

export default AnimatedNumber; 