# 彼励扶跨境电商平台

## 项目简介
彼励扶跨境电商平台是一个现代化的企业官网系统，采用 React + TypeScript 前端技术栈和 Python 后端技术栈开发。

基于源代码全栈解决方案，BLF-eCommerce将企业官网 Saas化，未来该平台将展示彼励扶电子商务（苏州）有限公司的服务体系、企业文化和业务范围，在全球范围内提供跨境电商解决方案。

## 技术栈
### 前端
- React 18
- TypeScript
- Styled Components
- React Router
- Modern CSS (Flexbox, Grid, 响应式设计)

### 后端
- Python
- Flask

## 项目结构
```
frontend
├── public/ # 静态资源文件
├── src/
│ ├── assets/ # 图片、字体等资源
│ ├── components/ # 可复用组件
│ │ ├── NavigationBar/ # 导航栏组件
│ │ ├── Footer/ # 页脚组件
│ │ └── common/ # 通用组件
│ ├── pages/ # 页面组件
│ │ ├── Home/ # 首页
│ │ ├── About/ # 关于我们
│ │ ├── Services/ # 服务介绍
│ │ └── Contact/ # 联系我们
│ ├── styles/ # 全局样式
│ ├── utils/ # 工具函数
│ ├── hooks/ # 自定义 Hooks
│ ├── types/ # TypeScript 类型定义
│ ├── App.tsx # 应用入口组件
│ └── index.tsx # 应用入口文件
├── package.json
└── tsconfig.json
backend
├── app/
│ ├── api/ # API 路由
│ ├── models/ # 数据模型
│ ├── services/ # 业务逻辑
│ └── utils/ # 工具函数
├── config/ # 配置文件
├── tests/ # 测试文件
└── requirements.txt # Python 依赖
```

## 开发指南

### 环境要求
- Node.js >= 16.0.0
- Python >= 3.8
- npm 或 yarn

### 本地开发
1. 克隆项目
2. 安装前端依赖
```bash
cd frontend
npm install
```
3. 启动前端开发服务器
```bash
npm start
```
4. 安装后端依赖
```cd ../backend
pip install -r requirements.txt
```
5. 启动后端开发服务器
```bash
python app.py
```

## 部署说明
- 前端部署在AKILE CLOUD HK
- 后端部署在阿里云 IIJ JP PRO
- 使用 Nginx 作为反向代理
- 使用 HTTPS 确保安全性

## 贡献指南
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 版本历史
- v1.0.0 (2024-08) - 初始版本发布
  - 完成基础企业官网功能
  - 实现静态设计
  - 集成基础表单功能

- v1.0.1 (2024-12) - 更新版本
  - 更新前端代码
  - 更新后端代码
  - 更新部署配置

## 维护者
- @Damon Rock
彼励扶电子商务（苏州）有限公司技术团队
