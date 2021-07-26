const request = require('../utils/requerst')
// 获取首页数据
// cjs
// const index = ()=>{
//  return request.get('/api/index')
// }
// cjs 语法
// module.exports={
//   index
// }

// es6
export const index=(data)=>{
  const options = {
    data
  }
  return request.get('/api/index',options)
}

