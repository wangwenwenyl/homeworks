<template>
    <div id="appdiyadai" style="text-align: left;overflow-Y:scroll;" >
        <ContractTop tle="报备审批" tleurl="/index" style="position:fixed;top:0px;z-index:999;background:#fff;"></ContractTop>
        <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1 :swipeable='true'>
            <div style="width:450px;">
                <mt-tab-item id="1">委托协议</mt-tab-item>
                <mt-tab-item id="2">{{ type?'押车报备单':'报备单' }}</mt-tab-item>
                <mt-tab-item id="3">流程附件</mt-tab-item>
                <mt-tab-item id="4">审批意见</mt-tab-item>
            </div>
        </mt-navbar>

        <mt-tab-container v-model="selected" :swipeable='true' style="margin-top:98px;">
            <mt-tab-container-item id="1">
                <weituoxieyi v-bind:xieyi='xieyi'></weituoxieyi>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <chebaobei v-if="xieyi.carPropertyModel" v-bind:detailShow="detailShow" v-bind:showsave="showSave" v-bind:buchong="buchong" v-bind:chebaobei="chebaobei" @child-info="saveche"></chebaobei>
                <fangbaobei v-else v-bind:fangbaobei="fangbaobei" v-bind:detailShow="detailShow" v-bind:buchong="buchong" v-bind:showsave="showSave" @child-info="savefang"></fangbaobei>
            </mt-tab-container-item>
            <mt-tab-container-item id="3" >
                <liuchengfujian v-bind:liuchengall="liuchengcontent" v-bind:contracttype="contractType"></liuchengfujian>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
                <shenpiyijian v-bind:history="history" v-bind:showhistory="showhistory" v-on:approve="approve" v-on:unapprove="unapprove"></shenpiyijian>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import axios from 'axios';
    import { Tabbar, TabItem } from 'mint-ui';
    import ContractTop from '@/components/ContractTop';
    import WeiTuoXieYi from '@/components/ZhiyaWeituoxieyi';
    import CheBaoBei from '@/components/ZhiyaChebaobei';
    import FangBaoBei from '@/components/ZhiyaFangbaobei';
    import liuchengfujian from '@/components/liuchengfujian';
    import shenpiyijian from '@/components/shenpiyijian';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    export default {
        data () {
            return {
                userid:'',
                selected:'1',
                contractid:'',
                xieyi:'',
                chebaobei:{},
                fangbaobei:{},
                liuchengcontent:'',
                contractType:'',
                contractnum:'',
                type:'',
                baocun:'',
                tijiao:'',
                history:'',
                showhistory:true,
                showsave:true,
                id:'',
                buchong:{},
                step:'',
                typeid:'',
                flag:false,
                detailShow:false,//控制输入框是否可以编辑
                showSave:true,//控制保存按钮的显示与隐藏
                //在子组件的showor中控制那些从来都只是回显，不可编辑的输入框
            }
        },
        created:function(){
//            console.log(this.$route.params);
            this.contractnum = this.$route.params.contractnum;
            this.contractid = this.$route.params.contractid;
            this.processinstanceid=this.$route.params.processinstanceid;
            this.step=this.$route.params.step;
            this.typeid=this.$route.params.typeid;
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
//                    this.fangbaobei.xinshenyuanqianzi=this.$cookie.get("uname");
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
                //审批历史
                axios.post(hostapi+'/contract/optionhistory',qs.stringify({
                    contractId:this.contractid,
                    isbaobei:true,
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.history = response.data.data;
                    }
                }).catch(function(err){
                    Toast('审批历史回显失败');
                });
        //图片回显
        axios.get(host+"/getaccessory?contractid="+this.contractid,{
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(response=>{
            this.liuchengcontent=response.data;
//            console.log(this.liuchengcontent);
        }).catch(function(err){
            Toast('图片回显失败');
        })

        }).catch(function(error){
                console.log(error);
        });
            this.userid=this.$cookie.get('uid');
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
            approve:function(data){
                if(this.flag==false){
                    Toast("请保存报备单");
                    return false;
                }
              Indicator.open();
                axios.post(hostapi+'/contract/approve',qs.stringify({
                    processId:this.processinstanceid,
                    step:this.step,
                    contractId:this.contractid,
                    message:data,
                    userId:this.userid,
                    type:1,
                })).then(response=>{
                   console.log(response);
                   if(response.data.code=="200"){
                     Indicator.close();
                       Toast("保存成功");
                       this.$router.push("{name:'baobeishenpi'}");
                   }else{
                     Toast("操作失败");
                     Indicator.close();
                   }
                }).catch(function(err){
                  Toast("网络异常");
                  Indicator.close();
                });
            },
            unapprove:function(data){
//                if(this.flag==false){
//                    Toast("请保存报备单");
//                    return false;
//                }
              Indicator.open();
                axios.post(hostapi+'/contract/disagree',qs.stringify({
                    processId:this.processinstanceid,
                    step:this.step,
                    contractId:this.contractid,
                    message:data,
                    userId:this.userid,
                    type:1,
                })).then(response=>{
                    console.log(response);
                    if(response.data.code=="200"){
                      Indicator.close();
                        Toast("保存成功");
                       this.$router.push("{name:'baobeishenpi'}");
                    }else{
                      Toast("操作失败");
                      Indicator.close();
                    }
                }).catch(function(err){
                    Toast("网络异常");
                    Indicator.close();
                });
            },
            //报备单保存
            savefang(data){
                if(data=='200'){
                    this.flag=true;
                }
            },
            //押车报备单保存
            saveche(data){
                if(data=='200'){
                    this.flag=true;
                }
            }
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
