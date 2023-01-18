import Vue from 'vue';
import router from './router/index'
//导入组件
import { Button, Select, Form, FormItem,Input } from 'element-ui';
import App from './App.vue';
//注册组件
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});