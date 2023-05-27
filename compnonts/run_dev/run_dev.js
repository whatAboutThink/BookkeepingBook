// compnonts/run_dev/run_dev.js

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    user_login:true,
    userInfo: {},
    userName:" ",
    motto:  "欢迎回来 我的用户 \n 根据指示 完成登陆 \n 注意休息 体验愉快",
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false, // 如需尝试获取用户信息可改为false
    loadState:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindViewTap() {
      wx.navigateTo({
        url: '/pages/main/main'
      })
    },
 
    
    getUserProfile(e) {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      let self = this
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            userName: res.userInfo.nickName,
            motto: '欢迎您，' + res.userInfo.nickName,
            hasUserInfo: true,
            
          })
          setTimeout(function(){self.setData({
            user_login:false,
          })
          },1500)
          self.triggerEvent('toSendValue',{value:self.data.loadState})
        }
      })
    },
    getUserInfo(e) {
      // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
      console.log(e)
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
  },
  attached() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  }
})
