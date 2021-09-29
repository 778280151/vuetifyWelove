/*
相册管理api
 */
import request from '@/utils/request'

const photo = {
  getphotolist: function getArtclelist(param) {
    return request({
      url: 'welovemanage/welovemanage/filelist/getlist',
      method: 'post',
      params: param// 这里的param是from提交
    })
  },
  addphoto: function getArtclelist(param) {
    return request({
      url: 'welovemanage/welovemanage/filelist/add',
      method: 'post',
      data: param // 这里的data是json提交方式
    })
  },
  delete: function getArtclelist(param) {
    return request({
      url: 'welovemanage/welovemanage/filelist/delete',
      method: 'get',
      params: param// 这里的param是from提交
    })
  }
}

export default photo
