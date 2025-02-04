import React from 'react';
import styles from './ServicesSection.module.css';
import { MarketIcon, ProductIcon, BrandIcon, AIIcon } from './icons';
import OperationServiceWrapper from './OperationServiceWrapper';

const ServicesSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.servicesSection}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>跨境优服</h2>
          <div className={styles.line}></div> {/* 添加蓝色线条 */}
          <p className={styles.subtitle}>
            彼励扶拥有全行业顶尖运营人才，优秀的技术团队，全流程数据管理制度
          </p>
        </div>
        
        <div className={styles.servicesGrid}>
          <div className={`${styles.serviceCard} ${styles.blue}`}>
            <div className={styles.iconContainer}>
              <MarketIcon />
            </div>
            <h3 className={styles.serviceTitle}>市场调研</h3>
            <p className={styles.serviceDescription}>
              深入分析目标市场，制定精准营销策略
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.green}`}>
            <div className={styles.iconContainer}>
              <ProductIcon />
            </div>
            <h3 className={styles.serviceTitle}>产品优化</h3>
            <p className={styles.serviceDescription}>
              优化产品展示，提升转化率
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.red}`}>
            <div className={styles.iconContainer}>
              <BrandIcon />
            </div>
            <h3 className={styles.serviceTitle}>品牌建设</h3>
            <p className={styles.serviceDescription}>
              打造独特品牌形象，提升品牌价值
            </p>
          </div>

          <div className={`${styles.serviceCard} ${styles.orange}`}>
            <div className={styles.iconContainer}>
              <AIIcon />
            </div>
            <h3 className={styles.serviceTitle}>AI赋能</h3>
            <p className={styles.serviceDescription}>
              利用AI技术优化运营效率
            </p>
          </div>
        </div>

        <OperationServiceWrapper />
      </section>
    </div>
  );
};

export default ServicesSection;