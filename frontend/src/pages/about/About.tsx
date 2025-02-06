import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, animate, useMotionValue, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BiSolidData } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';
import JobPositions from './JobPosition';
import { jobPositions } from './JobPositionData';
import CompanyIntro from './components/CompanyIntro/CompanyIntro';

import styles from './About.module.css';

// Assets
import aboutHero from '../../assets/images/about-hero.webp';
import blfBackLove from '../../assets/images/blf-back-love.webp';
import companyHero from '../../assets/images/company-hero.webp';
import teamJack from '../../assets/images/team-jack.webp';
import teamRock from '../../assets/images/team-rock.webp';
import teamJackie from '../../assets/images/team-jackie.webp';
import goalsBackground from '../../assets/images/goals-background.webp';

// 添加合作伙伴图标导入
import chinaMobileLogo from '../../assets/images/partners/china-mobile.svg';
import chinaConstructionBankLogo from '../../assets/images/partners/china-construction-bank.svg';
import blenderLogo from '../../assets/images/partners/blender.svg';
import bankOfChinaLogo from '../../assets/images/partners/bank-of-china.svg';
import audiLogo from '../../assets/images/partners/audi.svg';
import iQiyiLogo from '../../assets/images/partners/iqiyi-logo-new.svg';
import pddLogo from '../../assets/images/partners/pdd.svg';
import sinopecLogo from '../../assets/images/partners/sinopec.svg';
import teslaLogo from '../../assets/images/partners/tesla-pure.svg';
import amazonLogo from '../../assets/images/partners/logo-amazon.svg';
import walmartLogo from '../../assets/images/partners/walmart.svg';
import sheinLogo from '../../assets/images/partners/shein.svg';

// Using placeholder images
// const PARTNER_LOGO_PLACEHOLDER = 'https://via.placeholder.com/200x100?text=Partner';

// 引用招聘

const AnimatedNumber = ({ value, suffix = '' }: { value: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const roundedWithSuffix = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={styles.number}
    >
      {roundedWithSuffix}
    </motion.div>
  );
};

const About: React.FC = () => {
  const philosophyRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"]
  });

  const maskOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.92, 0.92, 1]
  );

  const [expandedJob, setExpandedJob] = useState(-1);

  const members = [
    {
      name: "苏毅 Leo",
      role: "商务专家",
      avatar: teamRock
    },
    {
      name: "松岳 Jackie",
      role: "运营专家",
      avatar: teamJack
    },
    {
      name: "凌志 Rock",
      role: "产品专家",
      avatar: teamRock
    },
    {
      name: "扶苏 Buck",
      role: "创意专家",
      avatar: teamJack
    },
    {
      name: "轻舟 Jack",
      role: "运营专家",
      avatar: teamRock
    },
    // ... 其他成员保持不变
  ];

  // 修改合作伙伴部分的代码
  const partnerLogos = [
    { src: pddLogo, alt: '拼多多' },
    { src: walmartLogo, alt: '沃尔玛' },
    { src: sheinLogo, alt: 'Shein' },
    { src: amazonLogo, alt: '亚马逊' },
    { src: chinaMobileLogo, alt: '中国移动' },
    { src: chinaConstructionBankLogo, alt: '建设银行' },
    { src: blenderLogo, alt: 'Blender' },
    { src: bankOfChinaLogo, alt: '中国银行' },
    { src: sinopecLogo, alt: '中石化' },
    { src: teslaLogo, alt: '特斯拉' },
    { src: audiLogo, alt: '奥迪' },
    { src: iQiyiLogo, alt: '爱奇艺' },
  ];

  const goalsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: goalsScrollProgress } = useScroll({
    target: goalsRef,
    offset: ["start end", "end start"]
  });

  const goalsMaskOpacity = useTransform(
    goalsScrollProgress,
    [0, 0.2, 0.8, 1],
    [1, 0.92, 0.92, 1]
  );

  useEffect(() => {
    document.title = '关于我们 - BELIEVE';
  }, []);

  return (
    <>
      {/* Section 1: Hero */}
      <section className={styles.heroSection}>
        <img src={aboutHero} alt="About Hero" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <h1>关于我们</h1>
          <h2>WE BELIEVE IT'S ALWAYS DAY 1</h2>
          <p>跨境 当下/即未来</p>
        </div>
      </section>

      {/* Section 2: Company Introduction */}
      <CompanyIntro />

      {/* Section 3: Philosophy */}
      <section id="culture" className={styles.philosophySection}>
        <div className={styles.parallaxContainer} ref={philosophyRef}>
          <motion.div 
            className={styles.parallaxBackground}
            style={{
              backgroundImage: `url(${blfBackLove})`
            }}
          />
          <motion.div 
            className={styles.philosophyMask}
            style={{ opacity: maskOpacity }}
          />
          <div className={styles.philosophyContent}>
            <div className={styles.container}>
              <div className={styles.sectionTitle}>
                <h2>公司理念</h2>
              </div>
              <div className={styles.coreCards}>
                {/* Core Cards */}
                <div className={styles.coreCard}>
                  <div className={styles.iconContainer}>
                    <FaGlobeAmericas className={styles.icon} />
                  </div>
                  <h3>全球视野</h3>
                  <p>开放视野，国际品牌</p>
                </div>
                <div className={styles.coreCard}>
                  <div className={styles.iconContainer}>
                    <BiSolidData className={styles.icon} />
                  </div>
                  <h3>数据驱动</h3>
                  <p>数据驱动，精准优化</p>
                </div>
                <div className={styles.coreCard}>
                  <div className={styles.iconContainer}>
                    <BsFlagFill className={styles.icon} />
                  </div>
                  <h3>品牌使命</h3>
                  <p>品牌助力，构建生态</p>
                </div>
                <div className={styles.coreCard}>
                  <div className={styles.iconContainer}>
                    <AiOutlineRobot className={styles.icon} />
                  </div>
                  <h3>AI赋能</h3>
                  <p>决策只能，跨境大脑</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Team */}
      <section id="team" className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>团队风采</h2>
            <p>BELIEVE是一支充满激情、专业高效的跨境电商运营团队，汇聚了行业精英，致力于为企业开拓全球市场，实现品牌国际化。</p>
          </div>
          <div className={styles.teamGrid}>
            {members.map((member, index) => (
              <motion.div 
                key={index} 
                className={styles.teamMember}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img src={member.avatar} alt={member.name} className={styles.avatar} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Goals */}
      <section id="future" className={styles.goalsSection}>
        <div className={styles.parallaxContainer} ref={goalsRef}>
          <motion.div 
            className={styles.parallaxBackground}
            style={{
              backgroundImage: `url(${goalsBackground})`
            }}
          />
          <motion.div 
            className={styles.philosophyMask}
            style={{ opacity: goalsMaskOpacity }}
          />
          <div className={styles.goalsContent}>
            <div className={styles.container}>
              <div className={styles.sectionTitle}>
                <h2>战略目标</h2>
              </div>
              <div className={styles.goalsGrid}>
                <div className={styles.goalCard}>
                  <h3><strong>20家企业</strong></h3>
                  <p>在未来三年内，招募20家优质跨境电商企业，打造跨境电商产业集群。</p>
                </div>
                <div className={styles.goalCard}>
                  <h3><strong>10大产业</strong></h3>
                  <p>重点发展十大跨境电商优势产业，打造产业集群效应。</p>
                </div>
                <div className={styles.goalCard}>
                  <h3><strong>孵化超级项目</strong></h3>
                  <p>在未来三年内，打造出年销售额千万美金级别的跨境电商项目。</p>
                </div>
                <div className={styles.goalCard}>
                  <h3><strong>利税破亿</strong></h3>
                  <p>推动跨境电商企业发展壮大，实现利税突破亿元。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Partners */}
      <section id="partners" className={styles.partnersSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>合作伙伴</h2>
          </div>
          <div className={styles.partnersGrid}>
            {partnerLogos.map((partner, index) => (
              <div key={index} className={styles.partnerLogo}>
                <img src={partner.src} alt={partner.alt} />
              </div>
            ))}
          </div>
          <div className={styles.partnersFooter}>
            <button className={styles.actionButton}>寻找更多伙伴</button>
            <p className={styles.footerText}>我们期待与更多跨境服务商合作，携手创造更多可能</p>
          </div>
        </div>
      </section>

      {/* Section 7: Careers */}
      <section id="job" className={styles.careersSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>人才招聘</h2>
            <p>在跨境电商的激流勇进中，人才是我们最璀璨的瑰宝。我们倾力打造一支高效、专业、新的团队，携手共绘业务持续发展的壮丽画卷。加入我们，共创辉煌！</p>
          </div>
          <JobPositions positions={jobPositions} />
        </div>
      </section>
    </>
  );
};

export default About;
