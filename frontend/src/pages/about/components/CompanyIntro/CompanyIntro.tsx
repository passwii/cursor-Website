import React from 'react';
import { motion } from 'framer-motion';
import styles from './CompanyIntro.module.css';
import companyHero from '../../../../assets/images/company-hero.webp';
import AnimatedNumber from './AnimatedNumber';

const CompanyIntro: React.FC = () => {
  return (
    <section id="company" className={styles.introSection}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>公司简介</h2>
        </div>
        <div className={styles.introContainer}>
          <motion.div className={styles.introText}>
            <p>彼励扶电子商务（苏州）有限公司，由一群怀揣梦想的年轻精英组成， 我们是一支充满活力与创新精神的跨境电商团队。
              凭借全球视野，我们深入洞察各国市场的需求脉动；依托数据驱动，我们实时监控并精准优化运营策略；
              凭借高效运营，我们灵活应对市场风云变幻，助力客户提升竞争力，共同开创辉煌未来。</p>
            <p>我们秉持价值取向合作，注重长期合作关系，提供长期的深度合作方案，共同打造可持续发展的业务生态。
              基于Sharepoint和Notion工作流，我们构建了数字化运营体系，积累长期优势，确保每一次合作都能为客户带来持久的价值和增长。</p>
            <motion.div 
              className={styles.statsBanner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <motion.div
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                <AnimatedNumber value={5} />
                <motion.div 
                  className={styles.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  核心成员
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                <AnimatedNumber value={10} />
                <motion.div 
                  className={styles.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  Best Seller
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                <AnimatedNumber value={7} />
                <motion.div 
                  className={styles.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  跨境平台
                </motion.div>
              </motion.div>
              <motion.div
                className={styles.statItem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.1 }}
              >
                <AnimatedNumber value={100} suffix="M" />
                <motion.div 
                  className={styles.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  人均操盘业绩
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <img 
            className={styles.introImage}
            src={companyHero}
            alt="Company Introduction"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro; 