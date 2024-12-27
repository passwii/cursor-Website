import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/images/blf-logo.ico';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height, 80px);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  padding: 0 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  margin: 0;
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-right: 60px;
`;

const LogoImage = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;

const SubText = styled.span`
  font-size: 0.8rem;
  color: #666;
  font-style: bold;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex: 1;
  white-space: nowrap;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  padding: 8px 0;
  z-index: 1000;
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: var(--nav-height, 80px);

  &:hover ${Dropdown} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#0066cc' : '#333'};
  text-decoration: none;
  font-weight: ${props => props.$isActive ? '600' : '500'};
  font-size: 1rem;
  padding: 0 15px;
  height: 100%;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #0066cc;
  }
`;

const DropdownItem = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 12px 20px;
  color: ${props => props.$isActive ? '#0066cc' : '#333'};
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: ${props => props.$isActive ? '600' : 'normal'};
  font-size: 0.95rem;
  white-space: nowrap;

  &:hover {
    background: #f8f9fa;
    color: #0066cc;
  }
`;

const AdminLink = styled(NavLink)`
  background: #0066cc;
  color: white !important;
  border-radius: 4px;
  padding: 8px 16px;
  height: auto;
  margin-left: auto;

  &:hover {
    background: #0052a3;
    color: white !important;
  }
`;

const AdminSection = styled.div`
  margin-left: auto;
  min-width: 200px;
  text-align: right;
`;

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (to: string) => {
    // 如果是当前页面，滚动到顶部
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // 导航到新页面并滚动到顶部
      navigate(to);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Nav>
      <LogoSection 
        to="/"
        onClick={(e) => {
          e.preventDefault();
          handleNavClick('/');
        }}
      >
        <LogoImage src={logoImage} alt="彼励扶" />
        <LogoText>
          <MainText>彼励扶跨境</MainText>
          <SubText>It's always Day 1</SubText>
        </LogoText>
      </LogoSection>

      <NavList>
        <NavItem>
          <NavLink to="/" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }} $isActive={location.pathname === '/'}>
            首页
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/service" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/service');
          }} $isActive={location.pathname === '/service'}>
            服务体系
          </NavLink>
          <Dropdown>
            <DropdownItem to="/service#ecosystem" $isActive={location.pathname === '/service' && location.hash === '#ecosystem'}>
              跨境全生态
            </DropdownItem>
            <DropdownItem to="/service#core-tech" $isActive={location.pathname === '/service' && location.hash === '#core-tech'}>
              核心技术
            </DropdownItem>
            <DropdownItem to="/service#ai-empower" $isActive={location.pathname === '/service' && location.hash === '#ai-empower'}>
              AI赋能
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <NavLink to="/about" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/about');
          }} $isActive={location.pathname === '/about'}>
            关于我们
          </NavLink>
          <Dropdown>
            <DropdownItem to="/about#company" $isActive={location.pathname === '/about' && location.hash === '#company'}>
              公司简介
            </DropdownItem>
            <DropdownItem to="/about#culture" $isActive={location.pathname === '/about' && location.hash === '#culture'}>
              企业文化
            </DropdownItem>
            <DropdownItem to="/about#future" $isActive={location.pathname === '/about' && location.hash === '#future'}>
              未来展望
            </DropdownItem>
            <DropdownItem to="/about#partners" $isActive={location.pathname === '/about' && location.hash === '#partners'}>
              合作伙伴
            </DropdownItem>
            <DropdownItem to="/about#job" $isActive={location.pathname === '/about' && location.hash === '#job'}>
              人才招聘
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <NavLink to="/contact" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/contact');
          }} $isActive={location.pathname === '/contact'}>
            联系我们
          </NavLink>
          <Dropdown>
            <DropdownItem to="/contact#business" $isActive={location.pathname === '/contact' && location.hash === '#business'}>
              商务合作
            </DropdownItem>
            <DropdownItem to="/contact#recruitment" $isActive={location.pathname === '/contact' && location.hash === '#recruitment'}>
              人才招聘
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <NavLink to="/news" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/news');
          }} $isActive={location.pathname === '/news'}>
            新闻资讯
          </NavLink>
          <Dropdown>
            <DropdownItem to="/news#company" $isActive={location.pathname === '/news' && location.hash === '#company'}>
              公司动态
            </DropdownItem>
            <DropdownItem to="/news#industry" $isActive={location.pathname === '/news' && location.hash === '#industry'}>
              行业资讯
            </DropdownItem>
            <DropdownItem to="/news#insights" $isActive={location.pathname === '/news' && location.hash === '#insights'}>
              跨境洞察
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <AdminLink to="/admin" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/admin');
          }} $isActive={location.pathname === '/admin'}>
            管理后台
          </AdminLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavigationBar;
