<template>
  <div>
    现场稽查
    <columnEchars :obj-echars="option" />
    <columnEchars :obj-echars="option1" />
    <columnEchars :obj-echars="option4" />
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
        id: 'areaChart',
        color: ['red', 'blue', 'yellow', 'pink', 'green'],
        title: {
          text: '堆叠区域图'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false, // 控制文字是否在刻度线中间显示
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      option1: {
        id: 'echarstwo',
        color: ['blue', 'red', 'green', 'yellow'],
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
          }, '属性', 'name', '折线'],
          borderRadius: 20 // 圆角半径，单位px，支持传入数组分别指定 4 个圆角半径
        },
        xAxis: {
          //  type:'value',
          axisTick: {
            // show: false // 去掉x轴刻度
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
        }, {
          name: '属性',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }, {
          name: 'name',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }, {
          name: 'name',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      option4: {
        id: 'echarsfour',
        angleAxis: {
          show: false
        },
        radiusAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四'],
          show: false,
          z: 10
        },
        polar: {},
        series: [{
          type: 'bar',
          data: [0, 20],
          coordinateSystem: 'polar',
          name: 'A',
          color: 'white'
          // stack: 'a'
        }, {
          type: 'bar',
          data: [0, 15],
          coordinateSystem: 'polar',
          name: 'B'
          // stack: 'a'
        }, {
          type: 'bar',
          data: [0, 10],
          coordinateSystem: 'polar',
          name: 'C'
          // stack: 'a'
        }, {
          type: 'bar',
          data: [0, 8],
          coordinateSystem: 'polar',
          name: 'D'
        }],
        legend: {
          show: true,
          data: ['A', 'B', 'C', 'D']
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
