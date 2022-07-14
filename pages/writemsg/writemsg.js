// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    writeText1:'好友名字',
    writeText2:'留言内容',
    submitButton:'提交留言',
    logs: []
  },
  onLoad() {
    this.setData({
      msg:"把你的小秘密留在岛上来吧",
    })
  },

  formSubmit: function (res) {
    var userName= res.detail.value.userName
    var userMsg = res.detail.value.userMsg
    console.log('password:'+userName+'context:'+userMsg)
    var that = this 
    wx.request({
      method:'POST',
      url: 'http://chenzhenhua.net:8761/sakura/addMsg', 
      data:{
        password:userName,
        message:userMsg
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          submitButton: "留言成功"
        })  
        console.log(res.data)
      },
      fail: function () {
       console.log("fail")
      },
      complete: function () {
         that.setData({
           isshow:false
         })
      } 
    })
  }
  
})
