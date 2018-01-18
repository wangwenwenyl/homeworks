<!--质押 佣金说明书-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="commission" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">台账号：</label>
            <input type="text" name="ledgernum" class="word5" v-model="yongjinshuomingshu.ledgernum" disabled="disabled"/>
        </div>
        <div class="iterm">
            <label for="">门店：</label>
            <input type="text" name="shopname" class="word5" v-model="yongjinshuomingshu.shopname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">甲方（客户）：</label>
            <input type="text" name="custname" class="word6" v-model="yongjinshuomingshu.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">联系电话：</label>
            <input type="text" v-if="step==0" name="custphone" class="word5" v-model="yongjinshuomingshu.custphone" v-bind:disabled="showor" />
            <input type="text" v-else name="custphone" class="word5" value="***********" v-bind:disabled="showor" />
        </div>
        <div class="iterm">
            <label for="">乙方：</label>
            <input type="text" class="word5" value="鸿诚祥兆投资担保有限公司" disabled/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">丙方（银主）：</label>
            <input type="text" name="lendername" class="word6" v-model="yongjinshuomingshu.lendername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">联系电话：</label>
            <input type="text" v-if="step==0" name="lenderphone" class="word5" v-model="yongjinshuomingshu.lenderphone" v-bind:disabled="showor"/>
            <input type="text" v-else name="lenderphone" class="word5" value="***********" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            甲方委托乙方向丙方代为办理甲方 <input type="text" name="typename" style="width:50%;" v-model="yongjinshuomingshu.typename" v-bind:disabled="showor"/>借款一事达成一致<br/>
            甲方委托乙方向丙方（银主）借款的金额为：<br/>（小写）<input type="text" name="amountnum" style="width:30%;" v-model="yongjinshuomingshu.amountnum" v-on:blur="dealAmountnum" v-bind:disabled="showor"/>元<br/>（大写）<input type="text" name="amountchar" style="width:50%;" v-model="yongjinshuomingshu.amountchar" disabled/> 元整。
            <br/>
            丙方需向乙方（按照借款额的百分之 <input type="text" name="backpercent" style="width:15%;" id="formPoint" v-model="yongjinshuomingshu.backpercent" v-bind:disabled="showor"/>）返还的全部佣金金额为：<br/>（小写）<input type="text" name="backnum" style="width:25%;" v-model="yongjinshuomingshu.backnum" v-on:blur="dealBacknum" v-bind:disabled="showor"/>元 ,<br/>（大写）<input type="text" name="backchar" style="width:60%;" v-model="yongjinshuomingshu.backchar" disabled/>元整<br/>共返还 <input type="text" name="backcount" style="width:20%;" v-model="yongjinshuomingshu.backcount" v-bind:disabled="showor"/>次。<br/>
            甲方向乙方首次返还服务费的时间为 <input type="date" name="firstbackdate" style="width:50%;" v-model="yongjinshuomingshu.firstbackdate" v-bind:disabled="showor"/>，返还金额为：<br/>（小写）<input type="text" name="firstbacknum" style="width:30%;" v-on:blur="dealFirstbacknum" v-model="yongjinshuomingshu.firstbacknum" v-bind:disabled="showor"/>元，<br/>（大写）<input type="text" name="firstbackchar" style="width:30%;" v-model="yongjinshuomingshu.firstbackchar" disabled />元整；
        </div>
        <div class="iterm">
            1、明目：<input type="text" name="mingmuone" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyone" style="width:30%" v-model="yongjinshuomingshu.moneyone" v-bind:disabled="showor"/>元。<br/>
            2、明目：<input type="text" name="mingmutwo" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneytwo" style="width:30%" v-model="yongjinshuomingshu.moneytwo" v-bind:disabled="showor"/>元。<br/>
            3、明目：<input type="text" name="mingmuthree" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneythree" style="width:30%" v-model="yongjinshuomingshu.moneythree" v-bind:disabled="showor"/>元。<br/>
            4、明目：<input type="text" name="mingmufour" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyfour" style="width:30%" v-model="yongjinshuomingshu.moneyfour" v-bind:disabled="showor"/>元。<br/>
            5、明目：<input type="text" name="mingmufive" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyfive" style="width:30%" v-model="yongjinshuomingshu.moneyfive" v-bind:disabled="showor"/>元。<br/>
            6、明目：<input type="text" name="mingmusix" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneysix" style="width:30%" v-model="yongjinshuomingshu.moneysix" v-bind:disabled="showor"/>元。
        </div>
        <div class="iterm">
            <label for="">业务员：</label>
            <input type="text" class="word5" name="clerkname" v-model="yongjinshuomingshu.clerkname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">制单人：</label>
            <input type="text" class="word5" name="commituser" v-model="yongjinshuomingshu.commituser" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还人：</label>
            <input type="text" class="word5" name="backusername" v-model="yongjinshuomingshu.backusername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还日期：</label>
            <input type="date" class="word5"   name="backdate" v-model="yongjinshuomingshu.backdate" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" id="formCommission-submit" @click="save" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return {
                uuid:'',
            }
        },
        methods:{
            dealFirstbacknum(){
                if(this.yongjinshuomingshu.firstbacknum==""||this.yongjinshuomingshu.firstbacknum==null){
                    this.yongjinshuomingshu.firstbackchar="";
                }else{
                    this.yongjinshuomingshu.firstbackchar=this.changeMoneyToChinese(this.yongjinshuomingshu.firstbacknum);
                }
            },
            dealAmountnum(){
                if(this.yongjinshuomingshu.amountnum==""||this.yongjinshuomingshu.amountnum==null){
                    this.yongjinshuomingshu.amountchar="";
                }else{
                    this.yongjinshuomingshu.amountchar=this.changeMoneyToChinese(this.yongjinshuomingshu.amountnum);
                }
            },
            dealBacknum(){
                if(this.yongjinshuomingshu.backnum==""||this.yongjinshuomingshu.backnum==null){
                    this.yongjinshuomingshu.backchar="";
                }else{
                    this.yongjinshuomingshu.backchar=this.changeMoneyToChinese(this.yongjinshuomingshu.backnum);
                }
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
            send(){
                this.$emit("yongjin","");
            },
            save(){
                var rex=/^\d+(\.\d{1,2})?$/;
                var rex1=/^\d+$/;
                if(this.yongjinshuomingshu.backpercent){
                    if(!rex.test(this.yongjinshuomingshu.backpercent)){
                        MessageBox.alert("借款的百分比格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneyone){
                    if(!rex1.test(this.yongjinshuomingshu.moneyone)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneytwo){
                    if(!rex1.test(this.yongjinshuomingshu.moneytwo)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneythree){
                    if(!rex1.test(this.yongjinshuomingshu.moneythree)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneyfour){
                    if(!rex1.test(this.yongjinshuomingshu.moneyfour)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneyfive){
                    if(!rex1.test(this.yongjinshuomingshu.moneyfive)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.moneysix){
                    if(!rex1.test(this.yongjinshuomingshu.moneysix)){
                        MessageBox.alert("返还明目金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.amountnum){
                    if(!rex1.test(this.yongjinshuomingshu.amountnum)){
                        MessageBox.alert("借款金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.backnum){
                    if(!rex1.test(this.yongjinshuomingshu.backnum)){
                        MessageBox.alert("借款金额格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.firstbacknum){
                    if(!rex1.test(this.yongjinshuomingshu.firstbacknum)){
                        MessageBox.alert("返还服务费格式不正确");
                        return false;
                    }
                }
                if(this.yongjinshuomingshu.backcount){
                    if(!rex1.test(this.yongjinshuomingshu.backcount)){
                        MessageBox.alert("返还服务费次数格式不正确");
                        return false;
                    }
                }
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                axios.post(host+"/app/savecntbrokeragebook?uuid="+this.uuid,
                    this.yongjinshuomingshu
                ).then(response=>{
//                    console.log(response);
                    if(response.data.data.code=='200'){
                        this.send();
                        MessageBox.alert("保存成功");
                    }else{
                        MessageBox.alert("操作失败");
                    }
                    Indicator.close();
                }).catch(function(err){
                    MessageBox.alert("网络超时");
                    Indicator.close();

                })
            },
        },
        created(){
            this.uuid=this.$cookie.get("uuid");
        },
        props:['yongjinshuomingshu',"showor","showsave",'step'],
    }
</script>
