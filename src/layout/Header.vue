<template>
    <div class="header">
        <h2>cms管理系统</h2>
        <div class="info">
            <p v-show="!userInfo.username" class="userName">请登录</p>
            <p v-show="userInfo.username" class="userName">{{ userInfo.username }},欢迎您</p>
        </div>
    </div>
</template>
<script>

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data() {
        return {
            userInfo: {},
        }
    },
    mounted() {
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    },
  
}
</script>
<style>
.header {
    width: 100%;
    height: 100%;
    line-height: 100%;
}

.el-header {
    padding: 0;
    background-color: #8AAE92;
}

.info {
    width: 200px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>