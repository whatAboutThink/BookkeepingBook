// pages/addNew/addNew.js
import { $wuxToast } from '../../miniprogram_npm/wux-weapp/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fields:[{
        name:'出行',
        field:'Travel'
    },
    {
        name:'饮食',
        field:'diet'
    },
    {
        name:'房租',
        field:'rent'
    },
    {
        name:'水费',
        field:'waterRate'
    },
    {
        name:'水电费',
        field:'electricCharge'
    },
    {
        name:'娱乐',
        field:'entertainment'
    },
    {
        name:'娱乐aaaaaaaaaaaaaaaaaa',
        field:'text'
    }
    ],
    UnselectedFields:[
        {
            name:"基金",
            field:"JiJin"
        },{
            name:"饮料",
            field:"drink"
        }
    ],
    PreSelectedWarehouse:{},//放入预选
    PreSelectedWareIndex:0,
    SelectedWarehouse:{},  //放入已选
    SelectedWare:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  backOut:function(){
    wx.switchTab({
        url: '../index/index',
    })
  },
  selectBackField:function(option){
    var value = option.currentTarget.dataset.row;
    var index = option.currentTarget.dataset.index;
    this.setData({
        PreSelectedWarehouse:value,
        PreSelectedWareIndex:index
    })
    // this.data.PreSelectedWarehouse.push(value);
  },
  selectField:function(option){
    var value = option.currentTarget.dataset.row;
    var index = option.currentTarget.dataset.index;
    this.setData({
        SelectedWarehouse:value,
        SelectedWareIndex:index
    })
  },
  pushUnselected:function(){//已选->预选
    if(!this.data.PreSelectedWarehouse.field){
        console.log("没有存入账项");
    }else{
        this.data.fields.splice(this.data.PreSelectedWareIndex,1);
        var newArray = this.data.fields;
        this.setData({
            fields:newArray
        })
        this.data.UnselectedFields.push(this.data.PreSelectedWarehouse);
        var newArray = this.data.UnselectedFields;
        this.setData({
            UnselectedFields:newArray,
            PreSelectedWarehouse:{}
        })
        $wuxToast().show({
            type: 'success',
            duration: 1500,
            color: '#fff',
            text: '成功移入预选帐项',
            success: () => console.log('已完成'),
          })
    }
    
  },
  pushPreselection:function(){//预选-->已选
       

    if(!this.data.SelectedWarehouse.field){
        console.log("没有存入账项");
    }else{
        this.data.UnselectedFields.splice(this.data.SelectedWareIndex,1);
        var newArray = this.data.UnselectedFields;
        this.setData({
            UnselectedFields:newArray
        })
        this.data.fields.push(this.data.SelectedWarehouse);
        var newArray = this.data.fields;
        this.setData({
            fields:newArray,
            SelectedWarehouse:{}
        })
        
        $wuxToast().show({
            type: 'success',
            duration: 1500,
            color: '#fff',
            text: '成功移入已选帐项',
            success: () => console.log('已完成'),
          })
    }

    
  }
})