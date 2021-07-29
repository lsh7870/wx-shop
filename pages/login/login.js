// pages/login/login.js
const validata = require('../../utils/validata')
import {login} from '../../service/auth'
import {user} from '../../service/user'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'',
    password:'',
    error_email:'',
    error_password:''
  
  },
  login(){
    // 验证表单
    const regEmail=validata.email(this.data.email)
    const regPassword=validata.min(this.data.password,6)
    if(!regEmail){
      this.setData({
        error_email:'邮箱格式不正确'
      })
    }else{
      this.setData({
        error_email:''
      })
    }
    if(!regPassword){
      this.setData({
        error_password:'密码最少6位'
      })
    }else{
      this.setData({
        error_password:''
      })
    }
    if(!regPassword||!regEmail)return
    // 发送请求，执行登录
    const data = {
      email:this.data.email,
      password:this.data.password
    }
  
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
      // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          console.log(res)
          console.log(res.encryptedData)
          console.log(res.signature)
          console.log(res.userInfo.avatarUrl)
          wx.setStorageSync('touxiang', res.userInfo.avatarUrl)
        }
      })
      
    
    login(data).then(res=>{
    // console.log(res)
    // 登录成功缓存token
      wx.setStorageSync('access_token', res.access_token)
      // 获取用户信息
      user().then(res=>{
        console.log(res)
        // 登录成功缓存用户信息
      wx.setStorageSync('userinfo', res)
        // 如果用户没有openid 。跳转到绑定页面
        if(res.openid == null){
          wx.redirectTo({
            url: '/pages/bind/bind',
          })
        }else{
              // 重定向到来原页
            const redirect_to = wx.getStorageSync('redirect_to'||'/pages/index/index')
            // 判断是否是tabbar页面
            const tarbars =[
              "/pages/index/index",
              "/pages/category/category",
              "/pages/cart/cart",
              "/pages/my/my"
            ]
            // 可以使用es7语法 includes 有值返回ture
            if(tarbars.includes(redirect_to)){
              // if(tarbars.indexOf(redirect_to) !=-1){
              wx.switchTab({
                url: redirect_to,
              })
            }else{
              wx.redirectTo({
                url: redirect_to,
              })
            } 
        }


        // 重定向到来原页
        const redirect_to = wx.getStorageSync('redirect_to'||'/pages/index/index')
        // 判断是否是tabbar页面
        const tarbars =[
          "/pages/index/index",
          "/pages/category/category",
          "/pages/cart/cart",
          "/pages/my/my"
        ]
        // 可以使用es7语法 includes 有值返回ture
        if(tarbars.includes(redirect_to)){
          // if(tarbars.indexOf(redirect_to) !=-1){
          wx.switchTab({
            url: redirect_to,
          })
        }else{
          wx.redirectTo({
            url: redirect_to,
          })
        } 
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