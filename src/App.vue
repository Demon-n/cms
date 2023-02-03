<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-container>
          <el-main style="padding:0; flex:0 1 auto; height: 600px;">
            <router-view></router-view>
          </el-main>
          <el-footer style="padding:0">
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/layout/Header.vue';
import Menu from '@/layout/Menu.vue';
import Footer from '@/layout/Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
