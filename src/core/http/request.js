import axios from 'axios'
import router from '@/router'
import dialog from '@/components/Dialog'
import JSONbig from 'json-bigint'
import { getToken, setToken } from '@/utils'

// 创建axios实例
const service = axios.create({
  timeout: 1000,
  withCredentials: true,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded charset=utf-8'
    'Content-Type': 'application/json charset=utf-8',
    'deviceType': '4'
  },
  transformResponse: [
    function(data) {
      if (typeof data === 'string') {
        const JSONbigString = new JSONbig({ storeAsString: true })
        return JSONbigString.parse(data)
      } else {
        return data
      }
    }
  ]
})

// request拦截器
service.interceptors.request.use(
  config => {
    const token = getToken()
    const menuIdJsonStr = window.sessionStorage.getItem('currentMenuId')
    let currentMenuId
    if (menuIdJsonStr != null) {
      currentMenuId = (JSON.parse(menuIdJsonStr) || {}).data
    }
    if (token != null) config.headers['Authorization'] = token
    if (currentMenuId != null) config.headers['MenuId'] = currentMenuId
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    if (response.data && response.data.errorCode === 'UNAUTHORIZED_LOGIN') { // 401, token失效
      dialog.closeAll()
      router.push({ name: 'login' }) // TODO: 跳登录页
    } else {
      if (response.headers['refreshedtoken'] != null) {
        setToken(response.headers['refreshedtoken'])
      }
    }
    return response
  }, error => {
    const response = error.response

    if (response && response.data) {
      if (response.data.errorCode === 'UNAUTHORIZED_LOGIN') {
        dialog.closeAll()
        router.push({ name: 'login' }) // TODO: 跳登录页
      }

      return Promise.reject(response.data)
    } else {
      return Promise.reject(new Error({
        errorMessage: '数据获取失败，请稍后再试'
      }))
    }
  }
)

export default service
