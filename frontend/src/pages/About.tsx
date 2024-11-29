// React and core dependencies
import React, { useState, useRef, useEffect } from 'react';

// Third-party libraries
import styled from 'styled-components';
import { motion, useInView, animate, useMotionValue, useTransform, useScroll, AnimatePresence } from 'framer-motion';

// Icons
import { FaGlobeAmericas } from 'react-icons/fa';
import { BiSolidData } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';

// Assets
import aboutHero from '../assets/images/about-hero.webp';
import blfBackLove from '../assets/images/blf-back-love.webp';

// Using placeholder images
const TEAM_MEMBER_PLACEHOLDER = 'https://via.placeholder.com/200x200?text=Team+Member';
const PARTNER_LOGO_PLACEHOLDER = 'https://via.placeholder.com/200x100?text=Partner';

// Styled Components
const Section = styled.section`
  padding: 80px 0;
`;

const HeroSection = styled.section`
  text-align: center;
  background: #f8f9fa;
  padding: 0;
  position: relative;
  margin-top: 0; 
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25); 
  z-index: 1;
`;

const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  z-index: 2; 
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
  }
`;

const IntroSection = styled(Section)`
  background: #fff;
  padding: 80px 0;
  overflow: hidden; 
`;

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const IntroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr; 
  gap: 4rem;  
  margin-top: 3rem;
  align-items: center;
  max-width: 1800px;  
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;  
`;

const IntroText = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  color: #2c3e50;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 4rem;
  padding: 0 1rem;

  p {
    margin: 1.5rem 0;
    text-align: justify;
    text-justify: inter-word;
  }
`;

const StatsBanner = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
`;

const StatItem = styled(motion.div)`
  text-align: center;

  .number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #0066cc;
    margin-bottom: 0.25rem;
    line-height: 1;
  }

  .label {
    font-size: 1rem;
    color: #4a5568;
    white-space: pre-line;
    line-height: 1.4;
  }
`;

const IntroImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;  
  height: auto;  
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
`;

const PhilosophySection = styled.section`
  position: relative;
  z-index: 1;
  padding: 0px 0;
  background: #fff;
  isolation: isolate;
  height: calc(100vh - 360px);
`;

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: inset(0);
`;

const ParallaxBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${blfBackLove});
  background-size: cover;
  background-position: center bottom;
  will-change: transform;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(245, 247, 250, 0.85) 0%,
      rgba(245, 247, 250, 0.82) 40%,
      rgba(245, 247, 250, 0) 100%
    );
  }
`;

const PhilosophyMask = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(240, 242, 245, 0.85) 0%,
    rgba(240, 242, 245, 0.75) 60%,
    rgba(240, 242, 245, 0) 100%
  );
  backdrop-filter: blur(1px);
`;

const PhilosophyContent = styled.div`
  position: relative;
  z-index: 2;
  color: #2c3e50;
  padding-top: 40px;
  margin: 0 20px;
`;

const CoreCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 300px));
  gap: 2rem;
  margin-top: 4rem;
  justify-content: center;
`;

const CoreCard = styled.div`
  background: rgba(250, 251, 252, 0.9);
  backdrop-filter: blur(8px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  border: 1px solid rgba(235, 238, 241, 0.8);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(235, 238, 241, 0.9);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .icon-container {
    width: 100%;
    height: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .icon {
    font-size: 64px;
    color: #2c3e50;
    opacity: 0.9;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
    color: #2c3e50;
  }

  p {
    font-size: 1rem;
    color: #5d6b7b;
    line-height: 1.6;
    margin-top: 0.8rem;
  }
`;

const TeamSection = styled(Section)`
  background: #fff;
  padding: 100px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  justify-content: center;
`;

const TeamMember = styled.div`
  text-align: center;

  .avatar {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin: 0.5rem 0;
  }

  p {
    font-size: 1rem;
    color: #5d6b7b;
    margin: 0;
  }
`;

const GoalsSection = styled(Section)`
  background: #f8f9fa;
  padding: 100px 0;
`;

const GoalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: 4rem;

  > div {
    background: #fff;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }

    h3 {
      font-size: 1.75rem;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 1.5rem;
      position: relative;

      &:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 40px;
        height: 3px;
        background: #0066cc;
        border-radius: 2px;
      }
    }

    p {
      font-size: 1.1rem;
      color: #5d6b7b;
      line-height: 1.6;
      margin: 0;
    }
  }
`;

const PartnersSection = styled(Section)`
  background: #fff;
  padding: 100px 0;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem 2rem;
  margin-top: 4rem;
`;

const PartnerLogo = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const PartnersFooter = styled.div`
  text-align: center;
  margin-top: 4rem;

  .action-button {
    background: #0066cc;
    color: white;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background: #0052a3;
      transform: translateY(-2px);
    }
  }

  .footer-text {
    margin-top: 1.5rem;
    color: #5d6b7b;
    font-size: 1rem;
  }
`;

const CareersSection = styled(Section)`
  background: #f8f9fa;
`;

const JobsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1rem;

  thead tr th {
    text-align: left;
    padding: 1rem 1.5rem;
    color: #2c3e50;
    font-weight: 600;
    font-size: 1.1rem;
    background: #f8f9fa;
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  tbody tr {
    background: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    td {
      padding: 1.5rem;
      color: #5d6b7b;
      border-top: 1px solid #f1f3f5;
      border-bottom: 1px solid #f1f3f5;

      &:first-child {
        border-left: 1px solid #f1f3f5;
        border-radius: 8px 0 0 8px;
        font-weight: 500;
        color: #2c3e50;
      }
      &:last-child {
        border-right: 1px solid #f1f3f5;
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;

const JobDetails = styled(motion.tr)`
  td {
    padding: 0 !important;
  }
`;

const JobDetailsContent = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  margin: 0 1.5rem 1.5rem;
  border-radius: 8px;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  .detail-section {
    margin-bottom: 1.5rem;

    h5 {
      color: #0066cc;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        color: #5d6b7b;
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;

        &:before {
          content: "•";
          color: #0066cc;
          position: absolute;
          left: 0;
        }
      }
    }
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #0066cc;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0052a3;
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

interface JobPosition {
  title: string;
  department: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobPositions: JobPosition[] = [
  {
    title: "亚马逊运营实习生",
    department: "运营部",
    experience: "毕业生",
    description: "加入我们充满活力的团队，学习跨境电商运营的实践经验。",
    requirements: [
      "本科及以上学历，专业不限",
      "英语良好，能进行日常沟通",
      "有责任心，学习能力强",
      "对跨境电商感兴趣"
    ],
    responsibilities: [
      "协助运营团队进行日常listing优化",
      "参与产品选品和市场调研",
      "协助数据分析和竞品分析",
      "学习并实践跨境电商运营技能"
    ]
  },
  {
    title: "亚马逊运营",
    department: "运营部",
    experience: "1年及以上",
    description: "负责亚马逊平台的产品运营和优化工作。",
    requirements: [
      "本科及以上学历，1年以上亚马逊运营经验",
      "优秀的英语读写能力",
      "熟悉亚马逊平台规则和操作流程",
      "有较强的数据分析能力"
    ],
    responsibilities: [
      "负责店铺日常运营和绩效提升",
      "产品listing优化和关键词布局",
      "竞品分析和市场调研",
      "制定并执行促销策略"
    ]
  },
  {
    title: "供应链管理",
    department: "市场部",
    experience: "2年及以上",
    description: "负责公司跨境电商供应链管理和优化工作。",
    requirements: [
      "本科及以上学历，2年以上供应链管理经验",
      "熟悉跨境物流和仓储管理",
      "优秀的沟通协调能力",
      "有跨境电商行业经验优先"
    ],
    responsibilities: [
      "制定和优化供应链策略",
      "管理和协调供应商关系",
      "优化库存和物流方案",
      "降低供应链成本"
    ]
  }
];

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
      className="number"
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
      name: "John Doe",
      role: "CEO & Founder",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "Jane Smith",
      role: "CTO",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "轻舟 Jack",
      role: "运营专家",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "凌志 Rock",
      role: "技术总监",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "苏毅 Leo",
      role: "客户服务",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "扶苏 Buck",
      role: "营销策划",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "宋月 Jackie",
      role: "产品经理",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "John Doe",
      role: "CEO & Founder",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "Jane Smith",
      role: "CTO",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
    {
      name: "轻舟 Jack",
      role: "运营专家",
      avatar: TEAM_MEMBER_PLACEHOLDER
    },
  ];

  return (
    <>
      {/* Section 1: Hero */}
      <HeroSection>
        <HeroImage src={aboutHero} alt="About Hero" />
        <HeroOverlay />
        <HeroText>
          <h1>关于我们</h1>
          <h2>WE BELIEVE IT'S ALWAYS DAY 1</h2>
          <p>跨境 当下/即未来</p>
        </HeroText>
      </HeroSection>

      {/* Section 2: Company Introduction */}
      <IntroSection>
        <Container>
          <SectionTitle>
            <h2>公司简介</h2>
          </SectionTitle>
          <IntroContainer>
            <IntroText>
              <p>彼励扶电子商务（苏州）有限公司，由一群怀揣梦想的年轻精英组成，我们是一支充满活力与创新精神的跨境电商团队。凭借全球视野，我们深入洞察各国市场的需求脉动；依托数据驱动，我们实时监控并精准优化运营策略；凭借高效运营，我们灵活应对市场风云变幻，助力客户提升竞争力，共同开创辉煌未来。</p>
              <p>我们秉持价值取向合作，注重长期合作关系，提供长期的深度合作方案，共同打造可持续发展的业务生态。基于Sharepoint和Notion工作流，我们构建了数字化运营体系，积累长期优势，确保每一次合作都能为客户带来持久的价值和成长。</p>
              <StatsBanner
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
              >
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 }}
                >
                  <div className="number">
                    <AnimatedNumber value={10} />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                  >
                    核心成员
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  <div className="number">
                    <AnimatedNumber value={10} suffix="+" />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                  >
                    BS 品牌
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                >
                  <div className="number">
                    <AnimatedNumber value={100} suffix="M" />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                  >
                    人均操盘业绩
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <div className="number">
                    <AnimatedNumber value={6} />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  >
                    跨境平台
                  </motion.div>
                </StatItem>
              </StatsBanner>
            </IntroText>
            <IntroImage src={'https://via.placeholder.com/1600x900?text=Company+Introduction'} alt="Company Introduction" />
          </IntroContainer>
        </Container>
      </IntroSection>

      {/* Section 3: Company Philosophy */}
      <PhilosophySection>
        <ParallaxContainer ref={philosophyRef}>
          <ParallaxBackground />
          <PhilosophyMask style={{ opacity: maskOpacity }} />
          <PhilosophyContent>
            <Container>
              <SectionTitle>
                <h2>公司理念</h2>
              </SectionTitle>
              <CoreCards>
                <CoreCard>
                  <div className="icon-container">
                    <FaGlobeAmericas className="icon" />
                  </div>
                  <h3>全球视野</h3>
                  <p>开放视野，全球销售</p>
                </CoreCard>
                <CoreCard>
                  <div className="icon-container">
                    <BiSolidData className="icon" />
                  </div>
                  <h3>数据驱动</h3>
                  <p>数据技术驱动未来</p>
                </CoreCard>
                <CoreCard>
                  <div className="icon-container">
                    <AiOutlineRobot className="icon" />
                  </div>
                  <h3>AI 赋能</h3>
                  <p>AI 成为跨境电商的超级大脑</p>
                </CoreCard>
                <CoreCard>
                  <div className="icon-container">
                    <BsFlagFill className="icon" />
                  </div>
                  <h3>品牌使命</h3>
                  <p>布局全球，打造国际品牌</p>
                </CoreCard>
              </CoreCards>
            </Container>
          </PhilosophyContent>
        </ParallaxContainer>
      </PhilosophySection>

      {/* Section 4: Core Team */}
      <TeamSection>
        <Container>
          <SectionTitle>
            <h2>团队核心成员</h2>
            <p>BELIEVE是一支充满激情、专业高效的跨境电商运营团队，汇聚了行业精英，致力于为企业开拓全球市场，实现品牌国际化。<br />
              在这里，每一位成员都是我们宝贵的财富，他们各有所长，共同为团队的发展贡献力量。</p>
          </SectionTitle>
          <TeamGrid>
            {members.map((member, index) => (
              <TeamMember key={index}>
                <img src={member.avatar} alt={member.name} className="avatar" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </TeamMember>
            ))}
          </TeamGrid>
        </Container>
      </TeamSection>

      {/* Section 5: Strategic Goals */}
      <GoalsSection>
        <Container>
          <SectionTitle>
            <h2>战略目标</h2>
          </SectionTitle>
          <GoalsGrid>
            <div>
              <h3>20家企业</h3>
              <p>在未来三年内，招募20家优质跨境电商企业，打造跨境电商产业集群。</p>
            </div>
            <div>
              <h3>10大产业</h3>
              <p>重点发展十大跨境电商优势产业，打造产业集群效应。</p>
            </div>
            <div>
              <h3>孵化超级项目</h3>
              <p>在未来三年内，打造出年销售额千万美金级别的跨境电商项目。</p>
            </div>
            <div>
              <h3>利税破亿</h3>
              <p>推动跨境电商企业发展壮大，实现利税突破亿元。</p>
            </div>
          </GoalsGrid>
        </Container>
      </GoalsSection>

      {/* Section 6: Partners */}
      <PartnersSection>
        <Container>
          <SectionTitle>
            <h2>合作伙伴</h2>
          </SectionTitle>
          <PartnersGrid>
            {Array(12).fill(0).map((_, index) => (
              <PartnerLogo key={index}>
                <img src={PARTNER_LOGO_PLACEHOLDER} alt={`Partner ${index + 1}`} />
              </PartnerLogo>
            ))}
          </PartnersGrid>
          <PartnersFooter>
            <button className="action-button">寻找更多伙伴</button>
            <p className="footer-text">我们期待与更多跨境服务商合作，携手创造更多可能</p>
          </PartnersFooter>
        </Container>
      </PartnersSection>

      {/* Section 7: Careers */}
      <CareersSection>
        <Container>
          <SectionTitle>
            <h2>人才招聘</h2>
            <p>在跨境电商的激流勇进中，人才是我们最璀璨的瑰宝。我们倾力打造一支高效、专业、创新的团队，携手共绘业务持续发展的壮丽画卷。加入我们，共创辉煌！</p>
          </SectionTitle>
          <JobsTable>
            <thead>
              <tr>
                <th>招聘职位</th>
                <th>业务部门</th>
                <th>经验要求</th>
                <th>详情</th>
              </tr>
            </thead>
            <tbody>
              {jobPositions.map((job, index) => (
                <React.Fragment key={index}>
                  <tr onClick={() => setExpandedJob(expandedJob === index ? -1 : index)}>
                    <td>{job.title}</td>
                    <td>{job.department}</td>
                    <td>{job.experience}</td>
                    <td>
                      <ExpandButton>
                        {expandedJob === index ? '收起' : '展开'}
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          animate={{ rotate: expandedJob === index ? 180 : 0 }}
                        >
                          <path
                            d="M4 6L8 10L12 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </ExpandButton>
                    </td>
                  </tr>
                  <JobDetails>
                    <td colSpan={4}>
                      <AnimatePresence>
                        {expandedJob === index && (
                          <JobDetailsContent
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <h4>{job.description}</h4>
                            <div className="detail-section">
                              <h5>岗位要求：</h5>
                              <ul>
                                {job.requirements.map((req, i) => (
                                  <li key={i}>{req}</li>
                                ))}
                              </ul>
                            </div>
                            <div className="detail-section">
                              <h5>工作职责：</h5>
                              <ul>
                                {job.responsibilities.map((resp, i) => (
                                  <li key={i}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                          </JobDetailsContent>
                        )}
                      </AnimatePresence>
                    </td>
                  </JobDetails>
                </React.Fragment>
              ))}
            </tbody>
          </JobsTable>
        </Container>
      </CareersSection>
    </>
  );
};

export default About;
