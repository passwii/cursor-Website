import { Brain, Search, Share2, FileText, Truck, CreditCard, Database, Shield } from 'lucide-react';
import { Technology } from './types';

export const technologies: Technology[] = [
  {
    name: "AI 智能决策",
        description: "集成BLF-LLM，为运营提供定价策略、库存管理、营销优化等决策支持。",
    icon: Brain
  },
  {
    name: "数据分析与挖掘",
      description: "对海量市场趋势、用户行为模式等数据分析，为运营决策提供更精准的数据支持。",
    icon: Database
  },
  {
    name: "搜索引擎优化",
    description: "优化产品标题、描述、关键词等，提升产品在搜索引擎中的排名，增加自然流量。",
    icon: Search
  },
  {
    name: "社交媒体营销",
    description: "利用社交媒体平台进行精准广告投放，触达目标客户群体，提升品牌知名度。",
    icon: Share2
  },
  {
    name: "内容智能创作",
    description: "运用AI辅助创作高质量的产品描述、营销文案和图片。",
    icon: FileText
  },
  {
    name: "智能物流系统",
    description: "优化物流路径规划，提高物流效率，降低物流成本。",
    icon: Truck
  },
  {
    name: "支付与结算",
    description: "为跨境交易提供安全、便捷的支付和结算服务。",
    icon: CreditCard
  },
  {
    name: "安全与风控",
    description: "BLF 账号管理体系，保护交易安全，防范账号风险。",
    icon: Shield
  }
];

export const calculatePosition = (index: number, total: number, width: number): { x: number; y: number } => {
  const isMobile = width <= 768;
  if (isMobile) {
    return { x: 0, y: 0 };
  }

  const radius = width > 1400 ? 400 : 300;
  const angle = (index * (2 * Math.PI)) / total - Math.PI / 2;
  
  return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle) * 0.5 // 椭圆效果
  };
}; 