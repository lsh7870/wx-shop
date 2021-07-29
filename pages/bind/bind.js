// pages/bind/bind.js
import {bind} from '../../service/auth'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  handeBind(){
    const data ={
      type:'bind',
      openid:wx.getStorageSync('openid')
    }
    console.log('55')
    bind(data).then(res=>{
      console.log(res)
      const userinfo=wx.getStorageSync('userinfo')
      wx.setStorageSync('userinfo', {...userinfo,openid:wx.getStorageSync('openid')})
      wx.showToast({
        title: '绑定成功',
        icon:'success',
        duration:1500
      })
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