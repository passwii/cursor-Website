import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import styles from './ServiceCard.module.css';
import { ServiceCardProps } from './types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.6,
      x: -50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: index * 0.3,
        bounce: 0.4
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={styles['service-card']}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className={styles['card-header']}>
        {icon}
        <h3 className={styles['card-title']}>{title}</h3>
      </div>
      <div className={styles['card-body']}>
        <p className={styles['card-description']}>{description}</p>
      </div>
      <div className={styles['card-footer']}>
        <button className={styles['learn-more-btn']}>
          了解更多 <ArrowRight className={styles['arrow-icon']} />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard; 