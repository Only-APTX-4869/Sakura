// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    writeText1:'好友名字',writeText2:'留言内容',
    logs: []
  },
  onLoad() {
    this.setData({
      msg:"把你的小秘密留在岛上来吧",
    })
  },
  formSubmit: function (res) {
    console.log(res.detail.value)
    wx.setStorageSync(res.detail.value.userName,res.detail.value.userMsg)
  }
  //提交函数
  // SubmitBtnClick: function (res) {
  //   var that = this 
  //   wx.request({
  //     url: 'https://localhost:8001/sakura/1', 
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success: function (res) {
  //       console.log(res.data.data.forecast)
  //       that.setData({
  //         Industry: res.data.data.forecast
  //       })  
  //     },
  //     fail: function () {
  //      console.log("fail")
  //     },
  //     complete: function () {
  //        that.setData({
  //          isshow:false
  //        })
  //     } 
  //   })
  // },
})
