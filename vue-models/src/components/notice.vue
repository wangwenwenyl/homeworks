<template>
  <div id="appBlock" style="overflow-Y:scroll;">
  <div class="iterms">
      <div class="follow-space"></div>
      <header>
          <div class="contract-num">通知公告</div>
          <!--<router-link :to="{name:'noticeList'}"><div style="float:right;line-height:35px;color:#999;">更多</div></router-link>-->
      </header>
      <div v-for="item in data" class="notice-box"  @click="check(item)">
        <img src="../assets/img/通知.png" alt="" class="notice-img">
        <div style="display:inline-block;font-size:12px;">
            恭喜 <span style="color:rgb(254,137,112);">{{item.department}}{{item.name}}</span>签单成功!
        </div>
        <div style="float:right;color:#999;">
            <span>{{item.time}}</span>
        </div>
      </div>
        <!--细报详情-->
        <div class='modle_xibao' v-show="messageShow">
          <div class="xibaoTopBar font-family-black">
            喜报详情
            <img id="xibaoConcle" @click="close" class="imgConcle" src="../assets/img/cancel.png" alt="" />
          </div>
          <div  class="xibaoContent">
            <ul>
              <li>业务员&nbsp;&nbsp;    <span  id="xibaoName">{{ name }}</span></li>
              <li>所属门店<span id="xibaoDep">{{ department }}</span></li>
              <li>合同编号<span id="xibaoNum">{{ accountNum }}</span></li>
              <li>合同类型<span id="xibaoType">{{ type }}</span></li>
              <li>签订日期<span id="xibaoTime">{{ date }}</span></li>
            </ul>
          </div>
        </div>



    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
export default {
  data () {
  return {
      'data':'',
      'name':'',
      'accountNum':'',
      'department':'',
      'type':'',
      'date':'',
      'messageShow':false,
    }
  },
  mounted:function(){
      axios.get(host+'/app/getbillboard', {

            })
            .then(response=>{
              this.data=response.data.data;
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
  },
    methods:{
      check(message){
        this.name=message.name;
        this.department=message.department;
        this.type=message.type;
        this.date=message.time;
        this.accountNum=message.number;
        this.messageShow=true;
      },
      close(){
        this.messageShow=false;
        this.name="";
        this.department="";
        this.type="";
        this.date="";
        this.accountNum="";
      }
    }
}
</script>
<style scoped>
    .tool-box:after{display:table;content:"";clear:both;}
    .tool-iterm{width:33.3%;border-right:1px solid #ddd;float:left;text-align: center;
      font-size:12px;  color:#333;padding:16px 0px;}
  .tool-img{width:30px;margin-bottom:5px;}
  .tool-box{border-bottom:1px solid #ddd;}
  .notice-box{border-bottom:1px solid #ddd;padding:15px 16px;}
  .notice-img{width:16px;vertical-align: middle;margin-right:7px;}

  .modle_xibao{
    width: 85.3%;
    height: 202.5px;
    position: fixed;
    top: 200px;
    left: 7.35%;
    background-color: #f9f9f9;
    border-radius: 0.3rem;
    overflow: auto;
    /*display: none;*/
    z-index: 1000;
  }
    .xibaoTopBar{
      width: 100%;
      height: 27.16%;
      background: #f4f4f4;
      line-height: 55px;
      font-size: 15px;
      color: #666666;
      padding-left: 15px;
      padding-right: 15px;
    }
    .imgConcle{
      width: 24px;
      height: 24px;
      float: right;
      margin-top: 9px;
    }
    .xibaoContent{
      padding-left: 16.875%;
      padding-top: 16px;
    }
    .xibaoContent>ul>li{
      font-family: "微软雅黑";
      color: #666666;
      font-size: 14px;
      list-style: none;
      margin-bottom:2px;
    }
    .xibaoContent>ul>li>span{
      margin-left: 7.8%;
    }
</style>
