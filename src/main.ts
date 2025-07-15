import { createApp } from 'vue'
import App from './App.vue'

// 初始化多语言
import { setupI18n } from '@/plugins/vueI18n'
// import pinia from './store'
// 引入 element-plus
import { setupElementPlus } from '@/plugins/elementPlus'
// 引入全局样式
import '@/styles/index.scss'
// 引入动画
import '@/plugins/animate.css'

import Logger from '@/utils/Logger'

// 创建实例
const setupAll = async () => {
  const app = createApp(App)
  await setupI18n(app)
  setupElementPlus(app)
  app.mount('#app')
}

setupAll()

Logger.prettyPrimary(`欢迎使用`, '椰果')
// createApp(App).use(pinia).mount('#app')
