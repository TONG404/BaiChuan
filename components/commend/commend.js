// component/commend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    message:{
      type:null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    topMessageNumbers:{
      type:String,
      value:""
    }
  },


  /**
   * 组件的方法列表
   */
  methods: {
    setNum:function(){
      this.data.topMessageNumbers.value=this.data.message.topMessageNumbers
    }
  }
});
