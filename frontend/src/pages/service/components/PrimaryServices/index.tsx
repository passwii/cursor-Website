import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './PrimaryServices.module.css';
import { primaryServices } from './data';

const PrimaryServices: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % primaryServices.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className={styles['primary-services']}>
      <h2 className={styles['primary-services-title']}>
        主营业务
        <span>Primary Services</span>
      </h2>

      <div className={styles['services-dock-container']}>
        <div 
          className={styles['services-dock']}
          onMouseLeave={() => setIsPaused(false)}
        >
          {primaryServices.map((service, index) => (
            <motion.div
              key={index}
              className={`${styles['dock-item']} ${index === activeService ? styles.active : ''}`}
              whileHover={{ scale: 1.05, translateY: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveService(index);
                setIsPaused(true);
              }}
            >
              <h3 className={styles['dock-title']}>{service.title}</h3>
              <p className={styles['dock-subtitles']}>{service.subtitles}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles['service-details-container']}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          key={activeService}
        >
          <div className={styles['dock-details-list']}>
            {primaryServices[activeService].details.map((detail, idx) => (
              <motion.div 
                key={idx} 
                className={styles['dock-detail-item']}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <h4>{detail.title}</h4>
                <div className={styles['detail-items']}>
                  {detail.items.map((item, itemIdx) => (
                    <div key={itemIdx} className={styles['detail-item']}>
                      <span className={styles['detail-bullet']}>•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrimaryServices; 