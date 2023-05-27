// index.js
// 获取应用实例
// const app = getApp()
Page({
  data: { 
    loadState:false,
    fakerJson:[{
      title:'第一',
      prop:"first",
      width:"180",
      
    },{
      title:'第一',
      prop:"scond",
      width:"190"
    },{
      title:'第一',
      prop:"three",
      width:"180"
    },{
      title:'第一',
      prop:"four",
      width:"180"
    }
    ,{
      title:'第一',
      prop:"five",
      width:"680"
    } ,{
      title:'第一',
      prop:"six",
      width:"680"
    }
  ],
    fakerJsonChild:[{
      first:100,
      scond:100,
      three:100
    },{
      first:100,
      scond:100,
      three:100
    },{
      first:100,
      scond:100,
      three:100
    },{
      first:100,
      scond:100,
      three:100
    },{
      first:10000000000000,
      scond:100,
      three:100
    }
    ]
  },
  setSonVal(e){
    this.setData({
      loadState:e.detail.value
    })
    },
  onLoad() {

  },
  getUserProfile(e) {

  },
new: function(options) {
        wx.navigateTo({
            url: '../addNew/addNew',//要跳转到的页面路径
    })  
  },
  analysis:function(option){
    wx.navigateTo({
        url: '../analysis/analysis',//要跳转到的页面路径
    })  
  },
  record:function(option){
    wx.navigateTo({
        url: '../record/record',//要跳转到的页面路径
    })  
  }

})

