import Vue from 'vue';
import router from './router/index'
//导入组件
import {
  Button, 
  Select, 
  Form, 
  FormItem,
  Input, 
  Message , 
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Col,
  Row,
} from 'element-ui';
import App from './App.vue';

//注册组件
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Container);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Row);
Vue.use(Col);
Vue.component(Message)
Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});