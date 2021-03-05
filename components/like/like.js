// component/like.js
var app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeFlag: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    like: function () {
      var that=this
      if (app.globalData.isLogin == true) {
        if (that.data.likeFlag.value == 1) {
          that.setData({
            "likeFlag.value": 0
          })
          console.log("该条信息编号为"+that.data.num)
          that.methods.likeRequest()
        } else {
          that.setData({
            "likeFlag.value": 1
          })
        }
      } else {
        wx.showToast({
          title: '请先登录！',
          image: '../../../images/error.png'
        })
      }

      
    },
    likeRequest: function () {
      var that=this
      wx.request({
        url: 'https://www.baichuanlhp.xyz/fourm/user/top/like',
        method: 'POST',
        header: {
          // 'content-type': 'application/json' // GET默认值 
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          openid: app.globalData.userID,
          topMessageNumbers: that.data.num
        },
        success(res) {
          console.log(res.data.msg)
          if (res.data.msg == "成功") {
            wx.showToast({
              title: '点赞成功！',
              icon: 'success',
            })
          } else {
            wx.showToast({
              title: '点赞失败！',
              image: '../../../images/error.png'
            })
          }
        },
        fail(res) {
          wx.showToast({
            title: '连接失败!',
            image: '../../../images/error.png'
          })
        }
      })
    }
  }
})