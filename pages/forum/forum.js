// pages/forum/forum.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    comment:"",
    list:[],
    like: [],
    coolect: []
  },

  like:function(e){
    var that = this;
    that.setData({
      idx: JSON.stringify(e.currentTarget.dataset.index)
    })
    console.log(this.data.idx)
    this.setData({
      num: this.data.list[this.data.idx].topMessageNumbers
    })
    if(this.data.like[num]==1){
      this.data.like[num]=0
    }
    else{
      this.data.like[num]=1
    }
  },
  
  collect:function(){
    if(this.data.collect==1){
      this.setData({
        collect:0
      })
    }
    else{
      this.setData({
        collect:1
      })
    }
  },

  commentInput: function (e) {    //输入框
    this.data.comment = e.detail.value
    console.log("输入的内容" + this.data.comment)
  },
  send:function(){  //发送按钮
    var that = this
    if(app.globalData.isLogin==true){
      wx.request({
        url: 'https://www.baichuanlhp.xyz/fourm/user/top/create',
        method: 'POST',
        header: {
          // 'content-type': 'application/json' // GET默认值 
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          openid:app.globalData.userID,
          messageText: this.data.comment
        },
        success(res) {
          console.log(res.data.msg)
            if (res.data.msg == "成功") {
              wx.showToast({
                title: '评论成功！',
                icon: 'success',
              }),
              setTimeout(function () {
                that.onShow()
               }, 2000) //延迟时间
            }
            else{
              wx.showToast({
                title:'评论失败！',
                image:'../../../images/error.png'
              })
            }
        },
        fail(res) {
          wx.showToast({
            title: '连接失败!',
            image:'../../../images/error.png'
          })
          that.data.comment=""
          that.setData({
            comment:""
          })
        }
      })
      this.setData({
        comment:''
      })
      console.log(this.data.comment)
    }
    else{
      wx.showToast({
        title:'请先登录！',
        image:'../../../images/error.png'
      })
    }
    
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
    var that=this
    //console.log(this.data.like)
    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/user/top/list',
      method: 'POST',
      header: {
        // 'content-type': 'application/json' // GET默认值 
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        page:0,
        size:20
      },
      success(res) {
        console.log(res.data.data)
        that.setData({
          list:res.data.data,
          comment:''
        })
        console.log("输入框内容："+that.data.comment),
        that.data.comment=""
        
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