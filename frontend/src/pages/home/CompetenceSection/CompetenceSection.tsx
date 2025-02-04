import React, { useState } from 'react';
import styles from './CompetenceSection.module.css';

const competencies = [
  {
    number: '01',
    title: '定制化出海方案',
    description: '根据企业的业需求和市场特点，制定个性化的跨境电商战略和实施方案。'
  },
  {
    number: '02',
    title: '跨境全生态服务',
    description: '提供从产品选择、营销策略到物流配送的全方位支持，助力企业跨境电商成功。'
  },
  {
    number: '03',
    title: '去中心化运营',
    description: '采用灵活的运营模式，提高决策效率和市场响应速度，实现快速适应市场变化。'
  },
  {
    number: '04',
    title: 'AI 赋能全流程',
    description: '利用人工智能技术全面优化运营流程，提高效率和精准度，实现智能化管理。'
  },
  {
    number: '05',
    title: '价值取向合作',
    description: '注重长期合作关系，提供长期的深度合作方案，共同打造可持续发展的业务生态。'
  },
  {
    number: '06',
    title: '数字化运营资产',
    description: '基于Sharepoint和Notion工作流，构建数字化运营体系，积累长期优势。'
  }
];

const CompetenceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  return (
    <div className={styles.wrapper}>
      <section className={styles.competenceSection}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>核心竞争力</h2>
          <p className={styles.subtitle}>
            专业团队 + AI赋能 = 全方位助力您的全球业务拓展
          </p>
        </div>

        <div className={styles.competenceLayout}>
          {competencies.map((item, index) => (
            <div
              key={index}
              className={`${styles.competencyCard} ${activeIndex === index ? styles.active : ''}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className={styles.cardContent}>
                <div className={styles.number}>{item.number}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CompetenceSection;