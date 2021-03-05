// pages/forum/register/register.js
var app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userID:"",
    userpassword: "",
    user: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  userIDInput: function(e){
    app.globalData.userID=e.detail.value
    console.log("输入的账号"+app.globalData.userID)
    console.log(typeof app.globalData.userID)
  },
  userPasswordInput: function(e){
    app.globalData.userpassword=e.detail.value
    console.log("输入的密码"+app.globalData.userpassword)
    console.log(typeof app.globalData.userpassword)
  },
  signin:function(){
    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/user/account/login',
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // GET默认值 
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        openid: app.globalData.userID,
        password: app.globalData.userpassword,
      },
      success(res) {
        console.log(res.data.msg)
        if (res.data.msg == "成功") {
          wx.showToast({
            title: '登录成功！',
            icon: 'success',
          })
          app.globalData.isLogin=true
          setTimeout(function () {
            wx.switchTab({
              url: '../../posts/posts',
            })
           }, 2000) //延迟时间
        }
        else{
          wx.showToast({
            title:'密码或账户错误',
            image:'../../../images/error.png'
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: '连接失败!',
          image:'../../../images/error.png'
        })
      }
    })
  },

  signup:function(){
    wx.navigateTo({
      url: '../signup/signup',
    })
  },

  getpw:function(){
    wx.navigateTo({
      url: '../findpw/findpw',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})