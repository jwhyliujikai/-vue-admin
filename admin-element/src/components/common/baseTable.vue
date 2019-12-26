<template>
<!--
dataSource :表头数据
stripe：是否为斑马纹 table，默认false
highlight-current-row：是否要高亮当前行，默认false
loading：加载效果
clickTable：点击某一行触发的事件

el-table-column属性：
header-align：表头对齐方式---left/center/right
sortable：排序，接收布尔值
label：显示的标题
align：对齐方式---left/center/right
width:对应列的宽度
-->
  <div>
    <el-table
      :data="dataSource"
      stripe
      :border="tablePro.border"
      v-loading="tablePro.loading"
      highlight-current-row
      @row-click="clickTable"
      style="width: 100%">
      <el-table-column
        v-for="(column,index) in columns"
        header-align='center'
        v-if="column.isShow"
        :sortable="column.hasSort"
        :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :align="column.align"
        :width="column.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    props:{
      dataSource: {// 表格数据源 默认为空数组
        type: Array,
        default: ()=> []
      },
      columns: {// 表格的字段展示 默认为空数组
        type: Array,
        default: ()=>[]
      },
      tablePro:{
        type:Object,
        default: ()=>{}
      }
    },
    methods:{
      clickTable(){

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
