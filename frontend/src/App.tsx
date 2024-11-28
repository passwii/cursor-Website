import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminPage from './pages/admin/Admin';
import ServicePage from './pages/service/Service';
import AboutPage from './pages/About';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  padding-top: 70px; // Height of the navigation bar
`;

// Service pages
const Service = () => <div style={{ padding: '20px' }}>服务体系</div>;
const Ecosystem = () => <div style={{ padding: '20px' }}>跨境全生态</div>;
const AI = () => <div style={{ padding: '20px' }}>AI 赋能</div>;

// About pages
const About = () => <AboutPage />;
const Company = () => <div style={{ padding: '20px' }}>公司概况</div>;
const Culture = () => <div style={{ padding: '20px' }}>企业文化</div>;
const Partners = () => <div style={{ padding: '20px' }}>合作伙伴</div>;
const Future = () => <div style={{ padding: '20px' }}>展望未来</div>;

// Contact pages
const Contact = () => <div style={{ padding: '20px' }}>联系我们</div>;
const Consultation = () => <div style={{ padding: '20px' }}>跨境咨询</div>;
const Social = () => <div style={{ padding: '20px' }}>社媒联系</div>;
const Careers = () => <div style={{ padding: '20px' }}>人才招聘</div>;

function App() {
  return (
    <Router>
      <AppContainer>
        <NavigationBar />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Service routes */}
            <Route path="/service" element={<ServicePage />} />
            <Route path="/service/ecosystem" element={<Ecosystem />} />
            <Route path="/service/ai" element={<AI />} />
            
            {/* About routes */}
            <Route path="/about" element={<About />} />
            <Route path="/about/company" element={<Company />} />
            <Route path="/about/culture" element={<Culture />} />
            <Route path="/about/partners" element={<Partners />} />
            <Route path="/about/future" element={<Future />} />
            
            {/* Contact routes */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/consultation" element={<Consultation />} />
            <Route path="/contact/social" element={<Social />} />
            <Route path="/contact/careers" element={<Careers />} />
            
            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminPage />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
