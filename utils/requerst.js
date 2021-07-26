// 获取应用实例
const app = getApp()
// 获取实例中的方法里的属性赋值给baseUrl
const baseUrl = app.globalData.baseUrl
const request = (url,method='GET',options ={})=>{
  wx.showLoading()
  return new Promise((resolve,reject)=>{
    // 判断一下，请求
    if(method == "PATCH"){
      method = 'POST'
      method={
        ...options,
        data:{
          ...options.data,
          '_method':'PATCH'
        }
      }
    }
    wx.request({
      url: baseUrl + url, 
      method:method,
      data: options.data,
      header: {
        ...options.header,
        Authorization: 'Bearer Token'
        // Authorization: 'Bearer' +(wx.getStorageInfoSync('TOKEN) || '')
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
            //TODO 跳转到登录
          }else if(res.statusCode===404){
            msg = '请求出错'
          }else if(res.statusCode===422){
            msg = res.data.console.error[Object.keys(res.data.error)[0]][0];
          }
          wx.showToast({
            title:msg,
            icon:'error',
            duration:1000
          })
        }
          
        
        
      },
      fail(res){
        reject(res)
        wx.showToast({
          title:'网络错误',
          icon:'error',
          duration:2000
        })
      },
      complete(){
        wx.hideLoading()
      }
    })
  })
}
const e = {
  get(url,options={}){
    return request(url,'GET',options)
  },
  post(url,options={}){
    return request(url,'POST',options)
  },
  put(url,options={}){
    return request(url,'PUT',options)
  },
  delete(url,options={}){
    return request(url,'DELETE',options)
  },
  patch(url,options={}){
    return request(url,'PATCH',options)
  }
}
module.exports = e