const request = require('../utils/requerst')
// 商品详情
export const show = id =>{
  const options ={
    data:{
    }
  }
  return request.get(`/api/goods/${id}`,options)
  // return request.get('/api/goods/1',options)
}
// 商品收藏/取消
export const collects = id =>{
  return request.post(`/api/collects/goods/${id}`)
}