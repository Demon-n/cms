//对axios进行二次封装
import axios from "axios"
//引入nprogress 
import nprogress from 'nprogress'
// console.log(nprogress)
//引入nprogress进度样式
import 'nprogress/nprogress.css'

const requests = axios.create({
    //基础路径，发送请求的时候，路径当中会出现api
    baseURL:"http://node.htmldiv.cn/",
    //代表请求超时的时间为5s
    timeout:5000,
});

//请求拦截器（再发送请求之前，请求拦截器可以检测到，可以再请求之前做一些事情）
requests.interceptors.request.use((config)=>{
    //进度条开始
    nprogress.start()
    //config,配置对象，对象里面有一个属性很重要，headers请求头
    return config;
})

//响应拦截器
requests.interceptors.response.use(
    (res)=>{
    //进度条结束
    nprogress.done();
    return res.data;
},
    (error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'),error);
})
export default requests