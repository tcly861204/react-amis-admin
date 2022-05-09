## 低码平台前端引擎

## 提示启动服务

npm run service

## 使用

```bash
# 安装依赖
$ yarn

# 启动服务
$ yarn start  # visit http://localhost:6666
```

## 技术文档

[More docs](https://ice.work/docs/guide/about).

## 目录

```md
├── build/ # 构建产物
├── mock/ # 本地模拟数据
│ ├── index.[j,t]s
├── public/
│ ├── index.html # 应用入口 HTML
│ └── favicon.png # Favicon
├── src/ # 源码路径
│ ├── components/ # 自定义业务组件
│ │ └── Guide/
│ │ ├── index.[j,t]sx
│ │ ├── index.module.scss
│ ├── layouts/ # 布局组件
│ │ └── BasicLayout/
│ │ ├── index.[j,t]sx
│ │ └── index.module.scss
│ ├── pages/ # 页面
│ │ └── Home/ # home 页面，约定路由转成小写
│ │ ├── components/ # 页面级自定义业务组件
│ │ ├── models.[j,t]sx # 页面级数据状态
│ │ ├── index.[j,t]sx # 页面入口
│ │ └── index.module.scss # 页面样式文件
│ ├── configs/ # [可选] 配置文件
│ │ └── menu.[j,t]s # [可选] 菜单配置
│ ├── models/ # [可选] 应用级数据状态
│ │ └── user.[j,t]s
│ ├── utils/ # [可选] 工具库
│ ├── global.scss # 全局样式
│ ├── routes.[j,t]s # 路由配置
│ └── app.[j,t]s[x] # 应用入口脚本
├── build.json # 工程配置
├── README.md
├── package.json
├── .editorconfig
├── .eslintignore
├── .lintstagedrc.js
├── .eslintrc.[j,t]s
├── .gitignore
├── .stylelintignore
├── commitlint.config.js
├── .stylelintrc.[j,t]s
├── .gitignore
└── [j,t]sconfig.json
```

## 参考文档

https://toscode.gitee.com/mantiandaxuefei/amis-editor-demo/blob/master/README.md
https://aisuda.bce.baidu.com/amis/zh-CN/docs/index
