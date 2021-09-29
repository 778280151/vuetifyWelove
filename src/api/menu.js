/*
菜单api
 */
import request from '@/utils/request'

const menu = {
  getallmenu() {
    return request({
      url: 'welovemanage/welovemanage/welove-menu/getmenu',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'GET'
    })
  },
  addmenu(param) {
    return request({
      url: 'welovemanage/welovemanage/welove-menu/addmenu',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      data: param
    })
  },
  updatemenu(param) {
    return request({
      url: 'welovemanage/welovemanage/welove-menu/update',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'PUT',
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

export default menu
