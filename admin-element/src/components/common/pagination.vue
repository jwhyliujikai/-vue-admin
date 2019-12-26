<template>
<!--
page-sizes:每页显示个数选择器的选项设置---[10, 20, 30, 40, 50, 100]
page-size:每页显示条目个数，支持 .sync 修饰符--number
total:总条目数	number
@size-change: pageSize 改变时会触发	每页条数
@current-change:	currentPage 改变时会触发
-->
  <div class="pagination">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="pagData.pageSizes"
      :page-size="pagData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagData.total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    // name:pagination,
    data(){
      return{

      }
    },
    props:['pagData'],
    methods:{
      handleSizeChange(val){
        console.log(val)
        this.$emit('callback',val)
      },
      handleCurrentChange(val){
        console.log(val)
        // this.$emit('callback',val)
      }
    },
    mounted(){
      console.log(this.pagData)
    }
  }
</script>

<style lang="scss" scoped>
.pagination{
  width: 100%;
  height: 50px;
  // background: red;
  .el-pagination{
    float: right;
    margin-right: 20px;
    margin-top: 10px;
  }
}
</style>
