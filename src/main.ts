import {createApp} from "vue";
import {createPinia} from 'pinia';
import {router} from "./router";
import App from "./App.vue";
import './assets/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css'

import {useLayoutStore} from "./utils/state.ts";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");

const layout = useLayoutStore(); // 存储布局

window.onresize = () => {
  layout.setWidth(window.innerWidth);
}
window.onload = () => {
  layout.setWidth(window.innerWidth);
}