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
  padding: 80px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #1a237e;
  text-align: center;
  margin-bottom: 60px;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 800px;
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ServiceCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  margin-bottom: 20px;

  svg {
    width: 40px;
    height: 40px;
    color: #2196f3;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  color: #1a237e;
  margin-bottom: 12px;
  font-weight: 500;
`;

const ServiceDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #424242;
  max-width: 220px;
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

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Section>
        <Content>
          <Title>跨境全生态服务</Title>
          <Description>
            开拓全球电子商务市场
            <br /><br />
            我们帮助中国企业、制造商、贸易商和品牌商在美国、欧洲等海外市场成功拓展业务，实现产品出海和品牌国际化。
          </Description>
        </Content>
        <ImageContainer>
          <Image src={crossBoardImage} alt="跨境全生态服务" />
        </ImageContainer>
      </Section>

      <ServicesSectionWrapper>
        <ServicesSection>
          <SectionTitle>跨境优服</SectionTitle>
          <ServicesGrid>
            <ServiceCard>
              <IconContainer>
                <MarketIcon />
              </IconContainer>
              <ServiceTitle>市场洞察</ServiceTitle>
              <ServiceDescription>
                深入分析电商平台热销品类和消费者需求趋势。
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <IconContainer>
                <ProductIcon />
              </IconContainer>
              <ServiceTitle>产品出海</ServiceTitle>
              <ServiceDescription>
                助力您的产品直接进入海外市场直达消费者，实现高效出海。
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <IconContainer>
                <BrandIcon />
              </IconContainer>
              <ServiceTitle>品牌出海</ServiceTitle>
              <ServiceDescription>
                助力您的品牌在海外市场成功拓展，打造国际化形象。
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard>
              <IconContainer>
                <AIIcon />
              </IconContainer>
              <ServiceTitle>AI 赋能运营</ServiceTitle>
              <ServiceDescription>
                利用AI工具赋能海外运营，实现数字化运营资产管理，提高效率和精准度。
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>
      </ServicesSectionWrapper>
    </HomeContainer>
  );
};

export default Home;
