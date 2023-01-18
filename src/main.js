import Vue from 'vue';
import router from './router/index'
//导入组件
import { Button, Select, Form, FormItem,Input, Message } from 'element-ui';
import App from './App.vue';
//注册组件
Vue.use(Button);
Vue.use(Select);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Message)

Vue.prototype.$message = Message;

new Vue({
  el: '#app',
  render: h => h(App),
  router
});