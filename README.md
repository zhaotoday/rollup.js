## 已包含的工具
- helpers: [object] 辅助函数集合
- I18N: [class] 基于 i18next 的国际化
- time: [object] 格式化时间
- storage: [object] 本地存储
- REST: [class] 遵循 RESTful 规范的接口请求类
- urlParams: [object] 获取 URL 参数

## 脚手架简介
Rollup.js 支持多入口的构建方案，用于多个 library 共存的情况，如工具库等。

## Rollup 介绍
Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。

## 链接
- [Rollup.js 官网](http://rollup.org/)
- [Rollup.js 中文文档](https://rollup.bootcss.com/)
- [Rollup 插件列表](https://github.com/rollup/rollup/wiki/Plugins)
- [如何使用Rollup打包样式文件并添加LiveReload](http://www.w3cplus.com/javascript/learn-rollup-css.html)

## 使用
```bash
# 下载代码
$ git clone https://github.com/zhaotoday/rollup.git

# 开发、调试
$ npm run dev myLibrary

# 构建代码
$ npm run build myLibrary

# 校验 JS
$ npm run eslint

# 校验 CSS
$ npm run stylelint

# 登录 npm
$ npm login

# 发布包，请注意，如果非首次发布，需要修改 package.json 的版本字段 version
$ npm publish

# 安装包
$ npm install --save my-package
```

```js
// 引用 myLibrary
import myLibrary from 'my-package/libs/myLibrary'

// 调用 myLibrary 的方法
myLibrary.someFunc()
```

## library 的命名规范
- 请在 src 目录下新建并开发你的 library，如案例的 urlParams 文件夹，其中 index.js 为入口文件；
- 如果暴露的是个类或构造函数，请用大驼峰命名法 (big camel-case)，如：MyClass、MyConstructor；
- 其他，请用小驼峰命名法 (little camel-case)：如：myLibrary

## 相关包
#### 1. rollup-watch
用于源文件改变时，自动重新构建。

#### 2. rollup-plugin-node-resolve
指导 Rollup 如何去寻找外部的模块。

#### 3. rollup-plugin-commonjs
大部份 npm 包都被输出为 CommonJS 模块，在 Rollup 处理它们之前，需要将 CommonJS 转成 ES2015。
> 注意 rollup-plugin-commonjs 应该在其它插件变换你的模块之前使用 - 这是为了避免其它插件做了一些改变，而这改变会破坏了 CommonJS 的检测。

#### 4. rollup-plugin-babel
在项目中使用 Babel，可以用上那些未被浏览器和 Node.js 支持的未来的 JavaScript 特性。
```bash
npm install --save-dev rollup-plugin-babel babel-preset-latest babel-plugin-external-helpers
```

#### 5. rollup-plugin-postcss
添加 PostCSS 支持。
```bash
npm install --save-dev rollup-plugin-postcss postcss-simple-vars postcss-nested postcss-cssnext cssnano
```

## 一些建议
- 建议本地安装 Rollup，这样任何人克隆你的项目和运行 npm install 将会得到一个兼容的版本；
- 建议构建同时支持 UMD 和 CommonJS 格式，以满足所有调用场景：
  1. UMD 格式需要把依赖包打进目标文件；
  2. CommonJS 格式需要将依赖包申明为外部依赖。
- 如果开发的是纯 JS 的 npm 包，请将 PostCSS 的相关插件去除（当然，保留着也无妨）。
