"use strict";
const { app, BrowserWindow } = require("electron");
const { join } = require("path");
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
const createWindow = () => {
  const win = new BrowserWindow({
    // 窗口图标
    icon: join(__dirname, "resource/shortcut.ico"),
    width: 800,
    height: 600,
    frame: true,
    // 去掉窗口边框 // 取消默认的头部；自定义头部
    autoHideMenuBar: false,
    // 隐藏菜单栏
    simpleFullscreen: true,
    // resizable: false, // 可否缩放，会让放大后的窗口不能恢复
    minimizable: true,
    // 可否最小化
    maximizable: true,
    // 可否最大化
    closable: true,
    // 展示关闭按钮
    fullscreen: false,
    // MAC下是否可以全屏
    skipTaskbar: false,
    // 在任务栏中显示窗口
    acceptFirstMouse: true,
    // 是否允许单击页面来激活窗口
    transparent: false,
    movable: true,
    // 可否移动
    allowRunningInsecureContent: true,
    // 允许一个https页面运行http url里的资源
    // 网页功能设置
    webPreferences: {
      // contextIsolation: false,
      // nodeIntegration: true,
      // preload: path.join(__dirname, 'preload.js')
    }
  });
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "dist/index.html"));
  }
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
