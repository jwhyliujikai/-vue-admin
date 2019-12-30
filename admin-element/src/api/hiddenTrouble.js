import request from '@/utils/request'

export function getTableList(params) {
  return request({
    url: '/hiddenTrouble/list',
    method: 'get',
    params
  })
}
