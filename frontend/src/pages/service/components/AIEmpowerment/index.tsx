import React from 'react';
import { motion } from 'framer-motion';
import styles from './AIEmpowerment.module.css';
import { AICapability, AIStat } from './types';
import { AnimatedNumber } from './AnimatedNumber';

// 修正图片导入路径
import imageAI from '../../../../assets/images/ai-power/ai-image.webp';
import dataAI from '../../../../assets/images/ai-power/ai-data.webp';
import decisionAI from '../../../../assets/images/ai-power/ai-decision.webp';
import projectManagement from '../../../../assets/images/ai-power/ai-team.webp';

const capabilities: AICapability[] = [
  { 
    title: '图片智能', 
    id: 'image',
    imageUrl: imageAI,
    description: '基于 SD 和 MidJourney'
  },
  { 
    title: '数据智能', 
    id: 'data',
    imageUrl: dataAI,
    description: '数据分析与智能决策支持'
  },
  { 
    title: '决策智能', 
    id: 'decision',
    imageUrl: decisionAI,
    description: 'DSK智能决策系统与推荐引擎'
  },
  { 
    title: '项目管理', 
    id: 'project-management',
    imageUrl: projectManagement,
    description: '智能项目管理与资源调度'
  }
];

const stats: AIStat[] = [
  { 
    value: 1000,
    suffix: '+',
    label: 'SD & MidJourney',
    labelCn: '图片生成',
    delay: 0 
  },
  { 
    value: 4,
    label: 'Local LLM',
    labelCn: '大模型部署',
    delay: 200 
  },
  { 
    value: 6,
    suffix: '+',
    label: 'Text eMail Service',
    labelCn: '文案 客服模型服务店铺',
    delay: 400 
  },
  { 
    value: 206,
    suffix: ' GB',
    label: 'Sharepoint Docs Size',
    labelCn: 'Sharepoint 项目文档',
    delay: 600 
  }
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
          <p>我们在 AI 领域拥有丰富的实践经验，目前本地 LLM 部署有：Qwen2.5/DeepseekV3/Gemma2等模型</p>
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
            <AnimatedNumber 
              end={stat.value}
              suffix={stat.suffix}
              delay={stat.delay}
            />
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
              <img 
                src={capability.imageUrl} 
                alt={capability.title}
                className={styles['capability-img']}
              />
            </div>
            <h3 className={styles['capability-title']}>
              {capability.title}
            </h3>
            {capability.description && (
              <p className={styles['capability-description']}>
                {capability.description}
              </p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AIEmpowerment; 