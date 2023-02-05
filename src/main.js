import Vue from 'vue';
import router from './router/index'
import ele from './utils/ele.js'
//导入组件

import App from './App.vue';



new Vue({
  el: '#app',
  render: h => h(App),
  router,
  ele,
});