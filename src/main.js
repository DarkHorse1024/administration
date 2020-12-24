import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "element-ui/lib/theme-chalk/index.css";
import '@/assets/css/beas.css'
import {
  Container,
  Aside,
  Header,
  Main, 
  Footer, 
  Row, 
  Menu, 
  Submenu, 
  MenuItem, 
  MenuItemGroup, 
  Input,
  Breadcrumb,
  BreadcrumbItem
} from 'element-ui';

Vue.config.productionTip = false
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Container)
Vue.use(Footer)
Vue.use(Row)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
