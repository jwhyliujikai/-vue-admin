<template>
  <div>
    <div :id="objEchars.id" class="echartDiv" />
  </div>
</template>

<script>
export default {
  // name: 'columnEchars',
  // props: ['objEchars'],
  props: {
    objEchars: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this.objEchars)
    const _this = this
    _this.drawEchars(_this.objEchars)
  },
  methods: {
    // 绘制echars图
    drawEchars(objEchars) {
      console.log(objEchars.id)
      var myChart = this.echarts.init(document.getElementById(objEchars.id))
      console.log(myChart)
      var option = {
        color: objEchars.color, // 柱状显示的颜色
        title: objEchars.title, // 标题组件，包含主标题和副标题。
        legend: objEchars.legend, // 图例组件
        xAxis: objEchars.xAxis, //
        yAxis: objEchars.yAxis,
        series: objEchars.series
      }
      console.log(objEchars)
      myChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
#echarsone{
  height: 200px;
  width: 400px;
}
#echarstwo{
  height: 500px;
  width: 400px;
}
</style>
