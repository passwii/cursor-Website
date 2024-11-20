import React from 'react';
import styled from 'styled-components';
import crossBoardImage from '../assets/images/cross-board.webp';

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
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 100px 0;

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
      padding: 0 20px;
    }
  }
`;

const Content = styled.div`
  flex: 0.8;
  padding-left: 40px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #1a237e;
  margin-bottom: 24px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #424242;
  margin-bottom: 32px;
`;

const ImageContainer = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
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
`;

const CompetenceSubtitle = styled.p`
  font-size: 1.3rem;
  color: #424242;
  margin: 24px 0 80px;
  line-height: 1.6;
`;

const CompetenceLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 60px auto;
  min-height: 600px;

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 20px;
  }
`;

const ArcGrid = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SideContainer = styled.div<{ $isLeft?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 340px;
  position: relative;
  padding-top: ${props => props.$isLeft ? '40px' : '80px'};

  @media (max-width: 1024px) {
    width: 100%;
    padding-top: 0;
  }
`;

const CompetencyCard = styled.div<{ $index: number, $active: boolean, $isLeft: boolean }>`
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  transform: translateX(${props => props.$isLeft ? 
    Math.sin((props.$index * 30) * (Math.PI / 180)) * 40 : 
    -Math.sin(((props.$index - 3) * 30) * (Math.PI / 180)) * 40}px);

  &:hover {
    transform: translateX(${props => props.$isLeft ? 
      Math.sin((props.$index * 30) * (Math.PI / 180)) * 40 + (props.$isLeft ? 10 : -10) : 
      -Math.sin(((props.$index - 3) * 30) * (Math.PI / 180)) * 40 + (props.$isLeft ? 10 : -10)}px);
    box-shadow: 0 8px 30px rgba(25, 118, 210, 0.12);
  }

  @media (max-width: 1024px) {
    transform: none;
    &:hover {
      transform: translateX(${props => props.$isLeft ? '10px' : '-10px'});
    }
  }
`;

const CenterContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    width: 220px;
    height: 220px;
    border: 2px solid rgba(25, 118, 210, 0.1);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 240px;
    height: 240px;
    border: 2px solid rgba(25, 118, 210, 0.05);
    border-radius: 50%;
  }

  @media (max-width: 1024px) {
    position: relative;
    transform: none;
    left: auto;
    top: auto;
    margin: 40px auto;
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
              <ServiceDescription>AI 普惠运营，首批跨境全 AI 部署企业</ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>
      </ServicesSectionWrapper>

      <CompetenceSection>
        <SectionTitle>核心竞争力</SectionTitle>
        <CompetenceSubtitle>
          专业团队 + AI赋能 = 全方位助力您的全球业务拓展
        </CompetenceSubtitle>
        <CompetenceLayout>
          <ArcGrid>
            <SideContainer $isLeft>
              {competencies.slice(0, 3).map((item, index) => (
                <CompetencyCard
                  key={index}
                  $index={index}
                  $active={activeIndex === index}
                  $isLeft={true}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <ItemContent>
                    <ItemNumber>{item.number}</ItemNumber>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                </CompetencyCard>
              ))}
            </SideContainer>

            <CenterContent>
              <h3>核心竞争力</h3>
            </CenterContent>

            <SideContainer>
              {competencies.slice(3).map((item, index) => (
                <CompetencyCard
                  key={index + 3}
                  $index={index + 3}
                  $active={activeIndex === index + 3}
                  $isLeft={false}
                  onMouseEnter={() => setActiveIndex(index + 3)}
                  onMouseLeave={() => setActiveIndex(-1)}
                >
                  <ItemContent>
                    <ItemNumber>{item.number}</ItemNumber>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemDescription>{item.description}</ItemDescription>
                  </ItemContent>
                </CompetencyCard>
              ))}
            </SideContainer>
          </ArcGrid>
        </CompetenceLayout>
      </CompetenceSection>
      
    </HomeContainer>
  );
};

export default Home;
