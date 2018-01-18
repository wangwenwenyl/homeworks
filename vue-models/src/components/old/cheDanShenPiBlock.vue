<template>
  <div id="appBlock" style="overflow-Y:scroll;">
    <div id="refreshContainer" class="mui-content mui-scroll-wrapper" >
        <ul class="contract" v-for="item in items">
          <li class="state2">
            <p class="state_1"><span>申请人：</span><span class="state_1m2">{{item.submittername}}</span></p>
          </li>
          <li class="Guardian3">
            <p class="Guardian_1">
              <span class="Guardian_1w" style="margin-right: 0px">作废详情：</span>
              <span class="Guardian_1p" style="margin-left: 0px">{{item.processname}}</span>
            </p>
          </li>
          <li class="uptime4">
            <p class="Guardian_2">
              <span class="Guardian_2w">申请原因：</span><span class="Guardian_2zhuang">{{item.reason}}</span>
            </p>
          </li>
          <li class="uptime4">
            <p class="uptime_1">
              <span class="uptime_1t">合同日期：</span><span class="uptime_1tc">{{item.date}}</span>
            </p>
          </li>
          <li class="btn5">
            <div class="page-popup" >
              <div class="page-popup-wrapper">
                <mt-button @click="popupVisible1 = true" size="large" ref="button">
                  <div class="zuofei">
                    <span class="div_btn" v-if="item.type==4">作废</span>
                    <span class="div_btn" v-else-if="item.type==5">撤单</span>
                  </div>
                </mt-button>
              </div>
              <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" style="width:85%;border-radius:5px;">
                <div class="modheader">
                  <p style="text-align: left;float:left;"> 合同审批</p>
                  <div class="tanClose" @click="popupVisible1=false"></div>
                </div>
                <p style="line-height:90px;">点击"确定"通过申请，点击"取消"驳回申请</p>
                <div class="pop-cancel"  @click="cancelajax(item)">取消</div>
                <div class="pop-sure" @click="sureajax(item)">确定</div>
              </mt-popup>
            </div>
          </li>
        </ul>
        <div v-show="show" style="margin-top:44px;">
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
export default {
  data () {
  return {
    userid:'',
    uuid:'',
    popupVisible1:false,
    items:[],
    page:1,
    show:false,
    allLoaded: false,//是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
    scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    }
  },
  created:function(){
    this.userid=this.$cookie.get('uid');
    this.uuid=this.$cookie.get('uuid');
    // this.userid="819384343152005146";
    // this.uuid="123456";
    this.load();
  },
  methods:{
    load() {
      this.loading = true;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.post(host+"/app/getrecordcontractlist?userid="+this.userid+"&type=3",qs.stringify({
      })).then(response=>{
        if(response.status=='200'){
          if(response.data.data==""){
            this.show=true;
          }else{
            this.items=this.items.concat(response.data.data);
          }
        }
        Indicator.close();
      }).catch(function (error){
        Toast('操作失败');
      });
    },
    handleTopChange() {
      // 加载更多数据
      setTimeout(() => {
        this.page=1;
        this.items=[];
        this.load();
        this.$refs.loadmore.onTopLoaded();
      }, 1500);

    },
    handleBottomChange() {
      // 加载更多数据
//      this.allLoaded = true;// 若数据已全部获取完毕
//      this.$refs.loadmore.onBottomLoaded();
      setTimeout(() => {
        this.page=1;
        this.items=[];
        this.load();
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    cancelajax(item){
      Indicator.open();
      axios.get(host+"/app/reject?uuid="+this.uuid+"&userid="+this.userid+"&nodeType=0&typeid="+item.type+"&step="+item.step+"&processinstanceid="+item.processinstanceid+"&auditoropinion=&contractid="+item.id,qs.stringify({

      })).then(response=>{
        if(response.data.code=='200'){
            this.items=[];
            this.load();
        }
        Indicator.close();
      }).catch(function (error){
        Toast('撤单操作失败');
      });
    },
    sureajax(item){
      Indicator.open();
      axios.get(host+"/app/approve?uuid="+this.uuid+"&userid="+this.userid+"&nodeType=0&typeid="+item.type+"&step="+item.step+"&processinstanceid="+item.processinstanceid+"&auditoropinion=&num=&contractid="+item.id,qs.stringify({
      })).then(response=>{
        if(response.data.code=='200'){
           this.items=[];
            this.load();
        }
        Indicator.close();
      }).catch(function (error){
        Toast('撤单操作失败');
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
  body{background:#efeff4;}
  ul li{list-style:none;}
  .mui-spinner {
    width: 32px;
    height: 32px;
  }
  /*下拉刷新的箭头颜色*/
  .mui-pull-top-pocket{
    margin-top:44px;
  }
  .mui-icon-pulldown {
    color: #fbaf37;
  }
  .mui-spinner:after {
    border-color:#fbaf37;
  }
  .mui-bar{
    position: relative;
    background-color: #fff;
  }
  header{
    background-color: #fff;
    line-height: 44px;

    /*顶端固定*/
    position:fixed;
    width:100%;
    z-index: 100;
    top:0px
  }
  .contractList{
    overflow: hidden;
    margin-top: 44px;
  }
  header>h1>.ret:before{
    height: 16px;
    width: 9px;
    display: inline-block;
    float: left;
    vertical-align: middle;
    /*background: url("../img/return.png") no-repeat;*/
    /*background-size:100% 100% ;*/
    /*margin-left: 4%;*/
    position: absolute;
    margin: auto 0;
    left: 4%;
    top:9px;
  }
  header>h1{
    font-size: 18px;
    color:#333;
    /*font-weight: 500;*/
    line-height: 44px;
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 0px;
    font-weight: bold;
    /*white-space: nowrap;*/
  }
  .contractList{
    overflow: hidden;
  }
  .contract{
    border-top:9px solid #f5f5f5;
    background-color: #fff;
  }
  .contract>li{
    overflow: hidden;
  }
  /*<li>1*/
  .contract_num1{
    text-align: left;
    line-height: 42px;
    color: #333;
    padding-left: 4%;
    border-bottom: 1px solid #efefef;
  }
  /*<li>2*/
  .state2{
    line-height: 38px;
    font-size:16px;
  }
  .state2>p{
    color:#333;
  }
  .state_1{
    float: left;
    margin-left: 4.4%;
    margin-right: 4.4%;
    color:#333;
    /*font-weight: bold;*/
    font-size:14px;
  }
  .state_1m2{
    color:#666;
  }
  .contractnu{
    font-size:15px;
    font-weight: bold;
  }

  /*<li>3*/
  .Guardian3{
    line-height: 38px;
  }
  .Guardian3>p{
    display: inline-block;
  }
  .Guardian_1{
    float: left;
    margin-left: 4.4%;
    margin-right: 4.4%;
    color:#333;
    font-size:14px;
  }
  .Guardian_1w{
    font-size:14px;
    /*font-weight: bold;*/
  }
  .Guardian_1p{
    font-size:14px;
    color:#666;
  }
  .Guardian_2{
    float: left;
    margin:0px 4.4%;
    color:#333;
    font-size:14px;
  }
  .Guardian_2w{
    color: #333;
    /*font-weight: bold;*/
  }

  .Guardian_2zhuang{
    color:#666;
  }
  /*<li>4*/
  .uptime4{
    line-height: 38px;
  }
  .uptime_1{
    display: inline-block;
    margin:0px 4.4%;
    color:#333;
  }
  .uptime_1t{
    /*font-weight: bold;*/
    font-size:14px;
  }
  .uptime_1tc{
    color:#666;
    font-size:14px;
  }
  /*<li>5*/
  .btn5{
    line-height: 51px;
    height: 51px;
    /*padding-right: 40px;*/
    padding-right: 6.4%;
    border-top: 1px solid #efefef;
    text-align: right;
  }
  .btn5>div{
    width:84px;
    line-height: 27px;
    display: inline-block;
    border-radius: 20px;
    background-color: #fbaf37;
    vertical-align: middle;
    text-align: center;
  }
  .btn5>div>span{
    font-size: 14px;
    color:#fff;
  }
  .pop-cancel{display:inline-block;width:90px;height:40px;line-height:40px;text-align: center;
    border:1px solid #ddd;border-radius:4px;margin-right:20px;margin-bottom:20px;}
  .pop-sure{display:inline-block;width:90px;height:40px;line-height:40px;text-align: center;border-radius:4px;background:#fbaf37;color:#fff;}
  .modheader{line-height:55px;background:#efeff4;padding:0px 10px;}
  .modheader:after{display:table;content:"";clear:both;}
  .tanClose{width:24px;height:24px;background:url("../../assets/image/tanClose.png");background-size:100% 100%;float:right;margin-top:15px;}
  .mint-button{height:30px;line-height:30px;background:#fbaf37;color:#fff;font-size:14px;border-radius:20px;}
</style>
