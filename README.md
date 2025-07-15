# Electron 示例工程快速跑通
本文档主要介绍如何快速跑通 Electron 示例工程
## 目录结构

```
.
├── dist                      构建后，根据 packages 目录生成
|   ├── main
|   ├── preload
|   └── renderer
|
├── scripts
|   ├── build.mjs             项目开发脚本 npm run build
|   └── watch.mjs             项目开发脚本 npm run dev
|
├── packages
|   ├── main                  主进程源码
|   |   |── vite.config.ts
|   |   └── index.ts
|   ├── preload               预加载脚本源码
|   |   ├── vite.config.ts
|   |   ├── index.ts
|   |   ├── loading.ts
|   |   └── utils.ts
|   └── renderer              渲染进程源码
|       ├── auto-imports.d.ts
|       ├── components.d.ts
|       ├── tsconfig.json
|       ├── index.html
|       ├── src
│       |   ├── App.vue   // 示例工程主页面
│       |   ├── TUIRoom   // TUIRoom UI 组件源文件
│       |   ├── assets    // 公共资源
│       |   ├── config    // TUIRoom 配置文件
│       |   ├── env.d.ts
│       |   ├── main.ts   // 示例工程入口文件
│       |   ├── router    // 示例工程路由配置
│       |   └── views     // 示例工程路由页面
|       └── vite.config.ts
```

### 运行示例

1. 安装依赖

   ```bash
   npm install --legacy-peer-deps
   ```

    > **注意**
    >
    > 如果依赖安装过程缓慢或者出现网络超时报错，如 “ERR_SOCKET_TIMEOUT” 或者 “Error: Socket timeout”，可设置就近的 npm 库镜像和 Electron 下载镜像，中国大陆地区，可在项目根目录下创建 .npmrc 文件，文件中增加如下镜像设置。
    > ```
    > registry=https://registry.npmmirror.com
    > ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/
    > ELECTRON_BUILDER_BINARIES_MIRROR=https://npmmirror.com/mirrors/electron-builder-binaries/
    > ```

2. 开发环境运行示例工程

   ```bash
   npm run dev
   ```


3. 构建安装包、运行
   - 构建符合当前机器 CPU 类型的安装包。适合 Windows 和 Mac 操作系统。

   ```bash
   npm run build                 // 构建 mac 单架构包、windows 包 
   npm run build:mac-universal   // 构建 mac 双架构包
   ```
   > 注意：构建好的安装包位于 release 目录下。默认只能使用 Mac 电脑构建 Mac 安装包，使用 Windows 电脑构建 Windows 安装包。


### 第四步：示例体验

开发环境运行示例工程后，可直接体验 TUIRoomKit 功能。

注意：因 TUIRoomKit 按需引入 element-plus 组件，会导致开发环境路由页面第一次加载时反应较慢，等待 element-plus 按需加载完成即可正常使用。element-plus 按需加载不会影响打包之后的页面加载。

Tips：TUIRoomKit 完整功能体验，至少需要两个 userId 不同的用户。需要您在两台设备上参考第二步配置 TUIRoomKit 示例工程并运行代码：

