<template>
       <ITable :tableColumns="tableColumns" :tableData="articleList" :tableName="tableName" />
</template>
<script>
import ITable from '@/components/ITable.vue';
import { reqSelectSort } from '@/api';
export default {
    name:'DeleteSort',
    data() {
        return {
            tableName: 'deleteTable',
            articleList: [],
            tableColumns: [
                {
                    lable: '序号',
                    prop: 'id',
                    width: '30%',
                    children: []
                },
                {
                    lable: '类别名',
                    prop: 'title',
                    width: '30%',
                    children: []
                },
                {
                    lable: '描述',
                    prop: 'description',
                    width: '30%',
                    children: []
                },
                {
                    lable: '图片',
                    prop: 'img',
                    width: '30%',
                    children: [
                    ],
                },
                {
                    lable: '存在否',
                    prop: 'is_delete',
                    width: '30%',
                    children: []
                },
            ]
        }
    },
    components: {
        ITable
    },
    created() {
        reqSelectSort().then((res) => {
            this.articleList = res.data
            console.log(this.articleList)
        })
    },
}
</script>
<style scoped>


</style>