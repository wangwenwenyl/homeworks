<template>
    <div class="returnContract" style="overflow-Y:scroll;">
        <ContractTop tle="报备审批"  tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <div class="tiaojian" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;margin:auto;">
            <div class="search-btn" @click="trans()">
                {{ open ? '关闭' : '展开搜索' }}
            </div>
            <div class="search-box" v-show="open">
                <div class="follow-iterm">
                    <div class="follow-iterm-left">
                        <label class="contract-list-name">台账号：</label>
                    </div>
                    <div class="follow-iterm-right">
                        <input type="text" v-model="accountNum" class="search-input"/>
                    </div>
                </div>
                <div class="search-btn" @click="contidion">
                    查找
                </div>
            </div>
        </div>
        <mt-loadmore
                :top-method="handleTopChange"
                :bottom-method="handleBottomChange"
                :bottom-all-loaded="allLoaded"
                :auto-fill="false"
                ref="loadmore"
                style="height:100%;"
                :class="cls"
        >
            <div v-for="contactData in items">
                <ul class="contract">
                    <li class="state2">
                        <p class="state_1"><span>申请人：</span><span class="state_1m2">{{ contactData.submitterName }}</span></p>
                    </li>
                    <li class="Guardian3">
                        <p class="Guardian_1">
                            <span class="Guardian_1w" style="margin-right: 0px">台账号：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.accountNum }}</span>
                        </p>
                    </li>
                    <li class="Guardian3">
                        <p class="Guardian_1">
                            <span class="Guardian_1w" style="margin-right: 0px">客户姓名：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.custName }}</span>
                        </p>
                    </li>
                    <li class="Guardian3">
                        <p class="Guardian_1">
                            <span class="Guardian_1w" style="margin-right: 0px">部门名称：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.deptName }}</span>
                        </p>
                    </li>
                    <li class="Guardian3">
                        <p class="Guardian_1">
                            <span class="Guardian_1w" style="margin-right: 0px">审批详情：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.processName }}</span>
                        </p>
                    </li>
                    <li class="uptime4">
                        <p class="Guardian_2">
                            <span class="Guardian_2w">审核类型：</span><span class="Guardian_2zhuang">质押合同报备</span>
                        </p>
                    </li>
                    <li class="uptime4">
                        <p class="uptime_1">
                            <span class="uptime_1t">合同创建日期：</span><span class="uptime_1tc">{{ dealtime(contactData.createTime) }}</span>
                        </p>
                    </li>
                    <li class="btn5">
                        <div class="zuofei"><router-link :to="{ name: 'zhiyabaobei', params:{step:contactData.step,nodeType:0,processinstanceid:contactData.processinstanceId,contractnum:contactData.contractNum,typeid:1,contractid:contactData.contractId}}"><span class="div_btn" style="color:#fff;cursor:pointer;">审批</span></router-link></div>
                    </li>
                </ul>
            </div>
            <div v-show="show" style="margin-top:44px;">
                <noData :class="cls"></noData>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import { Tabbar, TabItem } from 'mint-ui';
    import axios from 'axios';
    import noData from '@/components/noData';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import { Toast } from 'mint-ui';

    export default {
        data () {
            return {
                userid:'',//drb
                open:false,
                items:[],
                page:1,
                pageSize:15,
                topStatus: '',
                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
                show:false,
                accountNum:'',
                cls:'class1',
            }
        },
        mounted:function(){
            this.userid=this.$cookie.get('uid');
            this.load();
        },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'v-loadmore':Loadmore,
        },
        methods:{
            getCookie(cname){
                var name = cname + "=";
                var ca = document.cookie.split(";");
                for(var i=0;i<ca.length;i++){
                    var c = ca[i];
                    if(c=='') return "";
                    while(c.charAt(0)=='') c=c.substring(1);
                    if(c.indexOf(name)!=-1) return c.substring(name.length,c.length);
                }
                return "";
            },
            contidion(){
                this.items=[];
                this.load();
                this.open=false;
                this.cls='class1';
            },
            trans(){
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            load(){
                axios.post(hostapi+'/contractdb/baobeilist ',qs.stringify({
                    userId:this.userid,
                    page:this.page,
                    pageSize:this.pageSize,
                    accountNum:this.accountNum,
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.show=false;
                        if(response.data.data=='' && this.page==1){
                            this.show=true;
                            this.allLoaded = true;
                            this.items=[];
                        }else{
                            this.items = this.items.concat(response.data.data);
                            console.log(response.data.data);
                            if(response.data.data==''){
                                this.allLoaded = true;
                            }
                        }
                    }
                }).catch(function(err){
                    Toast('查询失败');
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
//                this.allLoaded = true;// 若数据已全部获取完毕
//                this.$refs.loadmore.onBottomLoaded();
                setTimeout(() => {
                    this.page +=1;
                    this.load();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            dealtime(times){
                if(times){
                    return times.split(" ")[0];
//                    var date = new Date(times);
//                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
                }else{
                    return "";
                }
            },
            shenpi(contactdata){
//                console.log(contactdata);
                var reg = /^编号(.*?)质押合同报备流程$/;  //规则
                var contractcode = contactdata.processName.match(reg)[1];
//                console.log(contractcode);
                this.$router.push({ path:'/zhiyabaobei', params:{step:contactdata.step,nodeType:0,processinstanceid:contactdata.processinstanceid,contractnum:contractcode,typeid:1,contractid:contactdata.contractId}});
            }
        }
    }
</script>

<style scoped>
    @import '../assets/css/Peng-common.css';
    @import "../assets/css/server.css";
    .class1{
        margin-top:92px;
    }
    .class2{
        margin-top:208px;
    }
    .btn5>button,.btn5>input{
        font-size:14px;
        width:100%;
        background-color: #fbaf37;
        border:none;
        color:#fff;
        padding:7px;
        border-radius: 5px;
    }
    .rows{
        text-align: center;
    }
    .rows>div{
        font-size:14px;
    }
    .rows>div>label{
        margin-right:10px;
    }
    .rows>div>input{
        height:35px;
        margin:auto;
        /*margin-top:30px;*/
        border:1px solid #ddd;
        padding-left:10px;
        font-size: 14px;
    }
    .loading-background, .mint-loadmore-top span {
        -webkit-transition: .2s linear;
        transition: .2s linear
    }
    .mint-loadmore-top span {
        display: inline-block;
        vertical-align: middle
    }

    .mint-loadmore-top span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }

    .page-loadmore .mint-spinner {
        display: inline-block;
        vertical-align: middle
    }

    .page-loadmore-desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px
    }

    .page-loadmore-desc:last-of-type,
    .page-loadmore-listitem {
        border-bottom: 1px solid #eee
    }

    .page-loadmore-listitem {
        height: 50px;
        line-height: 50px;
        text-align: center
    }

    .page-loadmore-listitem:first-child {
        border-top: 1px solid #eee
    }

    .page-loadmore-wrapper {
        overflow: scroll
    }

    .mint-loadmore-bottom span {
        display: inline-block;
        -webkit-transition: .2s linear;
        transition: .2s linear;
        vertical-align: middle
    }

    .mint-loadmore-bottom span.is-rotate {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
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
        margin-left: 6.4%;
        color:#333;
        font-weight: bold;
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
        margin-left: 6.4%;
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
        margin-left: 6.4%;
        color:#333;
        font-size:14px;
    }
    .Guardian_2w{
        color: #333;
        font-weight: bold;
    }
    .Guardian_2img{
        display: inline-block;
        width: 17px;
        height:17px;
        background: url("../assets/img/exclamation.png") no-repeat;
        background-size:100% 100%;
        vertical-align: middle;
        margin-right: 24px;
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
        margin-left: 6.4%;
        color:#333;
    }
    .uptime_1t{
        font-weight: bold;
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
    .varbtn_words{
        font-size: 14px;
        color:#666;
    }
    .qiandan,.chakanjd,.cuidan{
        margin-right: 4.3%;
    }
    .contractList{
        overflow: hidden;
        margin-top: 44px;
    }
    .contractnu2{
        font-size:12px;
        /*font-weight: bold;*/
        color:#333;
    }
    /*弹出框*/
    .modle_blank_shou2{
        width: 100%;
        height: 100%;
        position: fixed;
        top:0;
        background-color: #000;
        opacity:0.25;
        z-index: 10;
    }
    /*撤单流程中 alert*/
    .modle_sex_shou3{
        width: 85.3%;
        height: 33%;
        /*height: 396px;*/
        position: fixed;
        z-index: 15;
        margin:auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        border-radius: 10px;
        overflow: auto;
    }
    .modheader{
        /*height:55px;*/
        height:25%;
        background-color:#f9f9f9;
        padding-left: 15px;
        padding-right: 15px;
    }
    .modheader>p{
        display: inline-block;
        float: left;
        font-size: 16px;
        color: #666;
        margin-top:18px;
    }
    .modheader>div{
        display: inline-block;
        float: right;
        margin-top: 5%;
    }
    .tanClose{
        width: 24px;
        height:24px;
        background: url("../assets/img/tanClose.png") no-repeat;
        background-size:100% 100%;
    }
    .modbody{
        background-color: #fff;
        height: 39%;
        line-height: 39%;
        padding-top: 2%;
        margin-bottom: 15px;
        /*overflow:hidden*/
    }
    .modbody>p{
        text-align: center;
        line-height: 90px;
    }
    .modfooter{
        height: 20%;
        margin-top: 3%;
    }
    .modfooterBtnC{
        line-height: 39px;
        background-color: #fbaf37;
        width: 35%;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border-radius: 10px;
    }
    .hide{
        display:none;
    }
</style>
