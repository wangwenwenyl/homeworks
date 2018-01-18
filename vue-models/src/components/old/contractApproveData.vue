<template>
    <div style="overflow-Y:scroll;">
        <ul class="contract" v-for="contractData in contracts">
        <li class="contract_num1"><span class="contractnu">{{ contractData.typename }}</span></li>
        <li class="state2">
            <p class="state_1"><span>申领人：</span><span class="state_1m2">{{ contractData.submitter }}</span></p>
            </li>
        <li class="Guardian3">
            <p class="Guardian_1">
                <span class="Guardian_1w" style="margin-right: 0px">申请数量：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contractData.applynum  }}</span>
                </p>
            </li>
        <li class="uptime4">
            <p class="uptime_1">
                <span class="uptime_1t">申请原因：</span><span class="uptime_1tc">{{ contractData.reason }}</span>
                </p>
            </li>
        <li class="Guardian3">
            <p class="Guardian_1">
                <span class="Guardian_1w" style="margin-right: 0px">申请时间：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contractData.date }}</span>
                </p>
            </li>
        <li class="Guardian3">
            <p class="Guardian_1">
                <span class="Guardian_1w" style="margin-right: 0px">审批数量：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contractData.approvenum }}</span>
                </p>
            </li>
        <li class="Guardian3">
            <p class="Guardian_1">
                <span class="Guardian_1w" style="margin-right: 0px">审批意见：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contractData.opinion }}</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['contracts']
    }
</script>

<style scoped>
    @import "../../assets/css/app.css";
    @import "../../assets/css/Peng-common.css";
    .mui-spinner {
        width: 32px;
        height: 32px;
    }
    /*下拉刷新的箭头颜色*/
    .mui-pull-top-pocket{
        margin-top:44px;
    }
    .mui-icon-pulldown {
        color: #fbaf37;
    }
    .mui-spinner:after {
        border-color:#fbaf37;
    }
    .mui-bar{
        position: relative;
        background-color: #fff;
    }
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
        /*background: url("../img/return.png") no-repeat;*/
        /*background-size:100% 100% ;*/
        /*margin-left: 4%;*/
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
        float: right;
        /*margin-right: 44px;*/
        margin-right: 8%;
    }
    .Guardian_2w{
        color: #333;
        font-weight: bold;
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
    }
    /*<li>4*/
    .uptime4{
        line-height: 38px;
        padding-left: 6.4%;
        padding-right: 2%;
    }
    .uptime_1{
        /*display: inline-block;*/
        /*float: left;*/
        /*margin-left: 6.4%;*/
        /*margin-right: 2%;*/
        color:#333;
    }
    .uptime_1t{
        font-weight: bold;
        font-size:14px;
        display: block;
        float: left;
        /*width: 26%;*/
    }
    .uptime_1tc{
        color:#666;
        font-size:14px;
        display: block;
        float: left;
        width: 74%;
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
        z-index: 10;
    }
    /*撤单alert*/
    .modle_sex_shou2{
        width: 85.3%;
        height: 50%;
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
        height:19%;
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
        margin-top: 11px;
    }
    .tanClose{
        width: 24px;
        height:24px;
        background: url("../../assets/img/tanClose.png") no-repeat;
        background-size:100% 100%;
    }
    .modbody{
        background-color: #fff;
        height: 57%;
        line-height: 39%;
        padding-top: 5%;
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
        border-radius: 10px;
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
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 5px;
        padding-right: 5px;
        border:none;
        font-size: 13px;
    }
    .approvalnum{
        border:none;
        font-size: 13px;
        line-height:20px;
        width: 100%;
        text-align: center;
    }

</style>
