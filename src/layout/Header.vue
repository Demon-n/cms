<template>
    <div class="header">
            cms管理系统
        <div class="info" v-show="$route.params.username">
            <p class="userName">{{ $route.params.username }},欢迎您</p>
        </div>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
    data() {
        return {}
    }
}
</script>
<style>
.header {
    width: 100%;
    height: 100%;
    background-color: aquamarine;
}

.el-header {
    padding: 0;
}

.info {
    width: 200px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 0;
}
</style>