<template>
    <div class="fm">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="名字">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="别名">
                <el-input v-model="form.alias"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">添加</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>

</template>
<script>
import { reqAddSort } from '@/api'
export default {
    name: 'AddSort',
    data() {
        return {
            form: {
                name: '',
                alias: '',
            }
        }
    },
    methods: {
        //添加文章分类
        onSubmit() {
            let params = {
                name: this.form.name,
                alias: this.form.alias,
            }
            reqAddSort(params).then((res) => {
                console.log(res)
            })
        }
    }
}
</script>
<style>
.fm {
    position: absolute;
    top: 45%;
    left: 55%;
    transform: translate(-50%, -50%)
}
</style>