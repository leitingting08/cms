# cms

## 开发

```
yarn
yarn build
yarn dev
```

## 项目名

修改文件里对应的项目名：如 cms

```
yarn plop name
```


## 新增页面

`pages/{pagename}.tsx`

## 组件

### 页面组件 

`views/{pagename}/index.tsx`

### 通用组件

`components/{pagename}/index.tsx`


## 语言切换

`public/locales/{language}.json`

## 目录树

```js
|-- cms // 目录
    |-- .env.development 
    |-- .env.production
    |-- .eslintrc  // eslint 规则
    |-- .gitignore
    |-- .prettierrc // prettier 规则
    |-- plopfile.js // 修改项目名脚手架
    |-- README.md
    |-- next-env.d.ts
    |-- next.config.js
    |-- nginx.conf
    |-- package.json
    |-- postcss.config.js
    |-- react-app-env.d.ts
    |-- tailwind.config.js
    |-- tsconfig.json
    |-- yarn.lock
    |-- nginx
    |   |-- Dockerfile
    |   |-- default.conf
    |   |-- nginx.conf
    |-- public
    |   |-- favicon.ico
    |   |-- locales  // 语言包
    |       |-- en-US.json
    |       |-- zh-CN.json
    |-- src
        |-- assets // 图片等静态资源
        |   |-- arrow.png
        |   |-- menu.png
        |   |-- vision.png
        |-- components // 公共组件
        |   |-- Button
        |   |   |-- Button.tsx
        |   |   |-- ConnectButton.tsx
        |   |-- Common
        |   |   |-- BaseModal.tsx
        |   |   |-- CountDown.tsx
        |   |   |-- LazyImage.tsx
        |   |   |-- Tips.tsx
        |   |   |-- index.tsx
        |   |-- Layout
        |   |   |-- Menu.tsx
        |   |   |-- PageFooter.tsx
        |   |   |-- PageHeader.tsx
        |   |   |-- Translate.tsx
        |   |   |-- index.tsx
        |   |-- Loader
        |   |   |-- Spinner.tsx
        |   |   |-- SuspenseWithChunkError.tsx
        |   |-- Toast
        |       |-- index.tsx
        |-- config // 配置
        |   |-- types.ts
        |   |-- abi // abi 文件
        |   |   |-- erc20.json
        |   |   |-- vanswapRouter02.json
        |   |   |-- weth.json
        |   |-- constants // 静态变量
        |   |   |-- contracts.ts
        |   |   |-- helpers.ts
        |   |   |-- key.ts
        |   |   |-- networks.ts
        |   |   |-- tokensv.ts
        |   |   |-- types.ts
        |   |-- localization
        |       |-- languages.ts
        |-- contexts
        |   |-- Providers.tsx
        |   |-- Localization
        |   |   |-- Provider.tsx
        |   |   |-- helpers.ts
        |   |   |-- index.tsx
        |   |   |-- types.ts
        |   |   |-- useTranslation.ts
        |   |-- ModalContext
        |   |   |-- Provider.tsx
        |   |   |-- index.tsx
        |   |-- ToastsContext
        |       |-- Provider.tsx
        |       |-- index.tsx
        |-- hooks // hooks
        |   |-- useLogin.ts
        |-- pages // 页面
        |   |-- 404.tsx
        |   |-- _app.tsx
        |   |-- _document.tsx
        |   |-- explore.tsx
        |   |-- index.tsx
        |-- state // 数据存储 redux
        |   |-- index.ts
        |   |-- types.ts
        |   |-- account
        |   |   |-- hooks.ts
        |   |   |-- index.ts
        |   |-- user
        |       |-- actions.ts
        |       |-- reducer.ts
        |-- styles // 公共样式类
        |   |-- globals.css
        |-- utils // 工具函数
        |   |-- https.ts
        |   |-- icon.ts
        |   |-- index.ts
        |-- views // 页面组件
            |-- explore
            |   |-- index.tsx
            |-- home
                |-- index.tsx

```
