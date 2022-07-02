import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/mn',
    timeout: 5000
  })

  // 请求拦截的，也就是数据发送出去之后
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 响应拦截，就是数据发送之后得到数据
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
