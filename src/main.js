import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SvgIcon from "./components/SvgIcon.vue";
import Panel from "./components/Panel.vue";
import "./fonts.css";

createApp(App)
  .use(store)
  .use(router)
  .component("SvgIcon", SvgIcon)
  .component("Panel", Panel)
  .mount('#app')
