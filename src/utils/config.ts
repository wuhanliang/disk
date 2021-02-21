// 请求服务地址处理
let BASE_URL = process.env.VUE_APP_API_URL as string

if (process.env.VUE_APP_ENV === 'production' || process.env.VUE_APP_ENV === 'uat') {  
  BASE_URL = `${window.location.protocol}//${window.location.hostname}:${(process as any).env.VUE_APP_API_URL.match(/\d+$/g)[0]}`
}
export {
  BASE_URL
}