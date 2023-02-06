<template>
  <div class="menu">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#e7ecff"
          text-color="#000"
          active-text-color="#000"
        >
          <el-submenu
            v-for="sItem in menuList"
            :index="sItem.key"
            :key="sItem.key"
          >
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span v-if="sItem.children">{{ sItem.title }}</span>
              <router-link v-else :to="sItem.path">
                <span> {{ sItem.title }} </span>
              </router-link>
            </template>
            <el-menu-item-group v-if="sItem.children">
              <el-menu-item
                v-for="cItem in sItem.children"
                :index="cItem.key"
                :key="cItem.key"
              >
                <router-link :to="cItem.path">{{ cItem.title }}</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- <el-submenu index="1">
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
          </el-submenu> -->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getAllMenuCategory } from '@/api';
export default {
  name: "Menu",
  data() {
    return {
      menuList: [
        {
          title: "系统管理",
          path: "/systemManage",
          key: "systemManage",
          children: [
            {
              title: "菜单分类管理",
              path: "/categoryManage",
              key: "categoryManage",
            },
            {
              title: "系统信息管理",
              path: "/systemInfoManage",
              key: "systemInfoManage",
            },
          ],
        },
      ],
    };
  },
  created() {
    getAllMenuCategory().then((res) => {
      console.log("000", ...res.data);
      const newData = res.data.map((item, index)=>{
        return {
            title: item.title,
            path: '/SelectSort?id=' + item.id,
            key: 'SelectSort' + index
        }
      })
      this.menuList.push(...newData);
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang="less">
.menu {
  height: 670px;
  width: 100%;
  background-color: #e7ecff;

  /deep/ .el-submenu__title {
    background-color: #e7ecff !important;
  }
}
.el-submenu .el-menu-item {
  min-width: 199px;
}
</style>
