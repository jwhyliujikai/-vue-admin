<template>
  <div>
    <div>
      <columnEchars :obj-echars="option" />
    </div>
    <div>
      <columnEchars :obj-echars="option1" />
    </div>
  </div>
</template>

<script>
import columnEchars from '../../components/common/columnEchars'
export default {
  components: {
    columnEchars
  },
  data() {
    return {
      option: {
        id: 'echarsone',
        color: ['blue'],
        title: { // 标题组件，包含主标题和副标题。
          text: 'ECharts 入门示例' // 主标题
          // subtext: '纯属虚构' // 副标题
        },
        legend: { // 图例组件
          data: [{
            name: '销量',
            icon: 'rect', // 提供的标记类型包括 'circle'（圆形）, 'rect'（正方形）, 'roundRect'（圆角矩形）, 'triangle' （三角）, 'diamond'（菱形）, 'pin', 'arrow', 'none'
            textStyle: { // 文字颜色
              color: 'red'
            }
          }, '属性'],
          borderRadius: 20 // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
        },
        xAxis: {
          //  type:'value',
          axisTick: {
            show: false // 去掉x轴刻度
          },
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          // type: 'category',
          name: '数量',
          axisLabel: {
            // formatter: '{value} °C', // 控制Y轴文字后的单位显示
          },
          splitLine: { // y轴网格
            show: true,
            lineStyle: {
              // color: 'red', // 修改网格线颜色
              type: 'dashed' // 线类型----可选 'solid','dashed 虚线','dotted '
            }
          },
          axisTick: {
            show: false // 去掉y轴刻度
          },
          axisLine: {
            // show:false, // 是否显示Y轴
            lineStyle: {
            // color:'#fff', // y坐标轴的轴线颜色
            }
          }
        },
        series: [{
          name: '销量',
          type: 'pictorialBar',
          symbolSize: ['30%', '100%'],
          symbolOffset: ['-70%', 0],
          symbol: 'path://M150 50 L130 130 L170 130 Z',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      option1: {
        id: 'echarstwo',
        color: ['blue'],
        title: { // 标题组件，包含主标题和副标题。
          text: 'ECharts 入门示例' // 主标题
          // subtext: '纯属虚构' // 副标题
        },
        legend: { // 图例组件
          data: [{
            name: '销量',
            icon: 'rect', // 提供的标记类型包括 'circle'（圆形）, 'rect'（正方形）, 'roundRect'（圆角矩形）, 'triangle' （三角）, 'diamond'（菱形）, 'pin', 'arrow', 'none'
            textStyle: { // 文字颜色
              color: 'red'
            }
          }, '属性'],
          borderRadius: 20 // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
        },
        xAxis: {
          //  type:'value',
          axisTick: {
            show: false // 去掉x轴刻度
          },
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          // type: 'category',
          name: '数量',
          axisLabel: {
            // formatter: '{value} °C', // 控制Y轴文字后的单位显示
          },
          splitLine: { // y轴网格
            show: true,
            lineStyle: {
              // color: 'red', // 修改网格线颜色
              type: 'dashed' // 线类型----可选 'solid','dashed 虚线','dotted '
            }
          },
          axisTick: {
            show: false // 去掉y轴刻度
          },
          axisLine: {
            // show:false, // 是否显示Y轴
            lineStyle: {
            // color:'#fff', // y坐标轴的轴线颜色
            }
          }
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
  watch: {

  },
  mounted() {
    // var myChart = this.echarts.init(document.getElementById('echarts'));
    // var option = {
    //   color: ['blue'],
    //         title: { // 标题组件，包含主标题和副标题。
    //             text: 'ECharts 入门示例', // 主标题
    //             // subtext: '纯属虚构' // 副标题
    //         },
    //         tooltip: {},
    //         legend: { // 图例组件
    //           data:[{
    //             name: '销量',
    //             icon: 'rect', // 提供的标记类型包括 'circle'（圆形）, 'rect'（正方形）, 'roundRect'（圆角矩形）, 'triangle' （三角）, 'diamond'（菱形）, 'pin', 'arrow', 'none'
    //             textStyle: { // 文字颜色
    //               color: 'red'
    //             }
    //           }, "属性"],
    //           borderRadius: 20 // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
    //         },
    //         xAxis: {
    //         //  type:'value',
    //           axisTick:{
    //             show:false //去掉x轴刻度
    //           },
    //           data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    //         },
    //         yAxis: {
    //           // type: 'category',
    //           name: '数量',
    //           axisLabel: {
    //             // formatter: '{value} °C', // 控制Y轴文字后的单位显示
    //           },
    //           splitLine:{ // y轴网格
    //             show:true,
    //             lineStyle: {
    //             // color: 'red', // 修改网格线颜色
    //             type: 'dashed' // 线类型----可选 'solid','dashed 虚线','dotted '
    //             }
    //           },
    //           axisTick:{
    //             show:false //去掉y轴刻度
    //           },
    //           axisLine:{
    //             // show:false, // 是否显示Y轴
    //             lineStyle:{
    //             // color:'#fff', // y坐标轴的轴线颜色
    //             }
    //           }
    //         },
    //         series: [{
    //             name: '销量',
    //             type: 'bar',
    //             data: [5, 20, 36, 10, 10, 20]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
  },
  methods: {}
}
</script>

<style lang="scss" scoped>

</style>
