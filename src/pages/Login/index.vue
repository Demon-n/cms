<template>
  <div style="position:relative; margin-top: 14%;">
    <h2>登录</h2>
    <div class="lg">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reqLogin } from '@/api/index';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入账号'));
      }
      else
          callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        account: '',
        msg:""
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //调用后端接口
          let params = {
            username: this.ruleForm.account,
            password: this.ruleForm.pass,
          }
          reqLogin(params).then((response)=>{
            if(response.status===0){
              this.$message({ message: '恭喜你，登录成功', type: 'success' });
              console.log(response)
              this.$router.push({
                name:'home',
                params:params
              })
              console.log("路由发过去的参数：", this.$route)
            }
            else{
              this.msg = response.message
              this.$message({ message: '很遗憾，登录失败,失败原因：'+this.msg, type: 'warning' });
            }
          })
        } 
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    console.log("路由传过来的参数：", this.$route.params)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lg {
  width: 500px;
  height: 250px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
