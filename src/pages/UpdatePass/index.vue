<template>
    <div style="position:relative; margin-top: 14%;">
        <div class="lg">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="旧密码" prop="oldPwd">
                    <el-input type="password" v-model="ruleForm.oldPwd"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPwd">
                    <el-input type="password" v-model="ruleForm.newPwd"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">修改</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reqUpdatePass } from '@/api/index';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'UpdatePass',
    data() {
        var checkNewPwd = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请输入旧密码'));
            }
            else
                callback();
        };
        var validateOldPwd = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                oldPwd: '',
                newPwd: '',
                msg: ""
            },
            rules: {
                oldPwd: [
                    { validator: validateOldPwd, trigger: 'blur' }
                ],
                newPwd: [
                    { validator: checkNewPwd, trigger: 'blur' }
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
                        // username:"123123",
                        oldPwd: this.ruleForm.oldPwd,
                        newPwd: this.ruleForm.newPwd,
                    }
                    reqUpdatePass(params).then((response) => {
                        if (response.status === 0) {
                            this.$message({ message: '恭喜你，修改成功', type: 'success' });
                            console.log(response)
                            this.$router.push({
                                name: 'home',
                                params: params
                            })
                            console.log("路由发过去的参数：", this.$route)
                        }
                        else {
                            this.msg = response.message
                            this.$message({ message: '很遗憾，修改失败,失败原因：' + this.msg, type: 'warning' });
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
