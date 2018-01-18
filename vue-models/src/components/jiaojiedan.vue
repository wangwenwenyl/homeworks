<template>
  <div id="appjiaojiedan" style="text-align: center;overflow-Y:scroll;" >
		<form id="receipt" action="" style="">
		<div class="iterm">
			<label for="">客源编号：</label>
			<input type="text" name="touristnum" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.touristnum"/>
		</div>
		<div class="iterm">
			<label for="">合同编号：</label>
			<input type="text" name="contractnum" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.contractnum" />
		</div>
		<div class="iterm">
			<label for="">台账号：</label>
			<input type="text" name="ledgernum" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.ledgernum" />
		</div>
		<div class="iterm">
			<label for="">店长姓名：</label>
			<input type="text" name="shopownername" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.shopownername"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="shopownerphone" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.shopownerphone"/>
		</div>
		<div class="iterm">
			<label for="">业务姓名：</label>
			<input type="text" name="clerkname" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.clerkname"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="clerkphone" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.clerkphone"/>
		</div>
		<div class="iterm">
			<label for="">客户姓名：</label>
			<input type="text" name="custname" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.custname"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="custphone" class="word5" v-bind:disabled="showor" value="***********" />
			<!--<input type="text" name="custphone" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.custphone" />-->
		</div>
		<div class="iterm">
			<label for="">贷款额：</label>
			<input type="text" name="loanamount" class="word5" id="loanamount" style="width:57% !important;" v-bind:disabled="showor" :value="jiaojiedanall.loanamount"/>万元
		</div>
		<div class="iterm">
			<label for="">申请银行：</label>
			<input type="text" name="bankname" class="word5" id="bankname" v-bind:disabled="showor" :value="jiaojiedanall.bankname"/>
		</div>
		<div class="iterm">
			<label for="">支行：</label>
			<input type="text" name="bankbranch" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.bankbranch"/>
		</div>
		<div class="iterm">
			<label for="">客户经理：</label>
			<input type="text" name="accountmanagername" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.accountmanagername"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="accountmanagerphone" class="word5" v-bind:disabled="showor" :value="jiaojiedanall.accountmanagerphone"/>
		</div>
		<div class="iterm">
			<label for="">物业地址：</label>
			<input type="text" name="propertyaddr" class="word5" v-bind:disabled="showor"  :value="jiaojiedanall.propertyaddr"/>
		</div>
		<div class="iterm" style="position: relative;">
			<label for="">贷款类型：</label>
			<input type="text"  name="loantype" class="word5  daikuan" id="loantype" readonly disabled="disabled" :value="jiaojiedanall.loantype"/>
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog1">></div>
			<div style="display:none;" class="tog1-content">
				<span class="single">个人消费<input type="radio" daikuaninfo="个人消费" name="daikuan" class="single-value daikuan1" value="个人消费"/></span>
				<span class="single">个人经营<input type="radio" daikuaninfo="个人经营" name="daikuan" class="single-value daikuan2" value="个人经营"/></span>
				<span class="single">公司经营 <input type="radio" daikuaninfo="公司经营" name="daikuan" class="single-value daikuan3" value="公司经营"/></span>
				<span class="single">信用 <input type="radio" daikuaninfo="信用" name="daikuan" class="single-value daikuan4" value="信用"/></span>
			</div>
		</div>
		<div class="iterm" style="position: relative;">
			<label for="" style="width:115px;">是否银行面签：</label>
			<input type="text" class="word6" name="banksigned"  disabled="disabled" :value="jiaojiedanall.banksigned==0?'否':'是'" />
			<input type="hidden"  class="word6 mianqian" readonly disabled="disabled"/>
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog2">></div>
			<div style="display:none;" class="tog2-content">
				<span class="single">是<input type="radio" mianinfo="1" name="mianqian" class="single-value mianqianyes" /></span>
				<span class="single">否<input type="radio" mianinfo="0" name="mianqian" class="single-value mianqianno"/></span>
			</div>
		</div>
		<div class="iterm">
			<label for="">面签时间：</label>
			<input type="date" name="banksignedtime" class="word5"  :value="jiaojiedanall.banksignedtime"/>
		</div>
		<div class="iterm" style="position: relative;">
			<label for="" style="width:115px;">是否已报评估：</label>
			<input type="text" name="evaluated" :value="jiaojiedanall.evaluated==0?'否':'是'" />
			<input type="hidden"  class="word6 pinggu" readonly disabled="disabled"/>
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog3">></div>
			<div style="display:none;" class="tog3-content">
				<span class="single">是<input type="radio" info="1" name="pinggu" class="single-value pingguyes" /></span>
				<span class="single">否<input type="radio" info="0" name="pinggu" class="single-value pingguno" /></span>
			</div>
		</div>
		<div class="iterm">
			<label for="">评估值：</label>
			<input type="text" name="evaluationvalue" class="word5" style="width:57% !important;" :value="jiaojiedanall.evaluationvalue" />万元
		</div>
		<div class="iterm">
			<label for="">定金金额：</label>
			<input type="text" name="depositamount" class="word5" style="width:59% !important;" :value="jiaojiedanall.depositamount"/>元
		</div>
		<div class="iterm">
			<label for="">服务费金额：</label>
			<input type="text" name="servicecharge" class="word5" style="width:59% !important;" :value="jiaojiedanall.servicecharge"/>元
		</div>
		<div class="iterm" style="margin-bottom:15px;position: relative;">
			<label for="">收费时段：</label>
			<input type="text" name="chargeperiod" :value="jiaojiedanall.chargeperiod==1?'已收':jiaojiedanall.chargeperiod==2?'批贷':'放款'" />
			<input type="hidden"  class="word5 shoufei" readonly disabled="disabled" />
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog4">></div>
			<div style="display:none;" class="tog4-content">
				<span class="single">已收<input type="radio"  shoufeiinfo="1" name="shoufei" class="single-value shoufei1" /></span>
				<span class="single">批贷<input type="radio"  shoufeiinfo="2" name="shoufei" class="single-value shoufei2" /></span>
				<span class="single">放款<input type="radio"  shoufeiinfo="3" name="shoufei" class="single-value shoufei3" /></span>
			</div>
		</div>
		<div style="background:#efefef;height:10px;"></div>
		<div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">借款人姓名：</label>
				<input type="text" name="borrowername" style="width:65%;" v-bind:disabled="true" :value="jiaojiedanall.borrowername" />
			</div>
			<div class="iterm">
				<label for=""  style="width:140px;">借款人所需材料清单：</label>
				 <div class="choose" id="loan-person" style="display: none;">选择</div>
				 <!--<div class="page-popup">-->
					 <!--<div class="page-popup-wrapper">-->
						<!--<mt-button @click.native="popupVisible1 = true" size="large" ref="button">中部弹出 popup</mt-button>-->
					<!--</div>-->
					<!--<mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" >-->
						<!--<h1>popup</h1>-->
						<!--<p>/ ˈpɑpˌʌp /</p>-->
						<!--<p>n. 弹出式; [棒]内野飞球; 自动起跳式装置</p>-->
						<!--<p>adj. 弹起的; 有自动起跳装置的</p>-->
					<!--</mt-popup>-->
				 <!--</div>-->
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail loan-person">
						<input type="hidden" name="borrowermaterial" :value="jiaojiedanall.borrowermaterial" />
						<span  class="material-iterm" >{{jiaojiedanall.borrowermaterial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="borrowerothermaterial" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.borrowerothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="borrowerspousename" style="width:65%;" v-bind:disabled="true"  :value="jiaojiedanall.borrowerspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="loan-mate" style="display: none;">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail loan-mate">
						<input type="hidden" name="borrowerspousematerial"/>
							<span  class="material-iterm" >{{jiaojiedanall.borrowerspousematerial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="borrowerspouseothermaterial" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.borrowerspouseothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="" style="width:115px;">共同借款人姓名：</label>
				<input type="text" name="commonborrowername" style="width:56%;" v-bind:disabled="true" :value="jiaojiedanall.commonborrowername"/>
			</div>
			<div class="iterm">
				<label for="" style="width:170px;">共同借款人所需材料清单：</label>
				<div class="choose" id="common-loan" style="display: none;">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail common-loan">
						<input type="hidden" name="commonborrowermaterial"/>
						<span  class="material-iterm" >{{jiaojiedanall.commonborrowermaterial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="commonborrowerothermaterial" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.commonborrowerothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="commonborrowerspousename" style="width:65%;" v-bind:disabled="true" :value="jiaojiedanall.commonborrowerspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="common-loan-mate" style="display: none;">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail common-loan-mate">
						<input type="hidden" name="commonborrowerspousematerial"/>
						<span  class="material-iterm">{{jiaojiedanall.commonborrowerspousematerial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="commonborrowerspouseothermaterial" style="width:70%;" v-bind:disabled="true"  :value="jiaojiedanall.commonborrowerspouseothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">抵押人姓名：</label>
				<input type="text" name="mortgagorname" style="width:65%;" v-bind:disabled="true" :value="jiaojiedanall.mortgagorname"/>
			</div>
			<div class="iterm">
				<label for="" style="width:140px;">抵押人所需材料清单：</label>
				<div class="choose" id="pledge" style="display: none;">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail pledge">
						<input type="hidden" name="mortgagormaterial"/>
						<span  class="material-iterm" >{{jiaojiedanall.mortgagormaterial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="mortgagorothermaterial" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.mortgagorothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="mortgagorspousename" style="width:65%;" v-bind:disabled="true" :value="jiaojiedanall.mortgagorspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="pledge-mate" style="display: none;">选择</div>
			</div>
			<div class="iterm" style="margin-bottom:15px;">
				<div class="material-box">
					<div class="material-detail pledge-mate">
						<input type="hidden" name="mortgagorspousematerial"/>
						<span  class="material-iterm" >{{jiaojiedanall.mortgagorspousematerial}}</span>
					</div>
					<label for="">其他：</label>
					<input type="text" name="mortgagorspouseothermaterial" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.mortgagorspouseothermaterial" />
				</div>
			</div>
		</div>
		<div style="background:#efefef;height:10px;"></div>
		<div>
			<div class="iterm" style="margin-top:10px;">
				<label for="" style="width:130px;">公司所需材料清单：</label>
				<div class="choose" id="commpany" style="display: none;">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail commpany">
						<input type="hidden" name="companymaterial" />
						<span  class="material-iterm" >{{jiaojiedanall.companymaterial}}</span>
					</div>
					<label for="">备注：</label>
					<input type="text" name="remarks" style="width:70%;" v-bind:disabled="true" :value="jiaojiedanall.remarks"/>
				</div>
			</div>
		</div>
		<div class="iterm" id="qianzi" style="display:none;">
			<label for="" style="width:100px;" class="qianZiRole">业务经理签字：</label>
			<input type="text" name="managersign" style="width:61%;" v-bind:disabled="true"  :value="jiaojiedanall.managersign"/>
		</div>
		<div class="iterm">
			<label for="">日期：</label>
			<input type="date" name="managersigndate" style="width:66%;" :value="jiaojiedanall.managersigndate" />
		</div>
		<div class="big-save" v-show="showsave">
        	保存
    	</div>
	</form>
  </div>
</template>
<script>
import { popup } from 'mint-ui';
export default {
  data () {
  return {
		  popupVisible1: false,
    }
  },
  methods:{
	    openAlert() {
        MessageBox.alert('操作成功!', '提示');
      },
  },
  mounted:function(){

  },
  props:["jiaojiedanall","showor","showsave"],
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
