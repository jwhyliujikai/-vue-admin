import request from '@/utils/request'

export function getTableList(params) {
  return request({
    url: '/taskControl/list',
    method: 'get',
    params
  })
}
