// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      msg:"欢迎进入日志界面",
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
