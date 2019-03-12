<template>
  <div class="foodLists">
    <div class="top">
      <el-button type="primary" size="small">添加美食</el-button>
    </div>
    <el-table
      ref="multipleTable"
      :data="foodLists"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="美食名称"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        label="主图片"
        width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="美食类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="美食标签"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="美食介绍"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="用料"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建人"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="创建时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      foodLists: [],
      multipleSelection: []
    }
  },

  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss">
 .foodLists{
   .top{
     display: flex;
     flex-direction: row-reverse;
     margin-bottom: 20px;
   }
   .page{
     text-align: center;
     margin-top: 10px;
   }
 }
</style>
