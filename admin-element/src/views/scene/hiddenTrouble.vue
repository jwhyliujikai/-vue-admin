<template>
  <div class="mainDiv">
    <h2>
      剔除查询
    </h2>
    <el-form class="demo-form-inline" :model="formInline" label-width="110px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="工单编号">
            <el-input v-model="formInline.id" placeholder="工单编号" style="width:100%" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="方案名称">
            <el-input v-model="formInline.name" placeholder="方案名称" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户编号">
            <el-input v-model="formInline.userId" placeholder="用户编号" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="date1" label="工单发起日期">
            <el-date-picker v-model="formInline.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="date2" label="至">
            <el-date-picker v-model="formInline.date2" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="审核" prop="check" style="float:left;width:240px">
            <el-select v-model="formInline.check" placeholder="请选择活动区域">
              <el-option label="全部" value="1" />
              <el-option label="已审核" value="2" />
              <el-option label="待审核" value="3" />
            </el-select>
          </el-form-item>
          <div style="float: right;margin-top: 15px;">
            <el-button type="primary" @click="queryTable">查询</el-button>
            <el-button type="primary" @click="clearForm">清空</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
    <h2>剔除用户列表</h2>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="column in columns"
        :key="column.prop"
        header-align="center"
        :sortable="column.hasSort"
        :prop="column.prop"
        :label="column.label"
        :align="column.align"
        :width="column.width"
      />
      <el-table-column label="操作" style="width:170px" align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >通过</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >不通过</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :pag-data="pagData" @callback="pagHandle" />
  </div>
</template>

<script>
import { getTableList } from '../../api/hiddenTrouble'
import pagination from '../../components/common/pagination'
export default {
  components: {
    pagination
  },
  data() {
    return {
      formInline: {
        id: '',
        name: '',
        userId: '',
        date1: '',
        date2: '',
        check: '全部'
      },
      tableData: [], // 表格数据
      pagData: { // 分页信息
        total: 0,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50]
      },
      columns: [{
        hasSort: false, // <Boolean> 是否排序
        prop: 'id', // <String>  对应属性名
        label: '序号', // <String>   表头标签
        align: 'center', // 表头内容是否居中
        width: 50 // 列宽
      }, {
        hasSort: false,
        prop: 'proNum',
        label: '工单编号',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        prop: 'proName',
        label: '方案名称',
        align: 'center',
        width: 100
      }, {
        hasSort: false,
        prop: 'desPeople',
        label: '方案制定人',
        align: 'center',
        width: 100
      }, {
        hasSort: false,
        prop: 'unit',
        label: '所属单位',
        align: 'center',
        width: 150
      }, {
        hasSort: false,
        prop: 'userId',
        label: '用户编号',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        prop: 'userName',
        label: '用户名称',
        align: 'center',
        width: 100
      }, {
        hasSort: false,
        prop: 'reason',
        label: '剔除申请原因',
        align: 'center',
        width: 170
      }, {
        hasSort: false,
        prop: 'verdict',
        label: '剔除审核结论',
        align: 'center',
        width: 100
      }, {
        hasSort: false,
        prop: 'opinion',
        label: '剔除审核意见',
        align: 'center',
        width: 100
      }]
    }
  },
  mounted() {
    // 从store中取出存储的form的查询条件
    this.formInline = this.$store.state.hiddenTrouble
    this.fetchData()
    console.log(this.formInline)
  },
  methods: {
    // 查询
    queryTable() {
      const _this = this
      const formInline = {
        id: _this.formInline.id,
        name: _this.formInline.name,
        userId: _this.formInline.userId,
        date1: _this.formInline.date1,
        date2: _this.formInline.date2,
        check: _this.formInline.check
      }
      console.log(formInline)
      this.$store.commit('savehiddenTrouble', formInline)
    },
    // 清空
    clearForm() {
      this.formInline = {
        id: '',
        name: '',
        userId: '',
        date1: '',
        date2: '',
        check: '全部'
      }
    },
    // 通过
    handleEdit(index, row) {
      console.log(index, row)
    },
    // 不通过
    handleDelete(index, row) {
      console.log(index, row)
    },
    // 获取table数据
    fetchData() {
      getTableList().then(res => {
        console.log(res)
        this.tableData = res.data.items
        this.pagData.total = res.data.total
      })
    },
    // 分页自定义函数
    pagHandle(val) {
      console.log(val)
    }
  }

}
</script>

<style lang="scss" scoped>
  .mainDiv{
    width: 100%;
    height: 46px;
    h2{
      font-size: 16px;
      font-weight: normal;
      line-height: 46px;
      text-indent: 32px;
      background: #ccc;
      margin-top: 10px;
    }
    .el-row{
      .el-col{
        .el-form-item{
          margin-top: 15px;
        }
      }
    }

  }
</style>
