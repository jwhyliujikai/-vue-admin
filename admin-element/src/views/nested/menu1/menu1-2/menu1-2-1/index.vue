<template>
  <div class="mainDiv">
    <div class="formDiv">
      <h2>
        稽查任务监控
      </h2>
      <el-form ref="form" :model="form" label-width="110px">
        <el-row>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-form-item label="供电单位：">
                <el-input v-model="form.unit" />
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6">
            <el-form-item label="任务状态：">
              <el-select v-model="form.taskSTS" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai" />
                <el-option label="区域二" value="beijing" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="任务制定时间：">
              <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
              <el-col class="line" :span="2">~：</el-col>
              <el-col :span="11">
                <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="任务编号：">
              <el-input v-model="form.taskNum" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="任务名称：">
              <el-input v-model="form.taskName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="要求完成时间：">
              <el-col :span="11">
                <el-date-picker v-model="form.date3" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
              <el-col class="line" :span="2">~：</el-col>
              <el-col :span="11">
                <el-date-picker v-model="form.date4" type="date" placeholder="选择日期" style="width: 100%;" />
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="tableDiv">
      <div class="titleDiv">
        <span>稽查任务列表</span>
        <el-button type="primary">查询</el-button>
      </div>
      <baseTable :columns="columns" :table-pro="tablePro" :data-source="dataSource" />
      <pagination :pag-data="pagData" />
    </div>
  </div>
</template>

<script>
import baseTable from '../../../../../components/common/baseTable'
import pagination from '../../../../../components/common/pagination'
import { getTableList } from '../../../../../api/taskControl'
export default {
  name: 'Control',
  components: {
    baseTable,
    pagination
  },
  data() {
    return {
      form: {
        name: '',
        taskSTS: '',
        date1: '',
        date2: '',
        taskNum: '',
        taskName: '',
        date3: '',
        date4: ''
      },
      columns: [{
        hasSort: false, // <Boolean> 是否排序
        isShow: true, // <Boolean> 是否展示
        prop: 'id', // <String>  对应属性名
        label: '序号', // <String>   表头标签
        align: 'center', // 表头内容是否居中
        width: 60 // 列宽
      }, {
        hasSort: false,
        isShow: true,
        prop: 'taskNum',
        label: '编号',
        align: 'center',
        width: 170
      }, {
        hasSort: false,
        isShow: true,
        prop: 'taskName',
        label: '任务名称',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        isShow: true,
        prop: 'date',
        label: '制定日期',
        align: 'center',
        width: 160
      }, {
        hasSort: false,
        isShow: true,
        prop: 'finishDate',
        label: '要求完成日期',
        align: 'center',
        width: 160
      }, {
        hasSort: false,
        isShow: true,
        prop: 'taskSts',
        label: '任务状态',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        isShow: true,
        prop: 'workNum',
        label: '生成工单数量',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        isShow: true,
        prop: 'finishNum',
        label: '完成工单数量',
        align: 'center',
        width: 120
      }, {
        hasSort: false,
        isShow: true,
        prop: 'doorNum',
        label: '发起户数',
        align: 'center',
        width: 100
      }, {
        hasSort: false,
        isShow: true,
        prop: 'finishDoor',
        label: '完成户数',
        align: 'center',
        width: 100
      }],
      tablePro: {
        border: false,
        loading: true
      },
      dataSource: [], // 表单mock数据
      pagData: {
        total: 0,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50]
      }
    }
  },
  // props: [],
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getTableList().then(response => {
        console.log(response)
        this.dataSource = response.data.items
        this.pagData.total = response.data.total
        this.tablePro.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.mainDiv{
  .formDiv{
    h2{
      width: 100%;
      height: 40px;
      background: #ccc;
      font-size: 16px;
      text-indent: 32px;
      line-height: 40px;
      font-weight: normal;
    }
    .el-form{
      margin-top: 20px;
    }
  }
  .tableDiv{
    .titleDiv{
      width: 100%;
      height: 40px;
      background: #ccc;
      span{
        float: left;
        height: 40px;
        line-height: 40px;
        text-indent: 32px;
      }
      .el-button{
        float: right;
        margin-right: 10px;
      }
    }
  }
}
</style>
