<template>
  <div>
    <ul class="mainUl">
      <li v-for="(item, index) in flowChartArr" :key="index">
        <span>{{ item.detail }}</span><span>{{ item.num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    flowChartArr: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.mainUl{
  float:left;
  background: #808080;
  padding: 10px 20px 10px 10px;
  li span:first-child{
    display: block;
    float: left;
    font-size: 14px;
    height: 18px;
    line-height: 16px;
    // background: blue;
    color: white;
  }
  li span:last-child{
    display: block;
    float: left;
    font-size: 14px;
    height: 18px;
    line-height: 16px;
    // background: blue;
    margin-left: 30px;
    color: orange;
  }
}
</style>
