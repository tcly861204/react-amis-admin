## amis-admin
低代码引擎实现后台管理, 使用最新版amis, 使用了抖音arco-design UI搭建， 开箱即用

## 安装
> pnpm install

## 开发环境
> pnpm dev

## 环境构建
> pnpm run build

## 文件结构
```ts
 tree
  |-- .env.development
  |-- .eslintrc.cjs
  |-- .github
  |  |-- workflows
  |  |  |-- deploy.yml
  |-- .gitignore
  |-- doc
  |  |-- 001.png
  |-- index.html
  |-- package.json
  |-- pnpm-lock.yaml
  |-- public
  |  |-- 001.png
  |  |-- api
  |  |  |-- app_audio.json
  |  |  |-- app_carousel.json
  |  |  |-- app_chart.json
  |  |  |-- app_crud_auto-fill.json
  |  |  |-- app_crud_table.json
  |  |  |-- app_dialog_drawer.json
  |  |  |-- app_dialog_simple.json
  |  |  |-- app_form_fieldset.json
  |  |  |-- app_form_full.json
  |  |  |-- app_form_hint.json
  |  |  |-- app_form_mode.json
  |  |  |-- app_form_static.json
  |  |  |-- app_form_tabs.json
  |  |  |-- app_tabs_normal.json
  |  |  |-- app_theme.json
  |  |  |-- app_video.json
  |  |  |-- dashboard.json
  |  |-- app
  |  |  |-- form
  |  |  |-- static
  |  |-- favicon.png
  |-- README.md
  |-- src
  |  |-- App.tsx
  |  |-- assets
  |  |  |-- login.bg.png
  |  |  |-- logo.png
  |  |-- components
  |  |  |-- Amis
  |  |  |-- index.tsx
  |  |  |-- Loading
  |  |  |-- index.module.scss
  |  |  |-- index.tsx
  |  |  |-- Sidebar
  |  |  |-- index.module.scss
  |  |  |-- index.tsx
  |  |  |-- ToolBar
  |  |  |-- index.module.scss
  |  |  |-- index.tsx
  |  |-- layout
  |  |  |-- index.module.scss
  |  |  |-- index.tsx
  |  |  |-- menu.ts
  |  |-- main.tsx
  |  |-- pages
  |  |  |-- Admin
  |  |  |-- index.tsx
  |  |  |-- Login
  |  |  |-- index.module.scss
  |  |  |-- index.tsx
  |  |-- routes
  |  |  |-- index.tsx
  |  |-- store
  |  |  |-- index.ts
  |  |  |-- layout.ts
  |  |-- styles
  |  |  |-- global.scss
  |  |-- utils
  |  |  |-- ajax.ts
  |  |  |-- utils.ts
  |  |-- vite-env.d.ts
  |-- tsconfig.json
  |-- tsconfig.node.json
  |-- vite.config.ts
```

## 在线效果预览
[https://tcly861204.github.io/react-amis-admin/](https://tcly861204.github.io/react-amis-admin/)

![amis admin](/doc/001.png)