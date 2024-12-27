import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from './HeroSection/HeroSection';
import ServicesSection from './ServicesSection/ServicesSection';
import CompetenceSection from './CompetenceSection/CompetenceSection';
import ServiceCasesSection from './ServiceCasesSection/ServiceCasesSection';
import styled from 'styled-components';

const HomeContainer = styled.div`
  width: 100%;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Helmet>
        <title>彼励扶 - 跨境电商解决方案</title>
        <meta 
          name="description" 
          content="彼励扶致力于为跨境电商企业提供一站式智能营销解决方案，通过AI技术赋能，助力企业实现全球化业务增长。" 
        />
      </Helmet>
      
      <HeroSection />
      <ServicesSection />
      <CompetenceSection />
      <ServiceCasesSection />
    </HomeContainer>
  );
};

export default Home; 