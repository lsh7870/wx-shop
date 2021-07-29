// pages/goods/goods.js
import {show,collects} from '../../service/goods'
Page({
  data: {
    goods_id:null,
    goods:{},
    comments:[],
    like_goods:[],
    is_collect:0
  },
  /**
   * 页面的初始数据
   */
  onLoad: function (options) {
    const {id} = options
    // console.log(id)
    show(id).then(res=>{
      console.log(res)
      this.setData({
        goods_id:res.goods.id,
        goods:res.goods,
        comments:res.goods.comments,
        like_goods:res.like_goods,
        is_collect:res.goods.is_collect
      })
      // console.log(res.goods.comments)
    })
  },
  // 商品收藏
  onCollect(){
    collects(this.data.goods_id).then(res=>{
      // console.log(res)
      this.setData({
        is_collect:this.data.is_collect == 0 ? 1 : 0 
      })
      if(this.data.is_collect){
         wx.showToast({
           title: this.data.is_collect === 0 ? '取消收藏' : '收藏成功',
           icon:'success',
           duration:1500
         }) 
      }
    })
  },

 

  /**
   * 生命周期函数--监听页面加载
   */


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