// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search_key:"",
    search_result:"",
    flag:[1,0,0,0],
    color:["#fff","#b3d4dc","#b3d4dc","#b3d4dc"],
    number:0

  },
  searchInput:function(e){
    this.data.search_key=e.detail.value
    console.log("搜索的内容"+this.data.search_key)
  },
  search:function(){
    var that=this
    //！！！this.seadata只能应用于第一层函数，若要在第二层函数内使用就需要在第一层内声明一个变量指向this
    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/search/get',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        interfaceName:"get_zhiwang",
        keyWord:this.data.search_key,
        searchType:"KeyWd"
      },
      success(res) {
        console.log(res.data.articleList)
        that.setData({
          search_result: res.data.articleList,
          number:res.data.articleList.length
        })
        console.log(that.data.search_result)
      },
    })
  },
  zhiwang:function(){
    var that=this
    if(this.data.flag[0]==0){
      that.setData({
        flag:[1,0,0,0],
        color:["#fff","#b3d4dc","#b3d4dc","#b3d4dc"]
      })
    }

    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/search/get',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        interfaceName:"get_zhiwang",
        keyWord:this.data.search_key,
        searchType:"KeyWd"
      },
      success(res) {
        console.log(res.data.articleList)
        that.setData({
          search_result: res.data.articleList,
          number:res.data.articleList.length
        })
        console.log(that.data.search_result)
      },
    })
  },
  wanfang:function(){
    var that=this
    if(this.data.flag[1]==0){
      that.setData({
        flag:[0,1,0,0],
        color:["#b3d4dc","#fff","#b3d4dc","#b3d4dc"]
      })
    }

    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/search/get',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        interfaceName:"get_wanfang",
        keyWord:this.data.search_key,
        searchType:"KeyWd"
      },
      success(res) {
        console.log(res.data.articleList)
        that.setData({
          search_result: res.data.articleList,
          number:res.data.articleList.length
        })
        console.log(that.data.search_result)
      },
    })
  },
  weipu:function(){
    var that=this
    if(this.data.flag[2]==0){
      that.setData({
        flag:[0,0,1,0],
        color:["#b3d4dc","#b3d4dc","#fff","#b3d4dc"]
      })
    }
    console.log(that.data.flag[2])
    console.log(that.data.color[2])

    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/search/get',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        interfaceName:"get_weipu",
        keyWord:this.data.search_key,
        searchType:"KeyWd"
      },
      success(res) {
        console.log(res.data.articleList)
        that.setData({
          search_result: res.data.articleList,
          number:res.data.articleList.length
        })
        console.log(that.data.search_result)
      },
    })
  },
  qita:function(){
    var that=this
    if(this.data.flag[3]==0){
      if(this.data.flag[1]==0){
        that.setData({
          flag:[0,1,0,0],
          color:["#b3d4dc","#fff","#b3d4dc","#b3d4dc"]
        })
      }
    }

    wx.request({
      url: 'https://www.baichuanlhp.xyz/fourm/search/get',
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        interfaceName:"get_jstor",
        keyWord:this.data.search_key,
        searchType:"KeyWd"
      },
      success(res) {
        console.log(res.data.articleList)
        that.setData({
          search_result: res.data.articleList,
          number:res.data.articleList.length
        })
        console.log(that.data.search_result)
      },
    })
  },
  // articleitem:function(event){
  //   var that = this;
  //   that.setData({
  //     idx: JSON.stringify(event.currentTarget.dataset.index)
  //   })
  //   that.setData({
  //     aurl: that.data.search_result[that.data.idx].url
  //   })
  //   console.log(this.data.cnum);
  //   wx.navigateTo({
  //     url: that.data.aurl,
  //   })
  // },
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