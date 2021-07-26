const request = (url,method='GET',options ={})=>{
  wx.showLoading()
  return new Promise((resolve,reject)=>{
    wx.request({
      url: url, 
      method:method,
      data: options.data,
      header: {
        ...options.header,
        Authorization: 'Bearer Token'
      },
      timeout:15000,
      success (res) {
        // console.log(res)
        if(res.statusCode<400){
          resolve(res.data)
        } else {
          let msg = '请求出错'
          if(res.statusCode===400){
            msg = res.data.message
          } else if(res.statusCode===401){
            msg = '请登录'
          }else if(res.statusCode===404){
            msg = '请求出错'
          }else if(res.statusCode===422){
            msg = res.data.console.error[Object.keys(res.data.error)[0]][0];
          }
          wx.showToast({
            title:msg,
            icon:'error',
            duration:2000
          })
        }
          
        
        
      },
      fail(res){
        reject(res)
      },
      complete(){
        wx.hideLoading()
      }
    })
  })
}

module.exports = {
  request
}