<!--质押 报备父组件-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div id="appdiyadai" style="text-align: left;overflow-Y:scroll;height:100%;" >
        <div id="appTop" style="text-align: center;width:100%;overflow-Y:scroll;position:fixed;top:0px;z-index:999;background:#fff;">
            <mt-header :title="title" style="height:44px;font-size:18px;font-weight:bold;background:#fff;color:#333;border-bottom:1px solid #ddd;">
                <!--<router-link :to="tleurl" slot="left" >-->
                <mt-button icon="back" slot="left" @click="back"  style="width:30px;color:#333;"></mt-button>
                <!--</router-link>-->
            </mt-header>
            <span v-if="tijiao" style="position:absolute;right:10px;top:10px;font-size:16px;" @click="submit">提交</span>
        </div>
        <!--<ContractTop tle="报备签单" tleurl="/index" v-bind:submit="true" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>-->
        <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
            <div style="width:450px;">
                <mt-tab-item id="1">委托协议</mt-tab-item>
                <mt-tab-item id="2">{{ type?'押车报备单':'报备单' }}</mt-tab-item>
                <mt-tab-item id="3">流程附件</mt-tab-item>
                <mt-tab-item id="4" v-show="advice">审批意见</mt-tab-item>
            </div>
        </mt-navbar>

        <mt-tab-container v-model="selected" :swipeable='true' style="top:100px;z-index:500;">
            <mt-tab-container-item id="1">
                <weituoxieyi v-bind:xieyi='xieyi' v-bind:step="step"></weituoxieyi>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <chebaobei v-bind:step="step" v-if="xieyi.carPropertyModel" v-bind:detailShow="detailShow" v-bind:showsave="showSave" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>
                <fangbaobei v-bind:step="step" v-else v-bind:fangbaobei="fangbaobei" v-bind:detailShow="detailShow" v-bind:showsave="showSave" @child-info="savefang"></fangbaobei>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" >
                <liuchengfujian
                        v-bind:contractid="contractid"
                        v-bind:contractnum="contractnum"
                        v-bind:liuchengall="liuchengcontent"
                        v-bind:showsave="liuchengSave"
                        v-bind:contracttype="contractType"
                        v-on:liuchengflag="liucheng"
                >
                </liuchengfujian>
            </mt-tab-container-item>
            <mt-tab-container-item id="4" v-if="advice">
                <shenpiyijian v-bind:history="history" v-bind:showhistory="showhistory" v-on:approve="approve" v-on:unapprove="unapprove"></shenpiyijian>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import axios from 'axios';
    import { Tabbar, TabItem } from 'mint-ui';
    import ContractTop from '@/components/ContractTop';
    import WeiTuoXieYi from '@/components/old/ZhiyaWeituoxieyi';
    import CheBaoBei from '@/components/old/ZhiyaChebaobei';
    import FangBaoBei from '@/components/old/ZhiyaFangbaobei';
    import liuchengfujian from '@/components/old/liuchengfujian';
    import shenpiyijian from '@/components/old/shenpiyijian';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';

    export default {
        data () {
            return {
                title:'',
                userid:'',
//                userid:'819384343152005146',//胡剑波
//                userid:'855614890704990208',//刘明明
                uuid:'',
                step:'',
                selected:'1',
                contractid:'',
                xieyi:{},
                chebaobei:{},
                fangbaobei:{},
                liuchengcontent:{},
                contractType:'',
                contractnum:'',
                type:'',
                baocun:{},
                history:{},
                showhistory:true,
                showsave:true,
                id:'',
                typeid:'',
                liuchengSave:true,
                flag1:false,//报备单保存
                flag2:false,//流程附件上传
                tijiao:true,
                detailShow:false,//控制输入框是否可以编辑
                showSave:true,//控制保存按钮的显示与隐藏
                //在子组件的showor中控制那些从来都只是回显，不可编辑的输入框
                advice:false,//控制审批意见显示与隐藏
            }
        },
        created(){
            this.userid=this.$cookie.get('uid');
            this.uuid=this.$cookie.get("uuid");

            this.contractnum = this.$route.params.contractnum;
            this.contractid = this.$route.params.contractid;
            this.processinstanceid=this.$route.params.processinstanceid;
            this.step=this.$route.params.step;
            this.typeid=this.$route.params.typeid;
//            this.step=1;
            if(this.step==0){
                this.advice=false;
                this.tijiao=true;
                this.title="报备签单";
                this.liuchengSave=true;
            }else{
                this.title="报备审批";
                this.advice=true;
                this.tijiao=false;
                this.liuchengSave=false;
            }
            //委托协议的回显
            axios.post(host+'/app/loadTrustContractMain?contractnum='+this.contractnum,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
//                console.log('zhiya');
//                console.log(response.data.data.zhiya);
                this.xieyi=response.data.data.zhiya;
//                this.contractid=response.data.data.zhiya.contractId;
                this.type=response.data.data.zhiya.carPropertyModel;
                if(response.data.data.zhiya.carPropertyModel){
                    this.contractType=4;
                }else{
                    this.contractType=3;
                }
                console.log(this.contractType);
            }).catch(function(error){
                console.log(error);
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
                this.addZiduan(this.fangbaobei,"quyu");
                this.addZiduan(this.fangbaobei,"bumen");
                this.addZiduan(this.fangbaobei,"name");
                this.addZiduan(this.fangbaobei,"time");
                this.addZiduan(this.fangbaobei,"jingli");
                this.addZiduan(this.fangbaobei,"zhuguan");
                this.addZiduan(this.fangbaobei,"yewu");
                this.addZiduan(this.fangbaobei,"zuodantime");
                this.addZiduan(this.fangbaobei,"yinzhubumen");
                this.addZiduan(this.fangbaobei,"yinzhuname");
                this.addZiduan(this.fangbaobei,"custname");
                this.addZiduan(this.fangbaobei,"custphone");
                this.addZiduan(this.fangbaobei,"jiekuan");
                this.addZiduan(this.fangbaobei,"pointandback");
                this.addZiduan(this.fangbaobei,"fanfeifangshi");
                this.addZiduan(this.fangbaobei,"fanfeijine");
                this.addZiduan(this.fangbaobei,"jiekuanqixian");
                this.addZiduan(this.fangbaobei,"fuwufei");
                this.addZiduan(this.fangbaobei,"yongtu");
                this.addZiduan(this.fangbaobei,"huankuanlaiyuan");
                this.addZiduan(this.fangbaobei,"zhiyaleixing");
                this.addZiduan(this.fangbaobei,"weikuan");
                this.addZiduan(this.fangbaobei,"kehuage");
                this.addZiduan(this.fangbaobei,"kehuleixing");
                this.addZiduan(this.fangbaobei,"fangwuguzhi");
                this.addZiduan(this.fangbaobei,"fangwumianji");
                this.addZiduan(this.fangbaobei,"fangwuchaoxiang");
                this.addZiduan(this.fangbaobei,"fangwuleixing");
                this.addZiduan(this.fangbaobei,"fangwudizhi");
                this.addZiduan(this.fangbaobei,"hetongdianhua");
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
                this.addZiduan(this.chebaobei,"organname");
                this.addZiduan(this.chebaobei,"custname");
                this.addZiduan(this.chebaobei,"region");
                this.addZiduan(this.chebaobei,"deptname");
                this.addZiduan(this.chebaobei,"reportname");
                this.addZiduan(this.chebaobei,"reporttime");
                this.addZiduan(this.chebaobei,"managername");
                this.addZiduan(this.chebaobei,"directorname");
                this.addZiduan(this.chebaobei,"salesmanname");
                this.addZiduan(this.chebaobei,"loantime");
                this.addZiduan(this.chebaobei,"loanmoney");
                this.addZiduan(this.chebaobei,"point");
                this.addZiduan(this.chebaobei,"servicemoney");
                this.addZiduan(this.chebaobei,"returnmoney");
                this.addZiduan(this.chebaobei,"carvalue");
                this.addZiduan(this.chebaobei,"retainagemoney");
                this.addZiduan(this.chebaobei,"displacement");
                this.addZiduan(this.chebaobei,"drivetime");
                this.addZiduan(this.chebaobei,"vehiclemodel");
            }).catch(function(err){
                Toast('网络超时');
            });
            //审批历史
            axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                contractId:this.contractid,
                isbaobei:true,
            })).then(response=>{
                if(response.data.code=='200'){
                    this.history = response.data.data;
                }
            }).catch(function(err){
                Toast('网络超时');
            });
            //图片回显
            axios.get(host+"/getaccessory?contractid="+this.contractid,{
                headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response=>{
                this.liuchengcontent=response.data;
//            console.log(this.liuchengcontent);
            }).catch(function(err){
                Toast('网络超时');
            })
        },
        mounted(){

        },
        components:{
            'ContractTop':ContractTop,
            'weituoxieyi':WeiTuoXieYi,
            'chebaobei':CheBaoBei,
            'fangbaobei':FangBaoBei,
            'liuchengfujian':liuchengfujian,
            'shenpiyijian':shenpiyijian,
        },
        methods:{
            addZiduan:function(obj,name){
                if(!(obj[name])){
                    this.$set(obj,name,'');
                }
            },
            liucheng(){
                this.flag2=true;
            },
            submit(){
//                this.flag2=true;
//                this.flag1=true;
                if(false == this.flag1){
                    Toast("请保存报备单");
                    return false;
                }
                if(false == this.flag2){
                    Toast("请保存流程附件");
                    return false;
                }
                MessageBox({
                    title: '提示',
                    message: '确定执行此操作?',
                    showCancelButton: true
                }).then(action => {
                    Indicator.open({
                        text: '加载中...',
                        spinnerType: 'fading-circle'
                    });
                    if("confirm" == action){//点击确定
                        axios.post(host+"/app/saveReportGo?contractid="+this.contractid+"&uuid="+this.uuid,{

                        }).then(response=>{
                            console.log(response);
                            if("200" == response.data.code){
                                Toast("提交成功");
                                this.back();
                            }else{
                                Toast("操作失败");
                            }
                            Indicator.close();
                        }).catch(function(err){
                            Toast("网络超时");
                            Indicator.close();
                        });
                    }else if("cancel" == action){//点击取消
                        Indicator.close();
                    }
                });
            },
            back(){
                this.$router.go(-1);
            },
            approve:function(data){
                if(false == this.flag1){
                    Toast("请保存报备单");
                    return false;
                }
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                axios.get(host+"/app/approve?userid="+this.userid+"&nodeType=0&typeid="+this.typeid+"&step="+this.step+"&processinstanceid="+this.processinstanceid+"&num=0"+"&contractid="+this.contractid+"&auditoropinion="+data+"&uuid="+this.uuid,{

                }).then(response=>{
                    if(response.data.code=='200'){
                        Toast("提交成功");
                        this.back();
                        Indicator.close();
                    }else{
                        Toast("操作失败");
                        Indicator.close();
                    }
                }).catch(function(err){
                    Toast("网络超时");
                    Indicator.close();
                });
            },
            unapprove:function(data){
//                host+"/app/reject?userid="+userid+"&nodeType=0&typeid="+typeid+"&step="+step+"&processinstanceid="+processinstanceid+"&contractid="+contaracthetongid+"&auditoropinion="+$("textarea[name='approveIdea']").val()+"&uuid="+uuid
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                axios.get(host+"/app/reject?userid="+this.userid+"&nodeType=0&typeid="+this.typeid+"&step="+this.step+"&processinstanceid="+this.processinstanceid+"&num=0"+"&contractid="+this.contractid+"&auditoropinion="+data+"&uuid="+this.uuid,{

                }).then(response=>{
                    if(response.data.code=='200'){
                        Toast("提交成功");
                        this.back();
                        Indicator.close();
                    }else{
                        Toast("操作失败");
                        Indicator.close();
                    }
                }).catch(function(err){
                    Toast("网络超时");
                    Indicator.close();
                });
            },
            //报备单保存
            savefang(data){
                this.flag1=true;
            },
            //押车报备单保存
            saveche(data){
                this.flag1=true;
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
    .mintui{font-size:16px !important;margin-left:0px !important;}
</style>
