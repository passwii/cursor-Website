import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1a237e, #0d47a1);
  color: white;
  padding: 60px 0 30px;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 40px;
      height: 2px;
      background: #64b5f6;
    }
  }

  p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #e3f2fd;
  }

  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 12px;
      color: #e3f2fd;
      line-height: 1.6;
      
      a {
        color: #e3f2fd;
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: #64b5f6;
        }
      }
    }
  }
`;

const CompanyName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  color: #fff;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: #e3f2fd;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>快速链接</h3>
          <ul>
            <li><a href="/service/ecosystem">跨境全生态</a></li>
            <li><a href="/service/ai">AI 赋能</a></li>
            <li><a href="/about/company">公司概况</a></li>
            <li><a href="/contact/consultation">跨境咨询</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h3>联系方式</h3>
          <CompanyName>彼励扶电子商务（苏州）有限公司</CompanyName>
          <ul>
            <li>地址：中国(江苏)自由贸易试验区苏州片区建发微时光商业广场 356</li>
            <li>联系电话：+86 18666468991</li>
            <li>美国电话：+1 (909) 375-0156</li>
            <li>邮箱：marketing@believeboy.com</li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>关注我们</h3>
          <p>关注我们的社交媒体账号，获取最新的跨境电商资讯和行业动态。</p>
          <ul>
            <li>微信公众号：BelieveBoy</li>
            <li>领英：BelieveBoy</li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        {new Date().getFullYear()} 彼励扶电子商务（苏州）有限公司 © 版权所有
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
