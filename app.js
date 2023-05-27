// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    }),
    wx.loadFontFace({
        family: 'CangErYu',
        global: true,
        source: 'url("https://whataboutthink.github.io/test/CangErYuYangTiW04-2.ttf")',
        success: res => {
          console.log('font load success', res)
        },
      })
  },
  globalData: {
    userInfo: null
  }
})
