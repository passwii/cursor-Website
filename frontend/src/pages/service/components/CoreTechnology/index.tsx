import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './CoreTechnology.module.css';
import { technologies, calculatePosition } from './data';
import { useWindowSize } from '../../../../hooks/useWindowSize';

const CoreTechnology: React.FC = () => {
  const { width } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // 更新 CSS 变量
      containerRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
      containerRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }));
  }, [controls]);

  return (
    <div id="core-tech" className={styles['core-tech-section']} ref={containerRef}>
      <motion.h2 
        className={styles['core-tech-title']}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        核心技术
      </motion.h2>
      {/* <motion.p 
        className={styles['core-tech-description']}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        我们的核心技术体系
      </motion.p> */}
      
      <div className={styles['tech-planets']}>
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={styles['tech-planet']}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className={styles['planet-content']}>
              <tech.icon className={styles['tech-icon']} />
            </div>
            <div className={styles['tech-info']}>
              <h3 className={styles['tech-title']}>{tech.name}</h3>
              <p className={styles['tech-description']}>{tech.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreTechnology; 