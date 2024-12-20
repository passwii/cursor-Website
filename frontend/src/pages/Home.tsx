import React from 'react';
import styled from 'styled-components';
import crossBoardImage from '../assets/images/cross-board.webp';
import aboutHero from '../assets/images/about-hero.webp';
import blfBackLove from '../assets/images/blf-back-love.webp';
import serviceHero from '../assets/images/service-hero.webp';
import { 
  Activity, 
  TrendingUp, 
  ShoppingBag, 
  Shield, 
  Award, 
  FileText, 
  Target,
  Binary,
  Repeat,
  Tags,
  Share2,
  BadgeCheck,
  UserCheck,
  ShieldAlert,
  MessageSquare,
  Receipt,
  FileWarning,
  Package,
  Percent,
  Wrench,
  BarChart2,
  Boxes,
  Search,
  MessageCircle,
  Facebook,
  TrendingDown,
  ClipboardList,
  BookOpen,
  Settings,
  PieChart,
  Calculator,
  BarChart,
  CalendarRange
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const HomeContainer = styled.div`
  width: 100%;
`;

const Section = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  gap: 80px;

  @media (max-width: 968px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

const HeroSection = styled(Section)`
  position: relative;
  background: linear-gradient(to right, #f1f8fe, #ddeefb, #c7e4fc);
  width: 100vw;
  height: calc(100vh - 80px); /* Accounting for navigation height */
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  & > * {
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    gap: 80px;

    @media (max-width: 968px) {
      flex-direction: column;
      padding: 40px 20px;
    }
  }
`;

const Content = styled.div`
  flex: 1;
  padding-left: 40px;

  @media (max-width: 968px) {
    padding-left: 0;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #1a237e;
  margin-bottom: 32px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: 968px) {
    font-size: 2.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  color: #424242;
  margin-bottom: 40px;
  max-width: 600px;

  @media (max-width: 968px) {
    font-size: 1.2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1.4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;
  position: relative;

  @media (max-width: 968px) {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  max-width: 100%;
`;

const ServicesSectionWrapper = styled.div`
  width: 100%;
  background-color: #f8f9fa;
`;

const ServicesSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 0px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 80px;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 60px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ServiceCard = styled.div<{ $colorIndex?: number }>`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => {
      const colors = [
        '#2196f3',  // Blue - 市场调研
        '#4caf50',  // Green - 产品优化
        '#f44336',  // Red - 品牌建设
        '#ff9800'   // Orange - AI赋能
      ];
      return colors[props.$colorIndex || 0];
    }};
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 80px;
    height: 80px;
    margin-bottom: 24px;
    color: ${props => {
      const colors = [
        '#2196f3',  // Blue
        '#4caf50',  // Green
        '#f44336',  // Red
        '#ff9800'   // Orange
      ];
      return colors[props.$colorIndex || 0];
    }};
  }

  h3 {
    font-size: 1.5rem;
    color: #1a237e;
    margin-bottom: 16px;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #424242;
  }
`;

const IconContainer = styled.div`
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
`;

const ServiceDescription = styled.p`
`;

// 新的 SVG 图标
const MarketIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"/>
    <path d="M9 22h6"/>
    <path d="M15 7v3"/>
    <path d="M9 7v3"/>
    <circle cx="18" cy="18" r="3"/>
    <path d="M18 14v1"/>
    <path d="M18 21v1"/>
    <path d="M22 18h-1"/>
    <path d="M15 18h-1"/>
  </svg>
);

const ProductIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <path d="M3.3 7l8.7 5 8.7-5"/>
    <path d="M12 22V12"/>
  </svg>
);

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
    <line x1="4" y1="22" x2="4" y2="15"/>
    <path d="M20 15v7"/>
    <path d="M12 12c2 0 5-1 5-1"/>
    <path d="M12 19c2 0 5-1 5-1"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
    <path d="M6 8h.01"/>
    <path d="M6 12h.01"/>
    <path d="M6 16h.01"/>
    <path d="M18 8h.01"/>
    <path d="M18 12h.01"/>
    <path d="M18 16h.01"/>
    <path d="M12 8v8"/>
    <path d="M8 12h8"/>
  </svg>
);

const CompetenceSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 0;
  text-align: center;
  overflow: hidden;
  position: relative;
`;

const CompetenceTitleGroup = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    background: #1976d2;
    border-radius: 2px;
  }
`;

const CompetenceTitle = styled(SectionTitle)`
  margin-bottom: 16px;
`;

const CompetenceSubtitle = styled.p`
  font-size: 1.3rem;
  color: #424242;
  line-height: 1.6;
`;

const CompetenceLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const CardsContainer = styled.div<{ $side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${props => props.$side === 'right' && 'grid-column: 3;'}
  
  @media (max-width: 1024px) {
    grid-column: 1;
  }
`;

const CompetencyCard = styled.div<{ 
  $active: boolean;
  $isMiddle?: boolean;
  $side?: 'left' | 'right';
}>`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  ${props => {
    if (props.$isMiddle) {
      return props.$side === 'left' 
        ? 'margin-left: -40px;' 
        : 'margin-left: 40px;';
    }
    return '';
  }}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
  
  ${props => props.$active && `
    background-color: #f0f8ff;
    border: 2px solid #1976d2;
  `}

  @media (max-width: 1024px) {
    margin-left: 0 !important;
  }
`;

const CenterContent = styled.div`
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  z-index: 2;
  grid-column: 2;
  align-self: center;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    width: 220px;
    height: 220px;
    border: 2px solid rgba(25, 118, 210, 0.1);
  }

  &::after {
    width: 240px;
    height: 240px;
    border: 2px solid rgba(25, 118, 210, 0.05);
  }

  @media (max-width: 1024px) {
    grid-column: 1;
    margin: 40px 0;
  }
`;

const ItemContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const ItemNumber = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1976d2;
  margin-bottom: 16px;
  opacity: 0.8;
`;

const ItemTitle = styled.h4`
  font-size: 1.4rem;
  color: #1a237e;
  margin-bottom: 16px;
  font-weight: 600;
  line-height: 1.3;
`;

const ItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #424242;
`;

const ServiceCasesSectionWrapper = styled.div`
  width: 100%;
  background: white;
`;

const ServiceCasesSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 20px;
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 60px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CaseImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 60%;
  background-color: #f5f5f5;
  position: relative;
  
  &::after {
    content: '图片待更新';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #999;
  }
`;

const CaseContent = styled.div`
  padding: 20px;
`;

const CaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a237e;
  text-align: center;
  margin-bottom: 16px;
`;

const CaseSection = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1976d2;
    margin-bottom: 8px;
  }

  p {
    color: #424242;
    line-height: 1.5;
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 6px;

    li {
      color: #424242;
      line-height: 1.5;
      padding-left: 16px;
      position: relative;
      font-size: 0.95rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 8px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #1976d2;
      }
    }
  }
`;

const OperationServiceWrapper = styled.div`
  width: 100vw;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: #f8fafc;
  padding: 20px 0 30px;
  overflow: hidden;
`;

const ScrollContainer = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 20px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ServiceItemsTrack = styled(motion.div)`
  display: flex;
  width: fit-content;
`;

const ServiceItemsRow = styled(motion.div)`
  display: flex;
  gap: 24px;
  padding: 0 12px;
`;

const ServiceItemsGrid = styled(motion.div)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  gap: 12px 24px;
  padding: 0 max(calc((100vw - 1400px) / 2), 20px);
  width: fit-content;
  min-width: 100%;
  margin-top: 20px;

  & > *:nth-child(even) {
    transform: translateX(100px);
  }
`;

const ServiceItem = styled(motion.div)<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background-color: ${props => props.$bgColor};
  color: white;
  border-radius: 12px;
  white-space: nowrap;
  min-width: 200px;

  svg {
    width: 24px;
    height: 24px;
  }

  span {
    font-size: 16px;
    font-weight: 500;
  }
`;

const OperationDescription = styled(motion.p)`
  text-align: center;
  color: #666;
  margin: 20px auto;
  max-width: 800px;
  padding: 0 20px;
`;

const SubSectionTitle = styled.h3`
  text-align: center;
  font-size: 20px;
  margin: 20px 0;
  color: #333;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

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

  return (
    <HomeContainer>
      <Helmet>
        {/* 预加载当前页面关键图片 */}
        <link rel="preload" href={crossBoardImage} as="image" type="image/webp" />
        
        {/* Service 页面资源预加载 */}
        <link 
          rel="prefetch" 
          href={serviceHero}
          as="image"
          type="image/webp"
        />
        
        {/* About 页面图片预加载 */}
        <link 
          rel="prefetch" 
          href={aboutHero}
          as="image" 
          type="image/webp" 
        />
        <link 
          rel="prefetch" 
          href={blfBackLove}
          as="image" 
          type="image/webp" 
        />
        
        {/* 预加载主要 JS 和 CSS */}
        <link rel="prefetch" href="/static/js/main.6a7632d9.js" as="script" />
        <link rel="preload" href="/static/css/main.39178522.css" as="style" />
        
        {/* DNS 预连接 */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://via.placeholder.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 预加载字体 */}
        <link
          rel="prefetch"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          as="style"
        />
        
        {/* 为当前页面添加 meta 描述 */}
        <title>彼励扶 - 跨境电商解决方案</title>
        <meta name="description" content="彼励扶致力于为跨境电商企业提供一站式智能营销解决方案，通过AI技术赋能，助力企业实现全球化业务增长。" />
      </Helmet>
      <HeroSection>
        <div>
          <Content>
            <Title>跨境电商解决方案</Title>
            <Description>
              彼励扶致力于为跨境电商企业提供一站式智能营销解决方案，
              通过AI技术赋能，助力企业实现全球化业务增长。
            </Description>
          </Content>
          <ImageContainer>
            <Image src={crossBoardImage} alt="Cross Board Commerce" />
          </ImageContainer>
        </div>
      </HeroSection>

      <ServicesSectionWrapper>
        <ServicesSection>
          <SectionTitle>跨境优服</SectionTitle>

          <ServicesGrid>
            <ServiceCard $colorIndex={0}>
              <IconContainer>
                <MarketIcon />
              </IconContainer>
              <ServiceTitle>市场调研</ServiceTitle>
              <ServiceDescription>深入分析目标市场，制定精准营销策略</ServiceDescription>
            </ServiceCard>
            <ServiceCard $colorIndex={1}>
              <IconContainer>
                <ProductIcon />
              </IconContainer>
              <ServiceTitle>产品优化</ServiceTitle>
              <ServiceDescription>优化产品展示，提升转化率</ServiceDescription>
            </ServiceCard>
            <ServiceCard $colorIndex={2}>
              <IconContainer>
                <BrandIcon />
              </IconContainer>
              <ServiceTitle>品牌建设</ServiceTitle>
              <ServiceDescription>打造独特品牌形象，提升品牌价值</ServiceDescription>
            </ServiceCard>
            <ServiceCard $colorIndex={3}>
              <IconContainer>
                <AIIcon />
              </IconContainer>
              <ServiceTitle>AI赋能</ServiceTitle>
              <ServiceDescription>利用AI技术优化运营效率</ServiceDescription>
            </ServiceCard>
          </ServicesGrid>

          <OperationServiceWrapper>
            <SubSectionTitle>
            彼励扶拥有全行业顶尖运营人才，优秀的运营团队，全流程数据管理制度,<br />
            我们专注运营流程，为客户提供全面的跨境电商解决方案。<br/>
            
            </SubSectionTitle>
            <OperationDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              
            </OperationDescription>
            <ScrollContainer
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ServiceItemsTrack>
                <ServiceItemsRow
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <ServiceItem $bgColor="#4B5A9A">
                    <Binary />
                    <span>A9算法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Repeat />
                    <span>螺旋打法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Tags />
                    <span>定价促销</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Share2 />
                    <span>站外推广</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <BadgeCheck />
                    <span>产品认证</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <UserCheck />
                    <span>客户联系</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Wrench />
                    <span>运营工具</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <BarChart2 />
                    <span>财务报表</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <Boxes />
                    <span>库存管理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Search />
                    <span>新品探测</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <MessageCircle />
                    <span>Review 管理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Facebook />
                    <span>Facebook 群组</span>
                  </ServiceItem>
                </ServiceItemsRow>
                <ServiceItemsRow
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  transition={{
                    duration: 80,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <ServiceItem $bgColor="#4B5A9A">
                    <Binary />
                    <span>A9算法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Repeat />
                    <span>螺旋打法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Tags />
                    <span>定价促销</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Share2 />
                    <span>站外推广</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <BadgeCheck />
                    <span>产品认证</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <UserCheck />
                    <span>客户联系</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Wrench />
                    <span>运营工具</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <BarChart2 />
                    <span>财务报表</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <Boxes />
                    <span>库存管理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Search />
                    <span>新品探测</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <MessageCircle />
                    <span>Review 管理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Facebook />
                    <span>Facebook 群组</span>
                  </ServiceItem>
                </ServiceItemsRow>
              </ServiceItemsTrack>

              <ServiceItemsTrack>
                <ServiceItemsRow
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 75,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <ServiceItem $bgColor="#7E5AA6">
                    <ShieldAlert />
                    <span>店铺安全</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <MessageSquare />
                    <span>客诉处理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <Receipt />
                    <span>VAT税法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <FileWarning />
                    <span>Listing合规</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Package />
                    <span>爆款选品</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Percent />
                    <span>折扣优惠</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <TrendingDown />
                    <span>旺季销售</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <ClipboardList />
                    <span>绩效考核</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <BookOpen />
                    <span>FBA 手册</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Settings />
                    <span>AGL 操作</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <PieChart />
                    <span>ACOS 优化</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Calculator />
                    <span>产品核算分析</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <BarChart />
                    <span>项目核算</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <CalendarRange />
                    <span>全年销售规划</span>
                  </ServiceItem>
                </ServiceItemsRow>
                <ServiceItemsRow
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 75,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                  }}
                >
                  <ServiceItem $bgColor="#7E5AA6">
                    <ShieldAlert />
                    <span>店铺安全</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <MessageSquare />
                    <span>客诉处理</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <Receipt />
                    <span>VAT税法</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <FileWarning />
                    <span>Listing合规</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <Package />
                    <span>爆款选品</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Percent />
                    <span>折扣优惠</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <TrendingDown />
                    <span>旺季销售</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <ClipboardList />
                    <span>绩效考核</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <BookOpen />
                    <span>FBA 手册</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <Settings />
                    <span>AGL 操作</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#4B5A9A">
                    <PieChart />
                    <span>ACOS 优化</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#3D7A62">
                    <Calculator />
                    <span>产品核算分析</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#7E5AA6">
                    <BarChart />
                    <span>项目核算</span>
                  </ServiceItem>
                  <ServiceItem $bgColor="#A66F42">
                    <CalendarRange />
                    <span>全年销售规划</span>
                  </ServiceItem>
                </ServiceItemsRow>
              </ServiceItemsTrack>
            </ScrollContainer>
          </OperationServiceWrapper>
        </ServicesSection>
      </ServicesSectionWrapper>

      <CompetenceSection>
        <CompetenceTitleGroup>
          <CompetenceTitle>核心竞争力</CompetenceTitle>
          <CompetenceSubtitle>
            专业团队 + AI赋能 = 全方位助力您的全球业务拓展
          </CompetenceSubtitle>
        </CompetenceTitleGroup>
        <CompetenceLayout>
          <CardsContainer $side="left">
            {competencies.slice(0, 3).map((item, index) => (
              <CompetencyCard
                key={index}
                $active={activeIndex === index}
                $isMiddle={index === 1}
                $side="left"
                onClick={() => setActiveIndex(index)}
              >
                <ItemContent>
                  <ItemNumber>{item.number}</ItemNumber>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </CompetencyCard>
            ))}
          </CardsContainer>
          
          <CenterContent>
            <h3>核心竞争力</h3>
          </CenterContent>

          <CardsContainer $side="right">
            {competencies.slice(3, 6).map((item, index) => (
              <CompetencyCard
                key={index + 3}
                $active={activeIndex === index + 3}
                $isMiddle={index === 1}
                $side="right"
                onClick={() => setActiveIndex(index + 3)}
              >
                <ItemContent>
                  <ItemNumber>{item.number}</ItemNumber>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </ItemContent>
              </CompetencyCard>
            ))}
          </CardsContainer>
        </CompetenceLayout>
      </CompetenceSection>

      <ServiceCasesSectionWrapper>
        <ServiceCasesSection>
          <CompetenceTitleGroup>
            <CompetenceTitle>服务案例</CompetenceTitle>
            <CompetenceSubtitle>
              我们用专业和创新，助力客户实现业务增长
            </CompetenceSubtitle>
          </CompetenceTitleGroup>
          
          <CasesGrid>
            <CaseCard>
              <CaseImagePlaceholder />
              <CaseContent>
                <CaseTitle>Drill Bit</CaseTitle>
                <CaseSection>
                  <h4>项目概况</h4>
                  <p>某工具配件品牌面临亚马逊平台销量停滞、品牌知名度低的问题。</p>
                </CaseSection>
                
                <CaseSection>
                  <h4>合作过程</h4>
                  <ul>
                    <li>对品牌现有产品线进行全面评估，优化产品描述和图片。</li>
                    <li>实施智能库存管理系统，提高库存周转率，降低仓储成本。</li>
                    <li>定针对性的广告策略，优化关键词和投放时间。</li>
                    <li>与知名KOL合作，开展多场线上直播和产品体验活动。</li>
                    <li>优化亚马逊店铺，提高搜索排名和转化率。</li>
                  </ul>
                </CaseSection>
                
                <CaseSection>
                  <h4>项目成果</h4>
                  <p>经过6个月的运营，销售额同比增长150%，品牌搜量提升200%，客户满意度达到95%。</p>
                </CaseSection>
              </CaseContent>
            </CaseCard>

            <CaseCard>
              <CaseImagePlaceholder />
              <CaseContent>
                <CaseTitle>Glass Pan</CaseTitle>
                <CaseSection>
                  <h4>项目概况</h4>
                  <p>某知名工厂为美国主流品牌和线下商超供应食品餐盘，面临严重的成本压缩问题。</p>
                </CaseSection>
                
                <CaseSection>
                  <h4>合作过程</h4>
                  <ul>
                    <li>组建专业团队，深入分析工厂现有供应链和产品结构。</li>
                    <li>制定差异化战略，针对工厂供货的品牌竞品进行详细调查分析。</li>
                    <li>从物流环节着手，优化所有供应链节点，显著降低运营成本。</li>
                    <li>重新设计产品包装和营销策略，提升产品在线上平台的竞争力。</li>
                    <li>利用数据分析，精准定位目标客户群，优化广告投放策略。</li>
                  </ul>
                </CaseSection>
                
                <CaseSection>
                  <h4>项目成果</h4>
                  <p>半年内进入BSR TOP10，月销售额突破10万美元，毛利率超25%。工厂实现多元供货，稳定成，达成品牌与OEM双赢。</p>
                </CaseSection>
              </CaseContent>
            </CaseCard>

            <CaseCard>
              <CaseImagePlaceholder />
              <CaseContent>
                <CaseTitle>Mattress</CaseTitle>
                <CaseSection>
                  <h4>项目概况</h4>
                  <p>某家居床垫品牌希望在美国市场扩大影响力，提高销售额。</p>
                </CaseSection>
                
                <CaseSection>
                  <h4>合作过程</h4>
                  <ul>
                    <li>深入分析目标市场，制定针对性的品牌定位和营销策略。</li>
                    <li>优化产品线，开发符合美国消费者需求的新产品。</li>
                    <li>全面提升社交媒体运营，包括Facebook、Instagram和TikTok。</li>
                    <li>与知名KOL合作，开展多场线上直播和产品体验活动。</li>
                    <li>优化亚马逊店铺，提高搜索排名和转化率。</li>
                  </ul>
                </CaseSection>
                
                <CaseSection>
                  <h4>项目成果</h4>
                  <p>经过8个月运营，品牌知名度提升200%，客户复购率增长30%，月均销售额增长150%。</p>
                </CaseSection>
              </CaseContent>
            </CaseCard>
          </CasesGrid>
        </ServiceCasesSection>
      </ServiceCasesSectionWrapper>

    </HomeContainer>
  );
};

export default Home;