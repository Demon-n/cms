<template>
    <div>
        <h1>Home</h1>
        <div class="info" v-show="$route.params.username">
            <p class="userName">{{ $route.params.username }},欢迎您</p>
        </div>
        <h2>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" style="margin-left:100px">注册</router-link>
        </h2>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Home',
    data() {
        return {

        }
    },
    mounted() {
        console.log("路由传过来的参数：", this.$route)
    }
}
</script>
<style scoped lang="less">
.info {
    width: 200px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>