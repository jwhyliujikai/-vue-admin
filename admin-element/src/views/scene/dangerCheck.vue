<template>
  <div class="mainDiv">
    <div class="fromDiv">
      <div class="title">
        <span>隐患排查方案制定</span>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="方案名称">
            <el-input v-model="form.name" />
          </el-form-item>
        </el-form>
        <div class="btnDiv">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">新增</el-button>
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">完成</el-button>
          <el-button type="primary">返回</el-button>
        </div>
      </div>
      <div class="tableDiv">
        <el-table
          ref="multipleTable"
          :data="tableData"
          border
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column label="选择">
            <template slot-scope="scope">
              <el-radio v-model="radio" :label="scope.$index" @change.native="getCurrentRow(scope.$index);">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, key) in columns"
            :key="key"
            :prop="item.props"
            :label="item.label"
            :width="item.width"
          />
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <pagination :pag-data="pagData" @callback="pagHandle" />
      </div>
    </div>
    <div class="checkDiv">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="检查事项" name="first">
          <div class="bottomTit">
            <span>隐患排查明细</span>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="单位：">
                <el-input v-model="form.filter" style="float: left" />
              </el-form-item>
            </el-form>
            <el-button type="primary" style="float: left;margin: 5px 5px;">过滤</el-button>
            <div class="btnDiv">
              <el-button type="primary">增加排查单位</el-button>
              <el-button type="primary">增加排查事项</el-button>
              <el-button type="primary">增加责任人</el-button>
              <el-button type="primary">删除</el-button>
            </div>
          </div>
          <el-table
            ref="multiple"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              label="序号"
              width="80"
            />
            <el-table-column
              type="selection"
              width="55"
            />
            <el-table-column
              label="日期"
              width="120"
            />
            <el-table-column
              prop="name"
              label="姓名"
              width="120"
            />
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip
            />
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="检查明细" name="second">检查明细2</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import pagination from '../../components/common/pagination'
export default {
  components: {
    pagination
  },
  data() {
    return {
      form: {
        name: '',
        filter: ''
      },
      radio: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      columns: [{
        props: 'date',
        label: '日期',
        width: '180'
      }, {
        props: 'name',
        label: '姓名',
        width: '180'
      }, {
        props: 'address',
        label: '地址',
        width: '180'
      }],
      multipleSelection: [],
      pagData: { // 分页信息
        total: 100,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50]
      },
      activeName: 'first'
    }
  },
  methods: {
    // 编辑按钮
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 删除按钮
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 单选框按钮
    getCurrentRow(index) {
      console.log(index)
      this.radio = index
    },
    // 分页自定义函数
    pagHandle(val) {
      console.log(val)
    },
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(val) {
      console.log(val)
    },
    // 标签页切换事件
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.mainDiv{
  margin-left: 10px;
  .fromDiv{
    .title{
      width: 100%;
      height: 50px;
      // background: red;
      margin-left: 10px;
      margin-top: 10px;
      span{
        float: left;
        width: 180px;
        height: 50px;
        line-height: 50px;
        text-indent: 32px;
      }
      .el-form{
        float: left;
        margin-left: 100px;
        margin-top: 5px;
        width:350px;
      }
      .btnDiv{
        float:right;
        margin-top: 5px;
        margin-right: 20px;
      }
    }
  }
  .checkDiv{
    .bottomTit{
      height: 50px;
      width: 100%;
      background: #ccc;
      span{
        float: left;
        width: 150px;
        height: 50px;
        line-height: 50px;
        text-indent: 32px;
      }
      .el-form{
        float: left;
        margin-left: 50px;
        margin-top: 5px;
        width:400px;
      }
      .btnDiv{
        float:right;
        margin-top: 5px;
        margin-right: 20px;
      }
    }
  }
}
</style>
