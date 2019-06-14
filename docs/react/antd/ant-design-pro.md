# ant-design-pro 项目搭建

## 初始化项目

```bash
# 创建项目目录
mkdir ant-design-pro

# 进入项目目录
cd ant-design-pro

# 初始化项目
yarn create umi
```

## 本地开发

```bash
# 安装依赖
yarn

# 启动项目
yarn start
```

可能按照依赖的时候你会卡在安装 puppeteer 上，这时重新执行以下步骤。[参考](https://github.com/cnpm/cnpmjs.org/issues/1246)

```bash
npm config set puppeteer_download_host=https://storage.googleapis.com.cnpmjs.org
yarn config set puppeteer_download_host https://storage.googleapis.com.cnpmjs.org
yarn
```

## 项目目录结构

```
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

## 添加区块

```bash
# 添加登录区块
umi block add ant-design-pro/UserLogin
```

[官方区块使用文档](https://umijs.org/zh/guide/block.html#%E4%BD%BF%E7%94%A8%E5%8C%BA%E5%9D%97)
更多的区块可以到[umi-blocks](https://github.com/umijs/umi-blocks)中查找
