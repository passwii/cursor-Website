import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from '../../utils/analytics';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // 确保 gtag 已加载并且是一个函数
    if (typeof window.gtag === 'function') {
      analytics.pageview(location.pathname + location.search);
    }
  }, [location]);

  return null;
};

export default Analytics; 