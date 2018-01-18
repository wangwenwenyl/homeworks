<template>
    <div style="overflow-Y:scroll;">
        <!--<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" ><img id="imgBack" class="imgBack" src="../img/返回.png" alt="" /></a>-->
        <!--细报详情-->
        <div class='modle_xibao' v-show="messageShow">
            <div class="xibaoTopBar font-family-black">
                喜报详情
                <img id="xibaoConcle" @click="close" class="imgConcle" src="../../assets/img/cancel.png" alt="" />
            </div>
            <div  class="xibaoContent">
                <ul>
                    <li>业务员&nbsp;&nbsp;    <span  id="xibaoName">{{ name }}</span></li>
                    <li>所属门店<span id="xibaoDep">{{ department }}</span></li>
                    <li>合同编号<span id="xibaoNum">{{ accountNum }}</span></li>
                    <li>合同类型<span id="xibaoType">{{ type }}</span></li>
                    <li>签订日期<span id="xibaoTime">{{ date }}</span></li>
                </ul>
            </div>
        </div>
        <!--<header class="mui-bar mui-bar-nav display-block">
            <h1 id="indMore" class="mui-title">通知</h1>
        </header>-->
        <ContractTop tle="通知" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <!--顶部分割线-->
        <div class="line"></div>
        <div style="height: 44px;"></div>
        <!--通知-->
        <div  class="message">
            <!--通知list内容-->
            <div id="message">

            </div>
        </div>
        <!--通知list-->
        <div class="message-list">
            <ul id="message" class="mui-table-view" v-for="message in items">
                <li class="height-88" @click="check(message)">
                    <img src="../../assets/img/通知.png" alt="" class="icon-32 message-logo" />
                    <div class="center-line"></div>
                    <div class="message-content display-inlineblock font-family-black">
                        恭喜<span id="messageName" class="message-content-name"> {{message.department}}{{ message.name }} </span>签单成功</div>
                    <div id="messageDate" class="message-content-date font-family-black">{{ message.time }}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import ContractTop from '@/components/ContractTop';
    export default{
        data(){
            return {
                items:[],
                name:'',
                accountNum:'',
                department:'',
                type:'',
                date:'',
                messageShow:false,
            }
        },
        methods:{
            getAllMessage(){
                axios.get(host+"/app/getallbillboard",
                ).then(response=>{
                    console.log(response);
                    if(response.status=='200'){
                        this.items=response.data.data;
                    }else{
                        Toast("操作失败");
                    }
                }).catch(function(err){
                   Toast("网络超时");
                });
            },
            check(message){
                this.name=message.name;
                this.department=message.department;
                this.type=message.type;
                this.date=message.time;
                this.accountNum=message.number;
                this.messageShow=true;
            },
            close(){
                this.messageShow=false;
                this.name="";
                this.department="";
                this.type="";
                this.date="";
                this.accountNum="";
            }
        },
        created(){
            this.getAllMessage();
        },
        components:{
            'ContractTop':ContractTop,
        }
    }
</script>

<style scoped>
    @import "../../assets/css/syn.css";
    @import "../../assets/css/mui.min.css";
    #box {
        display: block;
    }

    .mui-title {
        font-size: 18px;
        font-family: "微软雅黑";
        font-weight: bold;
        color: #333333;
    }

    .top_hetongguanli {
        display: block;
        height: 43px;
        background: white;
        align-content: center;
        font-family: "微软雅黑";
        font-size: 18px;
        padding-left: 24px;
    }

    .top_hetongguanli_name {
        line-height: 43px;
        display: inline-block;
    }

    .mui-bar {
        position: relative;
        background: white;
        z-index: 6;
    }

    .button_hetong_block {
        height: 89px;
        background: white;
        margin-top: 9px;
        padding: 0 42px;
    }

    .button_hetong {
        height: 36px;
        width: 44%;
        background: #fbaf37;
        font-family: "微软雅黑";
        font-size: 16px;
        display: inline-block;
        line-height: 36px;
        text-align: center;
        color: white;
        vertical-align: middle;
    }

    .margin-left-14px {
        margin-left: 0.4%;

    }

    .message {
        padding: 0 15px;
        background: white;
        /*margin-top: 44px;*/
    }

    .message-title {
        height: 49px;
    }


    .message-list {
        background: white;
        color: #666;
    }
    .mui-table-view{
      padding: 0 15px;
    }
    .mui-pull-left {
        margin-left: 3px;
    }

    .height-88 {
        height: 44px;
    }

    .message-logo {
        display: inline-block;
        vertical-align: middle;
    }

    .message-content {
        font-size: 12px;
        margin-left: 3.2%;
    }

    .message-content-name {
        color: rgb(254, 137, 112);
    }

    .message-content-date {
        float: right;
        color: #999999;
        font-size: 16px;
        margin-right: 16px;

        line-height: 44px;
        text-align: center;
    }
    /* new */

    .itemContainer {
        display: flex;
    }
    .flexImg{

    }
    .flexUl {
        flex-grow: 1;
    }
    /* end */
    .modle_xibao{
        width: 85.3%;
        height: 202.5px;
        position: fixed;
        top: 200px;
        left: 7.35%;
        background-color: #f9f9f9;
        border-radius: 0.3rem;
        overflow: auto;
        /*display: none;*/
        z-index: 1000;
    }
    .mui-backdrop {
        z-index: 8;
    }
    .xibaoTopBar{
        width: 100%;
        height: 27.16%;
        background: #f4f4f4;
        line-height: 55px;
        font-size: 15px;
        color: #666666;
        padding-left: 15px;
        padding-right: 15px;
    }
    .imgConcle{
        width: 24px;
        height: 24px;
        float: right;
        margin-top: 9px;
    }
    .xibaoContent{
        padding-left: 16.875%;
        padding-top: 16px;
    }
    .xibaoContent>ul>li{
        font-family: "微软雅黑";
        color: #666666;
        font-size: 14px;
    }
    #message>li{
        border-bottom: 0.5px solid #efefef;
    }
    .xibaoContent>ul>li>span{
        margin-left: 7.8%;
    }

    .mui-slider-progress-bar{
        background:none !important;
    }
    .mui-active{
        color: #FBAF37 !important;
    }
    .imgBack{
        position: fixed;
        left: 15px;
        top: 14px;
        width: 9px;
        height: 16px;
        z-index: 10;
    }
    .imgcss{
        position:fixed
    }
</style>
