// pages/users/signup/signup.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pswd:""
  },

  userIDInput: function (e) {
    app.globalData.userID = e.detail.value
    console.log("输入的账号" + app.globalData.userID)
    console.log(typeof app.globalData.userID)
  },
  userNameInput: function (e) {
    app.globalData.username = e.detail.value
    console.log("输入的用户名" + app.globalData.username)
    console.log(typeof app.globalData.username)
  },
  userEmailInput: function (e) {
    app.globalData.useremail = e.detail.value
    console.log("输入的邮箱" + app.globalData.useremail)
    console.log(typeof app.globalData.usereamil)
  },
  userPasswordInput: function (e) {
    app.globalData.userpassword = e.detail.value
    console.log("输入的密码" + app.globalData.userpassword)
    console.log(typeof app.globalData.userpassword)
  },
  userPasswordInput: function (e) {
    this.data.pswd = e.detail.value
    console.log("再次输入的密码" + app.globalData.userpassword)
  },

  signup: function () {
    if(this.data.pswd!=app.globalData.userpassword){
      wx.showToast({
        title: '两次密码不一致',
        image:'../../../images/error.png'
      })
    }
    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/user/account/register',
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // GET默认值 
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        openid: app.globalData.userID,
        name: app.globalData.username,
        avatar: app.globalData.useremail,
        password: app.globalData.userpassword,
      },
      success(res) {
        console.log(res.data.msg)
        if (res.data.msg == "成功") {
          wx.showToast({
            title: '注册成功！即将跳回登录页面！',
            icon: 'none',
          })
          setTimeout(function () {
            wx.redirectTo({
              url: '../signin/signin',
            })
           }, 5000) //延迟时间
        }
        else{
          wx.showToast({
            title: '注册失败，该账号已被注册!',
            picture:'../../../images/error.png'
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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