import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Login from '@/pages/Login/index.vue'
import Register from '@/pages/Register/index.vue'
import Home from '@/pages/Home/index.vue'

Vue.use(VueRouter)
export default new VueRouter ({
    routes:[
        {
            path:'/',
            component:Home,
        },
        {
            path:'/register',
            component:Register,
        },
        {
            path:'/login',
            component:Login,
        },
    ]
})