export interface JobPosition {
    title: string;
    department: string;
    experience: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
}

export const jobPositions: JobPosition[] = [
    {
        title: "亚马逊运营实习生",
        department: "运营部",
        experience: "毕业生",
        description: "请将简历发送至 [招聘邮箱]，并在邮件标题中注明“应聘亚马逊运营实习生+姓名”。",
        requirements: [
            "本科及以上学历，专业不限，市场营销、电子商务、国际贸易等相关专业优先",
            "英语良好，能够进行日常沟通，具备基础的书面表达能力",
            "具备较强的责任心和团队合作精神，能够积极主动地完成任务",
            "学习能力强，对跨境电商行业有浓厚的兴趣，愿意深入了解行业动态",
            "熟练使用办公软件（如Excel、Word、PS、视频软件等），具备基础的数据分析能力者优先",
            "有相关实习经验或对亚马逊平台有一定了解者优先考虑"
        ],
        responsibilities: [
            "协助运营团队进行日常listing优化，包括产品标题、描述、关键词的优化，提升产品曝光率和转化率",
            "协助产品选品和市场调研，分析市场需求和竞争情况，协助筛选潜力产品",
            "协助数据分析和竞品分析，整理销售数据、广告数据等，为运营决策提供支持",
            "学习并实践跨境电商运营技能，包括库存管理、广告投放、客户服务等",
            "协助处理客户反馈和售后服务，维护店铺评分和客户满意度"
        ],
        benefits: [
            "实习补贴：提供具有竞争力的实习薪资，表现优异者有机会获得额外奖金",
            "实践机会：深入参与跨境电商运营的全流程，积累宝贵的实战经验",
            "学习环境：提供系统的培训和指导，帮助你快速掌握亚马逊运营的核心技能",
            "团队氛围：加入年轻、充满活力的团队，与行业精英共同成长",
            "职业发展：表现优异者有机会获得转正机会，成为正式员工"
        ]
    },
    {
        title: "亚马逊运营专员",
        department: "运营部",
        experience: "1-3年相关经验",
        description: "请将简历发送至 [招聘邮箱]，并在邮件标题中注明“应聘亚马逊运营专员+姓名”",
        requirements: [
            "本科及以上学历，市场营销、电子商务、国际贸易等相关专业优先",
            "1-3年亚马逊平台运营经验，熟悉平台规则和运营流程",
            "英语熟练，能进行书面和口头沟通，具备良好的数据分析能力",
            "具备较强的责任心和团队合作精神，能够独立解决问题",
            "对跨境电商行业有深入了解，熟悉市场趋势和消费者需求"
        ],
        responsibilities: [
            "负责亚马逊店铺的日常运营管理，包括产品上架、Listing优化、广告投放等",
            "进行市场调研和产品选品，分析竞争对手和市场趋势",
            "监控销售数据，进行数据分析并制定优化策略，提升店铺业绩",
            "处理客户反馈和售后服务，维护店铺评分和客户满意度",
            "协调供应链、物流等环节，确保产品及时上架和发货"
        ],
        benefits: [
            "具有竞争力的薪资和绩效奖金",
            "完善的培训体系和职业发展机会",
            "年轻活力的团队氛围和良好的工作环境",
            "跨境电商行业的深度学习和实践机会"
        ]
    },
    {
        title: "供应链管理",
        department: "市场部",
        experience: "2年及以上",
        description: "请将简历发送至 [招聘邮箱]，并在邮件标题中注明“应聘供应链管理+姓名”。",
        requirements: [
            "本科及以上学历，2年以上供应链管理经验",
            "熟悉跨境物流和仓储管理",
            "优秀的沟通协调能力",
            "有跨境电商行业经验优先"
        ],
        responsibilities: [
            "制定和优化供应链策略",
            "管理和协调供应商关系",
            "优化库存和物流方案",
            "降低供应链成本"
        ],
        benefits: [
            "具有竞争力的薪资和绩效奖金",
            "完善的培训体系和职业发展机会",
            "年轻活力的团队氛围和良好的工作环境",
            "跨境电商行业的深度学习和实践机会"
        ]
    },
    {
        title: "亚马逊招商经理",
        department: "招商部",
        experience: "3年以上相关经验",
        description: "请将简历发送至 [招聘邮箱]，并在邮件标题中注明“应聘亚马逊招商经理+姓名”。",
        requirements: [
            "本科及以上学历，市场营销、国际贸易或相关专业",
            "3年以上跨境电商或电商平台招商经验",
            "熟悉亚马逊平台规则和运营模式",
            "具备优秀的谈判能力和客户关系管理能力",
            "英语流利，能进行商务沟通"
        ],
        responsibilities: [
            "负责亚马逊平台的招商工作，吸引优质卖家入驻",
            "制定并执行招商策略，完成招商目标",
            "与潜在客户沟通，解答疑问，促成合作",
            "维护现有客户关系，提升客户满意度和忠诚度",
            "分析市场动态和竞争对手，优化招商策略"
        ],
        benefits: [
            "具有竞争力的薪资和绩效奖金",
            "完善的培训和职业发展机会",
            "良好的团队氛围和晋升空间",
            "五险一金和带薪年假"
        ]
    },
];