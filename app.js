// app.js
// import {getUserByCode} from './service/auth'
App({
 
  onLaunch() {
 
    wx.login({
      success: res =>{
        // console.log(res.code)
        // if (res.code) {
        //   //发起网络请求
        //   // 65e6d2baaa52721538eb6d0ea95ec437
        //   const data = {
        //     appid:'wx2922180754621e23',
        //     secret:'65e6d2baaa52721538eb6d0ea95ec437',
        //     js_code:'res.code'
        //   }
        //     wx.request({
        //       url: 'https://api.shop.eduwork.cn/api/auth/wx/code',
        //       method:'POST',
        //       data,
        //       success(res2){
        //         // console.log(res2)
        //         // 如果绑定过微信，只能返回 openid  缓存openid
        //         wx.setStorageSync('openid', res2.data.openid)
        //         // 如果没绑定，会返回access_token
        //         console.log( res2.data.message.substring(18,45))
        //         console.log(res2)
        //         if(res2.statusCode==400){
        //           wx.setStorageSync('openid', res2.data.message.substring(18,45))
        //         }
        //         if(res2.access_token){
        //           wx.setStorageSync('access_token,res2.access_token', res.data.access_token)
        //           wx.setStorageSync('useroinfo', res2.data.user)
        //           console.log('555')
        //         }
        //       }
        //     })
        // } else {
        //   console.log('登录失败！' + res.errMsg)
        // }
      }
    })
  },
  globalData: {
    baseUrl:'https://api.shop.eduwork.cn'
  }
})
