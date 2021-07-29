export default redirecy_to=>{
     // 判断用户是否登录
     if(!wx.getStorageSync('access_token')){
      // 记录来源页
     wx.setStorageSync('redirect_to', redirecy_to)
     wx.redirectTo({
       url: '/pages/login/login',
     })
   }
}

