import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdminPage from './pages/admin/Admin';
import ServicePage from './pages/service/Service';
import AboutPage from './pages/About';
import Contact from './pages/contact/Contact';
import News from './pages/news/News';

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

// Contact pages
const ContactPage = () => <Contact />;
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
            <Route path="/service/ai" element={<AI />} />
            
            {/* About route */}
            <Route path="/about" element={<About />} />
            
            {/* Contact routes */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/consultation" element={<Consultation />} />
            <Route path="/contact/social" element={<Social />} />
            <Route path="/contact/careers" element={<Careers />} />

            {/* News routes */}
            <Route path="/news" element={<News />} />

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
