<template>
  <div id="appjiaojiedan" style="text-align: center;overflow-Y:scroll;" >
		<form id="receipt" action="" style="">
		<div class="iterm">
			<label for="">客源编号：</label>
			<input type="text" name="touristnum" class="word5" v-bind:disabled="showor" v-model="jiaojiedanall.touristnum"/>
		</div>
		<div class="iterm">
			<label for="">合同编号：</label>
			<input type="text" name="contractnum" class="word5" v-bind:disabled="showor"  v-model="jiaojiedanall.contractnum" />
		</div>
		<div class="iterm">
			<label for="">台账号：</label>
			<input type="text" name="ledgernum" class="word5" disabled="disabled" v-model="jiaojiedanall.ledgernum" />
		</div>
		<div class="iterm">
			<label for="">店长姓名：</label>
			<input type="text" name="shopownername" class="word5" v-bind:disabled="showor" v-model="jiaojiedanall.shopownername"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="shopownerphone" class="word5" v-bind:disabled="showor" ref="shopownerphone" v-model="jiaojiedanall.shopownerphone"/>
		</div>
		<div class="iterm">
			<label for="">业务姓名：</label>
			<input type="text" name="clerkname" class="word5" v-bind:disabled="showor" v-model="jiaojiedanall.clerkname"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="clerkphone" class="word5" v-bind:disabled="showor" ref="clerkphone" v-model="jiaojiedanall.clerkphone"/>
		</div>
		<div class="iterm">
			<label for="">客户姓名：</label>
			<input type="text" name="custname" class="word5" v-bind:disabled="showor" v-model="jiaojiedanall.custname"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<!--<input type="text" name="custphone" class="word5" v-bind:disabled="showor" value="***********" />-->
			<input type="text" name="custphone" class="word5" v-bind:disabled="showor" ref="custphone" v-model="jiaojiedanall.custphone" />
		</div>
		<div class="iterm">
			<label for="">贷款额：</label>
			<input type="text" name="loanamount" class="word5" id="loanamount" style="width:57% !important;" v-bind:disabled="showor" ref="loanamount" v-model="jiaojiedanall.loanamount" />万元
		</div>
		<div class="iterm">
			<label for="">申请银行：</label>
			<input type="text" name="bankname" class="word5" id="bankname" v-bind:disabled="showor" ref="bankname" v-model="jiaojiedanall.bankname"/>
		</div>
		<div class="iterm">
			<label for="">支行：</label>
			<input type="text" name="bankbranch" class="word5" v-bind:disabled="showor" v-model="jiaojiedanall.bankbranch"/>
		</div>
		<div class="iterm">
			<label for="">客户经理：</label>
			<input type="text" name="accountmanagername" class="word5" v-bind:disabled="showor"  v-model="jiaojiedanall.accountmanagername"/>
		</div>
		<div class="iterm">
			<label for="">电话：</label>
			<input type="text" name="accountmanagerphone" class="word5" v-bind:disabled="showor" ref="accountmanagerphone" v-model="jiaojiedanall.accountmanagerphone"/>
		</div>
		<div class="iterm">
			<label for="">物业地址：</label>
			<input type="text" name="propertyaddr" class="word5" v-bind:disabled="showor"  v-model="jiaojiedanall.propertyaddr"/>
		</div>
		<div class="iterm" style="position: relative;">
			<label for="">贷款类型：</label>
			<input type="text"  name="loantype" class="word5  daikuan" id="loantype" readonly  disabled="disabled" ref="loantype"  v-model="jiaojiedanall.loantype"/>
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog1" v-on:click="toggle('类型')">></div>
			<div style="display:none;" class="tog1-content" v-show="togbox1">
				<span class="single">个人消费<input type="radio" daikuaninfo="个人消费" name="daikuan" class="single-value daikuan1" v-on:click="toggleContent('个人消费')" value="个人消费"/></span>
				<span class="single">个人经营<input type="radio" daikuaninfo="个人经营" name="daikuan" class="single-value daikuan2" v-on:click="toggleContent('个人经营')" value="个人经营"/></span>
				<span class="single">公司经营 <input type="radio" daikuaninfo="公司经营" name="daikuan" class="single-value daikuan3" v-on:click="toggleContent('公司经营')" value="公司经营"/></span>
				<span class="single">信用 <input type="radio" daikuaninfo="信用" name="daikuan" class="single-value daikuan4" v-on:click="toggleContent('信用')" value="信用"/></span>
			</div>
		</div>
		<div class="iterm" style="position: relative;">
			<label for="" style="width:115px;">是否银行面签：</label>
			<input type="hidden" class="word6" name="banksigned"  disabled="disabled" v-model="jiaojiedanall.banksigned" />
			<input type="text"  class="word6 mianqian" readonly disabled="disabled" :value="jiaojiedanall.banksigned>0?'是':'否'" />
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog2" v-on:click="toggle('面签')">></div>
			<div style="display:none;" class="tog2-content" v-show="togbox2">
				<span class="single">是<input type="radio" mianinfo="1" name="mianqian" v-on:click="toggleContent2('是')" class="single-value mianqianyes" /></span>
				<span class="single">否<input type="radio" mianinfo="0" name="mianqian" v-on:click="toggleContent2('否')" class="single-value mianqianno"/></span>
			</div>
		</div>
		<div class="iterm">
			<label for="">面签时间：</label>
			<input type="date" name="banksignedtime" class="word5"  v-model="jiaojiedanall.banksignedtime"/>
		</div>
      <!--<div class="iterm">-->
          <!--<riqi v-on:date="start" v-bind:title="miandate"></riqi>-->
          <!--<input type="type" name="banksignedtime" class="word5" style="display:none;" v-model="jiaojiedanall.banksignedtime=this.signdatestart"/>-->
      <!--</div>-->
		<div class="iterm" style="position: relative;">
			<label for="" style="width:115px;">是否已报评估：</label>
			<input type="hidden" name="evaluated"  v-model="jiaojiedanall.evaluated" />
			<input type="text"  class="word6 pinggu" readonly disabled="disabled" :value="jiaojiedanall.evaluated==0?'否':'是'"/>
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog3" v-on:click="toggle('评估')">></div>
			<div style="display:none;" class="tog3-content" v-show="togbox3">
				<span class="single">是<input type="radio" info="1" name="pinggu" v-on:click="toggleContent3('是')" class="single-value pingguyes" /></span>
				<span class="single">否<input type="radio" info="0" name="pinggu" v-on:click="toggleContent3('否')" class="single-value pingguno" /></span>
			</div>
		</div>
		<div class="iterm">
			<label for="">评估值：</label>
			<input type="text" name="evaluationvalue" class="word5" style="width:57% !important;" ref="evaluationvalue" v-model="jiaojiedanall.evaluationvalue" />万元
		</div>
		<div class="iterm">
			<label for="">定金金额：</label>
			<!--<input type="text" name="depositamount" class="word5" style="width:59% !important;" ref="dingjin" v-model="dingjin"/>元-->
			<input type="text" name="depositamount" class="word5" style="width:59% !important;" ref="dingjin" v-model="jiaojiedanall.depositamount=this.dingjin"/>元
		</div>
		<div class="iterm">
			<label for="">服务费金额：</label>
			<!--<input type="text" name="servicecharge" class="word5" style="width:59% !important;" ref="fuwufei" v-model="fuwufei"/>元-->
			<input type="text" name="servicecharge" class="word5" style="width:59% !important;" ref="fuwufei" v-model="jiaojiedanall.servicecharge=this.fuwufei"/>元
		</div>
		<div class="iterm" style="margin-bottom:15px;position: relative;">
			<label for="">收费时段：</label>
			<input type="hidden" name="chargeperiod" v-model="jiaojiedanall.chargeperiod" />
			<input type="text"  class="word5 shoufei" readonly disabled="disabled" :value="jiaojiedanall.chargeperiod==1?'已收':jiaojiedanall.chargeperiod==2?'批贷':'放款'" />
			<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog4" v-on:click="toggle('收费')">></div>
			<div style="display:none;" class="tog4-content" v-show="togbox4">
				<span class="single">已收<input type="radio"  shoufeiinfo="1" name="shoufei" v-on:click="toggleContent4('已收')" class="single-value shoufei1" /></span>
				<span class="single">批贷<input type="radio"  shoufeiinfo="2" name="shoufei" v-on:click="toggleContent4('批贷')" class="single-value shoufei2" /></span>
				<span class="single">放款<input type="radio"  shoufeiinfo="3" name="shoufei" v-on:click="toggleContent4('放款')" class="single-value shoufei3" /></span>
			</div>
		</div>
		<div style="background:#efefef;height:10px;"></div>
		<div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">借款人姓名：</label>
				<input type="text" name="borrowername" style="width:65%;" v-bind:disabled="showor" v-model="jiaojiedanall.borrowername" />
			</div>
			<div class="iterm">
				<label for=""  style="width:140px;">借款人所需材料清单：</label>
        <div class="choose" id="loan-person" @click="fun1('材料一')"  v-show="!showor">选择</div>
			</div>
      <div class="dialog1"  v-show="dialog1">
        <div class="dialog-box">
          <div class="dialog-title" style="width:auto;">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content1">
            <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox" name="data1" v-model="arr" value="身份证" /> </div>
            <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" name="data1" v-model="arr" value="户口本"/></div>
            <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" name="data1" v-model="arr" value="结婚证" /></div>
            <div class="dialog-iterm"> <label for="">离婚证</label> <input type="checkbox" name="data1" v-model="arr" value="离婚证" /> </div>
            <div class="dialog-iterm"><label for="">离婚协议书</label> <input type="checkbox" name="data1" v-model="arr" value="离婚协议书"/></div>
            <div class="dialog-iterm"><label for="">法院判决书</label><input type="checkbox" name="data1" v-model="arr" value="法院判决书"/></div>
            <div class="dialog-iterm"><label for="">离婚证明</label><input type="checkbox" name="data1" v-model="arr" value="离婚证明" /></div>
            <div class="dialog-iterm"><label for="">死亡证明</label><input type="checkbox" name="data1" v-model="arr" value="死亡证明"/></div>
            <div class="dialog-iterm"><label for="">从业证明</label><input type="checkbox" name="data1" v-model="arr" value="从业证明"/></div>
            <div class="dialog-iterm"><label for="">收入证明</label><input type="checkbox" name="data1" v-model="arr" value="收入证明"/></div>
            <div class="dialog-iterm"><label for="">非恶意证明</label><input type="checkbox" name="data1" v-model="arr" value="非恶意证明"/></div>
            <div class="dialog-iterm"><label for="">个人银行流水</label><input type="checkbox" name="data1" v-model="arr" value="个人银行流水"/></div>
            <div class="dialog-iterm"><label for="">个人征信报告</label><input type="checkbox" name="data1" v-model="arr" value="个人征信报告"/></div>
            <div class="dialog-iterm"><label for="">原贷款合同</label><input type="checkbox" name="data1" v-model="arr" value="原贷款合同"/></div>
            <div class="dialog-iterm"><label for="">委托公证</label><input type="checkbox" name="data1" v-model="arr" value="委托公证"/></div>
            <div class="dialog-iterm"><label for="">单身证明</label><input type="checkbox" name="data1" v-model="arr" value="单身证明"/></div>
            <div class="dialog-iterm"><label for="">抵贷不一公正</label><input type="checkbox" name="data1" v-model="arr" value="抵贷不一公正"/></div>
            <div class="dialog-iterm"><label for="">用款合同</label><input type="checkbox" name="data1" v-model="arr" value="用款合同"/></div>
          </div>
          <div class="complete-box">
            <div class="complete1" style="color:#fff;" @click="complete('材料一')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail loan-person">
						<input type="hidden" name="borrowermaterial" v-model="jiaojiedanall.borrowermaterial" />
						<span  class="material-iterm" >{{jiaojiedanall.borrowermaterial}}</span>
						<!--<span  class="material-iterm" >{{this.arrstr}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="borrowerothermaterial" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.borrowerothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="borrowerspousename" style="width:65%;" v-bind:disabled="showor"  v-model="jiaojiedanall.borrowerspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="loan-mate" @click="fun1('材料二')"  v-show="!showor">选择</div>
			</div>
      <div class="dialog2" v-show="dialog2">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content2">
              <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox" name="data1" v-model="arr2" value="身份证"/> </div>
              <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" name="data1" v-model="arr2" value="户口本" /></div>
              <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" name="data1" v-model="arr2" value="结婚证"/></div>
              <div class="dialog-iterm"><label for="">收入证明</label><input type="checkbox" name="data1" v-model="arr2" value="收入证明"/></div>
              <div class="dialog-iterm"><label for="">个人银行流水</label><input type="checkbox" name="data1" v-model="arr2" value="个人银行流水"/></div>
              <div class="dialog-iterm"><label for="">非恶意证明</label><input type="checkbox" name="data1" v-model="arr2" value="非恶意证明"/></div>
          </div>
          <div class="complete-box">
            <div class="complete2" style="color:#fff;" @click="complete('材料二')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail loan-mate">
						<input type="hidden" name="borrowerspousematerial" v-model="jiaojiedanall.borrowerspousematerial"/>
							<span  class="material-iterm" >{{jiaojiedanall.borrowerspousematerial}}</span>
							<!--<span  class="material-iterm" >{{this.arrstr2}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="borrowerspouseothermaterial" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.borrowerspouseothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="" style="width:115px;">共同借款人姓名：</label>
				<input type="text" name="commonborrowername" style="width:56%;" v-bind:disabled="showor" v-model="jiaojiedanall.commonborrowername"/>
			</div>
			<div class="iterm">
				<label for="" style="width:170px;">共同借款人所需材料清单：</label>
				<div class="choose" id="common-loan"  @click="fun1('材料三')"  v-show="!showor">选择</div>
			</div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail common-loan">
						<input type="hidden" name="commonborrowermaterial" v-model="jiaojiedanall.commonborrowermaterial"/>
						<span  class="material-iterm" >{{jiaojiedanall.commonborrowermaterial}}</span>
            <!--<span  class="material-iterm" >{{this.arrstr3}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="commonborrowerothermaterial" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.commonborrowerothermaterial"/>
				</div>
			</div>
      <div class="dialog3" v-show="dialog3">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close"   @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content3">
              <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox"  name="data1" v-model="arr3" value="身份证"/> </div>
              <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" name="data1" v-model="arr3" value="户口本"/></div>
              <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" name="data1" v-model="arr3" value="结婚证"/></div>
              <div class="dialog-iterm"> <label for="">离婚证</label> <input type="checkbox" name="data1" v-model="arr3" value="离婚证"/> </div>
              <div class="dialog-iterm"><label for="">离婚协议书</label> <input type="checkbox" name="data1" v-model="arr3" value="离婚协议书"/></div>
              <div class="dialog-iterm"><label for="">法院判决书</label><input type="checkbox" name="data1" v-model="arr3" value="法院判决书"/></div>
              <div class="dialog-iterm"><label for="">离婚证明</label><input type="checkbox" name="data1" v-model="arr3" value="离婚证明"/></div>
              <div class="dialog-iterm"><label for="">死亡证明</label><input type="checkbox" name="data1" v-model="arr3" value="死亡证明"/></div>
              <div class="dialog-iterm"><label for="">放弃遗产公证</label><input type="checkbox" name="data1" v-model="arr3" value="放弃遗产公证" /></div>
              <div class="dialog-iterm"><label for="">从业证明</label><input type="checkbox" name="data1" v-model="arr3" value="从业证明"/></div>
              <div class="dialog-iterm"><label for="">收入证明</label><input type="checkbox" name="data1" v-model="arr3" value="收入证明"/></div>
              <div class="dialog-iterm"><label for="">非恶意证明</label><input type="checkbox" name="data1" v-model="arr3" value="非恶意证明"/></div>
              <div class="dialog-iterm"><label for="">个人银行流水</label><input type="checkbox" name="data1" v-model="arr3" value="个人银行流水"/></div>
              <div class="dialog-iterm"><label for="">个人征信报告</label><input type="checkbox" name="data1" v-model="arr3" value="个人征信报告"/></div>
              <div class="dialog-iterm"><label for="">原贷款合同</label><input type="checkbox" name="data1" v-model="arr3" value="原贷款合同"/></div>
              <div class="dialog-iterm"><label for="">委托公证</label><input type="checkbox" name="data1" v-model="arr3" value="委托公证"/></div>
              <div class="dialog-iterm"><label for="">单身证明</label><input type="checkbox" name="data1" v-model="arr3" value="单身证明"/></div>
              <div class="dialog-iterm"><label for="">抵贷不一公正</label><input type="checkbox" name="data1" v-model="arr3" value="抵贷不一公正" /></div>
              <div class="dialog-iterm"><label for="">用款合同</label><input type="checkbox" name="data1" v-model="arr3" value="用款合同"/></div>
          </div>
          <div class="complete-box">
            <div class="complete3" style="color:#fff;" @click="complete('材料三')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="commonborrowerspousename" style="width:65%;" v-bind:disabled="showor" v-model="jiaojiedanall.commonborrowerspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="common-loan-mate" @click="fun1('材料四')"  v-show="!showor">选择</div>
			</div>
      <div class="dialog4" v-show="dialog4">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content4">
              <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox" name="data1" v-model="arr4" value="身份证" /> </div>
              <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" name="data1" v-model="arr4" value="户口本" /></div>
              <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" name="data1" v-model="arr4" value="结婚证" /></div>
              <div class="dialog-iterm"><label for="">收入证明</label><input type="checkbox" name="data1" v-model="arr4" value="收入证明"/></div>
              <div class="dialog-iterm"><label for="">个人银行流水</label><input type="checkbox" name="data1" v-model="arr4" value="个人银行流水"/></div>
              <div class="dialog-iterm"><label for="">非恶意证明</label><input type="checkbox" name="data1" v-model="arr4" value="非恶意证明" /></div>
          </div>
          <div class="complete-box">
            <div class="complete4" style="color:#fff;"  @click="complete('材料四')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail common-loan-mate">
						<input type="hidden" name="commonborrowerspousematerial" v-model="jiaojiedanall.commonborrowerspousematerial" />
						<span  class="material-iterm">{{jiaojiedanall.commonborrowerspousematerial}}</span>
						<!--<span  class="material-iterm">{{this.arrstr4}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="commonborrowerspouseothermaterial" style="width:70%;" v-bind:disabled="showor"  v-model="jiaojiedanall.commonborrowerspouseothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">抵押人姓名：</label>
				<input type="text" name="mortgagorname" style="width:65%;" v-bind:disabled="showor" v-model="jiaojiedanall.mortgagorname"/>
			</div>
			<div class="iterm">
				<label for="" style="width:140px;">抵押人所需材料清单：</label>
				<div class="choose" id="pledge" @click="fun1('材料五')"  v-show="!showor">选择</div>
			</div>
      <div class="dialog5" v-show="dialog5">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content5">
              <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox" name="data1" v-model="arr5" value="身份证"/> </div>
              <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" name="data1" v-model="arr5" value="户口本"/></div>
              <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" name="data1" v-model="arr5" value="结婚证"/></div>
              <div class="dialog-iterm"> <label for="">离婚证</label> <input type="checkbox" name="data1" v-model="arr5" value="离婚证"/> </div>
              <div class="dialog-iterm"><label for="">离婚协议书</label> <input type="checkbox" name="data1" v-model="arr5" value="离婚协议书"/></div>
              <div class="dialog-iterm"><label for="">法院判决书</label><input type="checkbox" name="data1" v-model="arr5" value="法院判决书"/></div>
              <div class="dialog-iterm"><label for="">单身证明</label><input type="checkbox" name="data1" v-model="arr5" value="单身证明"/></div>
              <div class="dialog-iterm"><label for="">原贷款合同</label><input type="checkbox" name="data1" v-model="arr5" value="原贷款合同"/></div>
              <div class="dialog-iterm"><label for="">委托公证</label><input type="checkbox" name="data1" v-model="arr5" value="委托公证"/></div>
              <div class="dialog-iterm"><label for="">产权类公证</label><input type="checkbox" name="data1" v-model="arr5" value="产权类公证"/></div>
              <div class="dialog-iterm"><label for="">强执公证</label><input type="checkbox" name="data1" v-model="arr5" value="强执公证"/></div>
              <div class="dialog-iterm"><label for="" style="width:100px;">放弃优先购买权</label><input type="checkbox" name="data1" v-model="arr5" value="放弃优先购买权"/></div>
              <div class="dialog-iterm"><label for="">房产证</label><input type="checkbox" name="data1" v-model="arr5" value="房产证"/></div>
              <div class="dialog-iterm"><label for="">原购房合同</label><input type="checkbox" name="data1" v-model="arr5" value="原购房合同"/></div>
              <div class="dialog-iterm"><label for="">原购房发票</label><input type="checkbox" name="data1" v-model="arr5" value="原购房发票"/></div>
              <div class="dialog-iterm" style="width:50%;"><label for="" style="width:115px;">房屋出租情况证明</label><input type="checkbox" name="data1" v-model="arr5"  value="房屋出租情况证明"/></div>
          </div>
          <div class="complete-box">
            <div class="complete5" style="color:#fff;"  @click="complete('材料五')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm">
				<div class="material-box">
					<div class="material-detail pledge">
						<input type="hidden" name="mortgagormaterial" v-model="jiaojiedanall.mortgagormaterial"/>
						<span  class="material-iterm" >{{jiaojiedanall.mortgagormaterial}}</span>
						<!--<span  class="material-iterm" >{{this.arrstr5}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="mortgagorothermaterial" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.mortgagorothermaterial"/>
				</div>
			</div>
			<div class="iterm" style="margin-top:10px;">
				<label for="">配偶姓名：</label>
				<input type="text" name="mortgagorspousename" style="width:65%;" v-bind:disabled="showor" v-model="jiaojiedanall.mortgagorspousename"/>
			</div>
			<div class="iterm">
				<label for="" style="width:130px;">配偶所需材料清单：</label>
				<div class="choose" id="pledge-mate" @click="fun1('材料六')"  v-show="!showor">选择</div>
			</div>
      <div class="dialog6" v-show="dialog6">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content6">
              <div class="dialog-iterm"><label for="">身份证</label> <input type="checkbox" v-model="arr6" value="身份证"/> </div>
              <div class="dialog-iterm"><label for="">户口本</label> <input type="checkbox" v-model="arr6" value="户口本"/></div>
              <div class="dialog-iterm"> <label for="">结婚证</label> <input type="checkbox" v-model="arr6" value="结婚证"/></div>
          </div>
          <div class="complete-box">
            <div class="complete6" style="color:#fff;"  @click="complete('材料六')">
              完成
            </div>
          </div>
        </div>
      </div>
			<div class="iterm" style="margin-bottom:15px;">
				<div class="material-box">
					<div class="material-detail pledge-mate">
						<input type="hidden" name="mortgagorspousematerial" v-model="jiaojiedanall.mortgagorspousematerial"/>
						<span  class="material-iterm" >{{jiaojiedanall.mortgagorspousematerial}}</span>
						<!--<span  class="material-iterm" >{{this.arrstr6}}</span>-->
					</div>
					<label for="">其他：</label>
					<input type="text" name="mortgagorspouseothermaterial" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.mortgagorspouseothermaterial" />
				</div>
			</div>
		</div>
		<div style="background:#efefef;height:10px;"></div>
    <div class="iterm" style="margin-top:10px;">
      <label for="" style="width:130px;">公司所需材料清单：</label>
      <div class="choose" id="commpany" @click="fun1('材料七')" v-show="!showor">选择</div>
    </div>
    <div class="iterm">
      <div class="material-box">
        <div class="material-detail commpany">
          <input type="hidden" name="companymaterial" v-model="jiaojiedanall.companymaterial"/>
          <span  class="material-iterm" >{{jiaojiedanall.companymaterial}}</span>
          <!--<span  class="material-iterm" >{{this.arrstr7}}</span>-->
        </div>
        <label for="">备注：</label>
        <input type="text" name="remarks" style="width:70%;" v-bind:disabled="showor" v-model="jiaojiedanall.remarks"/>
      </div>
    </div>
    <div class="dialog7" v-show="dialog7">
        <div class="dialog-box">
          <div class="dialog-title">
            <span>材料清单</span>
            <div class="close" @click="close">
              &times;
            </div>
          </div>
          <div class="dialog-content7">
              <div class="dialog-iterm"><label for="">营业执照</label> <input type="checkbox" name="data1" v-model="arr7" value="营业执照"/> </div>
              <div class="dialog-iterm"><label for="" style="width:100px;">组织机构代码证</label> <input type="checkbox" name="data1" v-model="arr7" value="组织机构代码证"/></div>
              <div class="dialog-iterm"> <label for="">税务登记证</label> <input type="checkbox" name="data1" v-model="arr7" value="税务登记证"/></div>
              <div class="dialog-iterm"> <label for="">公司章程</label> <input type="checkbox" name="data1" v-model="arr7" value="公司章程"/></div>
              <div class="dialog-iterm"> <label for="">财务报表</label> <input type="checkbox" name="data1" v-model="arr7"  value="财务报表"/></div>
              <div class="dialog-iterm"> <label for="">对公账务流水</label> <input type="checkbox" name="data1" v-model="arr7" value="对公账务流水"/></div>
              <div class="dialog-iterm"> <label for="">审计报告</label> <input type="checkbox" name="data1" v-model="arr7" value="审计报告"/></div>
              <div class="dialog-iterm"> <label for="">历史往来合同</label> <input type="checkbox" name="data1" v-model="arr7" value="历史往来合同"/></div>
              <div class="dialog-iterm"> <label for="">营业场地照片</label> <input type="checkbox" name="data1" v-model="arr7" value="营业场地照片"/></div>
              <div class="dialog-iterm"> <label for="">水电发票</label> <input type="checkbox" name="data1"  v-model="arr7" value="水电发票"/></div>
              <div class="dialog-iterm"> <label for="">纳税凭证</label> <input type="checkbox" name="data1" v-model="arr7" value="纳税凭证"/></div>
              <div class="dialog-iterm"> <label for="">场地证明</label> <input type="checkbox" name="data1" v-model="arr7" value="场地证明"/></div>
              <div class="dialog-iterm"> <label for="">开户许可证</label> <input type="checkbox" name="data1" v-model="arr7" value="开户许可证"/></div>
          </div>
          <div class="complete-box">
            <div class="complete7" style="color:#fff;" @click="complete('材料七')">
              完成
            </div>
          </div>
      </div>
    </div>
		<div class="iterm" id="qianzi" v-show="this.type!='1'">
			<label for="" style="width:100px;" class="qianZiRole">业务经理签字：</label>
			<input type="hidden" name="managersign" style="width:61%;" v-bind:disabled="showor"  v-model="jiaojiedanall.managersign"/>
			<input type="text" name="managersign" style="width:61%;" v-bind:disabled="showor"  :value="this.name"/>
		</div>
		<div class="iterm">
			<label for="">日期：</label>
			<input type="date" name="managersigndate" style="width:66%;"  v-model="jiaojiedanall.managersigndate" />
		</div>
      <!--<div class="iterm" v-show="i">-->
          <!--<riqi2 v-on:date="start2" v-bind:title="signdate"></riqi2>-->
          <!--<input type="type" name="managersigndate" style="width:66%;display:none;"  v-model="jiaojiedanall.managersigndate=this.signdate2" />-->
      <!--</div>-->
		  <div class="big-save" v-show="showsave" @click="submitJiaoJieDan">
        	保存
    	</div>
	</form>
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
 import { Indicator } from 'mint-ui';
import riqi from '@/components/search-date2';
import riqi2 from '@/components/search-date2';
import axios from 'axios';
import { popup } from 'mint-ui';
import { Toast } from 'mint-ui';
import qs from 'qs';
export default {
  data () {
  return {
      togbox1:false,
      togbox2:false,
      togbox3:false,
      togbox4:false,
      dialog1:false,
      dialog2:false,
      dialog3:false,
      dialog4:false,
      dialog5:false,
      dialog6:false,
      dialog7:false,
      arrstr:"",
      arrstr2:"",
      arrstr3:"",
      arrstr4:"",
      arrstr5:"",
      arrstr6:"",
      arrstr7:"",
      arr:[],
      arr2:[],
      arr3:[],
      arr4:[],
      arr5:[],
      arr6:[],
      arr7:[],
		  popupVisible1: false,
      flag:true,
      miandate:'面签时间',
      signdate:'日期',
      signdate2:'',
      signdatestart:'',
      type:'',
      name:'',
      uuid:'',
    }
  },
  mounted:function () {
    this.type=this.$cookie.get('utype');
    this.name=this.$cookie.get('uname');
    this.uuid=this.$cookie.get('uuid');
  },
  methods:{
	    openAlert() {
        MessageBox.alert('操作成功!', '提示');
      },
        start(times){
          this.signdatestart =times;
        },
        start2(times){
          this.signdate2 =times;
        },
      toggle(a){
	      if(a=="类型"){
          this.togbox1=!this.togbox1;
        }else if(a=="面签"){
          this.togbox2=!this.togbox2;
        }else if(a=="评估"){
          this.togbox3=!this.togbox3;
        }else if(a=="收费"){
          this.togbox4=!this.togbox4;
        }
      },
    toggleContent(a){
        if(a=="个人消费"){
          this.jiaojiedanall.loantype="个人消费"
        }else if(a=="个人经营"){
          this.jiaojiedanall.loantype="个人经营"
        }else if(a=="公司经营"){
          this.jiaojiedanall.loantype="公司经营"
        }else if(a=="信用"){
          this.jiaojiedanall.loantype="信用"
        }
    },
    toggleContent2(a){
      if(a=="是"){
        this.mianqian="是";
        this.jiaojiedanall.banksigned="1";
      }else if(a=="否"){
        this.mianqian="否";
        this.jiaojiedanall.banksigned="0";
      }
    },
    toggleContent3(a){
      if(a=="是"){
        this.jiaojiedanall.evaluated="1";
      }else if(a=="否"){
        this.jiaojiedanall.evaluated="0";
      }
    },
    toggleContent4(a){
      if(a=="已收"){
        this.jiaojiedanall.chargeperiod="1";
      }else if(a=="批贷"){
        this.jiaojiedanall.chargeperiod="2";
      }else if(a=="放款"){
        this.jiaojiedanall.chargeperiod="3";
      }
    },
    fun1(a){
      if(a=="材料一"){
        this.dialog1=true;
      }else if(a=="材料二"){
        this.dialog2=true;
      }else if(a=="材料三"){
        this.dialog3=true;
      }else if(a=="材料四"){
        this.dialog4=true;
      }else if(a=="材料五"){
        this.dialog5=true;
      }else if(a=="材料六"){
        this.dialog6=true;
      }else if(a=="材料七"){
        this.dialog7=true;
      }
    },
    close(){
      this.dialog1=false;
      this.dialog2=false;
      this.dialog3=false;
      this.dialog4=false;
      this.dialog5=false;
      this.dialog6=false;
      this.dialog7=false;
    },
    complete(a){
      if(a=="材料一"){
//        this.arrstr=this.arr.join(' ');
        this.jiaojiedanall.borrowermaterial=this.arr.join(",");
      }else if(a=="材料二"){
//        this.arrstr2=this.arr2.join(' ');
        this.jiaojiedanall.borrowerspousematerial=this.arr2.join(",");
      }else if(a=="材料三"){
//        this.arrstr3=this.arr3.join(' ');
        this.jiaojiedanall.commonborrowermaterial=this.arr3.join(",");
      }else if(a=="材料四"){
//        this.arrstr4=this.arr4.join(' ');
        this.jiaojiedanall.commonborrowerspousematerial=this.arr4.join(",");
      }else if(a=="材料五"){
//        this.arrstr5=this.arr5.join(' ');
        this.jiaojiedanall.mortgagormaterial=this.arr5.join(",");
      }else if(a=="材料六"){
//        this.arrstr6=this.arr6.join(' ');
        this.jiaojiedanall.mortgagorspousematerial=this.arr6.join(",");
      }else if(a=="材料七"){
//        this.arrstr7=this.arr7.join(' ');
        this.jiaojiedanall.companymaterial=this.arr7.join(",");
      }
      this.dialog1=false;
      this.dialog2=false;
      this.dialog3=false;
      this.dialog4=false;
      this.dialog5=false;
      this.dialog6=false;
      this.dialog7=false;
    },
    submitJiaoJieDan(){
      if(this.$refs.loanamount.value==""){
        MessageBox('提示', '请输入贷款信息');
        return false;
      }else if(this.$refs.bankname.value==""){
        MessageBox('提示', '请输入贷款银行');
        return false;
      }else if(this.$refs.loantype.value==""){
        MessageBox('提示', '请输入贷款类型');
        return false;
      }else{
          //格式验证
          if(this.$refs.loanamount.value!=''){
            if(!/^\d+(\.\d{1,2})?$/.test(this.$refs.loanamount.value)){
              this.flag=false;
              MessageBox('提示', '贷款额金额格式不正确');
              return false;
            }
          }
          if(this.$refs.evaluationvalue.value!=''){
            if(!/^\d+(\.\d{1,2})?$/.test(this.$refs.evaluationvalue.value)){
              this.flag=false;
              MessageBox('提示', '评估值金额格式不正确');
              return false;
            }
          }
          if(this.$refs.dingjin.value!=''){
            if(!/^\d+$/.test(this.$refs.dingjin.value)){
              this.flag=false;
              MessageBox('提示', '定金金额格式不正确');
              return false;
            }
          }
          if(this.$refs.fuwufei.value!=''){
            if(!/^\d+$/.test(this.$refs.fuwufei.value)){
              this.flag=false;
              MessageBox('提示', '服务费金额格式不正确');
              return false;
            }
          }
          if(this.$refs.shopownerphone.value!=""){
            if(!/^1[34578]\d{9}$/.test(this.$refs.shopownerphone.value)){
              this.flag=false;
              MessageBox('提示', '电话格式不正确');
              return false;
            }
          }
        if(this.$refs.clerkphone.value!=""){
          if(!/^1[34578]\d{9}$/.test(this.$refs.clerkphone.value)){
            this.flag=false;
            MessageBox('提示', '电话格式不正确');
            return false;
          }
        }
        if(this.$refs.custphone.value!=""){
          if(!/^1[34578]\d{9}$/.test(this.$refs.custphone.value)){
            this.flag=false;
            MessageBox('提示', '电话格式不正确');
            return false;
          }
        }
        if(this.$refs.accountmanagerphone.value!=""){
          if(!/^1[34578]\d{9}$/.test(this.$refs.accountmanagerphone.value)){
            this.flag=false;
            MessageBox('提示', '电话格式不正确');
            return false;
          }
        }
        this.jiaojiedanall.contractid=this.contractid;
        this.jiaojiedanall.contractnum=this.contractnum;
         Indicator.open();
          axios.post(host+"/app/savecntdeliveryCredit?uuid="+this.uuid,this.jiaojiedanall
          ).then(response=>{
              if(response.data.data.code==200){
                   Indicator.close();
                   this.$emit('jiaojiedanflag','');
                    MessageBox('提示', '保存成功');
               }else{
                    Indicator.close();
                   MessageBox('提示', '保存失败');
               }

          }).catch(function(err){
                    Indicator.close();
                    MessageBox('提示', '保存失败');
                });
      }
    },
  },
  components:{
    'riqi':riqi,
    'riqi2':riqi2,
  },
  props:["jiaojiedanall","showor","showsave","dingjin","fuwufei","contractid",'contractnum'],
}
</script>
 <style scoped>
		@import "../../assets/css/contract.css";
        *{color:#333;}
        /*.follow-iterm-right{width:50%;}*/
        /*.follow-iterm-left{width:40%;}*/
        .follow-iterm-right>input[type="date"]{border:none !important;outline:none;}
        .dialog1,.dialog2,.dialog3,.dialog4,.dialog5,.dialog6,.dialog7{display:block;}
        .big-save{color:#fff;margin-bottom:30px;}
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
        .choose{color:#fff;}
    </style>
