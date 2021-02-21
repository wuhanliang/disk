import axios from 'axios'
 
import { BASE_URL } from './config'
// 创建axios实例
const service:any = axios.create({
  baseURL: BASE_URL,
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use((config:any) => {
  // Do something before request is sentconfig.headers['Content-Type'] = 'application/json';
  config.headers['Authorization'] = sessionStorage.getItem('authorization') || ''
  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json'
  // 8080
  if (config.type == 'file') {
      config.headers['content-type'] = 'application/multipart/form-data'
  } else if (config.type == 'form') {
      config.headers['Content-type'] = 'application/x-www-form-urlencoded'
  }
  if (config.method.toLowerCase() === 'get') {
    config.data = true
  }
  // 8080
  return config
}, (error:any) => {
  // Do something with request error
  Promise.reject(error)
})

let alertErr = true


service.interceptors.response.use(
  (response:any) => {
    if (response.data.success === false) {
      if (response.data.code === 401) { // token失效
        if (alertErr) {
          alertErr = false
          // vm.$warning({
          //   title: '验证失效，请重新登录',
          //   content: response.data.msg,
          //   okText: '好的',
          //   onOk() {
          //     store.dispatch('Logout')
          //   }
          // })
        }
      } else {
        alertErr = true
        // vm.$notification.warning({
        //   message: response.data.msg,
        //   description: ''
        // })
      }
    } else {
      alertErr = true
    }
    return response
  },
  (error:any) => {
    if (error.response && error.response.data && error.response.data.msg) {
      // vm.$notification.warning({
      //   message: error.response.data.msg,
      //   description: ''
      // });
    } else if (error) {
      // vm.$notification.warning({
      //   message: error.message,
      //   description: ''
      // });
    }
    error.data = error.data || {}
    return error
  }
)