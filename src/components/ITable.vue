<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 遍历表数据 -->
    <el-table-column v-for="(item, id) in tableColumns" :key="id" :prop="item.prop" :label="item.lable" width="180">
      <template slot-scope="scope">
        <span v-if="item.prop !== 'img'">{{ scope.row[item.prop] }}</span>
        <ElImage v-if="item.prop == 'img'" style="width: 40px;margin-left: -8px" :src="scope.row[item.prop]"></ElImage>
      </template>
    </el-table-column>
    <!-- updateTable编辑按钮 -->
    <el-table-column v-if="tableName == 'updateTable'" label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
    <!-- deleteTable编辑按钮 -->
    <el-table-column v-if="tableName == 'deleteTable'" label="操作" width="180">
      <template slot-scope="scope">
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { reqDeleteSort } from '@/api';
export default {
  props: {
    tableColumns: [],
    tableData: [],
    tableName: []
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      let params = {
        id:row.id
      }
      // console.log(index, row);
      reqDeleteSort(params).then((res) => {
        console.log(res)
      })
    }
  },
}
</script>