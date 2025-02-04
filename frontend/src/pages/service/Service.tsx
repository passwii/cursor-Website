import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet';
import { Globe, Wrench, Zap, Shield } from 'lucide-react';
import styles from './Service.module.css';
import { useWindowSize } from '../../hooks/useWindowSize';
import serviceHero from '../../assets/images/service-hero.webp';

// Import Components
import ServiceCard from './components/ServiceCard';
import PrimaryServices from './components/PrimaryServices';
import CoreTechnology from './components/CoreTechnology';
import AIEmpowerment from './components/AIEmpowerment';
import ServiceCase from './components/ServiceCase';

const ServicePage: React.FC = () => {
  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const [heroRef, heroInView] = useInView({
    threshold: 0,
    triggerOnce: false
  });

  // Transform scroll position to scale values
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.6]);
  const titleOpacity = useTransform(scrollY, [0, 400], [1, 0.85]);
  
  // New transform for services title
  const servicesTitleScale = useTransform(
    scrollY,
    [300, 600],
    [1, 1.2]
  );

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        const navHeight = nav.getBoundingClientRect().height;
        document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
      }
    };

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  useEffect(() => {
    if (window.location.hash === '#core-tech') {
      const element = document.getElementById('core-tech');
      if (element) {
        const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
        const yOffset = -navHeight - 20;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

  useEffect(() => {
    const updateHeroFontSize = () => {
      const viewportWidth = window.innerWidth;
      const baseFontSize = Math.min(Math.max(viewportWidth / 45, 128), 196);
      const subFontSize = Math.min(Math.max(viewportWidth / 60, 64), 96);
      
      document.documentElement.style.setProperty('--hero-title-size', `${baseFontSize}px`);
      document.documentElement.style.setProperty('--hero-subtitle-size', `${subFontSize}px`);
    };

    updateHeroFontSize();
    window.addEventListener('resize', updateHeroFontSize);
    return () => window.removeEventListener('resize', updateHeroFontSize);
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
      <Helmet>
        <link 
          rel="preload" 
          href={serviceHero}
          as="image" 
          type="image/webp" 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          as="style"
        />
        <title>服务项目 - BELIEVE</title>
        <meta name="description" content="彼励扶提供全方位的跨境电商服务，包括市场洞察、项目方案、产品出海和品牌出海等服务，助力企业实现全球化业务增长。" />
      </Helmet>

      {/* Hero Section */}
      <div className={styles['hero-section']} ref={heroRef}>
        <div 
          className={styles['hero-background']}
          style={{
            backgroundImage: `url(${serviceHero})`,
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
              <div className={styles['hero-title']}>
                <span></span>
                <p>From Here, We Reach the World</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div id="ecosystem">
        <div className={styles['services-grid']}>
          <motion.h2 
            className={styles['services-heading']}
            style={{ 
              scale: servicesTitleScale,
              transformOrigin: 'center center'
            }}
          >
            跨境全生态
          </motion.h2>
          <p className={styles['services-description']}>
            为您提供跨境全生态服务, 助力创造跨境品牌价值
          </p>

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
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut"
              }}
            >
              杨帆出海，未来无限
            </motion.h4>
            <button className={styles['contact-button']}>
              联系合作
            </button>
          </div>
        </div>
      </div>

      {/* Primary Services Section */}
      <section id="ecosystem">
        <PrimaryServices />
      </section>

      {/* Core Technology Section */}
      <section id="core-tech">
        <CoreTechnology />
      </section>

      {/* AI Empowerment Section */}
      <section id="ai-empower">
        <AIEmpowerment />
      </section>

      <section id="service-case">
        <ServiceCase />
      </section>
    </div>
  );
};

export default ServicePage;
