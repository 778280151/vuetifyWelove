import request from '@/utils/request'

// import {use} from "element-ui/src/locale";

export function login(data) {
  const res = request({
    url: '/oauthservice/login/sys/login',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    method: 'POST',
    data: data
  })
  res.then(ref => {
    alert(ref.meassage)
  })
  return res
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/login/info',
    method: 'get',
    data: {token}
  })
}

export function logout(token) {
  return request({
    url: '/oauthservice/login/sys/out',
    method: 'POST'
  })
}

export function addUser(data) {
  return request({
    url: '/oauthservice/user/addUser',
    method: 'POST',
    data: data
  })
}

export function getAllUser() {
  return request({
    url: '/oauthservice/user/getAllUser',
    method: 'GET'
  })
}

