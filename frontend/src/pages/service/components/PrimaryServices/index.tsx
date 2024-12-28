import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './PrimaryServices.module.css';
import { primaryServices } from './data';

const PrimaryServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string>(primaryServices[0].id);
  const [isViewingDetails, setIsViewingDetails] = useState(false);

  const handleDockItemClick = (serviceId: string) => {
    setActiveService(serviceId);
  };

  const handleDockItemHover = (serviceId: string) => {
    if (!isViewingDetails) {
      setActiveService(serviceId);
    }
  };

  return (
    <section className={styles['primary-services']}>
      <h2 className={styles['primary-services-title']}>主要服务</h2>
      <div className={styles['services-dock-container']}>
        <div className={styles['services-dock']}>
          {primaryServices.map((service) => (
            <div
              key={service.id}
              className={`${styles['dock-item']} ${
                activeService === service.id ? styles['active'] : ''
              }`}
              onClick={() => handleDockItemClick(service.id)}
              onMouseEnter={() => handleDockItemHover(service.id)}
            >
              <h3 className={styles['dock-title']}>{service.title}</h3>
              <p className={styles['dock-subtitles']}>{service.subtitles}</p>
            </div>
          ))}
        </div>
      </div>

      <div 
        className={styles['service-details-container']}
        onMouseEnter={() => setIsViewingDetails(true)}
        onMouseLeave={() => setIsViewingDetails(false)}
      >
        <div className={styles['dock-details-list']}>
          {primaryServices[primaryServices.findIndex((service) => service.id === activeService)].details.map((detail, idx) => (
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
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrimaryServices; 