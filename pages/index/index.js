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
      console.log(this.data.current_page);
        if(this.data.current_page===1){
          this.setData({
            slides:res.slides,
            goods:res.goods.data 
          })
        } 
        let list = this.data.goods.concat(res.goods.data)
        // let list = this.data.goods.push(...res.goods.data)
        this.setData({
          // dataList: list, //获取数据数组    
          // loadMore: false //把"上拉加载"的变量设为false，显示  
          goods:list
        })
         
    })
    
  }

})
// success(res) {
//   if (res.data && res.data.length > 0) {
//     console.log("请求成功", res.data)
//     currentPage++
//     //把新请求到的数据添加到dataList里  
//     let list = that.data.dataList.concat(res.data)
//     that.setData({
//       dataList: list, //获取数据数组    
//       loadMore: false //把"上拉加载"的变量设为false，显示  
//     });
//     if (res.data.length < pageSize) {
//       that.setData({
//         loadMore: false, //隐藏加载中。。
//         loadAll: true //所有数据都加载完了
//       });
//     }
//   }