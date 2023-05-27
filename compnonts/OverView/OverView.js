// compnonts/OverView/OverView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
    ready:function(){
        this.setData({
            inMount:new Date().getMonth() + 1,
        })
        console.log(this.inMount);
    }
  },

  
  /**
   * 组件的初始数据
   */
  data: {
    inMount:"",
    MonthOverview:{
        total:2500,
        balance:500,
        cost:200
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
