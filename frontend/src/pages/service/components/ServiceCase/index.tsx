import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Wrench, Dumbbell, Package, Grid, Dog, Utensils } from 'lucide-react';
import styles from './ServiceCase.module.css';
import { serviceCases } from './data';
import { ServiceCaseProps } from './types';
import serviceCaseHero from '../../../../assets/images/servicecase-hero.webp';

const ServiceCase: React.FC<ServiceCaseProps> = ({ className }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部', icon: <Grid className={styles.categoryIcon} /> },
    { id: 'home', label: '家居用品', icon: <Home className={styles.categoryIcon} /> },
    { id: 'sports', label: '运动户外', icon: <Dumbbell className={styles.categoryIcon} /> },
    { id: 'tools', label: '工具配件', icon: <Wrench className={styles.categoryIcon} /> },
    { id: 'pets', label: '宠物用品', icon: <Dog className={styles.categoryIcon} /> },
    { id: 'kitchen', label: '厨房用品', icon: <Utensils className={styles.categoryIcon} /> },
    { id: 'others', label: '其他品类', icon: <Package className={styles.categoryIcon} /> }
  ];

  // 根据当前选中的分类筛选案例
  const filteredCases = useMemo(() => {
    if (activeCategory === 'all') {
      return serviceCases;
    }
    return serviceCases.filter(caseItem => {
      const categoryMap: { [key: string]: string[] } = {
        'home': ['家居用品', '家居家纺'],
        'sports': ['运动户外'],
        'tools': ['工具配件'],
        'pets': ['宠物用品'],
        'kitchen': ['厨房用品'],
        'others': ['其他品类']
      };
      return categoryMap[activeCategory]?.includes(caseItem.category);
    });
  }, [activeCategory]);

  return (
    <section className={`${styles.container} ${className || ''}`} ref={ref}>
      {/* Banner Section */}
      <div className={styles.banner}>
        <img 
          src={serviceCaseHero} 
          alt="Service Cases" 
          className={styles.bannerImage}
        />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className={styles.bannerTitle}
            >
              合作案例
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.bannerSubtitle}
            >
              助力品牌成功出海，创造全球商业价值
            </motion.p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className={styles.categoriesSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.header}
        >
          <h3 className={styles.sectionTitle}>客户案例</h3>
        </motion.div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button 
              key={category.id}
              className={`${styles.categoryButton} ${category.id === activeCategory ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Cases Grid */}
      <div className={styles.casesGrid}>
        {filteredCases.map((caseItem, index) => (
          <motion.div
            key={caseItem.id}
            className={styles.caseCard}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <div className={styles.caseImage}>
              <img src={caseItem.imageUrl} alt={caseItem.title} />
              <span className={styles.category}>{caseItem.category}</span>
            </div>
            <div className={styles.caseContent}>
              <h3>{caseItem.title}</h3>
              <p>{caseItem.description}</p>
              {caseItem.metrics && (
                <div className={styles.metrics}>
                  {caseItem.metrics.map((metric, idx) => (
                    <div key={idx} className={styles.metric}>
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCase; 