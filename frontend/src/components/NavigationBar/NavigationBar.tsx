import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  @media (max-width: 768px) {
    padding: 0 20px;
  }
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

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 8px;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

const NavList = styled.div<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex: 1;
  white-space: nowrap;

  @media (max-width: 768px) {
    position: fixed;
    top: var(--nav-height, 80px);
    right: ${props => props.$isOpen ? '0' : '-100%'};
    bottom: 0;
    width: 100%;
    height: calc(100vh - var(--nav-height, 80px));
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    gap: 0;
    transition: right 0.3s ease;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    z-index: 999;
  }
`;

// 先声明一个空的 Dropdown 类型
const Dropdown = styled.div``; // 临时声明，后面会被覆盖

const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: var(--nav-height, 80px);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 0;
  }

  &:hover ${Dropdown} {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

// 重新定义完整的 Dropdown 组件
const StyledDropdown = styled.div`
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

  @media (max-width: 768px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: transparent;
    padding: 0 0 0 20px;
    width: 100%;
    display: none;
  }

  ${NavItem}:hover & {
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

// 覆盖之前的临时声明
Object.assign(Dropdown, StyledDropdown);

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

  @media (max-width: 768px) {
    height: auto;
    padding: 16px 0;
    width: 100%;
    font-size: 1.1rem;
  }

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

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 1rem;
  }

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

  @media (max-width: 768px) {
    margin: 8px 0;
    text-align: center;
    justify-content: center;
  }

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleNavClick = (to: string, hash?: string) => {
    const isSamePage = location.pathname === to;
    const navHeight = 80; // 导航栏高度
    const additionalOffset = -20; // 增加额外偏移量，确保内容不被导航栏遮挡
    const totalOffset = navHeight + additionalOffset;
    
    if (isSamePage && !hash) {
      // 如果是当前页面且没有hash，只滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (isSamePage && hash) {
      // 如果是当前页面且有hash，滚动到对应元素
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // 导航到新页面
      navigate(to);
      if (hash) {
        // 等待页面加载完成后滚动到指定位置
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - totalOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0 });
      }
    }
  };

  // 修改 DropdownItem 的点击处理
  const handleDropdownClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string, hash: string) => {
    e.preventDefault();
    handleNavClick(to, hash);
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

      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </MenuButton>

      <NavList $isOpen={isMenuOpen}>
        <NavItem>
          <NavLink to="/" onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }} $isActive={location.pathname === '/'}>
            首页
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink 
            to="/service" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/service');
            }} 
            $isActive={location.pathname === '/service'}
          >
            服务体系
          </NavLink>
          <Dropdown>
            <DropdownItem 
              to="/service#ecosystem" 
              onClick={(e) => handleDropdownClick(e, '/service', '#ecosystem')}
              $isActive={location.pathname === '/service' && location.hash === '#ecosystem'}
            >
              跨境全生态
            </DropdownItem>
            <DropdownItem 
              to="/service#core-tech" 
              onClick={(e) => handleDropdownClick(e, '/service', '#core-tech')}
              $isActive={location.pathname === '/service' && location.hash === '#core-tech'}
            >
              核心技术
            </DropdownItem>
            <DropdownItem 
              to="/service#ai-empower" 
              onClick={(e) => handleDropdownClick(e, '/service', '#ai-empower')}
              $isActive={location.pathname === '/service' && location.hash === '#ai-empower'}
            >
              AI赋能
            </DropdownItem>
            <DropdownItem 
              to="/service#service-case" 
              onClick={(e) => handleDropdownClick(e, '/service', '#service-case')}
              $isActive={location.pathname === '/service' && location.hash === '#service-case'}
            >
              服务案例
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
            <DropdownItem 
              to="/about#company" 
              onClick={(e) => handleDropdownClick(e, '/about', '#company')}
              $isActive={location.pathname === '/about' && location.hash === '#company'}
            >
              公司简介
            </DropdownItem>
            <DropdownItem 
              to="/about#culture" 
              onClick={(e) => handleDropdownClick(e, '/about', '#culture')}
              $isActive={location.pathname === '/about' && location.hash === '#culture'}
            >
              企业文化
            </DropdownItem>
            <DropdownItem 
              to="/about#team" 
              onClick={(e) => handleDropdownClick(e, '/about', '#team')}
              $isActive={location.pathname === '/about' && location.hash === '#team'}
            >
              团队风采
            </DropdownItem>
            <DropdownItem 
              to="/about#future" 
              onClick={(e) => handleDropdownClick(e, '/about', '#future')}
              $isActive={location.pathname === '/about' && location.hash === '#future'}
            >
              未来展望
            </DropdownItem>
            <DropdownItem 
              to="/about#partners" 
              onClick={(e) => handleDropdownClick(e, '/about', '#partners')}
              $isActive={location.pathname === '/about' && location.hash === '#partners'}
            >
              合作伙伴
            </DropdownItem>
            <DropdownItem 
              to="/about#job" 
              onClick={(e) => handleDropdownClick(e, '/about', '#job')}
              $isActive={location.pathname === '/about' && location.hash === '#job'}
            >
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
            <DropdownItem 
              to="/contact#business" 
              onClick={(e) => handleDropdownClick(e, '/contact', '#business')}
              $isActive={location.pathname === '/contact' && location.hash === '#business'}
            >
              商务合作
            </DropdownItem>
            <DropdownItem 
              to="/contact#recruitment" 
              onClick={(e) => handleDropdownClick(e, '/contact', '#recruitment')}
              $isActive={location.pathname === '/contact' && location.hash === '#recruitment'}
            >
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
            <DropdownItem 
              to="/news#company" 
              onClick={(e) => handleDropdownClick(e, '/news', '#company')}
              $isActive={location.pathname === '/news' && location.hash === '#company'}
            >
              公司动态
            </DropdownItem>
            <DropdownItem 
              to="/news#industry" 
              onClick={(e) => handleDropdownClick(e, '/news', '#industry')}
              $isActive={location.pathname === '/news' && location.hash === '#industry'}
            >
              行业资讯
            </DropdownItem>
            <DropdownItem 
              to="/news#insights" 
              onClick={(e) => handleDropdownClick(e, '/news', '#insights')}
              $isActive={location.pathname === '/news' && location.hash === '#insights'}
            >
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
