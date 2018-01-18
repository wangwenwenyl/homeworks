<template>
    <form id="sure" action="" style="overflow-Y:scroll;" >
        <div class="iterm">
            <input type="text" name="weituoren" style="width:30%;" v-model="chengjiaoquerenshu.weituoren" v-bind:disabled="showor"/>在 <input type="date" name="negotiateDate" style="width:45%;" v-model="chengjiaoquerenshu.negotiateDate" v-bind:disabled="showor"/>日委托乙方寻找资金出借人。<br/>
            介绍出借人：<input type="text" name="chujieren" v-model="chengjiaoquerenshu.chujieren" style="width:30%;" v-bind:disabled="showor"/>与委托人签署了《借款合同》
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">是否有抵押物：</label>
            <input type="hidden" name="hasCollateral"/>
            <input type="text" class="word6 secondhousestate" v-if="chengjiaoquerenshu.hasCollateral===''" value="" disabled/>
            <input type="text" class="word6 diyaobj" v-if="chengjiaoquerenshu.hasCollateral==0 && chengjiaoquerenshu.hasCollateral!==''" value="否" v-bind:disabled="true"/>
            <input type="text" class="word6 diyaobj" v-else-if="chengjiaoquerenshu.hasCollateral==1" value="是" v-bind:disabled="true"/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" v-show="showsave" @click="showDiyawu" class="tog1">></div>
            <div  class="tog1-content" v-show="showDiyawuflag">
                <span style="width:45%;display:inline-block;text-align: center;">是<input type="radio" v-bind:checked="chengjiaoquerenshu.hasCollateral==1?true:false" id="diyawuone" @click="diyawuHas" hasdiyaInfo="1" name="orown"   class="single-value diyaobj1" /></span>
                <span style="width:45%;display:inline-block;text-align: center;">否<input type="radio" v-bind:checked="(chengjiaoquerenshu.hasCollateral==0 && chengjiaoquerenshu.hasCollateral!=='')?true:false"  id="diyawutwo" @click="diyawuNo" hasdiyaInfo="0" name="orown"   class="single-value diyaobj2" /></span>
            </div>
        </div>
        <div class="iterm">
            <label for="">房产1：</label>
        </div>
        <div class="iterm">
            <label for="">房产坐落：</label>
            <input type="text" name="firstHousePropertyArea" v-model="chengjiaoquerenshu.firstHousePropertyArea" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">产权证编号：</label>
            <input type="text" name="firstHousePropertyCardNum" v-model="chengjiaoquerenshu.firstHousePropertyCardNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">面积：</label>
            <input type="text" name="firstHouseProportion" v-model="chengjiaoquerenshu.firstHouseProportion" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">抵押物估值：</label>
            <input type="text" name="firstHouseValuation" v-model="chengjiaoquerenshu.firstHouseValuation" class="word5" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">目前房产状态：</label>
            <input type="hidden"  name="firstHouseSituation" />
            <input type="text" class="word6 secondhousestate" v-if="chengjiaoquerenshu.firstHouseSituation===''" value="" disabled/>
            <input type="text" class="word6 housestate"  v-if="chengjiaoquerenshu.firstHouseSituation==0 && chengjiaoquerenshu.firstHouseSituation!==''" value="空置" disabled/>
            <input type="text" class="word6 housestate" v-else-if="chengjiaoquerenshu.firstHouseSituation==1" value="由抵押人自住" disabled/>
            <input type="text" class="word6 housestate" v-else-if="chengjiaoquerenshu.firstHouseSituation==2" value="在出租" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" v-show="showsave" @click="showfangchanone" class="tog4">></div>
            <div  class="tog4-content" v-show="fangchanoneflag">
                <span class="single">空置<input type="radio"stateinfo="0" v-bind:checked="(chengjiaoquerenshu.firstHouseSituation==0 && chengjiaoquerenshu.firstHouseSituation!=='')?true:false" name="housestate" @click="fangchanCheckone" class="single-value housestate1" /></span>
                <span class="single" style="width:37% !important;display: inline-block;">由抵押人自住<input type="radio" stateinfo="1"  @click="fangchanChecktwo" v-bind:checked="chengjiaoquerenshu.firstHouseSituation==1?true:false" name="housestate" class="single-value housestate2" /></span>
                <span class="single">在出租<input type="radio" stateinfo="2" @click="fangchanCheckthree" v-bind:checked="chengjiaoquerenshu.firstHouseSituation==2?true:false" name="housestate" class="single-value housestate3" /></span>
            </div>
        </div>
        <div class="iterm" v-if="chengjiaoquerenshu.firstHouseSituation==2">
            <label for="">租期至：</label>
            <input type="date" name="firstHouseLeaseDate" v-model="chengjiaoquerenshu.firstHouseLeaseDate" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">房产2：</label>
        </div>
        <div class="iterm">
            <label for="">房产坐落：</label>
            <input type="text" name="secondHousePropertyArea" v-model="chengjiaoquerenshu.secondHousePropertyArea" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">产权证编号：</label>
            <input type="text" name="secondHousePropertyCardNum" v-model="chengjiaoquerenshu.secondHousePropertyCardNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">建筑面积：</label>
            <input type="text" name="secondHouseProportion" v-model="chengjiaoquerenshu.secondHouseProportion" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">抵押物估值：</label>
            <input type="text" name="secondHouseValuation" v-model="chengjiaoquerenshu.secondHouseValuation" class="word5" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">目前房产状态：</label>
            <input type="hidden"  name="secondHouseSituation" />
            <input type="text" class="word6 secondhousestate" v-if="chengjiaoquerenshu.secondHouseSituation===''" value="" disabled/>
            <input type="text" class="word6 secondhousestate" v-if="chengjiaoquerenshu.secondHouseSituation==0 && chengjiaoquerenshu.secondHouseSituation!==''" value="空置" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengjiaoquerenshu.secondHouseSituation==1" value="由抵押人自住" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengjiaoquerenshu.secondHouseSituation==2" value="在出租" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;"  v-show="showsave" @click="showfangchantwo" class="tog2">></div>
            <div  class="tog2-content"  v-show="fangchantwoflag">
                <span class="single">空置<input type="radio" v-bind:checked="(chengjiaoquerenshu.secondHouseSituation==0 && chengjiaoquerenshu.secondHouseSituation!=='')?true:false" name="secondhousestate" stateinfo="0" @click="fangchanCheckone1" class="single-value secondhousestate1" /></span>
                <span class="single" style="width:37% !important;display: inline-block;">由抵押人自住<input type="radio" v-bind:checked="chengjiaoquerenshu.secondHouseSituation==1?true:false" @click="fangchanChecktwo1" stateinfo="1" name="secondhousestate" class="single-value secondhousestate2" /></span>
                <span class="single">在出租<input type="radio"  name="secondhousestate" stateinfo="2" v-bind:checked="chengjiaoquerenshu.secondHouseSituation==2?true:false" @click="fangchanCheckthree1" class="single-value secondhousestate3" /></span>
            </div>
        </div>
        <div class="iterm" v-if="chengjiaoquerenshu.secondHouseSituation==2">
            <label for="">租期至：</label>
            <input type="date" name="secondHouseLeaseDate" v-model="chengjiaoquerenshu.secondHouseLeaseDate" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆型号：</label>
            <input type="text" name="carPropertyModel" v-model="chengjiaoquerenshu.carPropertyModel" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆登记号：</label>
            <input type="text" name="carRegistrationNum" v-model="chengjiaoquerenshu.carRegistrationNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车牌号码：</label>
            <input type="text" name="carLicensePlateNum" v-model="chengjiaoquerenshu.carLicensePlateNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">车辆发动机号：</label>
            <input type="text" name="carEngineNum" class="word6" v-model="chengjiaoquerenshu.carEngineNum" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">行驶证号码：</label>
            <input type="text" name="carDrivingLicenseNum" v-model="chengjiaoquerenshu.carDrivingLicenseNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆估值：</label>
            <input type="text" name="carValuation" class="word5" v-model="chengjiaoquerenshu.carValuation" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm">
            <label for="">借款时间：</label>
            <input type="date" name="loanDate" class="word5" v-model="chengjiaoquerenshu.loanDate" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:110px;">借款起止时间：</label>
            <input type="date" name="loanDateFrom" class="word6" v-model="chengjiaoquerenshu.loanDateFrom" v-bind:disabled="showor"/>
            <label for="" style="width:110px;"></label>
            至<input type="date" name="loanDateTo" class="word6" v-model="chengjiaoquerenshu.loanDateTo" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:110px;">借款利息标准：</label>
            <input type="text" name="loanInterest" class="word7" v-model="chengjiaoquerenshu.loanInterest" v-bind:disabled="showor"/>%/月
        </div>
        <div class="iterm">
            <label for="">综合服务费：</label>
            <input type="text" name="totalServiceCharge" v-model="chengjiaoquerenshu.totalServiceCharge" class="word6" v-bind:disabled="showor"/>元
        </div>
        <div class="iterm">
            出借人向委托人借款的金额：
            <input type="text" name="loanAmountChar" v-model="chengjiaoquerenshu.loanAmountChar" style="width:30%;" v-bind:disabled="showor"/>元人民币（大写）<input type="text" name="loanAmount" v-model="chengjiaoquerenshu.loanAmount" style="width:50%;" @blur="ltb(chengjiaoquerenshu.loanAmount)" v-bind:disabled="showor"/>人民币（小写）
        </div>
        <div class="iterm">
            <label for="">公证书号码：</label>
            <input type="text" name="notarizationNum" v-model="chengjiaoquerenshu.notarizationNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="big-save"v-show="showsave" @click="sendChengjiao">
            保存
        </div>
    </form>
</template>
<script>
import { Radio } from 'mint-ui';
import { MessageBox } from 'mint-ui';
 import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
    export default {
          data () {
            return {
                name:'',
                uuid:'',
                showDiyawuflag:false,
                fangchanoneflag:false,
                fangchantwoflag:false,
            }
            },
        props:['chengjiaoquerenshu',"showor","showsave","contractid","contractnum"],
        created:function(){
            this.uuid=this.$cookie.get('uuid');
            this.name=this.$cookie.get('uname');            
        },
        mounted:function(){
        
        },
        methods:{
            ltb(money){
                this.chengjiaoquerenshu.loanAmountChar=this.changeMoneyToChinese(money);
            },
            changeMoneyToChinese(money){
                var cnNums = new Array("零","壹","贰","叁","肆","伍","陆","柒","捌","玖"); //汉字的数字
                var cnIntRadice = new Array("","拾","佰","仟"); //基本单位
                var cnIntUnits = new Array("","万","亿","兆"); //对应整数部分扩展单位
                var cnDecUnits = new Array("角","分","毫","厘"); //对应小数部分单位
                var cnInteger = ""; //整数金额时后面跟的字符
                var cnIntLast = ""; //整型完以后的单位
                var maxNum = 999999999999999.9999; //最大处理的数字

                var IntegerNum; //金额整数部分
                var DecimalNum; //金额小数部分
                var ChineseStr=""; //输出的中文金额字符串
                var parts; //分离金额后用的数组，预定义
                if( money == "" ){
                    return "";
                }
                money = parseFloat(money);
                if( money >= maxNum ){
                    $.alert('超出最大处理数字');
                    return "";
                }
                if( money == 0 ){
                    ChineseStr = cnNums[0]+cnIntLast+cnInteger;
                    return ChineseStr;
                }
                money = money.toString(); //转换为字符串
                if( money.indexOf(".") == -1 ){
                    IntegerNum = money;
                    DecimalNum = '';
                }else{
                    parts = money.split(".");
                    IntegerNum = parts[0];
                    DecimalNum = parts[1].substr(0,4);
                }
                if( parseInt(IntegerNum,10) > 0 ){//获取整型部分转换
                    var zeroCount = 0;
                    var IntLen = IntegerNum.length;
                    for( var i=0;i<IntLen;i++ ){
                        var n = IntegerNum.substr(i,1);
                        var p = IntLen - i - 1;
                        var q = p / 4;
                        var m = p % 4;
                        if( n == "0" ){
                            zeroCount++;
                        }else{
                            if( zeroCount > 0 ){
                                ChineseStr += cnNums[0];
                            }
                            zeroCount = 0; //归零
                            ChineseStr += cnNums[parseInt(n)]+cnIntRadice[m];
                        }
                        if( m==0 && zeroCount<4 ){
                            ChineseStr += cnIntUnits[q];
                        }
                    }
                    ChineseStr += cnIntLast;
                    //整型部分处理完毕
                }
                if( DecimalNum!= '' ){//小数部分
                    decLen = DecimalNum.length;
                    for( i=0; i<decLen; i++ ){
                        n = DecimalNum.substr(i,1);
                        if( n != '0' ){
                            ChineseStr += cnNums[Number(n)]+cnDecUnits[i];
                        }
                    }
                }
                if( ChineseStr == '' ){
                    ChineseStr += cnNums[0]+cnIntLast+cnInteger;
                }
                else if( DecimalNum == '' ){
                    ChineseStr += cnInteger;
                }
                return ChineseStr;
            },
             fangchanCheckone1(){
                this.chengjiaoquerenshu.secondHouseSituation=0;
            },
             fangchanChecktwo1(){
                this.chengjiaoquerenshu.secondHouseSituation=1;
            },
             fangchanCheckthree1(){
                this.chengjiaoquerenshu.secondHouseSituation=2;
            },
            fangchanCheckone(){
                this.chengjiaoquerenshu.firstHouseSituation=0;
            },
             fangchanChecktwo(){
                this.chengjiaoquerenshu.firstHouseSituation=1;
            },
             fangchanCheckthree(){
                this.chengjiaoquerenshu.firstHouseSituation=2;
            },
            diyawuHas(){
                this.chengjiaoquerenshu.hasCollateral=1;
            },
            diyawuNo(){
                this.chengjiaoquerenshu.hasCollateral=0;
            },
            showfangchanone:function(){
                this.fangchanoneflag=!this.fangchanoneflag;
            },
            showfangchantwo:function(){
                this.fangchantwoflag=!this.fangchantwoflag;
            },
            showDiyawu:function(){
                this.showDiyawuflag=!this.showDiyawuflag;
            },
            sendChengjiao:function(){
                var rex=/^\d+(\.\d{1,2})?$/;
                if(this.chengjiaoquerenshu.loanAmount){
                    if(!rex.test(this.chengjiaoquerenshu.loanAmount)){
                        MessageBox('提示', '出借人向委托人借款的金额格式不正确');
                        return false;
                    }
                }
                 if(this.chengjiaoquerenshu.totalServiceCharge){
                    if(!rex.test(this.chengjiaoquerenshu.totalServiceCharge)){
                        MessageBox('提示', '综合服务费格式不正确');
                        return false;
                    }
                }
                 if(this.chengjiaoquerenshu.loanInterest){
                    if(!rex.test(this.chengjiaoquerenshu.loanInterest)){
                        MessageBox('提示', '借款利息标准格式不正确');
                        return false;
                    }
                }
                 if(this.chengjiaoquerenshu.loanAmount){
                    if(!rex.test(this.chengjiaoquerenshu.loanAmount)){
                        MessageBox('提示', '出借人向委托人借款的金额格式不正确');
                        return false;
                    }
                }
                this.chengjiaoquerenshu.contractId=this.contractid;
                this.chengjiaoquerenshu.contractNum=this.contractnum;
                axios.post(host+"/app/savecntdealbook?uuid="+this.uuid,this.chengjiaoquerenshu
           ).then(response=>{
               if(response.data.data.code==200){
                   Indicator.close();
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
        }
    }
</script>
