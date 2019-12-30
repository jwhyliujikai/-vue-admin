import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    'id|+1': 0,
    proNum: '@natural(1000000,9999999)', // 工单编号
    proName: '@cword(4, 6)', // 方案名称
    desPeople: '@name()', // 方案制定人
    unit: '格蒂电力有限公司', // 所属单位
    userId: '@natural(1000,9999)', // 用户编号
    userName: '@cname()', // 用户名称
    reason: '@cword(4, 6)', // 剔除申请原因
    verdict: '通过', // 剔除审核结论
    opinion: '无'// 剔除审核意见
  }]
})

export default [
  {
    url: '/hiddenTrouble/list',
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

