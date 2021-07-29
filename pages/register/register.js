// pages/register/register.js
const validata = require('../../utils/validata')
import {register} from '../../service/auth'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    email:'',
    password:'',
    password_confirm:'',
    error_name:'',
    error_email:'',
    error_password:'',
    error_password_confirm:'',
  },
  login(){
    const regName=validata.email(this.data.email,2)
    const regConfirm = validata.confirm(this.data.password,this.data.password_confirm)
    const regEmail=validata.email(this.data.email)
    const regPassword=validata.min(this.data.password,6)
    if(!regName){
      this.setData({ error_name:'最少两个字符' })
    }else{
      this.setData({  error_name:''  })
    }
    if(!regEmail){
      this.setData({   error_email:'邮箱格式不正确'  })
    }else{
      this.setData({  error_email:'' })
    }
    if(!regPassword){
      this.setData({  error_password:'密码最少6位'  })
    }else{
      this.setData({  error_password:''  })
    }
    if(!regConfirm){
      this.setData({  error_password_confirm:'两次密码不一致'  })
    }else{
      this.setData({ error_password_confirm:''  })
    }
    if(!regName||!regPassword||!regEmail || !regConfirm) return

    // 注册
    console.log('ss')
    const data ={
      name:this.data.name,
      email:this.data.email,
      password:this.data.password,
      password_confirmation:this.data.password_confirm
    }
    register(data).then(res=>{
      console.log(res)
      // 重定向到登录页（一般项目，注册成功会自动登录，需要api返回数据 如： token等）
      wx.redirectTo({
        url: '/pages/login/login',
      })
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})