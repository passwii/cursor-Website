import React from 'react';
import styled from 'styled-components';
import { motion, useInView, animate, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import aboutHero from '../assets/images/about-hero.webp';
import blfBackLove from '../assets/images/blf-back-love.webp';
import { FaGlobeAmericas } from 'react-icons/fa';
import { BiSolidData } from 'react-icons/bi';
import { AiOutlineRobot } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';

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
  max-width: 1400px; 
  margin: 0 auto;
  padding: 0 1rem;  
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

const IntroText = styled.div`
  max-width: 100%;
  padding-left: 1rem;
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a5568;
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StatsBanner = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 2.5rem;
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
    margin-bottom: 0.5rem;
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
  padding: 100px 0;
  background: #fff;
  isolation: isolate;
`;

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
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
      rgba(245, 247, 250, 0.97) 0%,
      rgba(245, 247, 250, 0.92) 40%,
      rgba(245, 247, 250, 0) 100%
    );
  }
`;

const PhilosophyMask = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(240, 242, 245, 0.95) 0%,
    rgba(240, 242, 245, 0.85) 60%,
    rgba(240, 242, 245, 0) 100%
  );
  backdrop-filter: blur(1px);
`;

const PhilosophyContent = styled.div`
  position: relative;
  z-index: 2;
  color: #2c3e50;
  padding-top: 60px;
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
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
  h3 {
    margin: 1rem 0 0.5rem;
  }
  p {
    color: #666;
  }
`;

const GoalsSection = styled(Section)`
  background: #f8f9fa;
`;

const GoalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

const PartnersSection = styled(Section)`
  .partners-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    @media (max-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

const PartnerLogo = styled.div`
  aspect-ratio: 2/1;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CareersSection = styled(Section)`
  background: #f8f9fa;
`;

const JobsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  
  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background: #f1f1f1;
  }
`;

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
                transition={{ duration: 0.6 }}
              >
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="number">
                    <AnimatedNumber value={7} />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    核心成员
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="number">
                    <AnimatedNumber value={10} suffix="+" />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    BS 品牌
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="number">
                    <AnimatedNumber value={100} suffix="M" />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    人均操盘业绩
                  </motion.div>
                </StatItem>
                <StatItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="number">
                    <AnimatedNumber value={6} />
                  </div>
                  <motion.div 
                    className="label"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
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
            <p>BELIEVE是一支充满激情、专业高效的跨境电商运营团队，汇聚了行业精英，致力于为企业开拓全球市场，实现品牌国际化。在这里，每一位成员都是我们宝贵的财富，他们各有所长，共同为团队的发展贡献力量。</p>
          </SectionTitle>
          <TeamGrid>
            {[
              { name: '宋月 Jackie', title: '产品经理', desc: '拥有丰富的跨境选品经验，精准把握市场脉动，为消费者提供最具竞争力的产品。' },
              { name: '轻舟 Jack', title: '运营专家', desc: '精通各大电商平台运营策略，擅长数据分析，助力企业实现业绩翻番。' },
              { name: '凌志 Rock', title: '技术总监', desc: '跨境电商领域的技术骨干，精通各种前沿技术，致力于为跨境电商业务提供最稳定、高效、安全的解决方案。' },
              { name: '苏毅 Leo', title: '客户服务', desc: '专业、热情、耐心，为客户提供一流的服务体验，为企业树立良好的口碑。' },
              { name: '扶苏 Buck', title: '营销策划', desc: '创意无限，擅长整合营销资源，为企业量身定制推广方案，提升品牌知名度。' }
            ].map((member, index) => (
              <TeamMember key={index}>
                <img src={TEAM_MEMBER_PLACEHOLDER} alt={member.name} />
                <h3>{member.name}</h3>
                <h4>{member.title}</h4>
                <p>{member.desc}</p>
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
          <div className="partners-grid">
            {Array(12).fill(0).map((_, index) => (
              <PartnerLogo key={index}>
                <img src={PARTNER_LOGO_PLACEHOLDER} alt={`Partner ${index + 1}`} />
              </PartnerLogo>
            ))}
          </div>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>亚马逊运营实习生</td>
                <td>运营部</td>
                <td>毕业生</td>
              </tr>
              <tr>
                <td>亚马逊运营</td>
                <td>运营部</td>
                <td>1年及以上</td>
              </tr>
              <tr>
                <td>供应链管理</td>
                <td>市场部</td>
                <td>2年及以上</td>
              </tr>
            </tbody>
          </JobsTable>
        </Container>
      </CareersSection>
    </>
  );
};

export default About;
