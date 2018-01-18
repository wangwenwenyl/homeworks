<!--合同数据父组件-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div style="overflow-Y:scroll">
        <div v-if="typeid==0">
            <ContractTop tle="抵押贷" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
            <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
                <div style="width:620px;">
                    <mt-tab-item id="1">抵押贷合同</mt-tab-item>
                    <mt-tab-item id="2">流程附件</mt-tab-item>
                    <mt-tab-item id="3">交接单</mt-tab-item>
                    <mt-tab-item id="4">承诺函</mt-tab-item>
                    <mt-tab-item id="5" v-show="dianwei<1.8 ? true: false">点位说明</mt-tab-item>
                    <mt-tab-item id="6">审批历史</mt-tab-item>
                </div>
            </mt-navbar>
            <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
                <mt-tab-container-item id="1">
                    <diyadaicontract v-bind:diyadaiall="diyadaicontent"></diyadaicontract>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:contracttype="1"></liuchengfujian>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <jiaojiedan v-bind:jiaojiedanall="jiaojiedancontent" v-bind:showor="true"></jiaojiedan>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <chengnuohan v-bind:chengnuohanall="chengnuohancontent" v-bind:showor="true"></chengnuohan>
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <dianweishuoming v-bind:dianweishuomingall="dianweishuomingcontent" v-bind:showor="true"></dianweishuoming>
                </mt-tab-container-item>
                <mt-tab-container-item id="6">
                    <history v-bind:history="history"></history>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div v-else-if="typeid==1">
            <ContractTop tle="信用贷" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
            <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
                <div style="width:620px;">
                    <mt-tab-item id="1">信用贷合同</mt-tab-item>
                    <mt-tab-item id="2">流程附件</mt-tab-item>
                    <mt-tab-item id="3">交接单</mt-tab-item>
                    <mt-tab-item id="4">承诺函</mt-tab-item>
                    <mt-tab-item id="5" v-show="dianwei <1.8 ? true:false">点位说明</mt-tab-item>
                    <mt-tab-item id="6">审批历史</mt-tab-item>
                </div>
            </mt-navbar>
            <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
                <mt-tab-container-item id="1">
                    <xinyongdaicontract v-bind:xinyongdaiall="xinyongdaicontent"></xinyongdaicontract>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:contracttype="2"></liuchengfujian>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <jiaojiedan v-bind:jiaojiedanall="jiaojiedancontent" v-bind:showor="true"></jiaojiedan>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <chengnuohan v-bind:chengnuohanall="chengnuohancontent" v-bind:showor="true"></chengnuohan>
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <dianweishuoming v-bind:dianweishuomingall="dianweishuomingcontent" v-bind:showor="true"></dianweishuoming>
                </mt-tab-container-item>
                <mt-tab-container-item id="6">
                    <history v-bind:history="history"></history>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div v-else-if="typeid==2">
            <ContractTop tle="质押贷" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
            <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
                <div style="width:950px;">
                    <mt-tab-item id="1" >委托协议</mt-tab-item>
                    <mt-tab-item id="2" >流程附件</mt-tab-item>
                    <mt-tab-item id="3" >成交确认书</mt-tab-item>
                    <mt-tab-item id="4" >合作交接单</mt-tab-item>
                    <mt-tab-item id="5" >承诺函</mt-tab-item>
                    <mt-tab-item id="6" >佣金说明书</mt-tab-item>
                    <mt-tab-item id="7" >无合同声明</mt-tab-item>
                    <mt-tab-item id="8" >情况说明</mt-tab-item>
                    <mt-tab-item id="9" >审批历史</mt-tab-item>
                </div>
            </mt-navbar>
            <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
                <mt-tab-container-item id="1">
                    <weituoxieyi v-bind:xieyi='xieyi'></weituoxieyi>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:contracttype="contracttype" ></liuchengfujian>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <chengjiaoquerenshu v-bind:chengjiaoquerenshu="chengjiaoquerenshu" v-bind:showor="true"></chengjiaoquerenshu>
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <hezuojiaojiedan v-bind:hezuojiaojiedan="hezuojiaojiedan" v-bind:showor="true"></hezuojiaojiedan>
                </mt-tab-container-item>
                <mt-tab-container-item id="5">
                    <chengnuohan v-bind:chengnuohanall="chengnuohan" v-bind:showor="true"></chengnuohan>
                </mt-tab-container-item>
                <mt-tab-container-item id="6">
                    <yongjinshuomingshu v-bind:yongjinshuomingshu="yongjinshuomingshu" v-bind:showor="true"></yongjinshuomingshu>
                </mt-tab-container-item>
                <mt-tab-container-item id="7">
                    <wuhetongshengming v-bind:wuhetongshengming="wuhetongshengming" v-bind:showor="true"></wuhetongshengming>
                </mt-tab-container-item>
                <mt-tab-container-item id="8">
                    <qingkuangshuoming v-bind:qingkuangshuoming="qingkuangshuoming" v-bind:showor="true"></qingkuangshuoming>
                </mt-tab-container-item>
                <mt-tab-container-item id="9">
                    <history v-bind:history="history"></history>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div v-else-if="typeid==4">
            <ContractTop tle="质押报备" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
            <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
                <div style="width:300px;">
                    <mt-tab-item id="1">委托协议</mt-tab-item>
                    <mt-tab-item id="2">{{ type?'押车报备单':'报备单' }}</mt-tab-item>
                    <mt-tab-item id="3">流程附件</mt-tab-item>
                </div>
            </mt-navbar>
            <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
                <mt-tab-container-item id="1">
                    <weituoxieyi v-bind:xieyi='xieyi'></weituoxieyi>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <chebaobei v-if="xieyi.carPropertyModel" v-bind:detailShow="detailShow" v-bind:showsave="showSave" v-bind:buchong="buchong" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>
                    <fangbaobei v-else v-bind:fangbaobei="fangbaobei" v-bind:detailShow="detailShow" v-bind:buchong="buchong" v-bind:showsave="showSave" @child-info="savefang"></fangbaobei>
                    <!--<chebaobei v-if="xieyi.carPropertyModel" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>-->
                    <!--<fangbaobei v-else v-bind:fangbaobei="fangbaobei" @child-info="savefang"></fangbaobei>-->
                </mt-tab-container-item>
                <mt-tab-container-item id="3" >
                    <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:contracttype="contracttype"></liuchengfujian>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>
<script>
    import ContractTop from '@/components/ContractTop';
    import axios from 'axios';
    import qs from 'qs';
    import {Toast} from 'mint-ui';
    //信用贷
    import xinyongdaicontract from '@/components/xinyongdaicontract';
    import liuchengfujian from '@/components/liuchengfujian';
    import jiaojiedan from '@/components/jiaojiedan';
    import chengnuohan from '@/components/chengnuohan';
    import dianweishuoming from '@/components/dianweishuoming';
    import history from '@/components/shenpiHistory';
    //抵押贷
    import diyadaicontract from '@/components/diyadaicontract';
    //质押贷
    import weituoxieyi from '@/components/ZhiyaWeituoxieyi';
    import yongjinshuomingshu from '@/components/ZhiyaYongjinshuomingshu';
    import hezuojiaojiedan from '@/components/ZhiyaHezuojiaojiedan';
    import chengjiaoquerenshu from '@/components/ZhiyaChengjiaoquerenshu';
    import wuhetongshengming from '@/components/ZhiyaWuhetongshengming';
    import qingkuangshuoming from '@/components/ZhiyaQingkuangshuoming';
    import CheBaoBei from '@/components/ZhiyaChebaobei';
    import FangBaoBei from '@/components/ZhiyaFangbaobei';
    export default {
        data () {
            return {
                type:'',
                selected:'1',
                contractnum:'',
                typeid:'',
                contractid:'',
                diyadaicontent:[],
                liuchengcontent:[],
                chengnuohancontent:[],
                dianweishuomingcontent:[],
                dianwei:'',
                jiaojiedancontent:[],
                xinyongdaicontent:[],
                xieyi:[],
                chengnuohan:[],
                hezuojiaojiedan:[],
                chengjiaoquerenshu:[],
                yongjinshuomingshu:[],
                wuhetongshengming:[],
                qingkuangshuoming:[],
                contracttype:'3',
                chebaobei:[],
                fangbaobei:[],
                history:[],
                buchong:[],
                detailShow:true,
                showSave:false,//这两个值一直是相反的
            }
        },
        methods:{
            savefang(){},
            saveche(){},
        },
        mounted:function(){
//            console.log(this.$route.params);
            this.contractnum = this.$route.params.contractnum;
            this.typeid = this.$route.params.typeid;
            this.contractid=this.$route.params.contractid;           
//            console.log(this.typeid);
            if(this.typeid==0){
                axios.post(host+"/app/loadGuarantyContractMain?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response);
                    this.diyadaicontent=response.data.data.diya;
                    this.diyadaicontent.contractnum=this.contractnum;
//                    this.contractid=response.data.data.diya.contractId;
                    this.dianwei=response.data.data.diya.point;    
                }).catch(function(err){
                    Toast('操作失败');
                });
                axios.get(host+"/getaccessory?contractid="+this.contractid,{
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    }).then(response=>{
                        this.liuchengcontent=response.data;
//                        console.log(this.liuchengcontent);
                    }).catch(function(err){
                        Toast('操作失败');
                    });
                    //审批历史
                    axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                        contractId:this.contractid,
                        isbaobei:false,
                    })).then(response=>{
                        if(response.data.code=='200'){
                            this.history = response.data.data;
                        }
                    }).catch(function(err){
                        Toast('操作失败');
                    });
                //交接单回显
                axios.post(host+"/app/loadcntdeliveryofGuaranty?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response.data.diya);
                    this.jiaojiedancontent=response.data.diya;
                    this.contractid=response.data.diya.contractId;
                }).catch(function(err){
                    Toast('操作失败');
                });
                axios.post(host+"/app/loadcntpromissoryGuaranty?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    //console.log(response);
                    this.chengnuohancontent=response.data.data;
                }).catch(function(err){
                    Toast('操作失败');
                });
                axios.post(host+"/app/loadcntpointmark?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    //console.log(response);
                    this.dianweishuomingcontent=response.data.data;
                }).catch(function(err){
                    Toast('操作失败');
                });
            }else if(this.typeid==1){
                axios.post(host+"/app/loadCreditContractMain?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response.data.data);
                    response.data.data.xinyong['contractId']=response.data.data.normal['contractId'];
                    response.data.data.xinyong['clerkEmail']=response.data.data.normal['clerkEmail'];
                    response.data.data.xinyong['clerkName']=response.data.data.normal['clerkName'];
                    response.data.data.xinyong['clerkPhone']=response.data.data.normal['clerkPhone'];
                    response.data.data.xinyong['custAddress']=response.data.data.normal['custAddress'];
                    response.data.data.xinyong['custEmail']=response.data.data.normal['custEmail'];
                    response.data.data.xinyong['custName']=response.data.data.normal['custName'];
                    response.data.data.xinyong['custNum']=response.data.data.normal['custNum'];
                    response.data.data.xinyong['custPhone']=response.data.data.normal['custPhone'];
                    response.data.data.xinyong['emergencyContact']=response.data.data.normal['emergencyContact'];
                    response.data.data.xinyong['emergencyContactPhone']=response.data.data.normal['emergencyContactPhone'];
                    this.xinyongdaicontent=response.data.data.xinyong;
                    this.xinyongdaicontent.contractnum=this.contractnum;
//                    this.contractid=response.data.data.xinyong.contractId;
                    this.dianwei=response.data.data.xinyong.point; 
                }).catch(function(err){
                    Toast('操作失败');
                })
                axios.get(host+"/getaccessory?contractid="+this.contractid,{
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    }).then(response=>{
                        this.liuchengcontent=response.data;
//                        console.log(this.liuchengcontent);
                    }).catch(function(err){
                        Toast('操作失败');
                    });
                    //审批历史
                    axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                        contractId:this.contractid,
                        isbaobei:false,
                    })).then(response=>{
                        if(response.data.code=='200'){
                            this.history = response.data.data;
                        }
                    }).catch(function(err){
                        Toast('操作失败');
                    });
                //交接单回显
                axios.post(host+"/app/loadcntdeliveryofGuaranty?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response);
                    this.jiaojiedancontent=response.data.diya;
                }).catch(function(err){
                    Toast('操作失败');
                });
                axios.post(host+"/app/loadcntpromissoryGuaranty?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    //console.log(response);
                    this.chengnuohancontent=response.data.data;
                }).catch(function(err){
                    Toast('操作失败');
                });
                axios.post(host+"/app/loadcntpointmark?contractnum="+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    //console.log(response);
                    this.dianweishuomingcontent=response.data.data;
                })
                .catch(function(err){
                    Toast('操作失败');
                })
            }else if(this.typeid==2){
                //委托协议回显
                axios.post(host+'/app/loadTrustContractMain?contractnum='+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                console.log(response.data.data.zhiya);
                    this.xieyi=response.data.data.zhiya;
                    this.contractid=response.data.data.zhiya.contractId;
                    if(response.data.data.loanType=='0'){
                        this.contracttype=5;
                    }else if(response.data.data.loanType=='1'){
                        this.contracttype=6;
                    }else if(response.data.data.loanType=='2'){
                        this.contracttype=7;
                    }else if(response.data.data.loanType=='3'){
                        this.contracttype=8;
                    }
                
//            console.log(this.contractid);
                }).catch(function(error){
                    Toast("操作失败");
                });
                //流程附件回显
                axios.get(host+"/getaccessory?contractid="+this.contractid,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    this.liuchengcontent=response.data;
//            console.log(this.liuchengcontent);
                }).catch(function(err){
                    Toast('操作失败');
                });
                // //审批历史
                // axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                //     contractId:this.contractid,
                //     isbaobei:false,
                // })).then(response=>{
                //     if(response.data.code=='200'){
                //         this.history = response.data.data;
                //     }
                // }).catch(function(err){
                //     Toast('操作失败');
                // });
                //佣金说明书回显
                axios.post(host+'/app/loadcntbrokeragebook?contractid='+this.contractid,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                console.log(response.data.data);
                    this.yongjinshuomingshu=response.data.data;
//                console.log(this.yongjinshuomingshu);
//                console.log(this.contractid);
                }).catch(function(error){
                    Toast("操作失败");
                });
                //情况说明回显
                axios.post(host+"/app/loadconditionstatement?contractid="+this.contractid,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response.data);
                    this.qingkuangshuoming=response.data.data;
//                console.log(this.contractid);
//                console.log(this.qingkuangshuoming);
                }).catch(function(err){
                    Toast('操作失败');
                });
                //审批历史
                axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                    contractId:this.contractid,
                    isbaobei:false,
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.history = response.data.data;
                    }
                }).catch(function(err){
                    Toast('操作失败');
                });
                //成交确认书回显
                axios.post(host+'/app/loadcntdealbook?contractnum='+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                    console.log(response.data.data);
                    this.chengjiaoquerenshu=response.data.data;
                }).catch(function(error){
                    Toast("操作失败");
                });
                //承诺函回显/app/loadcntpromissoryTrust?contractnum=
                axios.post(host+'/app/loadcntpromissoryTrust?contractnum='+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                console.log(response.data.data);
                    this.chengnuohan=response.data.data;
//                console.log(this.chengnuohan);
                }).catch(function(error){
                    Toast("操作失败");
                });
                //合作交接单回显
                axios.post(host+'/app/loadcntdeliveryofTrust?contractnum='+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
//                console.log(response.data.data);
                    this.hezuojiaojiedan=response.data.data;
                }).catch(function(error){
                    Toast("操作失败");
                });
                //无合同声明回显
                axios.post(host+'/app/loadnocontractstatemenbook?contractnum='+this.contractnum,{
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    this.wuhetongshengming=response.data.data;
//                console.log(this.wuhetongshengming);
                }).catch(function(err){
                    Toast('操作失败');
                });
            }else{
                //委托协议的回显
                axios.post(host+'/app/loadTrustContractMain?contractnum='+this.contractnum,{
                    params: {

                    },
                    headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                console.log(response.data.data.zhiya);
                    this.xieyi=response.data.data.zhiya;
//                    this.contractid=response.data.data.zhiya.contractId;
                    this.type=response.data.data.zhiya.carPropertyModel;
                    //报备单回显
                    axios.post(host+'/app/loadReport?contractid='+this.contractid,{
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    }).then(response=>{
//                console.log('baobei');
//                 console.log(response.data.data);
//                console.log(this.type);
                        if(this.type){
                            this.contracttype=4;
                            this.chebaobei=response.data.data;
                        }else{
                            this.contrattype=3;
                            this.fangbaobei=response.data.data;
                        }
                console.log(this.contracttype);
                    }).catch(function(err){
                        Toast('报备单回显失败');
                    });
                    //这里需要添加判断是车报备还是房报备
                        axios.post(hostapi+'/contract/baobeichehuixian',qs.stringify({
                            contractId:this.contractid,
                        })).then(response=>{
//                    console.log('huixian');
//                    console.log(response.data.data);
                            this.buchong = response.data.data;

                        }).catch(function(err){
                            Toast('报备单回显失败');
                        });
                    //图片回显
                    axios.get(host+"/getaccessory?contractid="+this.contractid,{
                        params: {

                        },
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    }).then(response=>{
                        this.liuchengcontent=response.data;
//            console.log(this.liuchengcontent);
                    }).catch(function(err){
                        Toast('操作失败');
                    })

                }).catch(function(error){
                    Toast("操作失败");
                });
            }
        },
        components:{
            'ContractTop':ContractTop,
            'xinyongdaicontract':xinyongdaicontract,
            'liuchengfujian':liuchengfujian,
            'jiaojiedan':jiaojiedan,
            'chengnuohan':chengnuohan,
            'dianweishuoming':dianweishuoming,
            'diyadaicontract':diyadaicontract,
            'weituoxieyi':weituoxieyi,
            'yongjinshuomingshu':yongjinshuomingshu,
            'hezuojiaojiedan':hezuojiaojiedan,
            'chengjiaoquerenshu':chengjiaoquerenshu,
            'wuhetongshengming':wuhetongshengming,
            'qingkuangshuoming':qingkuangshuoming,
            'chebaobei':CheBaoBei,
            'fangbaobei':FangBaoBei,
            'history':history,
        }
    }
</script>
<style scoped>
    .mint-navbar .mint-tab-item.is-selected{
        color:#fbaf37;
    }
</style>