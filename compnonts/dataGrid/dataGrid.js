// compnonts/dataGrid/dataGrid.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    swidth:{
      type:"string",
      value:""
    },
    maxHeight:{
      type:"string",
      value:""
    },
    gridHead:{
      type:"arry",
      value:""
    },
    gridData:{
      type:"arry",
      value:""
    },
    Serial:{
      type:"bolean",
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  headWidth:null,
  max_Height:null,
  fakerData:[],
  fakerDataChild:[],
  SerialNumber:false,
  statistics:[]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    TableCellStyle(row){
      if (this.row === row.row) {
        return "background-color:#214F81;color: #ffffff !important;";
      } else {
        return "background-color:transparent;";
      }
    },
    clickTh(e){
      const index=e.currentTarget.dataset.index;
      const isActive=`fakerDataChild[${index}].style`
      this.setData({
        [isActive]: !this.data.fakerDataChild[index].style
      })
    },
    clickGrid(item){
     
    }
  },
  observers: {
    "swidth"(val){
      this.setData({
        headWidth: val
      })
    },
    "maxHeight"(val){
      this.setData({
        max_Height: val
      })
    },
    "gridHead"(val){
      if(this.data.Serial =="true"){
        var number = [{
          title:'序号',
          prop:"number",
          width:"120",
          style:false
        }],
        number = number.concat(val)
        this.setData({
          fakerData:number
        })
      }else{
        val[0].style = false,
        this.setData({
          fakerData:val
        })
      }
     
    },"Serial"(val){
      this.setData({
        SerialNumber:val
      })
    },
    "gridData"(val){
      
      this.setData({
        fakerDataChild:val
      })
      var i=0;
      for(i;i<this.data.fakerDataChild.length;i++){
          console.log(this.data.fakerDataChild[i])
          var childValue = this.data.fakerDataChild[i];
          
          var j = 0;
          for(j;j<this.data.fakerData.length;j++){
            var val = this.data.fakerData[j].width
              var id = this.data.fakerData[j].prop;
             
            //   if(id=='number'){
            //       continue;
            //   }
              if(!this.data.statistics[j]){
                this.data.statistics[j] = {};
                this.data.statistics[j].val = 0;
                this.data.statistics[j].width = 0;
              }
              if(!childValue[id] || childValue[id] ==null || childValue[id]=='undefined'){
                childValue[id] = 0;
              }
              if(id=='number'){
                this.data.statistics[j].val ='统计';
              }else{
                this.data.statistics[j].val += childValue[id];
              }
              
              this.data.statistics[j].width = val;
          }
          
          
      }
      this.setData({
        statistics:this.data.statistics
      })
      console.log(this.data.statistics);
    }
    
  }
})
