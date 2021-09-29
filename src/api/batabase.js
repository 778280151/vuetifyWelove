/*
数据库表页面请求api
 */
import request from '@/utils/request'

const database = {
  AllDataBase: function fetchList() {
    return request({
      url: '/welovemanage/getTable',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST'
      // params: query
    })
  },

  postDataBase: function fetchList(param) {
    console.log(param)
    return request({
      url: '/welovemanage/generatortable',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      data: param
    })
  }
}

export default database
