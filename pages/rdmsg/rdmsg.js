const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    rdMsg :''
  },
  onLoad() {
    // 加载时设置data
    this.setData({
      msg:"把你的小秘密藏在岛上吧",
    })
  },
  formSubmit: function (res) {
    var pwd=res.detail.value.myName
    console.log('pwd='+pwd)
    var that = this 
    wx.request({
      method:'POST',
      url: 'http://chenzhenhua.net:8761/sakura/getMsg', 
      header: {
        'content-type': 'application/json'},
      data:{
        password:pwd
      },
      success: function (res) { 
        if (res.data[0] != null){
          that.setData({
            rdMsg : res.data[0].message
          })  
        }
      },
      fail: function () {
       console.log("fail")
      },
    })
  }
})
