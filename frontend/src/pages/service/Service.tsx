import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, Globe, Wrench, Brain, Search, Share2, FileText, Truck, CreditCard, BrainCircuitIcon } from 'lucide-react';
import styles from './Service.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Hook for window resize
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

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

interface ServiceDetail {
  title: string;
  items: string[];
}

interface PrimaryService {
  title: string;
  subtitles: string;
  details: ServiceDetail[];
}

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
        <div className={styles['stat-item']}>
          <span className={styles['stat-number']}>2,019</span>
          <span className={styles['stat-label']}>Studio set up</span>
          <span className={styles['stat-label-cn']}>工作室成立</span>
        </div>
        <div className={styles['stat-item']}>
          <span className={styles['stat-number']}>100+</span>
          <span className={styles['stat-label']}>Product service</span>
          <span className={styles['stat-label-cn']}>产品服务</span>
        </div>
        <div className={styles['stat-item']}>
          <span className={styles['stat-number']}>30+</span>
          <span className={styles['stat-label']}>Cooperative business</span>
          <span className={styles['stat-label-cn']}>合作商家</span>
        </div>
        <div className={styles['stat-item']}>
          <span className={styles['stat-number']}>999+</span>
          <span className={styles['stat-label']}>Word-of-mouth praise</span>
          <span className={styles['stat-label-cn']}>口碑好评</span>
        </div>
      </motion.div>

      <motion.div 
        className={styles['ai-capabilities']}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {[
          { title: '图片智能', id: 'image' },
          { title: '数据智能', id: 'data' },
          { title: '决策智能', id: 'decision' }
        ].map((capability, index) => (
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

const ServicePage: React.FC = () => {
  const { scrollY } = useScroll();
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [activeService, setActiveService] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const primaryServices: PrimaryService[] = [
    {
      title: "知识产权服务",
      subtitles: "商标注册、专利申请、版权登记等",
      details: [
        {
          title: "专利权",
          items: [
            "发明专利申请",
            "实用新型专利申请",
            "外观设计专利申请",
            "专利检索分析"
          ]
        },
        {
          title: "版权",
          items: [
            "软件著作权登记",
            "作品著作权登记",
            "版权转让许可",
            "版权保护咨询"
          ]
        },
        {
          title: "商标权",
          items: [
            "商标注册申请",
            "商标转让许可",
            "商标异议答辩",
            "商标续展变更"
          ]
        },
        {
          title: "IP战略",
          items: [
            "知识产权布局",
            "IP价值评估",
            "侵权风险防范",
            "维权援助服务"
          ]
        }
      ]
    },
    {
      title: "项目孵化服务",
      subtitles: "项目评估筛选、资源对接整合、运营指导培训等",
      details: [
        {
          title: "平台准备",
          items: [
            "平台选择",
            "店铺注册",
            "店铺装修",
            "产品上架"
          ]
        },
        {
          title: "选品阶段",
          items: [
            "市场调研",
            "产品定位",
            "供应链筛选",
            "产品测试"
          ]
        },
        {
          title: "新品阶段",
          items: [
            "供应商管理",
            "库存管理",
            "物流管理",
            "质量管理"
          ]
        },
        {
          title: "运营服务",
          items: [
            "数据分析",
            "营销推广",
            "客户服务",
            "团队管理"
          ]
        }
      ]
    },
    {
      title: "托管运营服务",
      subtitles: "店铺运营、营销推广、数据分析、仓储物流等",
      details: [
        {
          title: "市场推广与品牌建设",
          items: [
            "多渠道推广：利用搜索引擎优化（SEO）、社交媒体营销（SMM）、内容营销等手段，提升品牌曝光度。",
            "广告投放：在目标市场进行精准广告投放，如谷歌广告、Facebook广告等。",
            "品牌故事传播：通过多种渠道传播品牌故事，提升品牌认知度和忠诚度。"
          ]
        },
        {
          title: "客户服务与售后",
          items: [
            "多语言客服：提供多语言的客户服务，解决消费者的问题和投诉。",
            "售后支持：处理退换货、售后维修等事宜，确保消费者满意度。",
            "用户反馈分析：收集和分析用户反馈，优化产品和服务的质量。"
          ]
        },
        {
          title: "数据分析与优化",
          items: [
            "市场数据分析：监控市场趋势、竞争对手动态，提供市场分析报告。",
            "销售数据分析：分析销售数据，优化库存管理、定价策略和促销活动。",
            "用户行为分析：通过用户行为数据，优化网站或店铺的用户体验和转化率。"
          ]
        },
        {
          title: "法律与税务咨询",
          items: [
            "法律咨询：提供跨境电商相关的法律咨询服务，确保业务合规。",
            "税务筹划：处理国际税务问题，合理规划税务，降低运营成本。"
          ]
        }
      ]
    },
    {
      title: "联合运营服务",
      subtitles: "资源共享、优势互补、风险共担、长期合作等",
      details: [
        {
          title: "资源整合",
          items: [
            "渠道资源对接",
            "供应链优化",
            "技术资源共享",
            "市场资源互通"
          ]
        },
        {
          title: "品牌建设",
          items: [
            "品牌策略制定",
            "市场定位优化",
            "品牌形象设计",
            "品牌推广执行"
          ]
        },
        {
          title: "风险管控",
          items: [
            "风险评估预警",
            "合规体系建设",
            "危机处理预案",
            "知识产权保护"
          ]
        },
        {
          title: "增值服务",
          items: [
            "新市场开拓",
            "创新业务孵化",
            "团队能力提升",
            "管理体系优化"
          ]
        }
      ]
    }
  ];

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
    [300, 600], // Adjust these values to control when the scaling starts/ends
    [1, 1.2]    // Scale from normal (1) to 1.2x size
  );

  const calculatePosition = (index: number, total: number) => {
    if (isMobile) {
      return { x: 0, y: 0 }; // No position calculation needed for mobile
    }

    const angle = (index * (2 * Math.PI)) / total - Math.PI / 2;
    const horizontalRadius = width > 1400 ? 550 : 450;
    const verticalRadius = width > 1400 ? 225 : 200;
    
    return {
      x: horizontalRadius * Math.cos(angle),
      y: verticalRadius * Math.sin(angle)
    };
  };

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

  const technologies = [
    {
      name: "数据分析与挖掘",
      description: "对海量数据进行快速分析和挖掘，识别市场趋势、用户行为模式等，为运营决策提供更精准的数据支持。",
      icon: Search
    },
    {
      name: "搜索引擎优化 (SEO)",
      description: "优化产品标题、描述、关键词等，提升产品在搜索引擎中的排名，增加自然流量。",
      icon: Search
    },
    {
      name: "社交媒体营销 (SMM)",
      description: "进行精准广告投放，触达目标客户群体，提升广告效果。",
      icon: Share2
    },
    {
      name: "内容营销",
      description: "创作高质量的内容，吸引用户关注，提升品牌影响力。",
      icon: FileText
    },
    {
      name: "物流与仓储管理",
      description: "优化物流路径规划，提高物流效率，降低物流成本。",
      icon: Truck
    },
    {
      name: "跨境支付与结算",
      description: "为财务数据提供更安全、便捷的支付和结算服务，提升用户购物体验。",
      icon: CreditCard
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % primaryServices.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

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

  useEffect(() => {
    if (window.location.hash === '#core-tech') {
      const element = document.getElementById('core-tech');
      if (element) {
        const navHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0;
        const yOffset = -navHeight - 20; // Additional 20px buffer
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, []);

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
        <motion.h2 
          className={styles['services-heading']}
          style={{ 
            scale: servicesTitleScale,
            transformOrigin: 'center center'
          }}
        >
          跨境全生态服务
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

          {/* Primary Services Section */}
      <div className={styles['primary-services']}>
        <h2 className={styles['primary-services-title']}>
          主营业务
          <span>Primary Services</span>
        </h2>

        <div className={styles['services-dock-container']}>
          <div 
            className={styles['services-dock']}
            onMouseLeave={() => setIsPaused(false)}
          >
            {primaryServices.map((service, index) => (
              <motion.div
                key={index}
                className={`${styles['dock-item']} ${index === activeService ? styles.active : ''}`}
                whileHover={{ scale: 1.05, translateY: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveService(index);
                  setIsPaused(true);
                }}
              >
                <h3 className={styles['dock-title']}>{service.title}</h3>
                <p className={styles['dock-subtitles']}>{service.subtitles}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className={styles['service-details-container']}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {primaryServices[activeService].details && (
              <div className={styles['dock-details-list']}>
                {primaryServices[activeService].details.map((detail, idx) => (
                  <motion.div 
                    key={idx} 
                    className={styles['dock-detail-item']}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <h4>{detail.title}</h4>
                    <div className={styles['card-content']}>
                      <div className={styles['detail-items']}>
                        {detail.items?.map((item, itemIdx) => (
                          <div key={itemIdx} className={styles['detail-item']}>
                            <span className={styles['detail-bullet']}>•</span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Core Technologies Section */}
      <div id="core-tech" className={styles['core-technologies-section']}>
        <div className={styles['core-technologies-title']}>
          <h2 className={styles['core-technologies-heading']}>核心技术</h2>
          <p className={styles['core-technologies-description']}>AI 赋能跨境电商全链路</p>
        </div>

        <div className={styles['solar-system']}>
          {/* Connecting Ring */}
          <div className={styles['connecting-ring']} />

          {/* Central AI Sun */}
          <motion.div 
            className={styles['ai-sun']}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BrainCircuitIcon className={styles['tech-icon']} />
          </motion.div>

          {/* Tech Planets */}
          {technologies.map((tech, index) => {
            const position = calculatePosition(index, technologies.length);
            
            return (
              <motion.div
                key={tech.name}
                className={styles['tech-planet']}
                style={{
                  x: position.x,
                  y: position.y
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1,
                  scale: 1
                }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1
                }}
                whileHover={{ scale: 1.05 }}
              >
                {tech.name === "跨境支付与结算" ? (
                  <>
                    <div className={styles['planet-content']}>
                      <tech.icon className={styles['tech-icon']} />
                    </div>
                    <div className={styles['tech-info']}>
                      <h3 className={styles['tech-title']}>{tech.name}</h3>
                      <p className={styles['tech-description']}>{tech.description}</p>
                    </div>
                  </>
                ) : tech.name === "数据分析与挖掘" ? (
                  <>
                    <div className={styles['planet-content']}>
                      <tech.icon className={styles['tech-icon']} />
                    </div>
                    <div className={styles['tech-info']}>
                      <h3 className={styles['tech-title']}>{tech.name}</h3>
                      <p className={styles['tech-description']}>{tech.description}</p>
                    </div>
                  </>
                ) : index < 3 ? (
                  <>
                    <div className={styles['tech-info']}>
                      <h3 className={styles['tech-title']}>{tech.name}</h3>
                      <p className={styles['tech-description']}>{tech.description}</p>
                    </div>
                    <div className={styles['planet-content']}>
                      <tech.icon className={styles['tech-icon']} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles['planet-content']}>
                      <tech.icon className={styles['tech-icon']} />
                    </div>
                    <div className={styles['tech-info']}>
                      <h3 className={styles['tech-title']}>{tech.name}</h3>
                      <p className={styles['tech-description']}>{tech.description}</p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AIEmpowerment />
    </div>
  );
};

export default ServicePage;
