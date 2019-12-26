<template>
  <div class="mainDiv">
    <!-- <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="年龄"
    prop="age"
  >
    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
</el-form> -->
    <h2>现场方案制定</h2>
    <div class="fromDiv">
      <el-form :model="ruleForm" :rules="rules" class="demo-form-inline">
        <el-row>
          <el-col :span="8">
            <el-form-item label="稽查类型" prop="type" required>
              <el-select v-model="ruleForm.type" placeholder="请选择">
                <el-option label="在线稽查存疑" value="shanghai"></el-option>
                <el-option label="专项稽查存疑" value="beijing"></el-option>
                <el-option label="业务重点问题" value="beijing"></el-option>
                <el-option label="重大风险事件" value="beijing"></el-option>
                <el-option label="突发问题" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="紧急程度" prop="urgency" required>
              <el-select v-model="ruleForm.urgency">
                <el-option label="重要且紧急" value="shanghai"></el-option>
                <el-option label="紧急不重要" value="beijing"></el-option>
                <el-option label="重要不紧急" value="beijing"></el-option>
                <el-option label="不重要不紧急" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="要求完成时间" required>
                <el-form-item prop="date">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date"></el-date-picker>
                </el-form-item>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left:-21px">
          <el-col>
            <el-form-item label="方案名称" prop="name" label-width="100px" required>
              <el-input v-model="ruleForm.name" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="方案简要内容" prop="content" label-width="110px" required style="margin-left:-10px;">
              <el-input type="textarea" v-model="ruleForm.content" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="处理要求" prop="deal" label-width="100px" required>
              <el-input type="textarea" v-model="ruleForm.deal" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left:-21px">
          <el-col :span="12">
              <el-form-item label="派发信息" prop="message" label-width="100px" required >
                <div @click="dialogVisible = true" style="width:100%">
                <el-input v-model="ruleForm.message" placeholder="请选择" style="width:100%;"></el-input>
                </div>
              </el-form-item>
            <el-dialog
              title="派发信息"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <el-tree
                :data="data"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                :props="defaultProps">
              </el-tree>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="getCheckedNode">确 定</el-button>
              </span>
            </el-dialog>
          </el-col>
          <el-col :span="12" v-show="contant">
            <el-form-item label="责任单位" label-width="100px">
              <el-input v-model="ruleForm.duty"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="margin-left:25px;">
          <el-col>
            <el-form-item label="附件：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                multiple
                :limit="3">
                <el-button size="small" type="primary">点击上传</el-button>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="bottomDiv">
      <span>明细信息</span>
      <div class="radio">
        <el-radio-group v-model="radio" @change="radioHandle">
          <el-radio label="1">事件</el-radio>
          <el-radio label="2">用户明细</el-radio>
        </el-radio-group>
      </div>
      <el-button type="primary" v-show="contant">新增明细</el-button>
    </div>
    <div class="btnDiv">
      <div v-show="contant">
        <ul >
          <li>暂无数据</li>
        </ul>
        <Pagination :pagData = 'pagData' @callback='pagHandle' class="pagination"></Pagination>
      </div>
      <div class="btn">
        <el-button type="primary">保存</el-button>
        <el-button type="primary">发送</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import Pagination from '../../../../components/common/pagination'
export default {
  data() {
    return {
      ruleForm: {
        type: '',
        urgency: '',
        date: '',
        name: '',
        content: '',
        deal: '',
        message: '',
        duty: ''
      },
      rules: {
        type: [
          { required: true, message: '请输入稽查类型', trigger: 'blur' }
        ],
        urgency: [
          { required: true, message: '请输紧急程度', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请输入日期', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入简要内容', trigger: 'blur' }
        ],
        deal: [
          { required: true, message: '请输入处理要求', trigger: 'blur' }
        ],
        message: [
          { required: true, message: '请输入派发信息', trigger: 'blur' }
        ]
      },
      dialogVisible: false,
      data: [{
        id: 1,
        label: '河南',
        children: [{
          id: 2,
          label: '国网河南省电力公司'
        }, {
          id: 3,
          label: '国网郑州供电公司'
        }, {
          id: 4,
          label: '国网平顶山供电公司'
        }, {
          id: 5,
          label: '国网南阳供电公司'
        }, {
          id: 6,
          label: '国网洛阳供电公司'
        }, {
          id: 7,
          label: '国网安阳供电公司'
        }, {
          id: 8,
          label: '国网开封供电公司'
        }, {
          id: 9,
          label: '国网新乡供电公司'
        }, {
          id: 10,
          label: '国网焦作供电公司'
        }, {
          id: 11,
          label: '国网三门峡供电公司'
        }
        ]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      radio: '1', // 单选按钮
      pagData: {
        total: 100,
        pageSize: 10,
        pageSizes: [5, 10, 20, 50]
      },
      contant: false // 控制数据、新增明细按钮的隐藏、显现
    }
  },
  components: {
    Pagination
  },
  mounted() {

  },
  methods: {
    handleClose(done) {
      // console.log(done)
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    handleRemove(file) {
      console.log(file)
    },
    handlePreview(file) {
      console.log(file)
    },
    // handleSizeChange(val){
    //   console.log(val)
    // },
    // handleCurrentChange(val){
    //   console.log(val)
    // },
    pagHandle(val) {
      console.log(val)
    },
    radioHandle(val) {
      // console.log(val)
      if (val === 1) {
        this.contant = false
      } else {
        this.contant = true
      }
    },
    // 派发信息弹框选中事件
    getCheckedNode(val) {
      this.dialogVisible = false
      // console.log(this.$refs.tree.getCheckedNodes())
      var arrTree = this.$refs.tree.getCheckedNodes()
      // console.log(arrTree)
      var arrMessage = []
      let ids = ''
      arrTree.map((item) => {
        arrMessage.push(item.label)
        return arrMessage
      })
      // console.log(arrMessage)
      ids = arrMessage.join(',')
      // console.log(ids)
      this.ruleForm.message = ids
    }
  }
}
</script>

<style lang="scss" scoped>
.mainDiv{
  h2{
    height: 40px;
    width:100%;
    font-size: 16px;
    background: #ccc;
    // display: flex;
    // align-items: center
    line-height: 40px;
    text-indent: 32px;
    font-weight: normal;
    margin-left: 10px;
  }
  .fromDiv{
    margin-top:20px;
    margin-left: 40px;
  }
  .bottomDiv{
    background: #ccc;
    height: 40px;
    width:100%;
    font-size: 16px;
    span{
      float: left;
      width: 110px;
      height: 40px;
      line-height: 40px;
      text-indent: 32px;

    }
    .radio{
      float: left;
      width: 200px;
      height: 40px;
      .el-radio{
        margin-top: 13px;
      }
    }
    .el-button{
      float:right;
      margin-right: 20px;
    }
  }
  .btnDiv{
      width: 100%;
      margin-top: 30px;
      position: relative;
      ul{
        width: 100%;
        // background: red;
        text-align: center;
      }
      .pagination{
        margin-right: 0;
        margin-top: 30px;
        position: absolute;
        right: 0;
        // top:30;
      }
      .btn{
        position: absolute;
        right: 0;
        margin-top: 90px;
      }
    }
    .el-tree{
      width: 340px;
      height: 250px;
      // background: red;
      overflow: auto;
    }
}
</style>
