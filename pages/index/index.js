// index.js
// 获取应用实例
const app = getApp()
const request = require('../../utils/requerst')
// cjs语法
// const index = require('../../service/index')
import {index}  from '../../service/index'
Page({
  data: {
    slides:[],
    goods:[],
    current_page:1
  },
  // 获取点击id
  ch(e){
    // e.currentTarget.dataset.test  // 哈哈
     let id =e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/goods/goods?id=' + id,
    })
  },

  onLoad() {
    this.getData()
  },
  onReachBottom(){
    this.setData({
      current_page: ++this.data.current_page
    })
    this.getData() 
    
  },
  
  getData(){
    // 发送请求获取数据
    index({page: this.data.current_page}).then(res=>{
      // console.log(this.data.current_page);
        if(this.data.current_page===1){
          this.setData({
            slides:res.slides,
            goods:res.goods.data 
          })
        } 
        // let list = this.data.goods.concat(res.goods.data)
        this.setData({ 
          // goods:list
          goods:[...this.data.goods,...res.goods.data]
        })
         
    })
    
  }

})
