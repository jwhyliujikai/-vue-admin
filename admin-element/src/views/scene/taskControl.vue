<template>
  <div>
    现场稽查
    <columnEchars :obj-echars="option" />
    <columnEchars :obj-echars="option1" />
    <columnEchars :obj-echars="option5" />
    <columnEchars :obj-echars="option6" />
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
      },
      option5: {
        id: 'echarsfive',
        title: {
          text: '多雷达图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'center',
          data: ['某软件', '某主食手机', '某水果手机', '降水量', '蒸发量']
        },
        radar: [
          {
            indicator: [
              { text: '外观', max: 100 },
              { text: '拍照', max: 100 },
              { text: '系统', max: 100 },
              { text: '性能', max: 100 },
              { text: '屏幕', max: 100 }
            ],
            // radius: 80,
            // center: ['50%', '60%']
            splitArea: {
              areaStyle: {
                color: ['rgba(110, 172, 200, 1)'],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
              }
            }
          }
        ],
        series: [
          {
            color: 'skyblue', // 修改阴影颜色
            type: 'radar',
            tooltip: {
              trigger: 'item'
            },
            areaStyle: {},
            data: [
              {
                value: [50, 50, 50, 50, 50],
                name: '某软件'
              }
            ]
          }
        ]
      },
      option6: {
        id: "echarsseven",
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
              return [pt[0], '10%'];
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%']
        },
        series: [
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#a2c4e6'
            },
            areaStyle: {
              color: this.echarts.graphic.LinearGradient(0, 0, 0, 1,[{
                  offset: 0,
                  color: '#a2c4e6'
              },{
                  offset: 1,
                  color: '#a2c4e6'
              }
              ])
            },
            data: ['75', '85', '99', '110', '120', '150', '130', '110', '109', '78', '65', '53']
          },
          {
            name: '模拟数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
              color: '#97d0a2'
            },
            areaStyle: {
              color: this.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#97d0a2'
              },{
                offset: 1,
                color: '#97d0a2'
              }
              ])
            },
            data: ['50', '75', '89', '100', '110', '140', '120', '100', '99', '68', '55', '43']
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
