// 长度验证
const min = (str,len)=>{
  if(str.length<len){
    return false
  }else{
    return true
  }
}
const email =email =>{
  const reg = /^([a-zA-z0-9])(\w|\-)+@[a-zA-z0-9]+\.[a-zA-Z]{2,4}$/
  if(reg.test(email)){
    return true
  }else{
    return false
  }
}
const confirm = (str1,str2)=>{
  if(str1 != str2){
    return false
  }else{
    return true
  }
}



module.exports = {
   min,
   email,
   confirm
}