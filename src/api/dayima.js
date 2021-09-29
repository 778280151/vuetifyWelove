/*
大姨妈页面请求api
 */
import request from '@/utils/request'

const dayima = {
  dayimalist: function fetchList(query) {
    return request({
      url: '/welove/dayima/selectall',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: query
    })
  },
  changePageClick(param) {
    return request({
      url: '/welove/dayima/selectall',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param
    })
  },
  addDaYiMaData(param) {
    return request({
      url: '/welove/dayima/dayimasubmit',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param
    })
  },
  getOneDaYiMaData(param) {
    return request({
      url: '/welove/dayima/getdayimadata',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param // params会把入参拼接到url上；data是放在body里发送给后台。
    })
  },
  DeleteRowData(param) {
    return request({
      url: '/welove/dayima/deleteone',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, // 注意这个是form提交的方式
      method: 'post',
      data: param
    })
  },
  updateone(param) {
    return request({
      url: '/welove/dayima/update',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param
    })
  }
}

export default dayima
