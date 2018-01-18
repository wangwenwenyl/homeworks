<template>
  <div id="appBlock" style="overflow-Y:scroll;">
    <div id="refreshContainer" class="mui-content mui-scroll-wrapper" >
        <ul class="contract" v-for="item in items">
          <li class="state2">
            <p class="state_1"><span class="state_1m2">{{item.contpye}}</span></p>
          </li>
          <li class="state2">
            <p class="state_1"><span>申请人：</span><span class="state_1m2">{{item.name}}</span></p>
          </li>
          <li class="Guardian3">
            <p class="Guardian_1" style="display:inline-block;width:48%;">
              <span class="Guardian_1w" style="margin-right: 0px">合同数量：</span>
              <span class="Guardian_1p" style="margin-left: 0px">{{item.num}}</span>
            </p>
            <p class="Guardian_2" style="display:inline-block;width:50%;">
              <span class="Guardian_2w">申请时间：</span><span class="Guardian_2zhuang">{{ dealTime(item.date)}}</span>
            </p>
          </li>
          <!--<li class="uptime4">-->
            <!--<p class="Guardian_2">-->
              <!--<span class="Guardian_2w">申请时间：</span><span class="Guardian_2zhuang">{{ dealTime(item.date)}}</span>-->
            <!--</p>-->
          <!--</li>-->
          <li class="uptime4">
            <p class="uptime_1">
              <span class="uptime_1t">申请原因：</span><span class="uptime_1tc">{{item.content}}</span>
            </p>
          </li>
          <li class="btn5">
            <div class="zuofei" @click="approval(item)"><span class="div_btn">审批</span></div>
          </li>
        </ul>
        <div v-show="show" style="margin-top:44px;">
          <noData></noData>
        </div>
    </div>
      <div v-show="showWindow">
          <div class='modle_blank_shou2'>

          </div>
          <!--撤单 modalBox-->
          <div class='modle_sex_shou2'>
              <div class="modheader">
                  <p>合同审批</p>
                  <div class="tanClose iconfont icon-wrong" @click="close"></div>
              </div>
              <div class="modbody">
                  <table class="mbtable">
                      <tr>
                          <td>合同类型</td>
                          <td>审批数量</td>
                      </tr>
                      <tr>
                          <td id="tableType">{{typename}}</td>
                          <td>
                              <input id='approvalnum' v-model="approvalnum" v-on:blur="verification" class='approvalnum' placeholder="" />
                          </td>
                      </tr>
                      <tr class="mbtabletext">
                          <td colspan="2">
                              <textarea id='chetext' v-model="chetext" class='chetext' placeholder="审批意见"></textarea>
                          </td>
                      </tr>
                  </table>
              </div>
              <div class="modfooter">
                  <div class="modfooterBtn">
                      <div class="modfooterBtnL" @click="cancelajax"><span>不同意</span></div>
                      <div class="modfooterBtnR" @click="sureajax"><span>同意</span></div>
                  </div>
              </div>
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
      username:'',
      uuid:'123456',

      approvalnum:'',
      chetext:'',
      processinstanceid:'',
      contractid:'',
      typename:'',
      num:'',

      popupVisible1:false,
      items:[],
      page:1,
      show:false,
      showWindow:false,
      loading:true,
      allLoaded: false,//是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    }
  },
  mounted:function(){
      this.uuid=this.$cookie.get("uuid");
      this.username=this.$cookie.get("uname");
      this.userid=this.$cookie.get("uid");
    this.load();
  },
  methods:{
      approval(item){
          this.showWindow=true;
          this.processinstanceid =item.id;
          this.approvalnum=item.num;
          this.num=item.num;
          this.contractid=item.printlogid;
          console.log(this.contractid);
          this.typename=item.contpye;
      },
      dealTime(time){
          return time.split(" ")[0];
      },
      close(){
        this.showWindow=false;
    },
      load() {
      this.loading = true;

      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      axios.get(host+"/app/getapplycontract?uname="+this.username+"&userid="+this.userid,qs.stringify({
      })).then(response=>{
        console.log(response);
        if(response.status=='200'){
          if(response.data.data==""){
            this.show=true;
          }else{
            this.items=this.items.concat(response.data.data);
          }
        }
        Indicator.close();
      }).catch(function (error){
          Toast("网络超时");
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
      cancelajax(){
          this.close();
          if(parseInt(this.approvalnum)>parseInt(this.num)||parseInt(this.approvalnum)>5||parseInt(this.approvalnum)<1){
              return false;
          }else {
              axios.get(host + "/app/reject?userid=" + this.userid + "&nodeType=0&typeid=3&step=1&processinstanceid=" + this.processinstanceid + "&auditoropinion=" + this.chetext + "&num=" + this.num + "&uuid=" + this.uuid + "&contractid=" + this.contractid, qs.stringify({})).then(response => {
                  if(response.data.code=="200"){
                      this.items=[];
                      this.processinstanceid ="";
                      this.approvalnum="";
                      this.contractid="";
                      this.typename="";
                      this.chetext = "";//清除审批原因
                      this.load();
                  }else{
                      Toast("操作失败");
                  }
              }).catch(function (err) {
                  Toast("网络超时");
              });
          }
    },
      verification(){
          if(parseInt(this.approvalnum)>parseInt(this.num)||parseInt(this.approvalnum)>5||parseInt(this.approvalnum)<1){
              Toast("合同份数有误");
              this.approvalnum=this.num;
          }
      },
      sureajax(){
          this.close();
          if(parseInt(this.approvalnum)>parseInt(this.num)||parseInt(this.approvalnum)>5||parseInt(this.approvalnum)<1){
              return false;
          }else{
              axios.get(host+"/app/approve?userid=" + this.userid + "&nodeType=0&typeid=3&step=1&processinstanceid=" + this.processinstanceid + "&auditoropinion=" + this.chetext + "&num=" + this.num + "&uuid=" + this.uuid + "&contractid=" + this.contractid,qs.stringify({

              })).then(response=>{
                  if(response.data.code=="200"){
                      this.items=[];
                      this.processinstanceid ="";
                      this.approvalnum="";
                      this.contractid="";
                      this.typename="";
                      this.chetext = "";//清除审批原因
                      this.load();
                  }else{
                      Toast("操作失败");
                  }
              }).catch(function(err){
                  Toast("网络超时");
              });
          }
    },

  },
  components:{
    "noData":noData,
    'v-loadmore':Loadmore,
  }
}
</script>
<style scoped>
    @import "../../assets/css/app.css";
    @import "../../assets/css/Peng-common.css";
    @import "../../assets/css/loadingSyn.css";


  .pop-cancel{display:inline-block;width:90px;height:40px;line-height:40px;text-align: center;
    border:1px solid #ddd;border-radius:10px;margin-right:20px;margin-bottom:20px;}
  .pop-sure{display:inline-block;width:90px;height:40px;line-height:40px;text-align: center;border:1px solid #ddd;border-radius:10px;background:#fbaf37;color:#fff;}
  .modheader{line-height:40px;background:#efeff4;padding:0px 10px;}
  .modheader:after{display:table;content:"";clear:both;}
  .mint-button{height:30px;line-height:30px;background:#fbaf37;color:#fff;font-size:14px;border-radius:20px;}
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
        /*border-bottom:9px solid #f5f5f5;*/
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
        margin-left: 6.4%;
        color:#333;
        font-weight: bold;
        font-size:14px;
    }
    .state_1m2{
        color:#666;
    }
    .contractnu{
        font-size:16px;
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
        /*margin-left: 6.4%;*/
        padding-left: 6.4%;
        color:#333;
        font-size:14px;
    }
    .Guardian_1w{
        font-size:14px;
        font-weight: bold;
    }
    .Guardian_1p{
        font-size:14px;
        color:#666;
    }
    .Guardian_2{
        float: left;
        /*margin-right: 44px;*/
        padding-left: 1.4%;
    }
    .Guardian_2w{
        color: #333;
        font-weight: bold;
        font-size:14px;
    }
    .Guardian_2img{
        display: inline-block;
        width: 17px;
        height:17px;
        background: url("../../assets/img/exclamation.png") no-repeat;
        background-size:100% 100%;
        vertical-align: middle;
        margin-right: 24px;
    }
    .Guardian_2zhuang{
        color:#666;
        font-size:14px;
    }
    /*<li>4*/
    .uptime4{
        line-height: 38px;
    }
    .uptime_1{
        display: inline-block;
        float: left;
        margin-left: 6.4%;
        margin-right: 0%;
        color: #333;
        width: 100%;
    }
    .uptime_1t{
        font-weight: bold;
        font-size:14px;
        display: block;
        float: left;
        /*width: 26%;*/
    }
    .uptime_1tc{
        color: #666;
        font-size: 14px;
        /* display: block; */
        float: left;
        width: 69%;
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
    .varbtn_words{
        font-size: 14px;
        color:#666;
    }
    .qiandan,.chakanjd,.cuidan{
        margin-right: 4.3%;
    }


    /*modalBox*/
    .hide{
        /*display:none !important;*/
        display:none;
    }
    .modle_blank_shou2{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        background-color: #000;
        opacity:0.25;
        z-index: 1000;
    }
    /*撤单alert*/
    .modle_sex_shou2{
        width: 85.3%;
        height: 50%;
        /*height: 396px;*/
        position: fixed;
        z-index: 1500;
        margin:auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius:5px;
        overflow: auto;
    }
    .modheader{
        /*height:55px;*/
        height:55px;
        background-color:#f9f9f9;
        padding-left: 15px;
        padding-right: 15px;
    }
    .modheader>p{
        display: inline-block;
        float: left;
        font-size: 16px;
        color: #666;
        line-height:55px;
    }
    .modheader>div{
        display: inline-block;
        float: right;
        line-height:55px;
    }
    .tanClose{
        width: 24px;
        height:24px;
        text-align:center;
      line-height:24px;
      font-size:25px;
    }
    .modbody{
        background-color: #fff;
        height: 57%;
        line-height: 39%;
        padding-top: 5%;
        margin-bottom: 3%;
        /*overflow:hidden*/
    }
    .modbody>textarea{
        display: block;
        width: 81.25%;
        /*height: 81px;*/
        height: 90%;
        margin:0 auto;
        color:#666;
        font-size: 16px;
        /*margin-top: 10px;*/
        margin-top: 3%;
        border-radius: 5px;
    }
    textarea::placeholder {
        color:#dadada;font-size:16px;
    }
    .modfooter{
        height: 15%;
        margin-top: 3%;
    }
    .modfooterBtn{
        width: 81.25%;
        /*height:40px;*/
        height:77%;
        margin: 0 auto;
        /*background-color: #8f8f94;*/
    }
    .modfooterBtn>div{
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
        height: 40px;
        border-radius:4px;
    }
    .modfooterBtnL{
        float: left;
        width: 44%;
        background-color:#fff ;
        border: 2px solid #e5e5e5;
    }
    .modfooterBtnR{
        float: right;
        width: 44%;
        background-color: #fbaf37;
    }
    .modfooterBtn>div>span{
        line-height: 40px;
    }
    .modfooterBtnL>span{
        color:#a5a5a5;
    }
    .modfooterBtnR>span{
        color:#fff;
    }

    .mbtable{
        height: 90%;
        width:80%;
        margin: 0 auto;
    }
    .mbtable tr{
        line-height: 35px;
        border: 1px solid #ccc;
    }
    .mbtable tr td{
        border: 1px solid #ccc;
        text-align: center;
        font-size: 13px;
        color: #666;
        width:50%;
    }
    .mbtabletext{
        line-height: 35px;
    }
    .chetext{
        height:50px;
        /*margin-top: 10px;*/
        /*margin-bottom: 10px;*/
        padding-left: 5px;
        padding-right: 5px;
        border:none;
        font-size: 13px;
    }
    .approvalnum{
        -webkit-user-select: text;
        outline: 0;
        border:none;
        font-size: 13px;
        line-height:20px;
        width: 100%;
        text-align: center;
    }
    .modfooterBtn{
        width: 81.25%;
        /*height:40px;*/
        height:77%;
        margin: 0 auto;
        /*background-color: #8f8f94;*/
    }
    .modfooterBtn>div{
        line-height: 40px;
        vertical-align: middle;
        text-align: center;
        height: 40px;
        border-radius:4px;
    }
</style>
