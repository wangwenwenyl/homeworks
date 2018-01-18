<template>
  <div id="app" style="overflow-Y:scroll;">
      <div class="nav-box">
        <div class="nav-iterm1">
          <a  class="active">
            <span>商业贷</span>
          </a>
        </div>
        <div class="nav-iterm1">
          <a >
            <span>公积金贷</span>
          </a>
        </div>
      </div>
    <div id="pageall">
      <div class="subpage">
        <div class="calc">
          <div class="calcinfo stitle">
            <div class="calculator">
              <!--<div class="calcintro">* 利率更新时间2015年10月24日 *</div>-->
              <div class="w100">
                <div class="form-box">
                  <div class="form-lei">贷款金额：</div><div class="form-input"><input type="text" name="dkje" id="dkje" value="0"> 万元</div>
                </div>
                <div class="form-box">
                  <div class="form-lei">
                    贷款期限：
                  </div>
                  <div class="form-input">
                    <select name="district" id="district" onchange="changeLv()" style="left: 0px; top: 0px; width:100%; height:32px; position: relative">
                      <option selected="selected" value="5">5年(60期)</option>
                      <option value="10">10年(120期)</option>
                      <option value="15">15年(180期)</option>
                      <option value="20">20年(240期)</option>
                      <option value="25">25年(300期)</option>
                      <option value="30">30年(360期)</option>
                    </select>
                  </div>
                </div>
                <div class="form-box">
                  <div class="form-lei">
                    年化利率：
                  </div>
                  <div class="form-input">
                    <select name="lilv" onchange="changeLv()" id="lilv" style="left: 0px; top: 0px; width:70%; height:32px; position: relative">
                      <option value="0.7" style="height:30px;">最新基准利率7折</option>
                      <option value="0.8" style="height:30px;">最新基准利率8折</option>
                      <option value="0.83" style="height:30px;">最新基准利率8.3折</option>
                      <option value="0.85">最新基准利率8.5折</option>
                      <option value="0.88">最新基准利率8.8折</option>
                      <option value="0.9">最新基准利率9折</option>
                      <option value="0.95">最新基准利率9.5折</option>
                      <option selected="selected" value="1">最新基准利率</option>
                      <option value="1.05">最新基准利率1.05倍</option>
                      <option value="1.1">最新基准利率1.1倍</option>
                      <option value="1.2">最新基准利率1.2倍</option>
                      <option value="1.3">最新基准利率1.3倍</option>
                    </select>
                    <input type="text" name="txtlv" id="txtlv" value="4.75" readonly="readonly" style="width:20% !important;">&nbsp;%
                  </div>
                </div>
                <input type="hidden" name="hidlv" id="hidlv" value="0.0475">
                <!--<script type="text/javascript">-->
                  <!--function changeLv(){-->
                    <!--var n = document.getElementById("district").value;-->
                    <!--var b = document.getElementById("lilv").value;-->
                    <!--var v = 4.75;-->
                    <!--if (n > 5){v = 4.9;}-->
                    <!--var lv = v;-->
                    <!--var newlv = lv * b;-->
                    <!--document.getElementById("txtlv").value = Math.round(newlv * 10000) / 10000;-->
                    <!--document.getElementById("hidlv").value = Math.round(newlv * 10000) / 1000000;-->
                  <!--}-->
                  <!--function reset(){-->
                    <!--document.getElementById("dkje").value = 0;-->
                    <!--document.getElementById("txtlv").value = 4.75;-->
                    <!--document.getElementById("hidlv").value = 0.0475;-->
                    <!--document.getElementById("lilv").selectedIndex = 7;-->
                    <!--document.getElementById("district").selectedIndex = 0;-->
                    <!--document.getElementById("debxdkze").innerHTML = "";-->
                    <!--document.getElementById("debxhkys").innerHTML = "";-->
                    <!--document.getElementById("debxmyhk").innerHTML = "";-->
                    <!--document.getElementById("debxzflx").innerHTML = "";-->
                    <!--document.getElementById("debxbxhj").innerHTML = "";-->
                    <!--document.getElementById("debjdkze").innerHTML = "";-->
                    <!--document.getElementById("debjhkys").innerHTML = "";-->
                    <!--document.getElementById("debjmyhk").innerHTML = "";-->
                    <!--document.getElementById("debjzflx").innerHTML = "";-->
                    <!--document.getElementById("debjbxhj").innerHTML = "";-->
                  <!--}-->
                <!--</script>-->
              </div>
              <div class="w100 tac">
                <button id="Button1" class="myButton" onclick="goCalc()"   style="color:#fff;">计算</button>
              </div>
              <!--<script type="text/javascript">-->
                <!--function goCalc() {-->
                  <!--var s = document.getElementById("dkje").value;-->
                  <!--if (isNaN(s) == true || s <= 0 || s == "" || s == null){-->
                    <!--mui.alert("请填写贷款金额！");-->
                    <!--$("#lixi").css("display","none");-->
                    <!--$(".benxi").css("display","none");-->
                    <!--document.getElementById("dkje").focus();-->
                    <!--return false;-->
                  <!--} else {-->
                    <!--doCalculate();-->
                    <!--$("#lixi").css("display","block");-->
                    <!--$(".benxi").css("display","block");-->
                  <!--}-->
                <!--}-->
              <!--</script>-->
              <div class="w100" style="display:none;margin-bottom:90px;" id="lixi">
                <div class="mTab">
                  <div class="flexbox" id="payMethod">
                    <a id="fixedPayment" class="active">等额本息</a>
                    <a id="fixedBasis" >等额本金</a>
                  </div>
                  <p class="benxi-text">每月还款额固定，所还总利息较多，适合收入稳定者。</p>
                  <p class="benjin-text">每月还款额递减，所还总利息较低，前期还款额较大。</p>
                </div>
                <div class="benxi">
                  <div class="xi-title">贷款总额：</div>
                  <div class="xi-num" id="debxdkze"></div>
                </div>
                <div class="benxi">
                  <div class="xi-title">还款月数：</div>
                  <div class="xi-num" id="debxhkys"></div>
                </div>
                <div class="benxi">
                  <div class="xi-title">每月还款：</div>
                  <div class="xi-num" id="debxmyhk"></div>
                </div>
                <div class="benxi">
                  <div class="xi-title">总支付利息：</div>
                  <div class="xi-num" id="debxzflx"></div>
                </div>
                <div class="benxi">
                  <div class="xi-title">本息合计：</div>
                  <div class="xi-num" id="debxbxhj"></div>
                </div>
                <div class="benjin">
                  <div class="xi-title">贷款总额：</div>
                  <div class="xi-num" id="debjdkze"></div>
                </div>
                <div class="benjin">
                  <div class="xi-title">还款月数：</div>
                  <div class="xi-num" id="debjhkys"></div>
                </div>
                <div class="benjin">
                  <div class="xi-title">首月还款：</div>
                  <div class="xi-num" id="debjmyhk"></div>
                </div>
                <div class="benjin">
                  <div class="xi-title">总支付利息：</div>
                  <div class="xi-num" id="debjzflx"></div>
                </div>
                <div class="benjin">
                  <div class="xi-title">本息合计：</div>
                  <div class="xi-num" id="debjbxhj"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="clr"></div>
        </div>
      </div>
    </div>
      <div class="footer" style="position: fixed;bottom:40px;font-size:12px;padding-left:10px;padding-right:10px;text-align: center;">
        <p>24小时服务热线 400-090-1999</p>
        <p>地址：北京市朝阳区红庙延静西里二号华商大厦13层</p>
        <p>Copyright &copy;2013-2016 &nbsp;HCXZDANBAO.COM,All &nbsp; Rights &nbsp;Reserved.</p>
      </div>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
export default {
  data () {
  return {

    }
  },
  mounted(){

  },
  methods:{

  },
  components:{
      'ContractTop':ContractTop,
  }
}
</script>
<style scoped>
  @import "../../assets/css/jisuanqi.css";
  .header img{height:15px;position: absolute;top:15px;left:10px;}
  body{background:#fff;}
  input{margin-bottom:0px !important;width:80% !important;border:none !important;padding:0px !important;}
  select{padding:0px;margin-bottom:0px;height:100px;}
  option{height:30px !important; line-height:30px !important;}
  #pageall{padding:10px;}
  #txtlv,#Button1,.form-box{height:35px;line-height:35px;}
  #Button1{margin-top:10px;}
  .footer p{height:20px;line-height:20px;}
  input{height:30px;}
</style>
