import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    'id|+1': 0, // 序号
    taskNum: '@natural(1000000,9999999)', // 编号
    taskName: '@cword(4, 6)', // 任务名称
    date: '@date("yyyy-MM-dd")', // 制定日期
    finishDate: '@date("yyyy-MM-dd")', // 要求完成日期
    taskSts: '处理中', // 任务状态
    workNum: '@natural(10000,99999)', // 生成工单数量
    finishNum: '@natural(1000,9999)', // 完成工单数量
    doorNum: '@natural(1000,9999)', // 发起户数
    finishDoor: '@natural(1000,9999)' // 完成户数
  }]
})

export default [
  {
    url: '/taskControl/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
