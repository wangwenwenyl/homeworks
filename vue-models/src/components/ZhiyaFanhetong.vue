<template>
    <div id="appdiyadai" style="text-align: left;overflow-Y:scroll;" >
        <ContractTop tle="审批" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
        <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
            <div style="width:1050px;">
                <mt-tab-item id="1">委托协议</mt-tab-item>
                <mt-tab-item id="2">流程附件</mt-tab-item>
                <mt-tab-item id="3">成交确认书</mt-tab-item>
                <mt-tab-item id="4">合作交接单</mt-tab-item>
                <mt-tab-item id="5">承诺函</mt-tab-item>
                <mt-tab-item id="6">佣金说明书</mt-tab-item>
                <mt-tab-item id="7">无合同声明</mt-tab-item>
                <mt-tab-item id="8">情况说明</mt-tab-item>
                <mt-tab-item id="9">{{ type?'押车报备单':'报备单' }}</mt-tab-item>
                <mt-tab-item id="10">审批意见</mt-tab-item>
            </div>
        </mt-navbar>

        <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
            <mt-tab-container-item id="1">
                <weituoxieyi v-bind:xieyi='xieyi'></weituoxieyi>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:fanhetong="contype" v-bind:showsave="false" v-bind:contracttype="contractType" ></liuchengfujian>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <chengjiaoquerenshu v-bind:chengjiaoquerenshu="chengjiaoquerenshu" v-bind:showsave="false" v-bind:showor="true"></chengjiaoquerenshu>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <hezuojiaojiedan v-bind:hezuojiaojiedan="hezuojiaojiedan" v-bind:showsave="false" v-bind:showor="true"></hezuojiaojiedan>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <chengnuohan v-bind:chengnuohanall="chengnuohan" v-bind:showsave="false" v-bind:showor="true"></chengnuohan>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <yongjinshuomingshu v-bind:yongjinshuomingshu="yongjinshuomingshu" v-bind:showsave="false" v-bind:showor="true"></yongjinshuomingshu>
            </mt-tab-container-item>
            <mt-tab-container-item id="7">
                <wuhetongshengming v-bind:wuhetongshengming="wuhetongshengming" v-bind:showsave="false" v-bind:showor="true"></wuhetongshengming>
            </mt-tab-container-item>
            <mt-tab-container-item id="8">
                <qingkuangshuoming v-bind:qingkuangshuoming="qingkuangshuoming" v-bind:showsave="false" v-bind:showor="true"></qingkuangshuoming>
            </mt-tab-container-item>
            <mt-tab-container-item id="9">
                <chebaobei v-if="xieyi.carPropertyModel" v-bind:detailShow="detailShow" v-bind:showsave="showSave" v-bind:buchong="buchong" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>
                <fangbaobei v-else v-bind:fangbaobei="fangbaobei" v-bind:detailShow="detailShow" v-bind:buchong="buchong" v-bind:showsave="showSave" @child-info="savefang"></fangbaobei>
            </mt-tab-container-item>
            <mt-tab-container-item id="10">
                <shenpiyijian v-bind:showhistory="showhistory" v-bind:history="history" v-on:approve="approve" v-on:unapprove="unapprove"></shenpiyijian>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import axios from 'axios';
    import { Tabbar, TabItem } from 'mint-ui';
    import {Toast} from 'mint-ui';
    import ContractTop from '@/components/ContractTop';
    import WeiTuoXieYi from '@/components/ZhiyaWeituoxieyi';
    import liuchengfujian from '@/components/liuchengfujian';
    import qingkuangshuoming from '@/components/ZhiyaQingkuangshuoming';
    import chengjiaoquerenshu from '@/components/ZhiyaChengjiaoquerenshu';
    import hezuojiaojiedan from '@/components/ZhiyaHezuojiaojiedan';
    import chengnuohan from '@/components/chengnuohan';
    import yongjinshuomingshu from '@/components/ZhiyaYongjinshuomingshu';
    import wuhetongshengming from '@/components/ZhiyaWuhetongshengming';
    import CheBaoBei from '@/components/ZhiyaChebaobei';
    import FangBaoBei from '@/components/ZhiyaFangbaobei';
    import shenpiyijian from '@/components/shenpiyijian';
    import qs from 'qs';

    export default {
        data () {
            return {
                userid:'',
                selected:'1',
                contractid:'',
                contractnum:'',
                xieyi:[],
                chengnuohan:[],
                hezuojiaojiedan:[],
                chengjiaoquerenshu:[],
                yongjinshuomingshu:[],
                wuhetongshengming:[],
                qingkuangshuoming:[],
                liuchengcontent:[],
                contractType:'',
                showhistory:true,
                history:[],
                step:'',
                typeid:'',
                processinstanceid:'',
                detailShow:true,
                showSave:false,//这两个值一直是相反的
                //在子组件的showor中控制那些从来都只是回显，不可编辑的输入框
                buchong:[],
                chebaobei:[],
                fangbaobei:[],
                contype:'',//控制显示押车还是房的流程附件显示
                type:'',
            }
        },
        mounted:function(){
            console.log(this.$route);
            this.contractnum = this.$route.params.contractnum;
            this.contractid = this.$route.params.contractid;
            console.log(this.contractid);
            this.processinstanceid=this.$route.params.processinstanceid;
            this.step=this.$route.params.step;
            //console.log(this.step);
            this.typeid=this.$route.params.typeid;
            //委托协议回显
            axios.post(host+'/app/loadTrustContractMain?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                if(response.data.data.loanType=='0'){
                    this.contractType=5;
                }else if(response.data.data.loanType=='1'){
                    this.contractType=6;
                }else if(response.data.data.loanType=='2'){
                    this.contractType=7;
                }else if(response.data.data.loanType=='3'){
                    this.contractType=8;
                }
                console.log(this.contractType);
//                console.log(response.data.data.zhiya);
                this.type=response.data.data.zhiya.carPropertyModel;
                this.xieyi=response.data.data.zhiya;
//            this.contractid=response.data.data.zhiya.contractId;
//            console.log(this.contractid);
            }).catch(function(error){
                Toast("委托协议回显失败");
            });
//流程附件回显
            axios.get(host+"/getaccessory?contractid="+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                this.liuchengcontent=response.data;
//            console.log(this.liuchengcontent);
            }).catch(function(err){
                Toast('流程附件回显失败');;
            });
            //审批历史
//            console.log(this.contractid);
            axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                contractId:this.contractid,
                isbaobei:false,
            })).then(response=>{
                if(response.data.code=='200'){
                    this.history = response.data.data;
                }
            }).catch(function(err){
                Toast('审批历史回显失败');;
            });
            //佣金说明书回显
            axios.post(host+'/app/loadcntbrokeragebook?contractid='+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                console.log("佣金说明书");
                console.log(response.data.data);
                console.log("");
                this.yongjinshuomingshu=response.data.data;
//                console.log(this.yongjinshuomingshu);
//                console.log(this.contractid);
            }).catch(function(error){
                Toast("佣金说明书回显失败");
            });
            //情况说明回显
            axios.post(host+"/app/loadconditionstatement?contractid="+this.contractid,{
                params:{

                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
//                    console.log(response.data);
                this.qingkuangshuoming=response.data.data;
//                console.log(this.contractid);
//                console.log(this.qingkuangshuoming);
            }).catch(function(err){
                Toast('情况说明回显失败');;
            });
            //成交确认书回显
            axios.post(host+'/app/loadcntdealbook?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    console.log("成交确认书");
                    console.log(response.data.data);
                    console.log("");
                    this.chengjiaoquerenshu=response.data.data;
                }).catch(function(error){
                    console.log(error);
                });
            //承诺函回显/app/loadcntpromissoryTrust?contractnum=
            axios.post(host+'/app/loadcntpromissoryTrust?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
//                console.log(response.data.data);
                this.chengnuohan=response.data.data;
//                console.log(this.chengnuohan);
             }).catch(function(error){
                console.log(error);
            });
            //合作交接单回显
            axios.post(host+'/app/loadcntdeliveryofTrust?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                console.log("合作交接单");
                console.log(response.data.data);
                console.log("");
                this.hezuojiaojiedan=response.data.data;
            }).catch(function(error){
                console.log(error);
            });

            //无合同声明回显
            axios.post(host+'/app/loadnocontractstatemenbook?contractnum='+this.contractnum,{
                params:{

                },
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                this.wuhetongshengming=response.data.data;
//                console.log(this.wuhetongshengming);
            }).catch(function(err){
                Toast('操作失败');
            });
            //报备单回显
            axios.post(host+'/app/loadReport?contractid='+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(result=>{
//                console.log('baobei');
//                 console.log(response.data.data);
                //这里需要添加判断是车报备还是房报备
                this.fangbaobei=result.data.data;
                this.fangbaobei.xinshenyuanqianzi=this.$cookie.get("uname");
                axios.post(hostapi+'/contract/baobeichehuixian',qs.stringify({
                    contractId:this.contractid,
                })).then(response=>{
//                    console.log('huixian');
//                    console.log(response.data.data);
                    this.buchong = response.data.data;
                    this.buchong.letterName=this.$cookie.get("uname");

                    if(this.type){
                        this.contractType=4;
//                        this.chebaobei=response.data.data;
                    }else{
                        this.contractType=3;

                    }
                }).catch(function(err){
                    console.log(err);
//                    Toast('报备单回显失败che');
                });
//                console.log(this.type);
//                console.log(this.contractType);
            }).catch(function(err){
                Toast('报备单回显失败fang');
            });
            this.userid=this.$cookie.get('uid');
        },
        components:{
            'ContractTop':ContractTop,
            'weituoxieyi':WeiTuoXieYi,
            'qingkuangshuoming':qingkuangshuoming,
            'liuchengfujian':liuchengfujian,
            'chengjiaoquerenshu':chengjiaoquerenshu,
            'hezuojiaojiedan':hezuojiaojiedan,
            'chengnuohan':chengnuohan,
            'yongjinshuomingshu':yongjinshuomingshu,
            'wuhetongshengming':wuhetongshengming,
            'chebaobei':CheBaoBei,
            'fangbaobei':FangBaoBei,
            'shenpiyijian':shenpiyijian,
        },
        methods:{
            savefang(){},
            saveche(){},
            approve:function(data){
                axios.post(hostapi+'/contract/approve',qs.stringify({
                    processId:this.processinstanceid,
                    step:this.step,
                    contractId:this.contractid,
                    message:data,
                    userId:this.userid,
                    type:0,
                })).then(response=>{
                    console.log(response);
                    if(response.data.code=="200"){
                        this.$router.go(-1);
//                       this.$router.push({name: 'contractbaobei', params: {}});
                    }
                }).catch(function(err){
                    Toast('操作失败');;
                });
            },
            unapprove:function(data){
                axios.post(hostapi+'/contract/disagree',qs.stringify({
                    processId:this.processinstanceid,
                    step:this.step,
                    contractId:this.contractid,
                    message:data,
                    userId:this.userid,
                    type:0,
                })).then(response=>{
                    console.log(response);
                    if(response.data.code=="200"){
                        this.$router.go(-1);
//                       this.$router.push({name: 'contractbaobei', params: {}});
                    }
                }).catch(function(err){
                    Toast('操作失败');
                });
            },
        }
    }
</script>

<style scoped>
    @import "../assets/css/contract.css";
    .mint-navbar .mint-tab-item.is-selected{
        color:#fbaf37;
    }
    .mint-navbar .mint-tab-item{
        color:#777;
    }
    *{color:#333;}
    input{color:#666;}
    input[disabled],input:disabled{
        /*border:1px solid #;*/
        background-color:#fff;
        color:#666;
        opacity:1 !important;
        -webkit-opacity:1 !important;
    }
    textarea[disabled],textarea:disabled{
        background-color:#fff;
        color:#666;
        opacity:1 !important;
        -webkit-opacity:1 !important;
    }
    .ret:before{
        height: 16px;
        width: 9px;
        display: inline-block;
        float: left;
        vertical-align: middle;
        position: absolute;
        margin: auto 0;
        left:2%;
        top:9px;
    }
    /*流程css 模块：附件上传 彭*/
    .imgupBox{
        margin-bottom: 18px;
        overflow: hidden;
    }
    .groupPhotoC,.IDPhotoC,.itPhotoC{
        padding: 0px 15px;
    }
    .groupPhoto,.IDPhoto,.itPhoto{
        border-top:9px solid #f5f5f5;
        overflow: hidden;
    }
    .Phototit{
        font-size: 14px;
        color: #666;
        line-height: 35px;
    }
    /*上传按钮*/
    .imgupbtn{
        border: 1px dashed #dadada;
        width: 29%;
        height:82px;
        position:relative;
        float: left;
    }
    .imgupbtnInp{
        opacity:0;
        filter:alpha(opacity=0);
        height: 82px;
        width: 100px;
        position: absolute;
        /*position:relative;*/
        top: 0;
        /*top: -64px;*/
        left: 0;
        z-index: 9;
    }
    .rep{
        padding: 0px 0px;
        margin: 0px 0px;
        overflow: hidden;
    }
    .rep>div{
        width: 29%;
        height: 84px;
        float: left;
        margin-right: 2.09%;
        margin-left: 2.09%;
        margin-top: 12px;
    }
    .imgCC{
        position:relative;
    }
    .imgCC>img{
        height: 100%;
        width: 100%;
    }
    .ImgClose{
        width: 20px;
        height:20px;
        background-color: #fff;
        background: url(@import "../assets/img/cancel.png") no-repeat;
        background-size: 100% 100%;
        position:absolute;
        right: -8%;
        top: -8%;
    }
    /*流程css结束*/
    .hide{display: none;}
</style>
