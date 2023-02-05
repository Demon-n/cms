<template>
    <div class="menu">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-operation"></i>
                            <span>文章分类</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link to="/selectSort">查看分类</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/addSort">添加分类</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <router-link to="/updateSort">修改分类</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-3">
                                <router-link to="/deleteSort">删除分类</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>系统管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="/updatepass">修改密码</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            <el-menu-item index="2-3">
                                <router-link to="/register">注册</router-link>
                            </el-menu-item>
                            <el-menu-item index="2-4">
                                <router-link to="/login">登录</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Menu",
    data() {
        return {}
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style scoped lang="less">
.menu {
    height: 670px;
    width: 100%;
    background-color: #8AAE92;

    /deep/ .el-submenu__title {
        background-color: #476162 !important;
    }
}
.el-submenu .el-menu-item {
    min-width: 199px;
}
</style>