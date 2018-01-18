<template>
  <div id="appdiyadaicontract" style="text-align: center;overflow-Y:scroll;">
		 <form id="contract" action="" style="">
        <div id="normal">
            <input  v-bind:disabled="true" type="hidden" name="loanType"/>
            <input  v-bind:disabled="true" type="hidden" name="contractId"/>
            <div class="iterm">
                <label for="" style="width:115px;">委托方（甲方）：</label>
                <input  v-bind:disabled="true" type="text" name="custName" class="word6" id="clientName" :value="xinyongdaiall.custName"/>
            </div>
            <div class="iterm">
                <label for="">身份证号码：</label>
                <input  v-bind:disabled="true" type="text" name="custNum" class="word5" id="cardId" :value="xinyongdaiall.custNum"/>
            </div>
            <div class="iterm">
                <label for="">联系电话：</label>
                <!--<input  v-bind:disabled="true" type="text" name="custPhone" class="word5" value="***********"/>-->
                <input  v-bind:disabled="true" type="text" name="custPhone" class="word5" :value="xinyongdaiall.custPhone"/>
            </div>
            <div class="iterm">
                <label for="">紧急联系人：</label>
                <input  v-bind:disabled="true" type="text" name="emergencyContact" class="word5" :value="xinyongdaiall.emergencyContact"/>
            </div>
            <div class="iterm">
                <label for="">联系电话：</label>
                <!--<input  v-bind:disabled="true" type="text" name="emergencyContactPhone" class="word5" value="***********"/>-->
                <input  v-bind:disabled="true" type="text" name="emergencyContactPhone" class="word5" :value="xinyongdaiall.emergencyContactPhone"/>
            </div>
            <div class="iterm">
                <label for="">家庭住址：</label>
                <input  v-bind:disabled="true" type="text" name="custAddress" class="word5" :value="xinyongdaiall.custAddress"/>
            </div>
            <div class="iterm">
                <label for="">电子邮箱：</label>
                <input  v-bind:disabled="true" type="text" name="custEmail" class="word5" :value="xinyongdaiall.custEmail"/>
            </div>
            <div class="iterm">
                <label for="" style="width:115px;">受托方（乙方）：</label>
                <input  v-bind:disabled="true" type="text" class="word6" value="北京鸿诚祥兆投资担保有限公司"/>
            </div>
            <div class="iterm">
                <label for="">注册地址：</label>
                <input  v-bind:disabled="true" type="text" class="word5" value="北京市朝阳区延静西里2号华商大厦1311"/>
            </div>
            <div class="iterm">
                <label for="">经办人：</label>
                <input  v-bind:disabled="true" type="text" name="clerkName" class="word5" :value="xinyongdaiall.clerkName"/>
            </div>
            <div class="iterm">
                <label for="">联系电话：</label>
                <input  v-bind:disabled="true" type="text" name="clerkPhone" class="word5" :value="xinyongdaiall.clerkPhone"/>
            </div>
            <div class="iterm">
                <label for="">业务邮箱：</label>
                <input  v-bind:disabled="true" type="text" name="clerkEmail" class="word5" :value="xinyongdaiall.clerkEmail"/>
            </div>
        </div>
        <div id="xinyong">
            <div class="iterm">
                <!--借款申请人向 <input  v-bind:disabled="true" type="text" name="bankName" style="width:50%;"/>银行申请以获得贷款。<br/>-->
                <!--甲方需向放款银行申请用于：<input  v-bind:disabled="true" type="text" name="loanType" style="width:83%;"/>贷款。<br/>-->
                甲方按照批贷额百分之 <input  v-bind:disabled="true" :value="xinyongdaiall.point" type="text" name="point" style="width:20%;text-align: center;"/>向乙方支付服务费，共计金额：
                <input  v-bind:disabled="true" type="text" name="totalAmount" style="width:43%;" :value="xinyongdaiall.totalAmount"/><br/>
                支付乙方服务费：<input  v-bind:disabled="true" type="text" name="onceAmount" style="width:55%;" :value="xinyongdaiall.onceAmount"/><br/>
                甲方向乙方支付委托定金：<input  v-bind:disabled="true" type="text" name="depositAmount" style="width:33%;" :value="xinyongdaiall.depositAmount"/> <br/>
                审批手续 <input  v-bind:disabled="true" type="text" name="paymentTime" style="width:16%;text-align: center;" :value="xinyongdaiall.paymentTime"/>日內，甲方一次性支付剩余服务费。<br/>
            </div>
            <div class="iterm">
                <label for="" style="vertical-align: top;">甲方：</label>
                <!--<input  v-bind:disabled="true" type="text" name="trusteeSignature" class="word5"/>-->
                <img :src="xinyongdaiall.custSignature1" alt="" id="trusteeSignature" style="width:40%;height:50px;"/>
            </div>
            <div class="iterm">
                <label for="">乙方：</label>
                <input  v-bind:disabled="true" type="text" class="word5" value="北京鸿诚祥兆投资担保有限公司" />
            </div>
            <div class="iterm" style="margin-bottom:15px;">
                <label for="">签约时间：</label>
                <!--<input  v-bind:disabled="true" type="date" name="remindsuredate" class="word5"/>-->
                <input  v-bind:disabled="true" type="date" name="contractdate1" class="word5" :value="xinyongdaiall.contractdate1"/>
            </div>
        </div>
        <div id="shouquan" action="">
            <div style="background:#efefef;height:10px;"></div>
            <div class="iterm" style="color:#333;font-size:16px;margin-top:10px;">
                授权委托书
            </div>
            <div class="iterm">
                <label for="">委托人：</label>
                <input  v-bind:disabled="true" type="text" name="custName" class="word5" :value="xinyongdaiall.custName"/>
            </div>
            <div class="iterm">
                <label for="">身份证号：</label>
                <input  v-bind:disabled="true" type="text" name="custNum" class="word5" :value="xinyongdaiall.custNum"/>
            </div>
            <div class="iterm">
                <label for="">住址：</label>
                <input  v-bind:disabled="true" type="text" name="custAddress" class="word5" :value="xinyongdaiall.custAddress"/>
            </div>
            <div class="iterm">
                <label for="">联系电话：</label>
                <input  v-bind:disabled="true" type="text" name="custPhone" class="word5" :value="xinyongdaiall.custPhone"/>
            </div>
            <div class="iterm">
                委托人于 <input  v-bind:disabled="true" type="date" name="delegateTime" style="width:50%;" :value="xinyongdaiall.delegateTime"/>与受托人签订《无抵押贷款委托合同》
            </div>
            <div class="iterm">
                <label for="">合同编号：</label>
                <input  v-bind:disabled="true" type="text" name="contractnum" class="word5" :value="xinyongdaiall.contractnum"/>
            </div>
            <div class="iterm">
                委托期限：自 <input  v-bind:disabled="true" type="date" name="delegateTime2" style="width:40%;" :value="xinyongdaiall.delegateTime2"/>始至通过银行内部审批手续之日止
            </div>
            <div class="iterm">
                <label for="" style="vertical-align: top;">受权人：</label>
                <!--<input  v-bind:disabled="true" type="text" name="salesman" class="word5"/>-->
                <img :src="xinyongdaiall.custSignature3" id="custSignature3" alt="" style="width:40%;height:50px;"/>
            </div>
            <div class="iterm">
                <label for="">日期：</label>
                <input  v-bind:disabled="true" type="date" name="delegateTime3" class="word5" :value="xinyongdaiall.delegateTime3"/>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
  props:["xinyongdaiall"]
}
</script>
 <style scoped>
		@import "../../assets/css/contract.css";
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
