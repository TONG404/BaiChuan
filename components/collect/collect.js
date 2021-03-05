// component/collect/collect.js
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
    collectFlag:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    collect:function(){
      if(this.data.collectFlag.value==1){
        this.setData({
          "collectFlag.value":0
        })
      }
      else{
        this.setData({
          "collectFlag.value":1
        })
      }
    }
  }
})
