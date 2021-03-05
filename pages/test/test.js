// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    v: [{
        x : -0.5,
        y : -0.5
      },
      {
        x : 0.5,
        y : -0.5
      },
      {
        x : 0,
        y : 0.5
      },
    ],

  },
  search:function(){
    wx.request({
      url: 'http://127.0.0.1:8888/get_zhiwang?keyword=python&searchtype=Author',
      method: 'GET',
      header: {
        'content-type': 'application/json' // GET默认值 
        //'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        // openid: this.data.userID,
        // password: this.data.userpassword,
      },
      success(res) {
        console.log(res.data)
        // if (res.data.msg == "成功") {
        //   wx.showToast({
        //     title: '登录成功！',
        //     icon: 'success',
        //   })
        //   setTimeout(function () {
        //     wx.switchTab({
        //       url: '../../posts/posts',
        //     })
        //    }, 2000) //延迟时间
        // }
        // else{
        //   wx.showToast({
        //     title:'密码或账户错误',
        //     image:'../../../images/error.png'
        //   })
        // }
      },
      // fail(res) {
      //   wx.showToast({
      //     title: '连接失败!',
      //     image:'../../../images/error.png'
      //   })
      // }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("第一个x的值为"+this.data.v[0].x);
    var flag=[];
    var a=this.data.v[0];
    var b=this.data.v[1];
    var c=this.data.v[2];
    this.data.v[0]=[{x:(this.data.v[0].x+this.data.v[1].x)/2,
      y:(this.data.v[0].y+this.data.v[1].y)/2}];
    this.data.v[1]=[{x:(this.data.v[0].x+this.data.v[2].x)/2,
      y:(this.data.v[0].y+this.data.v[2].y)/2}];    
    this.data.v[2]=[{x:(this.data.v[2].x+this.data.v[1].x)/2,
      y:(this.data.v[2].y+this.data.v[1].y)/2}];
    console.log(this.data.v)

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