<template>
    <div id="appdiyadai" style="text-align: left;overflow-Y:scroll;" >
        <ContractTop tle="质押贷" tleurl="/index"  v-bind:submit="headone" v-on:submitone="submitone" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
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
                <mt-tab-item id="10" v-if="step==0?false:true">审批意见</mt-tab-item>
            </div>
        </mt-navbar>

        <mt-tab-container v-model="selected"  :swipeable='true' style="margin-top:98px;">
            <mt-tab-container-item id="1">
                <weituoxieyi v-bind:xieyi='xieyi'></weituoxieyi>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <liuchengfujian v-on:liuchengflag="liuchengflagone" v-bind:isFanhetong="isFanhetong" v-on:fanhetongloantype="fanhetongloantype" v-bind:fanhetong="fanhetong"  v-bind:liuchengall="liuchengcontent" v-bind:showsave="showsave" v-bind:contracttype="contractType"  v-bind:contractid="contractid" v-bind:contractnum="contractnum" ></liuchengfujian>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <chengjiaoquerenshu v-on:chengjiaoflag="chengjiaoflagone" v-bind:chengjiaoquerenshu="chengjiaoquerenshu" v-bind:contractid="contractid" v-bind:contractnum="contractnum" v-bind:showsave="showsave" v-bind:showor="showor"></chengjiaoquerenshu>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <hezuojiaojiedan v-on:hezuoflag="hezuoflagone" v-bind:custname="custname" v-bind:hezuojiaojiedan="hezuojiaojiedan" v-bind:contractid="contractid" v-bind:contractnum="contractnum" v-bind:showsave="showsave" v-bind:showor="showor"></hezuojiaojiedan>
            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <chengnuohan v-bind:zongjian="zongjian"  v-on:chengnuoflag="chengnuoflagone" v-bind:chengnuohanall="chengnuohan" v-bind:showsave="showsave" v-bind:showor="showor" v-bind:contractid="contractid" v-bind:contractnum="contractnum"></chengnuohan>
            </mt-tab-container-item>
            <mt-tab-container-item id="6">
                <yongjinshuomingshu  v-bind:yongjinshuomingshu="yongjinshuomingshu" v-bind:showsave="showsave" v-bind:showor="showor" v-bind:step="step" v-on:yongjin="yongjin"></yongjinshuomingshu>
            </mt-tab-container-item>
            <mt-tab-container-item id="7">
                <wuhetongshengming v-on:wuhetongflag="wuhetongflagone" v-bind:wuhetongshengming="wuhetongshengming" v-bind:showsave="showsave" v-bind:showor="showor"></wuhetongshengming>
            </mt-tab-container-item>
            <mt-tab-container-item id="8">
                <qingkuangshuoming v-on:qingkuangflag="qingkuangflagone" v-bind:qingkuangshuoming="qingkuangshuoming" v-bind:showsave="showsave" v-bind:showor="showor"></qingkuangshuoming>
            </mt-tab-container-item>
            <mt-tab-container-item id="9">
                <chebaobei v-if="xieyi.carPropertyModel" v-bind:detailShow="detailShow" v-bind:showsave="showSave" v-bind:buchong="buchong" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>
                <fangbaobei v-else v-bind:fangbaobei="fangbaobei" v-bind:detailShow="detailShow" v-bind:buchong="buchong" v-bind:showsave="showSave" @child-info="savefang"></fangbaobei>
            </mt-tab-container-item>
            <mt-tab-container-item id="10"  v-if="step==0?false:true">
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
    import WeiTuoXieYi from '@/components/old/ZhiyaWeituoxieyi';
    import liuchengfujian from '@/components/old/liuchengfujian';
    import qingkuangshuoming from '@/components/old/ZhiyaQingkuangshuoming';
    import chengjiaoquerenshu from '@/components/old/ZhiyaChengjiaoquerenshu';
    import hezuojiaojiedan from '@/components/old/ZhiyaHezuojiaojiedan';
    import chengnuohan from '@/components/old/zhiyachengnuohan';
    import yongjinshuomingshu from '@/components/old/ZhiyaYongjinshuomingshu';
    import wuhetongshengming from '@/components/old/ZhiyaWuhetongshengming';
    import shenpiyijian from '@/components/old/shenpiyijian';
    import CheBaoBei from '@/components/old/ZhiyaChebaobei';
    import FangBaoBei from '@/components/old/ZhiyaFangbaobei';
    import qs from 'qs';
    import { MessageBox } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';

    export default {
        data () {
            return {
                liuchengfujianflag:'',
                chengjiaoquerenshuflag:'',
                hezuojianjiedanflag:'',
                chengnuohanflag:'',
                yongjinshuomingshuflag:'',
                wuhetongshengmingglag:'',
                qingkuangshuomingflag:'',
                loantype:'',
                 headone:'',
                uuid:'',
                name:'',
                zongjian:'',
                yijian:'',
                custname:'',
                showor:'',
                showsave:'',
                isFanhetong:"",
                fanhetong:'',
                userid:'',
                selected:'1',
                contractid:'',
                contractnum:'',
                xieyi:{},
                chengnuohan:{},
                hezuojiaojiedan:{},
                yongjinshuomingshu:{},
                wuhetongshengming:{},
                qingkuangshuoming:{},
                liuchengcontent:{},
                chengjiaoquerenshu:{},
                contractType:"",
                showhistory:true,
                history:{},
                step:'',
                typeid:'',
                processinstanceid:'',
                type:'',
                buchong:{},
                chebaobei:{},
                fangbaobei:{},
                contype:'',//控制显示押车还是房的流程附件显示
                detailShow:true,
                showSave:false,//这两个值一直是相反的
                //在子组件的showor中控制那些从来都只是回显，不可编辑的输入框
            }
        },
        created(){
            this.contractnum = this.$route.params.contractnum;
            this.contractid = this.$route.params.contractid;
            this.processinstanceid=this.$route.params.processinstanceid;
            this.step=this.$route.params.step;
            this.typeid=this.$route.params.typeid;
            this.userid=this.$cookie.get("uid");
            this.uuid=this.$cookie.get("uuid");
//            console.log(this.contractid);
//            this.step="0";
        if(this.step==0){
             this.showor=false;
             this.yijian=false;
            this.showsave=true;
            this.zongjian=false;
            this.headone=true;
            this.isFanhetong=1;
        }else if(this.step==1){
            this.showor=true;
            this.yijian=true;
            this.showsave=false;
            this.zongjian=false;
            this.headone=false;
              this.isFanhetong=2;
        }else{
              this.showor=true;
            this.yijian=true;
            this.showsave=false;
            this.zongjian=true;
            this.headone=false;
            this.isFanhetong=2;

        }
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
                this.loantype=response.data.data.loanType;
                console.log(this.contractType);
//                console.log(response.data.data.zhiya);
                this.xieyi=response.data.data.zhiya;
                this.type=response.data.data.zhiya.carPropertyModel;
                if(response.data.data.zhiya.carPropertyModel){
                    this.fanhetong=2;
                }else{
                    this.fanhetong=1;
                }
                this.custname=response.data.data.zhiya.custName;
//            this.contractid=response.data.data.zhiya.contractId;
//            console.log(this.contractid);
              //合作交接单回显
                    axios.post(host+'/app/loadcntdeliveryofTrust?contractnum='+this.contractnum,{
                        headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                    }).then(response=>{
                        console.log("合作交接单");
                        console.log(response.data.data);
                        this.hezuojiaojiedan=response.data.data;
                        this.addZiduan(this.hezuojiaojiedan,"lendername");
                        this.$set(this.hezuojiaojiedan,'custname',this.custname);
                        console.log(this.hezuojiaojiedan);
                        this.addZiduan(this.hezuojiaojiedan,"lendername");
                        this.addZiduan(this.hezuojiaojiedan,"lenderyiaoid");
                        this.addZiduan(this.hezuojiaojiedan,"lenderregionaldirector");
                        this.addZiduan(this.hezuojiaojiedan,"lenderdept");
                        this.addZiduan(this.hezuojiaojiedan,"lenderclerk");
                        this.addZiduan(this.hezuojiaojiedan,"borroweryiaoid");
                        this.addZiduan(this.hezuojiaojiedan,"borrowerregionaldirector");
                        this.addZiduan(this.hezuojiaojiedan,"borrowerdept");
                        this.addZiduan(this.hezuojiaojiedan,"borrowerclerk");
                    }).catch(function(error){
                        console.log(error);
                    });
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
                Toast('流程附件回显失败');
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
                Toast('审批历史回显失败');
            });
            //佣金说明书回显
            axios.post(host+'/app/loadcntbrokeragebook?contractid='+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                console.log("佣金说明书");
                console.log(response.data.data);
                console.log("");
                this.yongjinshuomingshu=response.data.data;
                if(this.yongjinshuomingshu==null){
                    this.yongjinshuomingshu={};
                }
                this.yongjinshuomingshu.contractid=this.contractid;
                this.yongjinshuomingshu.contractnum=this.contractnum;
                this.addZiduan(this.yongjinshuomingshu,"ledgernum");
                this.addZiduan(this.yongjinshuomingshu,"shopname");
                this.addZiduan(this.yongjinshuomingshu,"custname");
                this.addZiduan(this.yongjinshuomingshu,"custphone");
                this.addZiduan(this.yongjinshuomingshu,"lendername");
                this.addZiduan(this.yongjinshuomingshu,"lenderphone");
                this.addZiduan(this.yongjinshuomingshu,"typename");
                this.addZiduan(this.yongjinshuomingshu,"amountnum");
                this.addZiduan(this.yongjinshuomingshu,"amountchar");
                this.addZiduan(this.yongjinshuomingshu,"backpercent");
                this.addZiduan(this.yongjinshuomingshu,"backnum");
                this.addZiduan(this.yongjinshuomingshu,"backchar");
                this.addZiduan(this.yongjinshuomingshu,"backcount");
                this.addZiduan(this.yongjinshuomingshu,"firstbackdate");
                this.addZiduan(this.yongjinshuomingshu,"firstbacknum");
                this.addZiduan(this.yongjinshuomingshu,"firstbackchar");
                this.addZiduan(this.yongjinshuomingshu,"moneyone");
                this.addZiduan(this.yongjinshuomingshu,"moneytwo");
                this.addZiduan(this.yongjinshuomingshu,"moneythree");
                this.addZiduan(this.yongjinshuomingshu,"moneyfour");
                this.addZiduan(this.yongjinshuomingshu,"moneyfive");
                this.addZiduan(this.yongjinshuomingshu,"moneysix");
                this.addZiduan(this.yongjinshuomingshu,"clerkname");
                this.addZiduan(this.yongjinshuomingshu,"commituser");
                this.addZiduan(this.yongjinshuomingshu,"backusername");
                this.addZiduan(this.yongjinshuomingshu,"backdate");
            }).catch(function(error){
                Toast("佣金说明书回显失败");
            });
            //情况说明回显
            axios.post(host+"/app/loadconditionstatement?contractid="+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
//                    console.log(response.data);
                this.qingkuangshuoming=response.data.data;
                if(this.qingkuangshuoming==null){
                    this.qingkuangshuoming={};
                }
                this.qingkuangshuoming.contractid=this.contractid;
                this.addZiduan(this.qingkuangshuoming,"customername");
                this.addZiduan(this.qingkuangshuoming,"idcard");
                this.addZiduan(this.qingkuangshuoming,"jiekuan");
                this.addZiduan(this.qingkuangshuoming,"contractnum");
                this.addZiduan(this.qingkuangshuoming,"test");
                this.addZiduan(this.qingkuangshuoming,"mendianjingli");
            }).catch(function(err){
                Toast('情况说明回显失败');
            });
            //成交确认书回显
            axios.post(host+'/app/loadcntdealbook?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                }).then(response=>{
                    console.log("成交确认书");
                    console.log(response.data.data);
                    this.chengjiaoquerenshu=response.data.data;
                    this.addZiduan(this.chengjiaoquerenshu,"carDrivingLicenseNum");
                    this.addZiduan(this.chengjiaoquerenshu,"carEngineNum");
                    this.addZiduan(this.chengjiaoquerenshu,"carLicensePlateNum");
                    this.addZiduan(this.chengjiaoquerenshu,"carPropertyModel");
                    this.addZiduan(this.chengjiaoquerenshu,"carRegistrationNum");
                    this.addZiduan(this.chengjiaoquerenshu,"carValuation");
                    this.addZiduan(this.chengjiaoquerenshu,"chujieren");
                    this.addZiduan(this.chengjiaoquerenshu,"clientAddr");
                    this.addZiduan(this.chengjiaoquerenshu,"clientCardNum");
                    this.addZiduan(this.chengjiaoquerenshu,"clientName");
                    this.addZiduan(this.chengjiaoquerenshu,"contractNum");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHouseLeaseDate");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHousePropertyArea");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHousePropertyCardNum");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHouseProportion");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHouseSituation");
                    this.addZiduan(this.chengjiaoquerenshu,"firstHouseValuation");
                    this.addZiduan(this.chengjiaoquerenshu,"hasCollateral");
                    this.addZiduan(this.chengjiaoquerenshu,"isvailid");
                    this.addZiduan(this.chengjiaoquerenshu,"loanAmount");
                    this.addZiduan(this.chengjiaoquerenshu,"loanAmountChar");
                    this.addZiduan(this.chengjiaoquerenshu,"loanDate");
                    this.addZiduan(this.chengjiaoquerenshu,"loanDateFrom");
                    this.addZiduan(this.chengjiaoquerenshu,"loanDateTo");
                    this.addZiduan(this.chengjiaoquerenshu,"loanInterest");
                    this.addZiduan(this.chengjiaoquerenshu,"negotiateDate");
                    this.addZiduan(this.chengjiaoquerenshu,"notarizationNum");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHouseLeaseDate");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHousePropertyArea");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHousePropertyCardNum");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHouseProportion");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHouseSituation");
                    this.addZiduan(this.chengjiaoquerenshu,"secondHouseValuation");
                    this.addZiduan(this.chengjiaoquerenshu,"signDate");
                    this.addZiduan(this.chengjiaoquerenshu,"totalServiceCharge");
                    this.addZiduan(this.chengjiaoquerenshu,"weituoren");
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
                    this.addZiduan(this.chengnuohan,'commitdate');
                    this.addZiduan(this.chengnuohan,'committedperson');
                    this.addZiduan(this.chengnuohan,'contractid');
                    this.addZiduan(this.chengnuohan,'custid');
                    this.addZiduan(this.chengnuohan,'custname');
                    this.addZiduan(this.chengnuohan,'custnum');
                    this.addZiduan(this.chengnuohan,'isvailid');
                    this.addZiduan(this.chengnuohan,'ledgernum');
                    this.addZiduan(this.chengnuohan,'typeid');
                    this.addZiduan(this.chengnuohan,'typename');
             }).catch(function(error){
                console.log(error);
            });
            

            //无合同声明回显
            axios.post(host+'/app/loadnocontractstatemenbook?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                this.wuhetongshengming=response.data.data;
                if(this.wuhetongshengming==null){
                    this.wehetongsehngming={};
                }
                this.wuhetongshengming.contractid=this.contractid;
                this.addZiduan(this.wuhetongshengming,"contractnum");
                this.addZiduan(this.wuhetongshengming,"ledgernum");
                this.addZiduan(this.wuhetongshengming,"lendername");
                this.addZiduan(this.wuhetongshengming,"custname");
                this.addZiduan(this.wuhetongshengming,"notarizationdate");
                this.addZiduan(this.wuhetongshengming,"deptname");
                this.addZiduan(this.wuhetongshengming,"nocontractstatesignature");
            }).catch(function(err){
                Toast('操作失败');
            });
            //房报备单回显
            axios.post(host+'/app/loadReport?contractid='+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
//                console.log('baobei');
//                 console.log(response.data.data);
                this.fangbaobei=response.data.data;
                if(this.fangbaobei==null){
                    this.fangbaobei={};
                }
                this.fangbaobei.contractid=this.contractid;
                this.fangbaobei.contracnum=this.contractnum;
                this.fangbaobei.userid=this.userid;
            }).catch(function(err){
                Toast('网络超时');
            });
            //车报备回显
            axios.post(host+'/app/loadCarReport?contractid='+this.contractid,qs.stringify({
//            axios.post(hostapi+'/contract/baobeichehuixian',qs.stringify({
                contractId:this.contractid,
            })).then(response=>{
//                    console.log('huixian');
//                    console.log(response.data.data);
                this.chebaobei = response.data.data;
                if(this.chebaobei==null){
                    this.chebaobei={};
                }
                this.chebaobei.contractid=this.contractid;
                this.chebaobei.contractnum=this.contractnum;
                this.chebaobei.userid=this.userid;
            }).catch(function(err){
                Toast('网络超时');
            });
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
            'shenpiyijian':shenpiyijian,
            'chebaobei':CheBaoBei,
            'fangbaobei':FangBaoBei,
        },
        methods:{
            addZiduan:function(obj,name){
                if(!(obj[name])){
                    this.$set(obj,name,'');
                }
            },
            // liuchengfujianflag:'',
            //     chengjiaoquerenshuflag:'',
            //     hezuojianjiedanflag:'',
            //     chengnuohanflag:'',
            //     yongjinshuomingshuflag:'',
            //     wuhetongshengmingglag:'',
            //     qingkuangshuomingflag:'',
            savefang(){},
            saveche(){},
            qingkuangflagone:function(){
                this.qingkuangshuomingflag=true;
            },
            wuhetongflagone:function(){
                this.wuhetongshengmingglag=true;
            },
            chengnuoflagone:function(){
                this.chengnuohanflag=true;
            },
            hezuoflagone:function(){
                this.hezuojianjiedanflag=true;
            },
            chengjiaoflagone:function(){
                this.chengjiaoquerenshuflag=true;
            },
            liuchengflagone:function(){
                this.liuchengfujianflag=true;
            },
            fanhetongloantype:function(data){
                this.loantype=data;
            },
            submitone(){
                if(!this.liuchengfujianflag){
             MessageBox('提示', '流程附件未保存');
             return false;
                }
                if(!this.chengjiaoflagone){
                    MessageBox('提示', '成交确认书未保存');
                    return false;
                }
                if(!this.hezuojianjiedanflag){
                MessageBox('提示', '合作交接单未保存');
                return false;
                }
                if(!this.chengnuohanflag){
                MessageBox('提示', '承诺函未保存');
                return false;
                }
                if(!this.yongjinshuomingshuflag){
                MessageBox('提示', '佣金说明书未保存');
                return false;
                }
                if(!this.wuhetongshengmingglag){
                MessageBox('提示', '无合同声明未保存');
                return false;
                }
                if(!this.qingkuangshuomingflag){
                MessageBox('提示', '情况声明未保存');
                return false;
                }
                var loanloan=this.loantype;
                MessageBox.confirm('是否确认提交?').then(action => {
                Indicator.open();
                axios.post(host+"/app/loadReportZhi?contractid=" + this.contractid + "&userid=" + this.userid+"&loantype="+loanloan+"&uuid=" + this.uuid,''
                ).then(response=>{
                    if(response.data.data.code==200){
                        Indicator.close();
                        this.$router.go(-1);
                    }else{
                        Indicator.close();                 
                            MessageBox('提示', '提交流程失败');
                    }
                        }).catch(function(err){
                        Indicator.close();
                    this.$router.go(-1);
                        });
                })
            },
            yongjin(){
                this.yongjinshuomingshuflag=true;
            },
            approve:function(data){
                axios.get(host+"/app/approve?userid="+this.userid+"&nodeType=0&typeid=0&step="+this.step+"&processinstanceid="+this.processinstanceid+"&num=0"+"&contractid="+this.contractid+"&auditoropinion="+data+"&uuid="+this.uuid,qs.stringify({
                   
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
            unapprove:function(data){
                axios.get(host+"/app/reject?userid="+this.userid+"&nodeType=0&typeid=0&step="+this.step+"&processinstanceid="+this.processinstanceid+"&contractid="+this.contaracthetongid+"&auditoropinion="+data+"&uuid="+this.uuid,qs.stringify({
                    
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
    @import "../../assets/css/contract.css";
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
        background: url(@import "../../assets/img/cancel.png") no-repeat;
        background-size: 100% 100%;
        position:absolute;
        right: -8%;
        top: -8%;
    }
    /*流程css结束*/
    .hide{display: none;}
</style>
