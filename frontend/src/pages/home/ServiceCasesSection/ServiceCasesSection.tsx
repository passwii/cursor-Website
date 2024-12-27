import React from 'react';
import styles from './ServiceCasesSection.module.css';

const cases = [
  {
    title: 'Drill Bit',
    overview: '某工具配件品牌面临亚马逊平台销量停滞、品牌知名度低的问题。',
    process: [
      '对品牌现有产品线进行全面评估，优化产品描述和图片。',
      '实施智能库存管理系统，提高库存周转率，降低仓储成本。',
      '定针对性的广告策略，优化关键词和投放时间。',
      '与知名KOL合作，开展多场线上直播和产品体验活动。',
      '优化亚马逊店铺，提高搜索排名和转化率。'
    ],
    result: '经过6个月的运营，销售额同比增长150%，品牌搜量提升200%，客户满意度达到95%。'
  },
  {
    title: 'Glass Pan',
    overview: '某知名工厂为美国主流品牌和线下商超供应食品餐盘，面临严重的成本压缩问题。',
    process: [
      '组建专业团队，深入分析工厂现有供应链和产品结构。',
      '制定差异化战略，针对工厂供货的品牌竞品进行详细调查分析。',
      '从物流环节着手，优化现有供应链节点，显著降低运营成本。',
      '重新设计产品包装和营销策略，提升产品在线上平台的竞争力。',
      '利用数据分析，精准定位目标客户群，优化广告投放策略。'
    ],
    result: '半年内进入BSR TOP10，月销售额突破10万美元，毛利率超25%。工厂实现多元供货，稳定成本，达成品牌与OEM双赢。'
  },
  {
    title: 'Mattress',
    overview: '某家居床垫品牌希望在美国市场扩大影响力，提高销售额。',
    process: [
      '深入分析目标市场，制定针对性的品牌定位和营销策略。',
      '优化产品线，开发符合美国消费者需求的新产品。',
      '全面提升社交媒体运营，包括Facebook、Instagram和TikTok。',
      '与知名KOL合作，开展多场线上直播和产品体验活动。',
      '优化亚马逊店铺，提高搜索排名和转化率。'
    ],
    result: '经过8个月运营，品牌知名度提升200%，客户复购率增长30%，月均销售额增长150%。'
  }
];

const ServiceCasesSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.serviceCasesSection}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>服务案例</h2>
          <p className={styles.subtitle}>
            我们用专业和创新，助力客户实现业务增长
          </p>
        </div>
        
        <div className={styles.casesGrid}>
          {cases.map((item, index) => (
            <div key={index} className={styles.caseCard}>
              <div className={styles.imagePlaceholder} />
              <div className={styles.content}>
                <h3 className={styles.caseTitle}>{item.title}</h3>
                
                <div className={styles.section}>
                  <h4>项目概况</h4>
                  <p>{item.overview}</p>
                </div>
                
                <div className={styles.section}>
                  <h4>合作过程</h4>
                  <ul>
                    {item.process.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
                
                <div className={styles.section}>
                  <h4>项目成果</h4>
                  <p>{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceCasesSection; 