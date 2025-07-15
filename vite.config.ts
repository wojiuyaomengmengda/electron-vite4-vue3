import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
// import UnoCSS from 'unocss/vite'

// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd()

// 路径查找
function pathResolve(dir: string) {
    return resolve(root, '.', dir)
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // UnoCSS(),
    electron({
      // 主进程入口文件
      entry: 'electron/main.js'
    })
  ],
  /*开发服务器选项*/
  server: {
      // 端口
      port: 3000,
  },
  css: {
    preprocessorOptions: {
      scss: {
          additionalData: '@use "@/styles/variables.scss" as *;',
          javascriptEnabled: true,
          silenceDeprecations: ["legacy-js-api"], // 参考自 https://stackoverflow.com/questions/78997907/the-legacy-js-api-is-deprecated-and-will-be-removed-in-dart-sass-2-0-0
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
      alias: [
          {
              find: 'vue-i18n',
              replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
          },
          {
              find: /\@\//,
              replacement: `${pathResolve('src')}/`
          }
      ]
  },
})
