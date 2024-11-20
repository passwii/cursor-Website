import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 50px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  min-width: 200px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;
`;

const NavItem = styled.div`
  position: relative;
  padding: 10px 0;
  min-width: 100px;
  text-align: center;
  
  &:hover > div {
    display: block;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) translateX(-50%);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(-50%);
    }
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#2196f3' : '#666'};
  font-size: 16px;
  transition: color 0.3s ease;
  cursor: pointer;
  display: inline-block;
  width: 100%;
  padding: 5px 15px;
  
  &:hover {
    color: #2196f3;
  }
`;

const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  min-width: 160px;
  width: max-content;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  z-index: 1001;
`;

const DropdownItem = styled(Link)<{ $isActive?: boolean }>`
  display: block;
  padding: 10px 24px;
  color: ${props => props.$isActive ? '#2196f3' : '#666'};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  
  &:hover {
    color: #2196f3;
    background: rgba(33, 150, 243, 0.1);
  }
`;

const AdminSection = styled.div`
  margin-left: auto;
  min-width: 200px;
  text-align: right;
`;

const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  return (
    <Nav>
      <Logo>Cross Border Service</Logo>
      <NavLinks>
        <NavItem>
          <NavLink to="/" $isActive={location.pathname === '/'}>
            主页
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink to="/service" $isActive={location.pathname.startsWith('/service')}>
            服务体系
          </NavLink>
          <Dropdown>
            <DropdownItem to="/service/ecosystem" $isActive={location.pathname === '/service/ecosystem'}>
              跨境全生态
            </DropdownItem>
            <DropdownItem to="/service/ai" $isActive={location.pathname === '/service/ai'}>
              AI 赋能
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <NavLink to="/about" $isActive={location.pathname.startsWith('/about')}>
            关于我们
          </NavLink>
          <Dropdown>
            <DropdownItem to="/about/company" $isActive={location.pathname === '/about/company'}>
              公司概况
            </DropdownItem>
            <DropdownItem to="/about/culture" $isActive={location.pathname === '/about/culture'}>
              企业文化
            </DropdownItem>
            <DropdownItem to="/about/partners" $isActive={location.pathname === '/about/partners'}>
              合作伙伴
            </DropdownItem>
            <DropdownItem to="/about/future" $isActive={location.pathname === '/about/future'}>
              展望未来
            </DropdownItem>
          </Dropdown>
        </NavItem>

        <NavItem>
          <NavLink to="/contact" $isActive={location.pathname.startsWith('/contact')}>
            联系我们
          </NavLink>
          <Dropdown>
            <DropdownItem to="/contact/consultation" $isActive={location.pathname === '/contact/consultation'}>
              跨境咨询
            </DropdownItem>
            <DropdownItem to="/contact/social" $isActive={location.pathname === '/contact/social'}>
              社媒联系
            </DropdownItem>
            <DropdownItem to="/contact/careers" $isActive={location.pathname === '/contact/careers'}>
              人才招聘
            </DropdownItem>
          </Dropdown>
        </NavItem>
      </NavLinks>
      
      <AdminSection>
        <NavLink to="/admin" $isActive={location.pathname === '/admin'}>
          业务后台
        </NavLink>
      </AdminSection>
    </Nav>
  );
};

export default NavigationBar;
