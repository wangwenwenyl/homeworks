<!--个人中心(我的)-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div class="person" style="overflow-Y:scroll;">
        <!--返回消息-->
        <!--<div id="msgResoult" class="modleMsg" v-show="messageshow">-->
            <!--<div class="xibaoTopBar">-->
                <!--处理结果-->
                <!--<img id="waitConcle" @click="close" class="waitConcle imgConcle" src="../../assets/img/cancel.png" alt="" />-->
            <!--</div>-->
            <!--<div class="waitMessage">-->
                <!--<span id="spanResoult">返回结果</span>-->
            <!--</div>-->
            <!--<div class="waitBtn">-->
                <!--<div id="resoultAffirm" style="margin-left: 63.22px;" class="color-white">确定</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--离职申请-->
        <!--<div class="modleWait" v-show="lizhishow">-->
            <!--<div class="xibaoTopBar">-->
                <!--离职申请-->
                <!--<img @click="close"  class="waitConcle imgConcle" src="../../assets/img/cancel.png" alt="" />-->
            <!--</div>-->
            <!--<div class="waitMessage">-->
                <!--<span>是否确定要离职</span>-->
            <!--</div>-->
            <!--<div class="waitBtn">-->
                <!--<div @click="lizhiClose" id="alertConsole" style="background: none;" class="color-gray float-left">取消</div>-->
                <!--<div @click="lizhiSure" id="alertAffirm" class="color-white float-right">确定</div>-->
            <!--</div>-->
        <!--</div>-->
        <!--修改密码-->
        <div class="modleChane" style="display:none;">
            <div class="xibaoTopBar">
                修改密码
                <img id="changeConsole"  src="../../assets/img/cancel.png" alt="" class="imgConcle" />
            </div>
            <!--修改密码内容-->
            <div class="changePwd">
                <ul class="changeUl">
                    <li>
                        <span>原密码 &nbsp;&nbsp;&nbsp;</span>
                        <input id="oldPass" type="password" />
                    </li>
                    <li>
                        <span>新密码 &nbsp;&nbsp;&nbsp;</span>
                        <input id="newPass" type="password" />
                    </li>
                    <li>
                        <span>确认密码    </span>
                        <input id="rePass" type="password" />
                    </li>
                </ul>
            </div>
            <!--按钮-->
            <div class="changeBtn">
                <div id="changeBtnConsole" style="background: none;" class="color-gray float-left">取消</div>
                <div id="btnChangePass" class="color-white float-right">确定</div>
            </div>
        </div>

        <div class="mint-msgbox-wrapper" v-show="passshow" style="position: absolute; z-index: 3;">
            <div class="mint-msgbox">
                <div class="mint-msgbox-header">
                    <div class="mint-msgbox-title">修改密码</div>
                </div>
                <div class="mint-msgbox-content">
                    <div class="mint-msgbox-input">
                        <label for="">旧密码</label><input type="password" v-model="oldPassword">
                    </div>
                    <div class="mint-msgbox-input">
                        <label for="">新密码</label><input type="password" v-model="newPassword">
                    </div>
                    <div class="mint-msgbox-input">
                        <label for="">确认密码</label><input type="password" v-model="confirmPassword">
                    </div>
                </div>
                <div class="mint-msgbox-btns">
                    <button class="mint-msgbox-btn mint-msgbox-cancel" @click="passshow=false">取消</button>
                    <button class="mint-msgbox-btn mint-msgbox-confirm" @click="editPass">确认</button>
                </div>
            </div>
        </div>
        <div v-show="passshow" class="v-modal" @click="passshow=false" style="z-index: 2;"></div>

        <!--上部个人信息-->
        <div class="line"></div>
        <div class="topWode">
            <img id="imgHead" class="back-ef imgHead" v-if="person.image" :src="person.image" alt="" />
            <div id="imgHead" class="back-ef imgHead" v-else style="display:inline-block;"></div>
            <ul style="width: 59.3%;" class="contentUl">
                <li class="contentli"><span id="contentName" class="contentName">{{ person.name }}</span>
                    <span id="contentType" class="contentType">{{ person.position }}</span>
                </li>
                <li>
                    <span id="contentDepart" class="contentType">{{ person.department }}</span>
                </li>
                <li class="line" style="margin-top: 14px;" ></li>
                <li style="margin-top: 18px;">
                    <div id="changePwd"  class="btnTop" @click="alertPass()">
                        <img class="imgType" src="../../assets/img/修改密码.png" alt="" />
                        <div class="checkYh center-line"></div>
                        修改密码
                    </div>
                    <div id="rowLine" class="rowLine" v-show="quitShow"></div>
                    <div  class="center-line"></div>
                    <div id="applyDis" style="margin-left: 4.9%;" class="btnTop" @click="lizhi()" v-show="quitShow">
                        <img class="imgType" src="../../assets/img/离职.png" alt="" />
                        <div class="center-line"></div>
                        离职申请
                    </div>
                </li>
            </ul>
        </div>
        <!--姓名性别出生日期-->
        <div class="wodeTop">
            <ul>
                <li style="">
                    <span class="titleSpan">姓名</span>

                    <span id="spanName" class="spanContent">{{ person.name }}</span>
                    <div class="center-line"></div>
                </li>
                <li>
                    <span class="titleSpan">性别</span>
                    <span id="spanSex" class="spanContent">{{ person.gender }}</span>
                </li>
                <li>
                    <span class="titleSpan">出生日期</span>
                    <span id="spanDate" class="spanContent">{{ person.birthday }}</span>
                </li>
            </ul>
        </div>
        <!--从业年限/范围-->
        <div class="wodeTop">
            <ul>
                <li>
                    <span class="titleSpan">从业年限</span>
                    <span id="spanYear" class="spanContent">{{ person.birthday }}</span>
                </li>
                <li>
                    <span class="titleSpan">从业范围</span>
                    <span id="spanScape" class="spanContent">{{ person.scope }}</span>
                </li>
            </ul>
        </div>
        <!--联系方式-->
        <div class="wodeTop">
            <ul>
                <li>
                    <span class="titleSpan">联系电话</span>
                    <span id="spanPhone" class="spanContent">{{ person.phone }}</span>
                </li>
                <li>
                    <span class="titleSpan">Email</span>
                    <span id="spanEmail" class="spanContent">{{ person.email }}</span>
                </li>
                <li>
                    <span style="display: inline; width: 70px;" class="titleSpan">地址</span>
                    <div style="width: 80%;  display: inline-block; ">
                        <span id="spanArea" style="margin-left: 34.15%;" class="dizhi spanContent">{{ person.address }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import qs from 'qs';
    import axios from 'axios';
    import { Toast } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    export default {
        data (){
            return {
                userid:'',
                uuid:'',
                usertype:'',
                person:'',
                passshow:'',//控制修改密码弹窗显示与隐藏
                oldPassword:'',//旧密码
                newPassword:'',//新密码
                confirmPassword:'',//确认密码
                quitShow:false,//控制离职按钮的显示与隐藏
            }
        },
        created(){
//            this.userid=this.$cookie.get("uid");
//            this.uuid=this.$cookie.get("uuid");
            this.userid=this.$route.params.userid;
            this.uuid=this.$route.params.uuid;
            this.usertype=this.$route.params.utype;
            if(this.usertype){
                this.quitShow=true;
            }else{
                this.quitShow=false;
            }
            Indicator.open('加载中...');
            this.getPerson();
        },
        methods:{
            //获取用户信息
            getPerson(){
                axios.get(host+'/app/getuserinfo?userid='+this.userid,{

                }).then(response=>{
//                    console.log(response.data.data);
                    if(response.data.data != ""){
                        Indicator.close();
                        this.person=response.data.data;
                    }

                }).catch(function(err){
                   Toast("操作失败");
                });
            },
            //点击离职弹出确认框
            lizhi(){
                MessageBox({
                    'message':'是否确定要离职?',
                    'title':'离职申请',
                    'showCancelButton':true,
                }).then(action => {
                    if(action=='confirm'){
                        //离职确定之后，调用离职接口
                        this.lizhiSure();
                    }
                });
            },
            //离职接口
            lizhiSure(){
                axios.get(host+"/app/dimissionuser?userid="+this.userid+"&uuid="+this.uuid,{

                }).then(response=>{
                    console.log(response);
                    if(response.status == "200"){
//                        MessageBox({
//                            'message':response.data.data.message,
//                            'title':'申请结果',
//                            'showCancelButton':true,
//                        })
                            if(response.data.data.code=="200"){
                                Toast(response.data.data.message);
                            }else if(response.data.data.code=="400"){
                                Toast(response.data.data.message);
                            }else{
                                Toast("操作失败");
                            }
//                        $.each(data,function(index,info){
//                            $('.main').hide();
//                            mask.close();
//                            /*$('#spanResoult').html(info.message);
//                             $('#msgResoult').show();*/
//                            mui.confirm(info.message,'申请结果',['确认','取消'],'','');
////							mui.toast(info.message,{ duration:'short', type:'div' })
//                        })
                    }
                }).catch(function(err){
                   Toast("操作失败");
                });
            },
            //点击修改密码
            alertPass(){
                this.passshow=true;
            },
            editPass(){
                //判断新密码与确认密码是否一致
                if(this.newPassword != this.confirmPassword){
                    Toast("新密码与确认密码不一致，请重新输入");
                    this.confirmPassword="";
                    return false;
                }
                //判断新密码与旧密码是否一致
                if(this.newPassword == this.oldPassword){
                    Toast("新密码与旧密码一致，请修改");
                    this.newPassword="";
                    this.confirmPassword="";
                    return false;
                }
                //请求接口修改密码
                axios.get(host+"/app/resetpass?userid="+this.userid+"&newpass="+this.newPassword+"&oldpass="+this.oldPassword+"&uuid="+this.uuid,{

                }).then(response=>{
                    if(response.status=="200"){
                        if(response.data.data.code=="200"){
                            Toast(response.data.data.message);
                            this.newPassword='';
                            this.oldPassword='';
                            this.confirmPassword="";
                        }else if(response.data.data.code=="400"){
                            Toast(response.data.data.message);
                        }else{
                            Toast("操作失败");
                        }
                    }else{
                        Toast("操作失败");
                    }
                    this.passshow=false;
                }).catch(function(err){
                    Toast("操作失败");
                })
            },
        },
        components:{

        },
    }
</script>

<style scoped>
    @import  "../../assets/css/syn.css";
    @import  "../../assets/css/reset.css";
    @import  "../../assets/css/loadingSyn.css";

    .sure{
        width: 45%;
        height: 40px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        border-radius: 0.3rem;
        background: #fabf37;
        line-height: 40px;
        border: 0.5px solid #e5e5e5;
        font-weight: bold;
    }
    .topBar{
        height: 44px;
        text-align: center;
        font-size: 18px;
        font-family: "微软雅黑";
        font-weight: bold;
        line-height: 44px;
        background: white;
        border-bottom: 0.5px solid #efefef;
    }
    .topBar>span{
        font-size: 17px;
        position: fixed;
        right: 15px;
        font-weight: 300;
        z-index: 4;
    }
    .topWode{
        background: white;
        height: 148px;
        padding-top: 14px;
        padding-left: 8%;
    }
    .imgHead{
        width: 28%;
        height: 119px;
    }
    .contentUl{
        display: inline-block;
        margin-left: 4.5%;
    }
    .contentli{
        margin-top: 15px;
    }
    .contentName{
        margin-top: 19px;
        font-size: 16px;
        font-family: "微软雅黑";
        color: #333333;
    }
    .contentType{
        margin-top: 19px;
        font-size: 12px;
        color: #666666;
        font-family: "微软雅黑";
    }
    .imgType{
        width: 12px;
        height: 12px;
        margin-top: 5px;
    }
    .spanType{
        font-size: 12px;
        color: #333333;

    }
    .btnTop{
        width: 39.29%;
        height: 21px;
        line-height: 21px;
        display: inline-block;
        font-family: "微软雅黑";
        font-size: 12px;
    }

    .rowLine{
        width: 1px;
        height: 12px;
        background: #666666;
        vertical-align: middle;
        display: inline-block;
        margin-left: 8.28%;
    }
    .wodeTop{
        margin-top: 9px;
        background: white;
        padding: 0 8%;
    }
    .wodeTop>ul>li{
        height: 39px;
        border-bottom: 0.5px solid #efefef;
        line-height: 39px;
    }
    .wodeTop span{
        font-size: 14px;
        font-family: "微软雅黑";
    }

    .xibaoTopBar{
        width: 100%;
        height: 55px;
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
        margin-top: 12px;
    }
    .mui-backdrop {
        z-index: 2;
    }
    .modleWait{
        width: 85.3%;
        height: 202.5px;
        position: fixed;
        top: 200px;
        left: 7.35%;
        background-color: #f9f9f9;
        border-radius: 0.3rem;
        overflow: auto;
        /*display: none;*/
        z-index: 10;
        font-family: "微软雅黑";
    }
    .modleChane{
        width: 85.3%;
        height: 263px;
        position: fixed;
        top: 50px;
        left: 7.35%;
        background-color: #f9f9f9;
        border-radius: 0.3rem;
        overflow: auto;
        /*display: none;*/
        z-index: 10;
        font-family: "微软雅黑";
    }
    .modleMsg{
        width: 85.3%;
        height: 202.5px;
        position: fixed;
        top: 200px;
        left: 7.35%;
        background-color: #f9f9f9;
        border-radius: 0.3rem;
        overflow: auto;
        /*display: none;*/
        z-index: 10;
        font-family: "微软雅黑";
    }

    .waitMessage{
        text-align: center;
        margin-top: 32px;
    }
    .waitMessage>span{
        color: #666666;
        font-size: 16px;
    }
    .waitBtn{
        padding: 0 45px;
        float: inherit;
        margin-top: 45px;
    }
    .changeBtn{
        padding: 0 45px;
        float: inherit;
        margin-top: 14px;
    }
    .changeBtn>div{
        width: 45%;
        height: 40px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        border-radius: 0.3rem;
        background: #fabf37;
        line-height: 40px;
        border: 0.5px solid #e5e5e5;
        font-weight: bold;
    }
    .waitBtn>div{
        width: 45%;
        height: 40px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        border-radius: 0.3rem;
        background: #fabf37;
        line-height: 40px;
        border: 0.5px solid #e5e5e5;
        font-weight: bold;
    }
    .changeUl{
        padding-left: 10%;
    }
    .changeUl>li{
        margin-top: 12px;
        height: 33px;
        line-height: 33px;
    }
    .changeUl>li>span{
        font-size: 16px;
        font-family: "微软雅黑";
        color: #999999;

    }
    .changeUl>li>input{
        width: 53.4%;
        padding: 0;
        margin-bottom: 0;
        height: 33px;
        margin-left: 5%;
    }
    .dizhi{
        width: 80%;
        text-overflow: ellipsis;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
    }
    .titleSpan{
        width: 70px;
        display: inline-block;
        /*text-align: -webkit-right;*/
    }
    .spanContent{
        margin-left: 13.3%;
        vertical-align: middle;
    }
</style>