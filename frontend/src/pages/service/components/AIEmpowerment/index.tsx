import React from 'react';
import { motion } from 'framer-motion';
import styles from './AIEmpowerment.module.css';
import { AICapability, AIStat } from './types';

const capabilities: AICapability[] = [
  { title: '图片智能', id: 'image' },
  { title: '数据智能', id: 'data' },
  { title: '决策智能', id: 'decision' }
];

const stats: AIStat[] = [
  { number: '1,000+', label: 'SD & MidJourney', labelCn: '图片生成' },
  { number: '4', label: 'Local LLM', labelCn: '大模型部署' },
  { number: '6+', label: 'Text eMail Service', labelCn: '文案 客服模型服务店铺' },
  { number: '206 GB', label: 'Sharepoint Docs Size', labelCn: 'Sharepoint 项目文档' }
];

const AIEmpowerment: React.FC = () => {
  return (
    <motion.section 
      className={styles['ai-section']}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles['ai-content']}>
        <motion.h2 
          className={styles['ai-title']}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          AI 赋能
        </motion.h2>
        <motion.div 
          className={styles['ai-description']}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>我们在 AI 领域拥有丰富的实践经验，目前本地 LLM 部署有：Qwen2.5/DeepseekV2.5/Gemma2/Llama 等模型，我们运营尖端技术做全链路解决方案，争做运营市场头部智能大卖；</p>
          <p>让运营使用工具没有门槛，让 AI 成为跨境电商的超级大脑，让跨境电商成为 AI 的最佳实践场景。</p>
        </motion.div>
      </div>

      <motion.div 
        className={styles['stats-banner']}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {stats.map((stat, index) => (
          <div key={index} className={styles['stat-item']}>
            <span className={styles['stat-number']}>{stat.number}</span>
            <span className={styles['stat-label']}>{stat.label}</span>
            <span className={styles['stat-label-cn']}>{stat.labelCn}</span>
          </div>
        ))}
      </motion.div>

      <motion.div 
        className={styles['ai-capabilities']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.id}
            className={styles['capability-card']}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          >
            <div className={styles['capability-image']}>
              待更新
            </div>
            <h3 className={styles['capability-title']}>
              {capability.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AIEmpowerment; 