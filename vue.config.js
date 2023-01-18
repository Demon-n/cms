const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
        //https: false,
        //hotOnly: false,// hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，
                       //前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败
        proxy: {
            '/api': {
                target: "http://node.htmldiv.cn/",//重定向的域名，也就是说咱们要切换到的域名
            },
        },
    },
})
