const request = require('../utils/requerst')
// 获取用户信息
export const user = (data) =>{
  const options ={
    data
  }
  return request.get('/api/user',options)
}
