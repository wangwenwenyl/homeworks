<template>
  <div id="appBlock" style="overflow-Y:scroll;">
    <div id="refreshContainer" class="mui-content mui-scroll-wrapper" >
        <ul class="contract" v-for="item in items">
            <div class="follow-space"></div>
            <div style="padding:10px 24px;">
                <li class="color-black font-size-16 font-family-black item-dingdan-title " >{{item.applytype}}</li>
                <li class="item-dingdan-number">
                  <span class="color-black font-size-14 font-family-black ">申请数量:</span>
                  <span class="color-gray" >{{item.applycount}}</span>
                  <div   class="float-right display-inlineblock" style="display:inline-block;float:right;">
                    <div style="width: 2px;background: red;" class="center-line display-inlineblock"></div>
                    <div v-if="item.applystatus=='已同意'">
                      <strong class="iconfont icon-success" style="color:#fbaf37"></strong>
                      <!--<img style="width: 17px;height: 17px; margin-bottom: 3px;" class="item-dingdan-img" src='../../assets/img/tongyiSate.png' />-->

                      <span id="statusSpan"  style="color:#fbaf37"  class="statusSpan item-dingdan-isAgree">{{item.applystatus}}</span>
                    </div>
                      <div v-else-if="item.applystatus=='已驳回'">
                        <strong class="iconfont icon-cry" style="color:#fbaf37"></strong>
                        <!--<img style="width: 17px;height: 17px; margin-bottom: 3px;" class="item-dingdan-img" src='../../assets/img/合同状态.png' />-->

                        <span id="statusSpan"  style="color:#fbaf37"  class="statusSpan item-dingdan-isAgree">{{item.applystatus}}</span>
                      </div>
                    <div v-else>
                      <strong class="iconfont icon-clock"></strong>
                      <!--<img style="width: 17px;height: 17px; margin-bottom: 3px;" class="item-dingdan-img" src='../../assets/img/daishenheState.png' />-->

                      <span id="statusSpan"   class="statusSpan item-dingdan-isAgree">{{item.applystatus}}</span>
                    </div>
                  </div>
                </li>
                <li class="item-dingdan-date">
                  <span class="color-black font-size-14 font-family-black ">更新时间:</span>
                  <span class="color-gray font-size-14">{{item.applytime}}</span>
                </li>
                <li id="btnPost" v-if="item.applystatus=='已驳回'" class="btnPost item-dingdan-post">
                    <a href="javascript:;" style="text-decoration: none;" @click="resubmit(item)" class="item-dingdan-button font-size-14">重新提交</a>
                </li>
            </div>
        </ul>
        <div v-show="show" style="position:fixed;top:44px;">
          <noData></noData>
        </div>
    </div>
  </div>
</template>
<script>
  import noData from '@/components/noData';
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import axios from 'axios';
  import { Button } from 'mint-ui';
  import qs from 'qs';
  import { popup } from 'mint-ui';
  import {Loadmore} from 'mint-ui';
  import {MessageBox} from "mint-ui";
export default {
  data () {
  return {
      userid:'',//孔祥宇
      uuid:'',
      username:'',
    popupVisible1:false,
    items:[],
    page:1,
    show:false,
    allLoaded: false,//是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
    scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动

      diyaNum:"",
      xinyongNum:"",
      zhiyaNum:"",
      messages1:0,
      messages2:0,
      messages3:0,
    }
  },
  mounted:function(){
      this.userid=this.$cookie.get("uid");
      this.uuid=this.$cookie.get("uuid");
      this.username=this.$cookie.get("uname");
    this.load();
      this.getNum();
  },
  methods:{
      getNum() {
          axios.get(host+"/app/availablecontract?uname="+this.username+"&userid="+this.userid,qs.stringify({
          })).then(response=>{
              if(response.data.data.dcount>5){
                  this.diyaNum=5;
              }else{
                  this.diyaNum=response.data.data.dcount
              }
              if(response.data.data.wcount>5){
                  this.xinyongNum=5;
              }else{
                  this.xinyongNum=response.data.data.wcount;
              }
              if(response.data.data.zcount>5){
                  this.zhiyaNum=5;
              }else{
                  this.zhiyaNum=response.data.data.zcount;
              }
//              console.log("抵押:"+this.diyaNum);
//              console.log("信用:"+this.xinyongNum);
//              console.log("质押:"+this.zhiyaNum);
          }).catch(function (error){
              Toast("网络超时");
          });
      },
      resubmit(item){
          this.loading = true;
          Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
          });
          if(item.applytype=="信用贷"){
              this.messages2=item.applycount;
              this.messages1=0;
              this.messages3=0;
          }else if(item.applytype=="抵押贷"){
              this.messages1=item.applycount;
              this.messages2=0;
              this.messages3=0;
          }else if(item.applytype=="质押贷"){
              this.messages3=item.applycount;
              this.messages1=0;
              this.messages2=0;
          }
//          console.log("申请抵押:"+this.messages1);
//          console.log("申请信用:"+this.messages2);
//          console.log("申请质押:"+this.messages3);
//          if(parseInt(this.messages1)>this.diyaNum||parseInt(this.messages1)<0||parseInt(this.messages1)>5){
//              MessageBox.alert('请输入正确的合同数量!', '提示');
//              Indicator.close();
//              return false;
//          }else if(parseInt(this.messages2)>this.xinyongNum||parseInt(this.messages2)<0||parseInt(this.messages2)>5){
//              MessageBox.alert('请输入正确的合同数量!', '提示');
//              Indicator.close();
//              return false;
//          }else if(parseInt(this.messages3)>this.zhiyaNum||parseInt(this.messages3)<0||parseInt(this.messages3)>5){
//              MessageBox.alert('请输入正确的合同数量!', '提示');
//              Indicator.close();
//              return false;
//          }else if(this.messages1==""&&this.messages2==""&&this.messages3==""){
//              MessageBox.alert('请输入正确的合同数量!', '提示');
//              Indicator.close();
//              return false;
//          }else if(this.messages1==0&&this.messages2==0&&this.messages3==0){
//              MessageBox.alert('请输入正确的合同数量!', '提示');
//              Indicator.close();
//              return false;
//          }
          axios.get(host+"/app/applycontract?userid="+this.userid+"&dcount="+this.messages1+"&zcount="+this.messages3+"&wcount="+this.messages2+"&reason=重新提交&printlogid="+item.id+"&uuid="+this.uuid,qs.stringify({
          })).then(response=>{
              if(response.data.data.code=='200'){
                  Toast("申请成功");
                  this.items=[];
                  this.load();
                  this.getNum();
              }else{
                  Toast("操作失败");
              }
              Indicator.close();
              console.log(response);
          }).catch(function (error){
              Toast("网络超时");
              Indicator.close();
          });
      },
    load() {
      this.loading = true;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.get(host+"/app/getapplycontractlist?uname="+this.username+"&userid="+this.userid,qs.stringify({
      })).then(response=>{
        if(response.status=='200'){
          if(response.data.data==""){
            this.show=true;
          }else{
            this.items=this.items.concat(response.data.data);
          }
        }else{
            Toast("操作失败");
        }
        Indicator.close();
      }).catch(function (error){
          Toast("网络超时");
          Indicator.close();
      });
    },
  },
  components:{
    "noData":noData,
    'v-loadmore':Loadmore,
  }
}
</script>
<style scoped>
  #appBlock{width:100%;}
  #btnPost:after{display:table;clear:both;content:"";}
  body{background:#efeff4;}

  /*.contract{padding:10px 24px;}*/
  ul li{list-style:none;}
  .mui-spinner {
    width: 32px;
    height: 32px;
  }
  .height-300{
    height: 150px;
  }

  .item-dingdan{
    margin-bottom: 9px;

    background: white;
  }

  .item-dingdan-title{
    margin-top: 10px;
  }
  .item-dingdan-number{
    margin-top: 14px;
  }
  .item-dingdan-button{
    background: #fbaf37;
    text-align: center;
    line-height: 27px;
    color: white;
    border-radius: 27px;
    float: right;
    width: 84px;
    height: 27px;
    font-family: "微软雅黑";
  }
  .item-dingdan-date{
    margin-top: 12px;
  }
  .item-dingdan-post{
    margin-top: 10px;
  }
  .item-dingdan-isAgree{
    font-size: 14px;
    font-family: "微软雅黑";
    color: #666666;
    margin-left: 24px;
    overflow: hidden;
  }
  .item-dingdan-img{
    vertical-align: middle;
  }

  .item-shenling{
    position: absolute;

    width: 100%;
    background: white;
    margin-bottom: 0px;
  }
  .item-shenling-ul{
    background: white;
    height: 615px;
    padding: 24px 24px 0 24px;
  }
  .item-shenling-li{
    overflow: hidden;
    line-height: 38px;
    margin-bottom: 9px;
  }
  .item-shenling-li>input{
    width: 62.7%;
    height: 36px;
    padding: 0 0 0 12px;
    margin-bottom: 0px;
    float: right;
    font-family: "微软雅黑";
    font-size: 14px;
    color: gray;
    margin-left: 5.3%;
  }
  .item-shenling-li>label{
    font-family: "微软雅黑";
    font-size: 14px;
    color: #333333;
    /*font-weight: bold;*/
  }
  .item-shenling-li textarea{
    border: 0.5px solid rgba(0,0,0,.2);
    font-size: 14px;
    font-family: "微软雅黑";
    color: gray;
    line-height: 21px;
    width: 62.7%;
    float: right;
    height: 72px;
    padding: 7.5px 0 0 12px;

  }
  .item-shenling-btn{
    font-family: "微软雅黑";
    font-size: 16px;
    color: white;
    height: 39px;
    width: 83%;
    margin-left: 8.5%;
    margin-top: 15px;
    font-weight: bold;
    margin-right: 8px;
    background: #fabf37;
    border-radius: 5px;
    text-align: center;
    line-height: 39px;
  }
  .item-back-img{
    display: inline-block;
    height: 18px;
    width: 9px;
    float: left;
  }
  .mui-slider-progress-bar{
    background:none !important;
  }
  .mui-active{

    border-bottom:2px solid #fbaf37 !important;

  }
  .mui-slider-item{
    border: none !important;
  }
  .imgBack{
    position: fixed;
    left: 10px;
    top: 6px;
    width: 9px;
    height: 16px;
    z-index: 4;
    color: black;
  }
  .mui-active{
    color: #FBAF37 !important;
  }
  .hiddenLi{
    overflow: hidden;
    padding: 0 24px;
  }
  .topbarTip{
    color: #333333;
    font-size: 14px;
  }
</style>
