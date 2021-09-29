/*
文章页面请求api
 */
import request from '@/utils/request'

const updownloadmanager = {
  getArtclelist: function getArtclelist(param) {
    return request({
      url: 'welovemanage/contents/selectall',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'get',
      params: param // 这里的param是get请求会拼接到后面的地方
    })
  },
  addFile: function (param) {
    return request({
      url: 'welovemanage/upload',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'POST',
      // params: param
      data: param // data是post请求封装到body的方法，切莫不可乱写
    })
  }
}

export default updownloadmanager
