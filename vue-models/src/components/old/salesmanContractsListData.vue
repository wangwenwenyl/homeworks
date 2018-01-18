<template>
    <div class="" style="overflow-Y:scroll;">
        <ul class="contract" v-for="contractData in contractList">
            <li class="contract_num1"><span class="contractnu">合同编号：</span><span style="font-size: 12px;">{{ contractData.contractnum }}</span>
                <p class="Guardian_2">
                    <strong class="Guardian_2img iconfont icon-code" v-if="contractData.constatus==0 ||contractData.constatus==5 ||contractData.constatus==11"></strong>
                    <strong class="Guardian_2img iconfont icon-clock" v-else-if="contractData.constatus==1 ||contractData.constatus==4 ||contractData.constatus==7 ||contractData.constatus==14"></strong>
                    <strong class="Guardian_2img iconfont icon-success" v-else-if="contractData.constatus==2 ||contractData.constatus==6 ||contractData.constatus==8 ||contractData.constatus==10 ||contractData.constatus==13"></strong>
                    <strong class="Guardian_2img iconfont icon-bohui" v-else-if="contractData.constatus==3 ||contractData.constatus==12"></strong>
                    <strong class="Guardian_2img iconfont icon-point-out" v-else-if="contractData.constatus==9"></strong>

                    <!--<img src="../../assets/img/签单-未开始.png" class="Guardian_2img" v-if="contractData.constatus==0 ||contractData.constatus==5 ||contractData.constatus==11">-->
                    <!--<img src="../../assets/img/签单-待审核.png" class="Guardian_2img" v-else-if="contractData.constatus==1 ||contractData.constatus==4 ||contractData.constatus==7 ||contractData.constatus==14">-->
                    <!--<img src="../../assets/img/签单-完成.png" class="Guardian_2img" v-else-if="contractData.constatus==2 ||contractData.constatus==6 ||contractData.constatus==8 ||contractData.constatus==10 ||contractData.constatus==13">-->
                    <!--<img src="../../assets/img/签单-退回.png" class="Guardian_2img" v-else-if="contractData.constatus==3 ||contractData.constatus==12">-->
                    <!--<img src="../../assets/img/签单-提示.png" class="Guardian_2img" v-else-if="contractData.constatus==9">-->
                    <!--<img class="Guardian_2img" :src="dealImg(contractData.constatus)" />-->
                    <span style="font-size: 12px;" class="Guardian_2zhuang">{{ dealTitle(contractData.constatus) }}</span>
                </p>
            </li>
            <li class="state2">
                <p class="state_1">{{ contractData.contpye }}</p>
                </li>
            <li class="Guardian3">
                <p class="Guardian_1">
                    <span class="Guardian_1w">维护人：</span>
                    <span class="Guardian_1p">{{ contractData.username }}</span></p>
                </li>
            <li class="uptime4">
                <p class="uptime_1">
                    <span class="uptime_1t">更新时间：</span>
                    <span class="uptime_1tdate">{{ contractData.conupdate }}</span>
                    </p>
                </li>
            <li class="btn5" v-if="contractData.constatus==0"></li>
            <li class="btn5" v-else-if="contractData.constatus==1">
                <div class="chakanjd" @click="checkProgress(contractData.id,contractData.constatus)">
                    <span class="div_btn" >查看进度</span>
                </div>
                <div class="reminder" @click="reminder(contractData.id)">
                    <span class="div_btn">催单</span>
                </div>
                <div @click="cancel(contractData.contractnum)">
                    <span class="div_btn cheda">撤单</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==2">
                <span class="varbtn_words">签单完成</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==3">
                <div class="chongxintj3" @click="resubmit(contractData)">
                    <span class="div_btn" >重新提交</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==4">
                <span class="varbtn_words">作废审核中</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==5 && contractData.contpye=='信用贷'">
                <div class="sign" @click="sign(contractData)">
                    <span class="div_btn">签单</span>
                </div>
                <div class="abolish" @click="abolish(contractData)">
                    <span class="div_btn zuofe">作废</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==5 && contractData.contpye=='抵押贷'">
                <div class="sign" @click="sign(contractData)">
                    <span class="div_btn">签单</span>
                </div>
                <div class="abolish" @click="abolish(contractData)">
                    <span class="div_btn zuofe">作废</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==5 && contractData.contpye=='质押贷'">
                <div class="abolish" @click="report(contractData)">
                    <span class="div_btn">报备</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==6">
                <span class="varbtn_words">已归档</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==7">
                <div class="abolish" @click="checkProgress(contractData.id,contractData.constatus)">
                    <span class="div_btn">查看进度</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==8">
                <span class="varbtn_words">被撤单完成</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==9">
                <span class="varbtn_words">员工离职废除</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==10">
                <span class="varbtn_words">已提交成交确认书</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==11">
                <div class="sign" @click="sign(contractData)">
                    <span class="div_btn" >签单</span>
                </div>
                <div class="abolish" @click="abolish(contractData)">
                    <span class="div_btn zuofe">作废</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==12">
                <div class="sign" @click="report(contractData)">
                    <span class="div_btn" >报备</span>
                </div>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==13">
                <span class="varbtn_words">被作废完成</span>
            </li>
            <li class="btn5" v-else-if="contractData.constatus==14">
                <span class="varbtn_words">撤单审核中</span>
            </li>
        </ul>
        <div class="window">
            <div class='win-bg' v-show="backgroundShow">

            </div>

            <!--催单 modalBox-->
            <div class='win-reminder' v-show="reminderShow">
                <div class="modheader">
                    <p style="color:#333;">消息提醒</p>
                    <div class="iconfont icon-wrong" @click="close"></div>
                </div>
                <div class="modbodyC">
                    <p class="modreminderP">{{cuidanInner}}</p>
                </div>
                <div class="modfooter">
                    <div class="modfooterBtnC" @click="reminderSure">确定</div>
                </div>
            </div>
            <!--废单弹框-->
            <div class='win-abolish' v-show="abolishShow">
                <div class="modheader">
                    <p>废单无法恢复，请谨慎操作。</p>
                    <div class="iconfont icon-wrong" @click="close"></div>
                </div>
                <div class="modbody">
                    <textarea class='chetext1' v-model="abolishReason" placeholder="请输入废单请求"></textarea>
                </div>
                <div class="modfooter">
                    <div class="modfooterBtn">
                        <div class="modfooterBtnL" @click="close"><span>取消</span></div>
                        <div class="modfooterBtnR" @click="abolishSure"><span>确定</span></div>
                    </div>
                </div>
            </div>
            <!--撤单 modalBox-->
            <div class='win-cancel' v-show="cancelShow">
                <div class="modheader">
                    <p>撤单无法恢复，请谨慎操作。</p>
                    <div class="iconfont icon-wrong" @click="close"></div>
                </div>
                <div class="modbody">
                    <textarea class='chetext1' v-model="cancelReason" placeholder="请输入撤单请求"></textarea>
                </div>
                <div class="modfooter">
                    <div class="modfooterBtn">
                        <div class="modfooterBtnL" @click="close"><span>取消</span></div>
                        <div class="modfooterBtnR" @click="cancelSure"><span>确定</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';

export default {
    data (){
        return {
            userId:'',
            uuid:'',
            uname:'',
            type:0,
            contractList:'',
            contractNum:'',
            backgroundShow:false,
            reminderShow:false,
            cancelShow:false,
            abolishShow:false,
            abolishReason:'',
            cancelReason:'',
            contractId:'',
            cuidanInner:'',
        }
    },
    created(){
        this.userId=this.$cookie.get("uid");
        this.uuid=this.$cookie.get("uuid");
        this.uname=this.$cookie.get("uname");
        Indicator.open('加载中...');
        this.load();
    },
    mounted (){

    },
    methods:{
        //催单接口
        reminderSure(){
            this.close();
        },
      //催单
      reminder(id){
        this.reminderShow=true;
        this.backgroundShow=true;
        this.contractId=id;
          axios.get(host+'/app/reminder?uuid='+this.uuid+"&contractid="+this.contractId,{
          }).then(response=>{
//              MessageBox.alert("<span color='red'>"+response.data.data.message+"</span>", '提示');
              this.cuidanInner=response.data.data.message;
          }).catch(function(err){
            Toast('网络异常');
          });
      },
//        //废单接口
        abolishSure(){
            axios.get(host+"/app/cancelcontract?contractnum=" + this.contractNum + "&userid=" + this.userId + "&content=" + this.abolishReason +"&uuid="+this.uuid,{
            }).then(response=>{
                if (response.data.data.code === '200') {
                    this.close();
                    this.load();
                }else if(response.data.data.code === '500'){
                    Toast('用户已离线');
                }else{
                    Toast('操作失败');
                    this.close();
                    this.load();
                }
            }).catch(function(err){
                Toast('网络异常');
            })
        },
        //撤单接口
        cancelSure(){
            axios.get(host+"/app/revokecontract?contractnum=" + this.contractNum + "&userid=" + this.userId + "&content=" + this.cancelReason +"&uuid="+this.uuid,{
            }).then(response=>{
                if (response.data.data.code === '200') {
                    this.close();
                    this.load();
                }else if(response.data.data.code === '500'){
                    Toast('用户已离线');
                }else{
                    Toast('操作失败');
                    this.close();
                    this.load();
                }
            }).catch(function(err){
                Toast('操作失败');
            });
            this.close();
        },
        //关闭弹框并且清空弹框中的数据
        close(){
            this.backgroundShow=false;
            this.cancelShow=false;
            this.abolishShow=false;
            this.reminderShow=false;
            this.abolishReason='';
            this.cancelReason='';
        },
        //查看合同进度
        checkProgress(id,constatus){
//            alert("查看进度:"+id);
          if(constatus==1){
            this.$router.push({name: 'contractProgress', params: {dt: 0, contractid: id}});
          }else if(constatus==7){
            this.$router.push({name: 'contractProgress', params: {dt: 1, contractid: id}});
          }
        },
        //点击催单按钮，弹出提示框并且将合同id绑定
//        reminder(id){
//            this.reminderShow=true;
//            this.backgroundShow=true;
//            this.contractId=id;
//        },
        //点击撤单按钮，弹出提示框并且绑定合同编号
        cancel(contractNum){
            this.backgroundShow=true;
            this.cancelShow=true;
            this.contractNum=contractNum;
//            MessageBox.prompt(' ', '消息提醒').then(({ value }) => {
//            if (value) {
//              //废单接口
//              axios.get(host+"/app/cancelcontract?contractnum=" + this.contractNum + "&userid=" + this.userId + "&content=" + value +"&uuid="+this.uuid,{
//              }).then(response=>{
//                if (response.data.data.code === '200') {
//                  this.load();
//                }else if(response.data.data.code === '500'){
//                  Toast('用户已离线');
//                }else{
//                  Toast('操作失败');
//                  this.load();
//                }
//              }).catch(function(err){
//                Toast('网络异常');
//              })
//            }
//          });
        },
        //点击重新提交，跳转到对应的合同页面
        resubmit(contractData){
            if (contractData.contpye === '信用贷') {
                console.log("信用贷");
                this.$router.push({ name: 'oldxinyongdai', params:{step:0,nodeType:"0",processinstanceid:"0",contractnum:contractData.contractnum,contractid:contractData.id}});
            } else if (contractData.contpye === '抵押贷') {
                console.log("抵押贷");
                this.$router.push({ name: 'olddiyadai', params:{step:0,nodeType:"0",processinstanceid:"0",contractnum:contractData.contractnum,contractid:contractData.id}});
            } else if (contractData.contpye === '质押贷') {
                console.log("质押贷");
                this.$router.push({ name: 'oldzhiyafanhetong', params:{step:0,nodeType:"0",processinstanceid:"0",contractnum:contractData.contractnum,contractid:contractData.id}});
            }
        },
        //点击签单按钮，跳转到对应的合同页面
        sign(contractData){
//            console.log(contractData.contpye);
//            alert("签单");
          if(contractData.constatus==5){
              if(contractData.contpye=="信用贷"){
                this.$router.push({ name: 'oldxinyongdai', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
              }else if(contractData.contpye=="抵押贷"){
                this.$router.push({ name: 'olddiyadai', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
              }else if(contractData.contpye=="质押贷") {
                this.$router.push({ name: 'oldzhiyafanhetong', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
              }
          }else if(contractData.constatus==11){
            if(contractData.contpye=="信用贷"){
              this.$router.push({ name: 'oldxinyongdai', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
            }else if(contractData.contpye=="抵押贷"){
              this.$router.push({ name: 'olddiyadai', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
            }else if(contractData.contpye=="质押贷") {
              this.$router.push({ name: 'oldzhiyafanhetong', params:{step:0,nodeType:"0",processinstanceid:'0',contractnum:contractData.contractnum,contractid:contractData.id}});
            }
          }
        },
        //点击废单按钮，弹出提示框并且绑定合同编号
        abolish(contractData){
            this.abolishShow=true;
            this.backgroundShow=true;
            this.contractNum=contractData.contractnum;
//            MessageBox.prompt(' ', '消息提醒').then(({ value }) => {
//              if (value) {
//                //废单接口
//                  axios.get(host+"/app/cancelcontract?contractnum=" + this.contractNum + "&userid=" + this.userId + "&content=" + value +"&uuid="+this.uuid,{
//                  }).then(response=>{
//                    if (response.data.data.code === '200') {
//                      this.load();
//                    }else if(response.data.data.code === '500'){
//                      Toast('用户已离线');
//                    }else{
//                      Toast('操作失败');
//                      this.load();
//                    }
//                  }).catch(function(err){
//                    Toast('网络异常');
//                  })
//              }
//            });
        },
        //点击报备按钮，跳转到报备合同页面
        report(contractData){
            this.$router.push({ name: 'oldbaobei', params:{step:0,nodeType:0,processinstanceid:0,contractnum:contractData.contractnum,typeid:1,contractid:contractData.id}});
//            console.log('/zhiyabaobei/0/0/'+contractData.processinstanceid+'/'+contractData.contractnum+'/1/'+contractData.id);
        },
        //根据合同的状态值，加载相应的图片
        dealImg(constatus){
//            console.log(constatus);
            switch (constatus){
                case 0: case 5: case 11: return "../../assets/img/签单-未开始.png"; break;
                case 1: case 7: case 14: case 4: return "../../assets/img/签单-待审核.png"; break;
                case 2: case 6: case 8: case 10: case 13: return "../../assets/img/签单-完成.png"; break;
                case 3: case 12: return "../../assets/img/签单-退回.png"; break;
                case 9: return "../../assets/img/签单-提示.png"; break;
            }
        },
        //根据合同的不同状态值，返回合同的实际状态
        dealTitle(constatus){
          switch (constatus){
              case 0: case 5: return "尚未签单"; break;
              case 1: return "签单审核中"; break;
              case 2: return "签单完成"; break;
              case 3: return "审核未通过"; break;
              case 4: return "作废审核中"; break;
              case 6: return "已归档"; break;
              case 7: return "报备审核中"; break;
              case 8: return "被撤单完成"; break;
              case 9: return "员工离职废除"; break;
              case 10: return "已提交成交确认书"; break;
              case 11: return "未签单"; break;
              case 12: return "报备被驳回"; break;
              case 13: return "被作废完成"; break;
              case 14: return "撤单审核中"; break;
          }
        },
        //加载合同列表
        load(){
            axios.post(host+"/app/getrecordcontractlist",qs.stringify({
                userid:this.userId,
                uname:this.uname,
                type:this.type,
            })).then(response=>{
                console.log(response);
                if(response.status=='200'){
                    Indicator.close();
                    this.contractList=response.data.data;
                    console.log(this.contractList);
                }else if(response.status=='400'){
                  Indicator.close();
                  Toast('加载失败');
                }
            }).catch(function(err){
                Indicator.close();
                Toast('操作失败');
            });
        }
    },
    props:[""],
}
</script>

<style scoped>
    @import '../../assets/css/Peng-common.css';
    @import "../../assets/css/server.css";

    html, body {
        touch-action: none;
        height: 100%;
        width: 100%;
    }

    header {
        background-color: #fff;
        line-height: 44px;

        /*顶端固定*/
        position: fixed;
        width: 100%;
        z-index: 100;
        top: 0px
    }

    .contractList {
        overflow: hidden;
        margin-top: 44px;
    }

    header > h1 {
        font-size: 18px;
        color: #333;
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

    header > h1 > .ret:before {
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
        top: 9px;
    }

    .contract {
        border-top: 9px solid #f5f5f5;
        /*border-bottom: 9px solid #f5f5f5;*/
        background-color: #fff;
    }

    .contract > li {
        overflow: hidden;
    }

    /*<li>1*/
    .contract_num1 {
        text-align: left;
        line-height: 42px;
        color: #333;
        padding-left: 15px;
        border-bottom: 1px solid #efefef;
        white-space: nowrap;
    }

    /*<li>2*/
    .state2 {
        line-height: 38px;
        font-size: 16px;
    }

    .state2 > p {
        color: #333;
    }

    .state_1 {
        float: left;
        margin-left: 20px;
        color: #333;

        font-size: 14px;
    }

    .contractnu {
        font-size: 14px;
        /*font-weight: bold;*/
    }

    /*<li>3*/
    .Guardian3 {
        line-height: 38px;
    }

    .Guardian3 > p {
        display: inline-block;
    }

    .Guardian_1 {
        float: left;
        margin-left: 20px;
        color: #333;
        font-size: 14px;
    }

    .Guardian_1w {
        font-size: 14px;

    }

    .Guardian_1p {
        font-size: 14px;
        color: #666;
    }

    .Guardian_2 {
        float: right;
        width: 31%;
        display: inline-block;
        margin-right: 5%;
        text-align: right;
    }

    .Guardian_2 > span {

    }

    .Guardian_2zhuang {
        color: #666;
    }

    .Guardian_2img {
        /*display: inline-block;*/
        /*width: 13px;*/
        /*height: 13px;*/
        /*background: url("../img/exclamation.png") no-repeat;*/
        /*background-size: 100% 100%;*/
        /*vertical-align: middle;*/
        /*margin-right: 8%;*/
        font-size: 15px;
    }

    /*<li>4*/
    .uptime4 {
        line-height: 38px;
    }

    .uptime_1 {
        display: inline-block;
        float: left;
        margin-left: 20px;
        color: #333;
    }

    .uptime_1t {

        font-size: 14px;
    }

    .uptime_1tdate {
        color: #666;
    }

    /*<li>5*/
    .btn5 {
        line-height: 51px;
        height: 51px;
        /*padding-right: 40px;*/
        padding-right: 4.79%;
        border-top: 1px solid #efefef;
        text-align: right;
    }

    .btn5 > div {
        width: 84px;
        line-height: 27px;
        display: inline-block;
        border-radius: 20px;
        background-color: #fbaf37;
        vertical-align: middle;
        text-align: center;
        color: #fff;
    }

    .btn5 > div > span {
        font-size: 14px;
        color: #fff;
    }

    .varbtn_words {
        font-size: 14px;
        color: #666;
    }

    .sign, .chakanjd, .reminder {
        margin-right: 4.3%;
    }

    .contract>li>div:last-of-type{
      margin-right:0;
    }

    /*modalBox*/
    .hide {
        /*display:none !important;*/
        display: none;
    }

    .win-bg {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        background-color: #000;
        opacity: 0.25;
        z-index: 1000;
    }

    /*撤单alert*/
    .modle_sex_shou2 {
        width: 85.3%;
        height: 33%;
        /*height: 396px;*/
        position: fixed;
        z-index: 15;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius: 10px;
        overflow: auto;
    }

    .modheader {
        /*height:55px;*/
        height:55px;
        background-color: #f9f9f9;
        padding-left: 15px;
        padding-right: 15px;
    }

    .modheader > p {
        display: inline-block;
        float: left;
        font-size: 16px;
        color:red;
        /*margin-top: 18px;*/
        line-height:55px;
    }

    .modheader > div {
        display: inline-block;
        float: right;
        /*margin-top: 5%;*/
        line-height:55px;
        font-size:20px;
    }

    .tanClose {
        width: 24px;
        height: 24px;
        background: url("../../assets/img/tanClose.png") no-repeat;
        background-size: 100% 100%;
    }

    .modbody {
        background-color: #fff;
        height: 39%;
        line-height: 39%;
        /*overflow:hidden*/
    }

    .modbody > textarea {
        display: block;
        width: 81.25%;
        /*height: 81px;*/
        height: 90%;
        margin: 0 auto;
        color: #666;
        font-size: 16px;
        /*margin-top: 10px;*/
        margin-top:4%;
        border-radius: 5px;
    }

    textarea::placeholder {
        color: #dadada;
        font-size: 16px;
    }

    .modfooter {
        height: 20%;
        margin-top: 3%;
    }

    .modfooterBtn {
        width: 81.25%;
        /*height:40px;*/
        /*height:77%;*/
        height:40px;
        margin: 0 auto;
        /*background-color: #8f8f94;*/
    }

    .modfooterBtn > div {
        /*line-height: 40px;*/
        line-height: 100%;
        vertical-align: middle;
        text-align: center;
        /*height: 40px;*/
        height: 100%;
        border-radius:4px;
    }

    .modfooterBtnL {
        float: left;
        width: 44%;
        background-color: #fff;
        border: 1px solid #e5e5e5;
    }

    .modfooterBtnR {
        float: right;
        width: 44%;
        background-color: #fbaf37;
    }

    .modfooterBtn > div > span {
        line-height:40px;
        /*line-height: 100%;*/
        display: block;
        height: 100%;
        vertical-align: middle;
    }

    .modfooterBtnL > span {
        color: #a5a5a5;
    }

    .modfooterBtnR > span {
        color: #fff;
    }

    /*催单alert*/
    .win-reminder {
        width: 85.3%;
        height:215px;
        /*height: 396px;*/
        position: fixed;
        z-index: 1500;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius:4px;
        overflow: auto;
    }

    .modbodyC {
        background-color: #fff;
        height: 39%;
        line-height: 39%;
        /*overflow:hidden*/
        padding-top: 13%;
    }

    .modreminderP {
        /*vertical-align:center;*/
        color: #999;
        font-size: 16px;
        text-align: center;
        vertical-align: middle;
        height: 100%;
        line-height: 100%;
    }

    .modfooterBtnC {
        line-height: 39px;
        background-color: #fbaf37;
        width: 90.6%;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border-radius:4px;
    }

    .modle_sex_shou4 {
        width: 85.3%;
        height: 33%;
        /*height: 396px;*/
        position: fixed;
        z-index: 1500;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius: 10px;
        overflow: auto;
    }

    .modle_sex_shou4 > .modbody > p {
        text-align: center;
        line-height: 80px;
        font-size: 17px;
    }

    .win-cancel {
        width: 85.3%;
        height:215px;
        /*height: 396px;*/
        position: fixed;
        z-index: 1500;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius:4px;
        overflow: auto;
        margin-top: 50%;
    }

    .win-cancel > .modbody > p {
        text-align: center;
        line-height: 80px;
        font-size: 17px;
    }

    .win-abolish {
        width: 85.3%;
        height:215px;
        /*height: 396px;*/
        position: fixed;
        z-index: 1500;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius:5px;
        overflow: auto;
        margin-top:50%;
    }

    .win-abolish > .modbody > p {
        text-align: center;
        line-height: 80px;
        font-size: 17px;
    }

    /*无数据提示*/
    .nomess {
        text-align: center;
        margin-top: 150px;
    }

    .noImg {
        /*background: url('../img/noMess.png') no-repeat;*/
        background-size: 100% 100%;
        width: 180px;
        height: 180px;
        margin: 0 auto;
    }

    .Notes {
        margin-top: 50px;
        text-align: center;
        font-size: 18px;
    }
    textarea{border:1px solid #ddd;resize:none;}
</style>
