// index.js
// 获取应用实例
const app = getApp()
const request = require('../../utils/requerst')
// cjs语法
// const index = require('../../service/index')
import {index}  from '../../service/index'
Page({
  data: {

  },

  onLoad() {

    // index.index().then(res=>{
    //     console.log(res);
    //   })
    index().then(res=>{
          //  console.log(res);
         })
  },
 
})
