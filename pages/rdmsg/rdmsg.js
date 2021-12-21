const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    // 加载时设置data
    this.setData({
      msg:"把你的小秘密藏在岛上吧",

    })
  },
  formSubmit: function (res) {
    console.log(wx.getStorageSync(res.detail.value.myName))
    wx.getStorageSync("  "+res.detail.value.myName)
    this.setData({
      rdMsg:wx.getStorageSync(res.detail.value.myName)
    })
  }
})
