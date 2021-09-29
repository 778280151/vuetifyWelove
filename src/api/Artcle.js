/*
文章页面请求api
 */
import request from '@/utils/request'

const Artcle = {
  getArtclelist: function getArtclelist(param) {
    return request({

      url: 'welove/contents/selectall',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      method: 'get',
      params: param // 这里的param是get请求会拼接到后面的地方
    })
  },
  addArtcle: function (param) {
    return request({
      url: 'welove/contents/dayimasubmit',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      // params: param,
      data: param // data是post请求封装到body的方法，切莫不可乱写
    })
  },
  getOneArtcle: function (param) {
    return request({
      url: 'welove/contents/getData',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'GET',
      data: param // data是post请求封装到body的方法，切莫不可乱写
    })
  },
  deleteForId: function (param) {
    return request({
      url: 'welove/contents/delete',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param // data是post请求封装到body的方法，切莫不可乱写
    })
  },
  updateForId: function (param) {
    return request({
      url: 'welove/contents/update',
      // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'post',
      data: param // data是post请求封装到body的方法，切莫不可乱写
    })
  }
}

export default Artcle
