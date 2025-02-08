import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import AdminPage from './pages/admin/Admin';
import ServicePage from './pages/service/Service';
import AboutPage from './pages/about/About';
import Contact from './pages/contact/Contact';
import News from './pages/news/News';
import ExchangeRate from './pages/admin/components/toolset/exchange/ExchangeRate';
import DailyReport from './pages/admin/components/dataset/daily/DailyReport';
import MonthlyReport from './pages/admin/components/dataset/monthly/MonthlyReport';
import ProductAnalysis from './pages/admin/components/dataset/product/ProductAnalysis';
import PaymentReportHelp from './pages/admin/components/help/PaymentReportHelp';
import FbaRevisePdf from './pages/admin/components/toolset/FBApdf/FbaRevisePdf';
import Login from './pages/admin/components/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Analytics from './components/analytics/Analytics';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react';


const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Content = styled.main`
  flex: 1;
  padding-top: 65px;
  margin: 0;
  display: flex;
  flex-direction: column;
  > * {
    margin: 0;
  }
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
        <Analytics />
        <VercelAnalytics />
        <SpeedInsights />
        <NavigationBar />
        <Content>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/admin/login" element={<Login />} />
            
            {/* Protected admin routes */}
            <Route path="/admin" element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            } />
            <Route path="/admin/toolset/exchange" element={
              <PrivateRoute>
                <ExchangeRate />
              </PrivateRoute>
            } />
            <Route path="/admin/toolset/fba-revise-pdf" element={
              <PrivateRoute>
                <FbaRevisePdf />
              </PrivateRoute>
            } />
            <Route path="/admin/dataset/daily-report" element={
              <PrivateRoute>
                <DailyReport />
              </PrivateRoute>
            } />
            <Route path="/admin/dataset/monthly-report" element={
              <PrivateRoute>
                <MonthlyReport />
              </PrivateRoute>
            } />
            <Route path="/admin/dataset/product-analysis" element={
              <PrivateRoute>
                <ProductAnalysis />
              </PrivateRoute>
            } />
            <Route path="/admin/dataset/payment-report-help" element={
              <PrivateRoute>
                <PaymentReportHelp />
              </PrivateRoute>
            } />
            
            {/* Other public routes */}
            <Route path="/service" element={<ServicePage />} />
            <Route path="/about" element={<About />} />
            
            {/* Service routes */}
            <Route path="/service/ai" element={<AI />} />
            
            {/* Contact routes */}
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/consultation" element={<Consultation />} />
            <Route path="/contact/social" element={<Social />} />
            <Route path="/contact/careers" element={<Careers />} />

            {/* News routes */}
            <Route path="/news" element={<News />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
