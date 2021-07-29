
const request = require('../utils/requerst')
// 登录请求
export const login = (data) =>{
  const options ={
    data
  }
  return request.post('/api/auth/login',options)
}
// 注册请求
export const register = data =>{
  const options ={
    data
  }
  return request.post('/api/auth/register',options)
}
// 绑定或者解绑
export const bind = data =>{
  const options ={
    data
  }
  return request.post('/api/auth/wx/bind',options)
}
// 退出
export const logout = () =>{

  return request.post('/api/auth/logout')
}
