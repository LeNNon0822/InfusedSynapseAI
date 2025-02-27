import { createApp } from 'vue'
import router from './router'
import i18n from './locales'
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import locale from "element-plus/es/locale/lang/zh-cn";

import vue3videoPlay from 'vue3-video-play' // 引入组件
import 'vue3-video-play/dist/style.css' // 引入css
import App from './App.vue'
const app = createApp(App)
// app.use(ElementPlus, { locale });
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component);
// }
app.use(i18n)
app.use(router)
app.use(vue3videoPlay)
app.mount('#app')
