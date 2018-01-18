<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="returnContract" style="overflow-Y:scroll">
        <ContractTop tle="返合同审批" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <div class="tiaojian" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;margin:auto;">
            <div class="search-btn" @click="trans()"style="margin-top:3px;">
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
         <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore
                     :top-method="handleTopChange"
                     :bottom-method="handleBottomChange"
                     :bottom-all-loaded="allLoaded"
                     :auto-fill="false"
                     ref="loadmore"
                     :class="cls"
                     :style="{'-webkit-overflow-scrolling': scrollMode}"
        >
        <div>
            <ul class="contract page-loadmore-listitem" v-for="contactData in items">
                <li class="contract_num1">
                    <span class="contractnu">合同编号：</span><span class="contractnu2">{{ contactData.contractnum }}</span>
                </li>
                <li class="state2">
                    <p class="state_1">
                        <span>合同名称：</span>
                        <span class="state_1m2">{{ contactData.contractname }}</span>
                        <!--<span v-if="contactdata.contpye=='信用贷'" class="state_1m2">无抵押贷款委托合同</span>-->
                        <!--<span v-else-if="contactdata.contpye=='抵押贷'" class="state_1m2">房屋抵押贷款委托合同</span>-->
                        <!--<span v-else="contactdata.contpye=='质押贷'" class="state_1m2">委托协议</span>-->
                    </p>
                </li>
                <li class="Guardian3">
                    <p class="Guardian_1">
                        <span class="Guardian_1w" style="margin-right: 0px">合同类型：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.typename }}</span>
                    </p>
                </li>
                <li class="uptime4">
                    <p class="Guardian_2">
                        <span class="Guardian_2w">台账号：</span><span class="Guardian_2zhuang">{{ contactData.accountNum }}</span>
                    </p>
                </li>
                <li class="uptime4">
                    <p class="Guardian_2">
                        <span class="Guardian_2w">部门名称：</span><span class="Guardian_2zhuang">{{ contactData.deptName }}</span>
                    </p>
                </li>
                <li class="uptime4">
                    <p class="Guardian_2">
                        <span class="Guardian_2w">客户姓名：</span><span class="Guardian_2zhuang">{{ contactData.custName }}</span>
                    </p>
                </li>
                <li class="uptime4">
                    <p class="Guardian_2">
                        <span class="Guardian_2w">签订日期：</span><span class="Guardian_2zhuang">{{ contactData.signdate }}</span>
                    </p>
                </li>
                <li class="uptime4">
                    <p class="uptime_1">
                        <span class="uptime_1t">合同维护人：</span><span class="uptime_1tc">{{ contactData.username }}</span>
                    </p>
                </li>
                <li class="btn5">
                    <div class="zuofei" v-if="contactData.typename=='信用贷'"><router-link :to="{ name: 'xinyongdai', params:{step:contactData.step,nodeType:0,processinstanceid:contactData.processinstanceId,contractnum:contactData.contractnum,typeid:1,contractid:contactData.contractid}}"><span class="div_btn" style="color:#fff;cursor:pointer;">审批</span></router-link></div>
                    <div class="zuofei" v-else-if="contactData.typename=='抵押贷'"><router-link :to="{ name: 'diyadai', params:{step:contactData.step,nodeType:0,processinstanceid:contactData.processinstanceId,contractnum:contactData.contractnum,typeid:1,contractid:contactData.contractid}}"><span class="div_btn" style="color:#fff;cursor:pointer;">审批</span></router-link></div>
                    <div class="zuofei" v-else-if="contactData.typename=='质押贷'"><router-link :to="{ name: 'zhiyafanhetong', params:{step:contactData.step,nodeType:0,processinstanceid:contactData.processinstanceId,contractnum:contactData.contractnum,typeid:1,contractid:contactData.contractid}}"><span class="div_btn" style="color:#fff;cursor:pointer;">审批</span></router-link></div>
                </li>
            </ul>
        </div>
        <div v-show="show" style="margin-top:60px;">
            <noData></noData>
        </div>
        </mt-loadmore>
        </div>
        <div v-bind:class="{ hide:flag }">
            <div class='modle_blank_shou2'>

            </div>
            <!--撤单流程中 modalBox-->
            <div class='modle_sex_shou3'>
            <div class="modheader">
                <p>消息提醒</p>
                <div class="tanClose" @click="close"></div>
            </div>
            <div class="modbody">
                <p>该合同处于撤单流程中</p>
            </div>
            <div class="modfooter">
                <div class="modfooterBtnC" @click="close">确定</div>
            </div>
        </div>
    </div>
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
    import { MessageBox } from 'mint-ui';

    export default {
        data () {
            return {
                wrapperHeight: 0,
                bottomStatus: '',
                userid:'',
                show:false,
                cls:'class1',
                items:[],
                flag:true,
                accountNum:'',
                open:false,
                page:1,
                pageSize:15,
                topStatus: '',
                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        created:function(){
            this.userid=this.$cookie.get('uid');
            this.load();
        },
         mounted() {
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'v-loadmore':Loadmore,
        },
        methods:{
            contidion(){
                //将数据置空，然后重新获取
                this.items=[];
                this.load();
                this.open=false;
                this.cls='class1';
            },
            trans(){
                //open取反
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            load(){
//                axios.post(host+'/app/getrecordcontractlist?uname=zhang&type=1&userid='+this.userid,{
                axios.post(hostapi+'/contractdb/fanhetonglist',qs.stringify({
                    userId:this.userid,
                    accountNum:this.accountNum,
                    page:this.page,
                    pageSize:this.pageSize,
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.scrollMode = "touch";
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
//                this.allLoaded = true;// 若数据已全部获取完毕
//                this.$refs.loadmore.onBottomLoaded();
                setTimeout(() => {
                    this.page +=1;
                    this.load();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            shenpi(contactdata){
//                console.log(contactdata);
                axios.get(host+'/app/checkstate?contractid='+contactdata.contractid,{

                }).then(response=>{
//                    console.log(response);
                    if(response.data.code == "200"){
                        if(contactdata.contpye == '信用贷'){
                            this.$router.push({path:'/xinyongdai',params:{step:contactdata.step,nodeType:0,processinstanceid:contactdata.processinstanceid,contractnum:contactdata.contractnum,typeid:1,conid:contactdata.id}})
    //                        location.href="serverXinYongDai.html?"+"&step="+step+"&nodeType=0"+"&processinstanceid="+infoproid+"&contractnum="+info+"&typeid=1"+"&conid="+conid;
                        }else if(contactdata.contpye == '抵押贷'){
                            this.$router.push({path:'/diyadai',params:{step:contactdata.step,nodeType:0,processinstanceid:contactdata.processinstanceid,contractnum:contactdata.contractnum,typeid:1,conid:contactdata.id}})
    //                        location.href="serverDiYaDai.html?"+"&step="+step+"&nodeType=0"+"&processinstanceid="+infoproid+"&contractnum="+info+"&typeid=1"+"&conid="+conid;
                        }else if(contactdata.contpye == '质押贷'){
                            this.$router.push({path:'/zhiyafanhetong',params:{step:contactdata.step,nodeType:0,processinstanceid:contactdata.processinstanceid,contractnum:contactdata.contractnum,typeid:1,conid:contactdata.id}})
    //                        location.href="serverZhiyaFanHeTong.html?"+"&step="+step+"&nodeType=0"+"&processinstanceid="+infoproid+"&contractnum="+info+"&typeid=1"+"&conid="+conid;
                        }
                    }else if(response.data.code == '408'){
                        this.flag=false;
                    }
                }).catch(function(err){
                    Toast('操作失败');
                })
            },
            close(){
                this.flag=true;
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
     @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      @descendent wrapper {
        overflow: scroll;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>
