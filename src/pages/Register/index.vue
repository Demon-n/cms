<template>
  <div style="position:relative; margin-top: 14%;">
    <h2>注册</h2>
    <div class="lg">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reqRegister } from '@/api/index'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',
  data() {
    var checkAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入账号'));
      }
      else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      }
      else { callback(); }
    };
    return {
      ruleForm: {
        pass: '',
        email: '',
        account: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        email: [
          { validator: checkEmail, trigger: 'blur', type: 'email', message: '请输入正确的邮箱地址' }
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
            email: this.ruleForm.email,
          }
          reqRegister(params).then(function (response) {
            if (response.status === 0) {
              alert('注册成功!');
            }
            else {
              alert('注册失败，原因:', response.message)
            }
          })
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
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
