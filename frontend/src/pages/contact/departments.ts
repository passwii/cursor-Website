import { Users, Code, TrendingUp } from 'lucide-react';

export interface Department {
  title: string;
  icon: typeof Users | typeof Code | typeof TrendingUp;
  hrName: string;
  email: string;
  description: string;
}

export const departments: Department[] = [
  {
    title: '商务资源合作',
    icon: Code,
    hrName: '高经理',
    email: 'business@believeboy.com',
    description: '负责商务资源对接与合作，建立战略伙伴关系，促进业务发展'
  },
  {
    title: '运营部',
    icon: TrendingUp,
    hrName: '李经理',
    email: 'operations@believeboy.com',
    description: '专注跨境电商运营策略，助力企业开拓国际市场'
  },
  {
    title: '人力资源部',
    icon: Users,
    hrName: '王经理',
    email: 'hr@believeboy.com',
    description: '寻找优秀人才，建设专业团队，创造良好的企业文化'
  },
  {
    title: '市场部',
    icon: TrendingUp,
    hrName: '李经理',
    email: 'marketing@believeboy.com',
    description: '商务合作与市场拓展，为企业发展提供强大支持'
  }
]; 
