<template>
    <div class="returnContract" style="overflow-Y:scroll;">
        <ContractTop tle="已办返合同审批" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <he-tong-search @trans="trans" @contidion="contidion" :open="open"></he-tong-search>
        <mt-loadmore
                :top-method="handleTopChange"
                :bottom-method="handleBottomChange"
                :bottom-all-loaded="allLoaded"
                :auto-fill="false"
                ref="loadmore"
                :class="cls"
        >
        <div>
            <ul class="contract" v-for="contactData in items">
              <li class="contract_num1">
                  <span class="contractnu">合同编号：</span><span class="contractnu">{{ dealcode(contactData.processName) }}</span>
              </li>
              <li class="state2">
                  <p class="state_1"><span>合同名称：</span><span class="state_1m2">{{ dealname(contactData.processName) }}</span></p>
              </li>
              <li class="state2">
                  <p class="state_1"><span>台账号：</span><span class="state_1m2">{{ contactData.accountNum }}</span></p>
              </li>
              <li class="state2">
                  <p class="state_1"><span>提交人：</span><span class="state_1m2">{{ contactData.submitterName }}</span></p>
              </li>
              <li class="state2">
                  <p class="state_1"><span>部门名称：</span><span class="state_1m2">{{ contactData.deptName }}</span></p>
              </li>
              <li class="state2">
                  <p class="state_1"><span>客户名称：</span><span class="state_1m2">{{ contactData.custName }}</span></p>
              </li>
              <li class="Guardian3">
                  <p class="state_1">
                  <!--<p class="Guardian_1">-->
                      <span class="Guardian_1w" style="margin-right: 0px;">审批意见：</span><span class="Guardian_1p" style="margin-left: 0px">{{ contactData.auditorOpinion }}</span>
                  </p>
              </li>
              <li class="uptime4">
                  <p class="state_1">
                  <!--<p class="uptime_1">-->
                      <span class="uptime_1t">审批时间：</span><span class="uptime_1tc">{{ dealtime(contactData.updateTime) }}</span>
                  </p>
              </li>
            </ul>
        </div>
        <div v-show="show" :class="cls">
            <noData></noData>
        </div>
        </mt-loadmore>
    </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import HeTongSearch from '@/components/heTongSearch.vue';
    import { TabContainer, TabContainerItem } from 'mint-ui';
    import { Tabbar, TabItem } from 'mint-ui';
    import axios from 'axios';
    import noData from '@/components/noData';
    import starttime from '@/components/search-date';
    import endtime from '@/components/search-date';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import {Toast} from 'mint-ui';

    export default {

        data () {
            return {
                userid:'',
                show:false,
                items:[],
                flag:false,
                submiter:'',
                fromTime:'',
                toTime:'',
                accountNum:'',
                page:1,
                pageSize:15,
                cls:'class1',
                topStatus: '',
                allLoaded:false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
                open: false
            }
        },
        mounted (){
//            this.fromTime=this.origintime();
//            this.toTime=this.origintime();
            this.userid=this.$cookie.get('uid');
            this.load ();
        },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'starttime':starttime,
            'endtime':endtime,
            'v-loadmore':Loadmore,
            'he-tong-search': HeTongSearch
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
            contidion(obj){
                this.items=[];
                this.accountNum = obj.accountNum;
                this.submiter = obj.submiter;
                this.fromTime = obj.fromTime;
                this.toTime = obj.toTime;
                this.load();
                this.open=false;
                this.cls='class1';
            },
            origintime(){
                var date = new Date();
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            },
            trans(obj){
                this.open = !obj.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            load(){
                axios.post(hostapi+'/contractyb/fanhetonglist',qs.stringify({
                    userId:this.userid,
                    name:this.submiter,
                    fromTime:this.fromTime,
                    toTime:this.toTime,
                    accountNum:this.accountNum,
                    page:this.page,
                    pageSize:this.pageSize,
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
            dealcode(data){
                if(data){
                    var contractcode='';
                    var detail= new Array(); //定义一数组
                    detail= data.split(","); //字符分割
                    var reg1 = /(.*?)返合同/;
                    var reg2 = /^编号(.*?)质押合同报备流程$/;
                    var reg3 = /^编号(.*?)审批流程$/;
                    var reg4 = /^编号(.*?)合同作废流程$/;
                    var reg5 = /^编号(.*?)合同撤单流程$/;
                    if(reg1.test(detail[1])){
                        var contractcode1 = detail[1].match(reg1);
                        if(reg2.test(contractcode1[1])){
                            var contractcode2 = contractcode1[1].match(reg2);
                            contractcode = contractcode2[1];
                        }else{
                            contractcode = contractcode1[1];
                        }
                    }else if(reg3.test(detail[1])){
                        var contractcode3 = detail[1].match(reg3);
                        contractcode = contractcode3[1];
                    }else if(reg4.test(detail[1])){
                        var contractcode4 = detail[1].match(reg4);
                        contractcode = contractcode4[1];
                    }else if(reg5.test(detail[1])){
                        var contractcode5 = detail[1].match(reg5);
                        contractcode = contractcode5[1];
                    }
                    return contractcode;
                }else{
                    return "";
                }
            },
            dealname(data){
                if(data){
                    var detail= new Array(); //定义一数组
                    detail= data.split(","); //字符分割
                    return detail[0];
                }else{
                    return "";
                }
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
            openPicker1() {
                this.$refs.picker1.open();
            },
            openPicker2() {
                this.$refs.picker2.open();
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
        margin-top:365px;
    }
    header{border-bottom:1px solid #ddd;}
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
        width:60%;
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
        margin:0px 15px;
        /*padding-right: 40px;*/
        /*padding-right: 6.4%;*/
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
    .btn5>button,.btn5>input{
        font-size:14px;
        width:100%;
        background-color: #fbaf37;
        border:none;
        color:#fff;
        padding:7px;
        border-radius: 5px;
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
