// index.js
// 获取应用实例
const app = getApp()
const request = require('../../utils/requerst')
Page({
  data: {

  },

  onLoad() {
    request.request('https://api.shop.eduwork.cn/api/index').then(res=>{
      // console.log(res);
    })
  },
 
})
