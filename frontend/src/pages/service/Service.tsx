import React, { useEffect } from 'react';
import { ArrowRight, Zap, Shield, Globe, Wrench, Brain, Search, Share2, FileText, Truck, CreditCard } from 'lucide-react';
import styles from './Service.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}> = ({ title, description, icon, index }) => {
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

const ServicePage: React.FC = () => {
  const { scrollY } = useScroll();
  const [heroRef, heroInView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  // Transform scroll position to scale value
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  // Update nav height CSS variable
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav'); // Adjust selector if needed
      if (nav) {
        const navHeight = nav.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  const services = [
    {
      title: "市场洞察",
      description: "根据权威机构发布的调研报告，介绍产品全球销售情况，帮助客户了解市场大盘。深入研究目标市场的消费人群、消费习惯、竞争格局等，为产品定位和营销策略提供数据支持。基于平台分析竞争对手的产品、价格、销量、评价等，找出自身优势和改进方向。",
      icon: <Globe className={styles['icon']} />
    },
    {
      title: "项目方案",
      description: "通过市场数据分析，制定合理的定价策略，以实现利润最大化。根据市场需求和竞品分析，制定差异化的产品策略，突出自身优势。根据目标市场特点和客户需求，制定全面的营销策略和推广计划，确保产品成功进入市场。",
      icon: <Wrench className={styles['icon']} />
    },
    {
      title: "产品出海",
      description: "通过市场数据分析，制定合理的定价策略，以实现利润最大化。确保产品符合目标市场的法律法规、安全标准等，避免侵权和违规风险。优化供应链，选择可靠的供应商，控制成本，保证产品质量和供货稳定。制定高效的物流方案，选择合适的物流服务商，降低物流成本，提升配送时效。",
      icon: <Zap className={styles['icon']} />
    },
    {
      title: "品牌出海",
      description: "根据目标市场和产品特点，制定清晰的品牌定位和价值主张。通过专业的视觉设计、营销活动等手段，提升品牌在海外市场的知名度和美誉度。利用社交媒体、搜索引擎、电子邮件营销等方式进行品牌推广，提升品牌知名度和美誉度。注册商标，监控侵权行为，维护品牌权益。",
      icon: <Shield className={styles['icon']} />
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles['hero-section']} ref={heroRef}>
        <div 
          className={styles['hero-background']}
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80")',
            filter: 'brightness(0.75)'
          }}
        />
        <div className={styles['hero-overlay']}>
          <div className={styles['hero-content']}>
            <motion.div
              style={{
                scale: titleScale,  
                opacity: titleOpacity
              }}
            >
              <h1 className={styles['hero-title']}>
                <span>品牌 制造，智达 全球</span>
                <p>From Here, We Reach the World</p>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className={styles['services-grid']}>
        <div className={styles['services-title']}>
          <h2 className={styles['services-heading']}>
            跨境全生态服务
          </h2>
          <p className={styles['services-description']}>
            为您提供跨境全生态服务, 助力全球品牌创造价值
          </p>
        </div>

        <div className={styles['services-cards']}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className={styles['contact-section']}>
          <motion.h4 
            className={styles['contact-title']}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.2,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
          >
            杨帆出海，未来无限
          </motion.h4>
          <button className={styles['contact-button']}>
            联系合作
          </button>
        </div>
      </div>

      {/* Core Technologies Section */}
      <div className={styles['core-technologies-section']}>
        <div className={styles['core-technologies-title']}>
          <h2 className={styles['core-technologies-heading']}>核心技术</h2>
          <p className={styles['core-technologies-description']}>AI 赋能跨境电商全链路</p>
        </div>

        <div className={styles['core-technologies-content']}>
          {/* Central AI Circle */}
          <div className={styles['ai-circle']}>
            <div className={styles['ai-icon']}>
              <Brain className={styles['brain-icon']} />
              <span className={styles['ai-text']}>AI</span>
            </div>
          </div>

          {/* Surrounding Tech Circles */}
          <div className={styles['tech-circles']}>
            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <Search className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>数据分析与挖掘</h3>
              <p className={styles['tech-description']}>利用 AI 技术，对海量数据进行快速分析和挖掘，识别市场趋势、用户行为模式等，为运营决策提供更精准的数据支持。</p>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <Search className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>搜索引擎优化 (SEO)</h3>
              <p className={styles['tech-description']}>利用 AI 技术，优化产品标题、描述、关键词等，提升产品在搜索引擎中的排名，增加自然流量。</p>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <Share2 className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>社交媒体营销 (SMM)</h3>
              <p className={styles['tech-description']}>利用 AI 技术，进行精准广告投放，触达目标客户群体，提升广告效果。</p>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <FileText className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>内容营销</h3>
              <p className={styles['tech-description']}>利用 AI 技术，创作高质量的内容，吸引用户关注，提升品牌影响力。</p>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <Truck className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>物流与仓储管理</h3>
              <p className={styles['tech-description']}>利用 AI 技术，优化物流路径规划，提高物流效率，降低物流成本。</p>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-circle']}>
                <CreditCard className={styles['tech-icon']} />
              </div>
              <h3 className={styles['tech-title']}>跨境支付与结算</h3>
              <p className={styles['tech-description']}>利用 AI 技术，为财务数据提供更安全、便捷的支付和结算服务，提升用户购物体验。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
