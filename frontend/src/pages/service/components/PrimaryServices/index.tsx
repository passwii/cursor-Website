import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PrimaryServices.module.css';
import { primaryServices } from './data';

const PrimaryServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleDockItemClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <section className={styles['primary-services']}>
      <h2 className={styles['primary-services-title']}>主要服务</h2>
      <div className={styles['services-dock']}>
        {primaryServices.map((service) => (
          <div
            key={service.id}
            className={`${styles['dock-item']} ${
              activeService === service.id ? styles['active'] : ''
            }`}
            onClick={() => handleDockItemClick(service.id)}
          >
            <div className={styles['dock-content']}>
              <h3 className={styles['dock-title']}>{service.title}</h3>
              <p className={styles['dock-subtitles']}>{service.subtitles}</p>
            </div>
            <img 
              src={service.image} 
              alt={service.title}
              className={styles['service-image']}
            />
            
            <div className={`${styles['service-details-container']} ${
              activeService === service.id ? styles['visible'] : ''
            }`}>
              <div className={styles['dock-details-list']}>
                {service.details.map((detail, idx) => (
                  <div key={idx} className={styles['dock-detail-item']}>
                    <h4>{detail.title}</h4>
                    <div className={styles['detail-items']}>
                      {detail.items.map((item, itemIdx) => (
                        <div key={itemIdx} className={styles['detail-item']}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrimaryServices; 