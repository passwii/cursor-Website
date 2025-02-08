import { PrimaryService } from './types';
import intellectualPropertyImg from '../../../../assets/images/primary-service/p1.webp';
import projectIncubationImg from '../../../../assets/images/primary-service/p2.webp';
import managedOperationsImg from '../../../../assets/images/primary-service/p3.webp';
import globalExpansionImg from '../../../../assets/images/primary-service/p4.webp';

export const primaryServices: PrimaryService[] = [
  {
    id: "service-1",
    title: "知识产权服务",
    subtitles: "提供商标注册、专利申请、版权登记等",
    moreText: "点击更多",
    image: intellectualPropertyImg,
    details: [
      {
        title: "专利权",
        items: [
          "发明专利申请",
          "实用新型专利",
          "外观设计专利",
          "专利检索分析"
        ]
      },
      {
        title: "版权",
        items: [
          "软件著作权登记",
          "作品著作权登记",
          "版权转让许可",
          "版权保护咨询"
        ]
      },
      {
        title: "商标权",
        items: [
          "商标注册申请",
          "商标转让许可",
          "商标异议答辩",
          "商标续展变更"
        ]
      },
      {
        title: "IP战略",
        items: [
          "知识产权布局",
          "IP价值评估",
          "侵权风险防范",
          "维权援助服务"
        ]
      }
    ]
  },
  {
    id: "service-2",
    title: "项目孵化服务",
    subtitles: "项目评估筛选、资源整合、运营培训",
    moreText: "点击更多",
    image: projectIncubationImg,
    details: [
      {
        title: "平台准备",
        items: [
          "平台选择",
          "店铺注册",
          "店铺装修",
          "产品上架"
        ]
      },
      {
        title: "选品阶段",
        items: [
          "市场调研",
          "产品定位",
          "供应链筛选",
          "产品测试"
        ]
      },
      {
        title: "新品阶段",
        items: [
          "供应商管理",
          "库存管理",
          "物流管理",
          "质量管理"
        ]
      },
      {
        title: "运营服务",
        items: [
          "数据分析",
          "营销推广",
          "客户服务",
          "团队管理"
        ]
      }
    ]
  },
  {
    id: "service-3",
    title: "托管运营服务",
    subtitles: "店铺运营、营销推广数据分析、仓储物流",
    moreText: "点击更多",
    image: managedOperationsImg,
    details: [
      {
        title: "市场推广与品牌建设",
        items: [
          "多渠道推广策略",
          "品牌故事打造",
          "社交媒体运营",
          "内容营销策划"
        ]
      },
      {
        title: "店铺运营优化",
        items: [
          "产品上架优化",
          "定价策略制定",
          "库存管理优化",
          "客户服务提升"
        ]
      },
      {
        title: "数据分析与决策",
        items: [
          "销售数据分析",
          "竞品市场分析",
          "用户行为分析",
          "运营策略优化"
        ]
      },
      {
        title: "物流仓储服务",
        items: [
          "仓储管理",
          "物流配送",
          "库存预警",
          "退换货处理"
        ]
      }
    ]
  },
  {
    id: "service-4",
    title: "品牌出海服务",
    subtitles: "品牌策划、市场调研、营销推广",
    moreText: "点击更多",
    image: globalExpansionImg,
    details: [
      {
        title: "品牌策划",
        items: [
          "品牌定位",
          "品牌故事",
          "品牌形象设计",
          "品牌推广策略"
        ]
      },
      {
        title: "市场调研",
        items: [
          "目标市场分析",
          "消费者行为研究",
          "竞争对手分析",
          "市场趋势预测"
        ]
      },
      {
        title: "营销推广",
        items: [
          "社交媒体营销",
          "搜索引擎优化",
          "内容营销策划",
          "广告投放策略"
        ]
      },
      {
        title: "跨境支付",
        items: [
          "支付通道对接",
          "汇率风险管理",
          "资金安全保障",
          "跨境结算服务"
        ]
      }
    ]
  }
]; 