<template>
  <div id="appHead">
     <div class="iterm">
        <section>
            <div class="iterms-list">
                <div>
                    <genginriqi v-on:date="start" v-bind:title="genjindate" v-bind:staror="false"></genginriqi>
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    科目:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    部门:
                </div>
                <div class="right-num">
                    信贷七十三部
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    台账号:
                </div>
                <div class="right-num">
                    HXY00639
                </div>
            </div>
            <div class="iterms-list">
                <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" ></deptselect>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    预算科目:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    上传发票:
                </div>
                <div class="right-num">
                    <input type="file" style="width:100%;">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    上传预览:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;border:1px solid #ddd;">

                    </div>
                </div>
            </div>
            <div class="iterms-list" style="margin:10px 0px;">
                <div class="left-name">
                    摘要及用途:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;">
                         <textarea  style="resize:none;width:100%;height:100%;padding:5px;"></textarea>
                    </div>
                </div>
            </div>
            <!-- 质押贷有领取方式 -->
            <div class="iterms-list">
                <div class="left-name">
                    领取方式:
                </div>
                <div class="right-num">
                    <label>银行</label>
                    <input type="radio" name="lingmethod">
                    <label>现金</label>
                    <input type="radio" name="lingmethod">
                </div>
            </div>
            <div class="iterms-list">
                <deptselect v-bind:selecttitle="titles2" v-bind:datas="depts2" ></deptselect>
            </div>
            <!-- 质押贷有开户银行 -->
            <div class="iterms-list">
                <div class="left-name">
                    开户银行:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <!-- 质押贷有卡号 -->
            <div class="iterms-list">
                <div class="left-name">
                    卡号:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    金额:
                </div>
                <div class="right-num">
                    <input class="follow-input" type="number" v-model="zhimoney" v-on:keyup="zhiMoney">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">

                </div>
                <div class="right-num" style="font-size:12px;color:#666;">
                    <div  class="range" v-if="this.zhimoney>rangeMost">超出额度,您可支出额度766.0元</div>
                    <div  class="range" v-else-if="this.zhimoney<=rangeMost">剩余支出额度人民币<span v-text=this.shengMoney></span>元</div>
                    <div  class="range">人民币(大写):<span  v-text=this.daXie></span></div>
                </div>
            </div>
            <div class="iterms-list" style="margin:10px 0px;">
                <div class="left-name">
                    备注:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;">
                         <textarea  style="resize:none;width:100%;height:100%;padding:5px;"></textarea>
                    </div>
                </div>
            </div>
            <div class="big-save">提交</div>
        </section>
    </div>
  </div>
</template>
<script>
import genginriqi from '@/components/search-date';
import deptselect from '@/components/search-select';
export default {
  data () {
  return {
        zhimoney:'',
        shengMoney:'',
        rangeMost:800,
        daXie:'',
        genjindate:'跟进日期',
        popupVisible4: false,
        depts:[{
            flex: 1,
            values:['服务费','公证费','材料费'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles:'项目名称',
        depts2:[{
            flex: 1,
            values:['王梦柯','李永生','张成华'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles2:'业务员',
    }
  },
  methods:{
      start(time){
        this.signdatestart = time;
    },
    zhiMoney(){
      this.zhimoney=Math.round(this.zhimoney);
      this.shengMoney=766-this.zhimoney;
      this.daXie=this.$options.methods.changeMoneyToChinese(this.zhimoney)
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
    }
  },
  mounted:function(){

  },
   components:{
    'deptselect':deptselect,
    'genginriqi':genginriqi
  }
}
</script>
<style scoped>
  .contract-list-name{color:#666;}
  header{border-bottom:1px solid #ddd;}
  section{padding:16px 20px;}
	.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
	text-align:center;line-height:39px;border-radius:5px;margin:20px 0px;}
  .left-name{float:left;font-size:14px;color:#666;}
  .right-num{float:right;font-size:14px;color:#333;width:60%;text-align:right;}
  .iterms-list{line-height:30px;margin-bottom:10px;}
  .iterms-list:after{display:table;content:"";clear:both;}
  .follow-input{height:32px !important;width:93%;}
  .follow-iterm{margin-bottom:0px;}
  .yulan-box{width:100%;height:150px;border:1px solid #ddd;margin-top:10px;}
  .picker-toolbar{background:#ddd;}
  .range{line-height:20px;color:red;}
  .follow-iterm-left{width:35% !important;}
  .follow-iterm-right{margin-left:-20px;}
</style>
