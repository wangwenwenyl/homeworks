<template>
  <div id="appdiyadaicontract" style="text-align: center;overflow-Y:scroll;" >
		<form id="contract" action="" >
			<input type="hidden"  name="contractId" />
			<div class="iterm">
				<label for="" style="width:115px;">委托方（甲方）：</label>
				<input type="text" name="custName" class="word6" disabled id="clientName" :value="diyadaiall.custName"/>
			</div>
			<div class="iterm">
				<label for="">身份证号码：</label>
				<input type="text" name="custNum" class="word5" disabled  id="cardId" :value="diyadaiall.custNum"/>
			</div>
			<div class="iterm">
				<label for="">联系电话：</label>
				<input type="text" name="custPhone" class="word5"  disabled  value="***********"/>
				<!--<input type="text" name="custPhone" class="word5"  disabled  :value="diyadaiall.custPhone"/>-->
			</div>
			<div class="iterm">
				<label for="">紧急联系人：</label>
				<input type="text"  name="emergencyContact" class="word5"  disabled :value="diyadaiall.emergencyContact"/>
			</div>
			<div class="iterm">
				<label for="">联系电话：</label>
				<input type="text" name="emergencyContactPhone"  disabled class="word5" value="***********"/>
				<!--<input type="text" name="emergencyContactPhone"  disabled class="word5" :value="diyadaiall.emergencyContactPhone"/>-->
			</div>
			<div class="iterm">
				<label for="">家庭住址：</label>
				<input type="text" name="custAddress" disabled class="word5" :value="diyadaiall.custAddress"/>
			</div>
			<div class="iterm">
				<label for="">电子邮箱：</label>
				<input type="text" name="custEmail" disabled class="word5" :value="diyadaiall.custEmail"/>
			</div>
			<div class="iterm">
				<label for="" style="width:115px;">受托方（乙方）：</label>
				<input type="text"  class="word6"  disabled  value="北京鸿诚祥兆投资担保有限公司"/>
			</div>
			<div class="iterm">
				<label for="">注册地址：</label>
				<input type="text" class="word5"  disabled value="北京市朝阳区延静西里2号华商大厦1311"/>
			</div>
			<div class="iterm">
				<label for="">经办人：</label>
				<input type="text" name="clerkName"  disabled class="word5" :value="diyadaiall.clerkName"/>
			</div>
			<div class="iterm">
				<label for="">联系电话：</label>
				<input type="text" name="clerkPhone" disabled class="word5" :value="diyadaiall.clerkPhone"/>
			</div>
			<div class="iterm">
				<label for="">业务邮箱：</label>
				<input type="text" name="clerkEmail"  disabled class="word5" :value="diyadaiall.clerkEmail"/>
			</div>
			<div class="iterm">
				<!--甲方需向放款银行申请用于 <input type="text" style="width:50%;"/>的房屋抵押贷款<br/>-->
				抵押标的物的表述：<input  disabled type="text" name="mortgageDescription" style="width:100%;" :value="diyadaiall.mortgageDescription"/><br/>
				房屋所有权证号：<input disabled type="text" name="propertyCertificateNum" style="width:60%;" :value="diyadaiall.propertyCertificateNum"/><br/>
				土地所有权证号：<input  disabled type="text" name="landCertificateNum" style="width:60%;" :value="diyadaiall.landCertificateNum"/><br/>
				甲方保证对此抵押标的物拥有合法处置权,<input  disabled type="radio"  name="mortgagesituation" disabled  class="mortgagesituation1" :checked="diyadaiall.mortgagesituation ? false : 'checked'"/>无抵押 <input  v-bind:disabled="true" type="radio" name="mortgagesituation" disabled class="mortgagesituation2" :checked="diyadaiall.mortgagesituation ? 'checked' :false"/>有抵押（<input  v-bind:disabled="true" type="text" name="mortgageBank" style="width:50%;" :value="diyadaiall.mortgageBank"/>
				银行抵押人民币 <input name="mortgageAmount" type="text" style="width:50%;" :value="diyadaiall.mortgageAmount"/>万元）
			   。<br/>
				甲方按照批贷额百分之 <input  disabled type="text" name="point" style="width:20%;text-align: center;" :value="diyadaiall.point"/>向乙方支付服务费，
				甲方向乙方支付委托定金：<input disabled type="text" name="depositAmount" style="width:33%;" :value="diyadaiall.depositAmount"/>元。 <br/>
				通过银行内部审批程序后<input  disabled type="text" name="paymentTime" style="width:16%;text-align: center;" :value="diyadaiall.paymentTime"/>日內，甲方一次性支付剩余服务费。<br/>
			</div>
			<div class="iterm">
				<label for="" style="vertical-align: top;">甲方：</label>
				<!--<input type="text" name="custSignature1" class="word5"/>-->
				<img :src="diyadaiall.custSignature1" id="custSignature1" style="width:40%;height:50px;" alt=""/>
			</div>
			<div class="iterm" style="margin-bottom:15px;">
				<label for="">签约时间：</label>
				<input  disabled type="date" name="contractDate1" class="word5" :value="diyadaiall.contractDate1"/>
			</div>
			<div class="iterm">
				<label for="">乙方：</label>
				<input  disabled type="text" class="word5" value="北京鸿诚祥兆投资担保有限公司"/>
			</div>
			<div class="iterm" style="margin-bottom:15px;">
				<label for="">签约时间：</label>
				<input disabled type="date" name="custSignatureDate1" class="word5" :value="diyadaiall.custSignatureDate1"/>
			</div>
			<div class="iterm">
				<label for="" style="vertical-align: top;">委托方签字：</label>
				<img :src="diyadaiall.remindsuresign" id="custSignature2" style="width:40%;height:50px;" alt=""/>
				<!--<img :src="diyadaiall.custSignature2" id="custSignature2" style="width:40%;height:50px;" alt=""/>-->
			</div>
			<div class="iterm" style="margin-bottom:15px;">
				<label for="">日期：</label>
				<input  disabled type="date" name="remindsuredate" class="word5" :value="diyadaiall.remindsuredate"/>
			</div>
			<div style="background:#efefef;height:10px;"></div>
			<div class="iterm" style="color:#333;font-size:16px;margin-top:10px;">
				授权委托书
			</div>
			<div class="iterm">
				<label for="">委托人：</label>
				<input  disabled type="text" name="custName" class="word5" :value="diyadaiall.custName"/>
			</div>
			<div class="iterm">
				<label for="">身份证号：</label>
				<input   disabled type="text" name="custNum" class="word5" :value="diyadaiall.custNum"/>
			</div>
			<div class="iterm">
				<label for="">住址：</label>
				<input  disabled type="text" name="custAddress" class="word5" :value="diyadaiall.custAddress"/>
			</div>
			<div class="iterm">
				<label for="">联系电话：</label>
				<input  disabled type="text" name="custPhone" class="word5" :value="diyadaiall.custPhone"/>
			</div>
			<div class="iterm">
				委托人于 <input  disabled type="date" name="delegateTime" style="width:50%;" :value="diyadaiall.delegateTime"/>与受托人签订《房屋抵押贷款委托协议》
			</div>
			<div class="iterm">
				<label for="">合同编号：</label>
				<input  disabled type="text" name="contractnum" class="word5" :value="diyadaiall.contractnum"/>
			</div>
			<div class="iterm">
				委托期限：自 <input disabled type="date" name="delegateTime2" style="width:40%;" :value="diyadaiall.delegateTime2"/>始至通过银行内部审批手续之日止
			</div>
			<div class="iterm">
				<label for="" style="vertical-align: top;">受权人：</label>
				<!--<input type="text" class="word5"/>-->
				<img :src="diyadaiall.custSignature3" id="custSignature3" alt="" style="width:40%;height:50px;" />
			</div>
			<div class="iterm">
				<label for="">日期：</label>
				<input  disabled type="date" name="delegateTime3" class="word5" :value="diyadaiall.delegateTime3"/>
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
  props:["diyadaiall"]
}
</script>
 <style scoped>
		@import "../assets/css/contract.css";
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
