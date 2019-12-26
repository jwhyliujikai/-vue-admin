<template>
  <div class="mainDiv">
    <div class="fromDiv">
      <div class="title">
        <span>隐患排查方案制定</span>
        <el-form ref="form" :model="form" label-width="80px" style="width:280px">
          <el-form-item label="方案名称">
            <el-input v-model="form.name"></el-input>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
