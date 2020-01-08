<template>
  <div class="spanOneComponent">
    <!-- <span>主动检修工单数</span>
    <span>34</span>
    <span>个</span> -->
    <spanOneCompnent :span-one-obj="spanOneObj" />
    <spanTwoCompnent :span-two-obj="spanTwoObj" />
    <flowChartUl :flow-chart-arr="flowChartArr" />
    <ul>
      <router-link :to="{name: 'HiddenTrouble', query: { spanTwoObj:spanTwoObj }}" tag="li">test路由传参</router-link>
    </ul>
  </div>

</template>

<script>
import spanOneCompnent from '../../components/common/spanOneComponent'
import spanTwoCompnent from '../../components/common/spanTwoComponent'
import flowChartUl from '../../components/common/flowChartUl'
export default {
  components: {
    spanOneCompnent,
    spanTwoCompnent,
    flowChartUl
  },
  data() {
    return {
      spanOneObj: {
        name: '主动检修工单数',
        num: '34',
        unit: '个'
      },
      spanTwoObj: {
        name: '主动检修工单数',
        num: '34',
        unit: '个'
      },
      flowChartArr: [
        {
          detail: '业务流程重启数',
          num: '12'
        },
        {
          detail: '低压非居民办电超长',
          num: '12'
        },
        {
          detail: '收资数量异常（营商）',
          num: '13'
        },
        {
          detail: '业务受理互动多次',
          num: '15'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .mainUl{
//   float:left;
//   background: red;
//   padding: 10px 20px 10px 10px;
//   li span:first-child{
//     display: block;
//     float: left;
//     font-size: 14px;
//     height: 18px;
//     line-height: 16px;
//     // background: blue;
//     color: white;
//   }
//   li span:last-child{
//     display: block;
//     float: left;
//     font-size: 14px;
//     height: 18px;
//     line-height: 16px;
//     // background: blue;
//     margin-left: 30px;
//     color: orange;
//   }
// }
// .spanOneComponent{
//   width: auto;
//   height: 40px;
//   background: #ccc;
//   float: left;
//   span:first-child {
//     // color: red;
//     display: block;
//     float: left;
//     line-height: 40px;
//     font-size: 18px;
//     font-weight: 650;

//   }
//   span:nth-child(2){
//     display: block;
//     float: left;
//     height: 40px;
//     color: blue;
//     line-height: 30px;
//     font-size: 18px;
//     font-weight: 650;
//     margin-left: 20px;
//   }
//   span:last-child{
//     color: rgb(22, 5, 5);
//     float: left;
//     font-size: 16px;
//     margin-left: 15px;
//     line-height: 40px;
//   }
// }
</style>
