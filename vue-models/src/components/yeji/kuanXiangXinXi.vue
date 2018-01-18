<template>
  <div id="appHead">
    <div class="follow-space"></div>
    <div class="iterm">
      <header>
        <div></div>
        <div >合同款项信息</div>
      </header>
      <section>
        <div class="iterms-list">
          <div class="left-name">
            台账号:
          </div>
          <div class="right-num">
            HXY00640
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            合同编号:
          </div>
          <div class="right-num">
            WD20170611123456
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            合同类型:
          </div>
          <div class="right-num">
            信用贷
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            借款金额(万元):
          </div>
          <div class="right-num">
            100
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            合同点位(%):
          </div>
          <div class="right-num">
            1
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            服务费金额(元):
          </div>
          <div class="right-num">
            1000
          </div>
        </div>
      </section>
    </div>
    <div class="follow-space"></div>
    <div class="iterm">
      <header>
        <div></div>
        <div>款项客户信息</div>
      </header>
      <section>
        <div class="iterms-list">
          <div class="left-name">
            客户姓名:
          </div>
          <div class="right-num">
            张宝宝
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            身份证号:
          </div>
          <div class="right-num">
            110105199212055817
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            手机号:
          </div>
          <div class="right-num">
            18811186495
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            其他电话:
          </div>
          <div class="right-num">
            无
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            付款方式:
          </div>
          <div class="right-num">
            <label>银行</label>
            <input type="radio" name="paymethod" checked @click="paynum=1">
            <label>支付宝</label>
            <input type="radio" name="paymethod"  @click="paynum=2">
            <label>现金</label>
            <input type="radio" name="paymethod"  @click="paynum=3">
            <label>其他</label>
            <input type="radio" name="paymethod"  @click="paynum=3">
          </div>
        </div>
        <div class="yinghang" v-show="paynum==1?true:false">
          <div class="iterms-list">
            <div class="left-name">
              付款银行:
            </div>
            <div class="right-num">
              <input class="follow-input">
            </div>
          </div>
          <div class="iterms-list">
            <div class="left-name">
              客户付款卡号:
            </div>
            <div class="right-num">
              <input class="follow-input">
            </div>
          </div>
        </div>
        <div class="zhifubao" v-show="paynum==2?true:false">
          <div class="iterms-list">
            <div class="left-name">
              支付宝账号:
            </div>
            <div class="right-num">
              <input class="follow-input">
            </div>
          </div>
        </div>
        <div class="xianjin" v-show="paynum==3?true:false">
          <div>
            <div class="left-name">
              备注:
            </div>
            <div class="right-num">
              <textarea name="" id="" cols="25" rows="5"></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="follow-space"></div>
    <div class="iterm">
      <header>
        <div></div>
        <div>款项添加信息</div>
      </header>
      <section>
        <div class="iterms-list">
          <div class="left-name">
            应收金额(元):
          </div>
          <div class="right-num">
            1000
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name follow-iterm-left">
            回款金额(元):
          </div>
          <div class="right-num follow-iterm-right">
            <input class="follow-input" type="number" v-model="huiKuanMoney" v-on:blur="verifyNum">
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name follow-iterm-left">
            预计收入(元):
          </div>
          <div class="right-num follow-iterm-right">
            <input class="follow-input" type="number" v-model="totalMoney" v-on:blur="verifyNum2">
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name follow-iterm-left">
            收据号:
          </div>
          <div class="right-num follow-iterm-right">
            <input class="follow-input" value="" placeholder="例:H1610611或h1610611">
          </div>
        </div>
        <div class="iterms-list">
          <div>
            <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-bind:staror="false" ></deptselect>
          </div>
        </div>
        <div class="iterms-list">
          <div>
            <deptselect v-bind:selecttitle="titles2" v-bind:datas="depts2" v-on:listionChildEvent="tickedShow"  v-bind:staror="false" ></deptselect>
          </div>
        </div>

        <div class="iterms-list" v-show="ticked">
          <div class="left-name">
            发票抬头:
          </div>
          <div class="right-num">
            <label>个人</label>
            <input type="radio" name="taitou" checked  @click="tickedType">
            <label>公司</label>
            <input type="radio" name="taitou"  @click="tickedType">
          </div>
        </div>
        <div v-show="tickedtype">
          <div class="iterms-list">
            <div class="left-name follow-iterm-left">
              公司名称:
            </div>
            <div class="right-num follow-iterm-right">
              <input class="follow-input ">
            </div>
          </div>
          <div class="iterms-list">
            <div class="left-name follow-iterm-left">
              纳税人识别号:
            </div>
            <div class="right-num follow-iterm-right">
              <input class="follow-input">
            </div>
          </div>
        </div>
        <div class="iterms-list">
          <div class="left-name">
            业绩归属人:
          </div>
          <div class="right-num">
            王梦珂
          </div>
        </div>
      </section>
    </div>
    <div class="follow-space"></div>
    <div class="iterm">
        <header>
            <div></div>
            <div >回款附件</div>
        </header>
        <section>
            <picUpload title="付款凭证"></picUpload>
            <picUpload title="收款凭证"></picUpload>
            <div class="big-save">确认</div>
        </section>
    </div>

  </div>
</template>

<script>
    import deptselect from '@/components/search-select';
    import picUpload from '@/components/yeji/picUpload';
    export default {
        data () {
            return {
                huiKuanMoney:'',
                totalMoney:'',
                ticked:'',
                tickedDetail:'',
                tickedtype:false,
                paynum:'1',
                popupVisible4: false,
                depts:[{
                    flex: 1,
                    values:['91金融','三方费','个人返费','中天思睿','中宁','中鼎鵬','公证费','加急费','国美'],
                    textAlign: 'center',
                    className: 'slot1',
                }],
                titles:'款项类别',
                popupVisible4: false,
                depts2:[{
                    flex: 1,
                    values:['工行大望路支行','北京银行','建设银行'],
                    textAlign: 'center',
                    className: 'slot1',
                }],
                titles2:'收款账号',
            }
        },
        mounted:function(){

        },
        methods:{
            tickedShow:function (msg) {
            if(msg=="工行大望路支行"){
              this.ticked=true;
            }else{
              this.ticked=false;
            }
          },
            tickedType:function () {
            if(this.tickedtype){
              this.tickedtype=false;
            }else{
              this.tickedtype=true;
            }
          },
            verifyNum:function () {
            this.huiKuanMoney=Math.round(this.huiKuanMoney);
          },
            verifyNum2:function () {
            this.totalMoney=Math.round(this.totalMoney);
          },


        },
        components:{
            'deptselect': deptselect,
            'picUpload': picUpload
        }
    }
</script>
<style scoped>
    header{
        border-bottom:1px solid #ddd;
        line-height:32px;
        display:flex;
        align-items: center;
    }
    header>div:first-of-type{
        width:5px;
        height:20px;
        background:#fbaf37;
        margin-right:5px;
    }
     section{padding:16px 15px;}
    .big-save{width:100%;height:39px;background:#fbaf37;color:#fff;text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
    .left-name{float:left;font-size:14px;color:#666;}
    .right-num{float:right;font-size:14px;color:#333;}
    .iterms-list{height:30px;line-height:30px;}
    .iterms-list:after{display:table;content:"";clear:both;}
    .follow-input{height:23px !important;}

    .picker-toolbar{background:#ddd;}
    .contract-list-name{color:#666;}
    .iterm{margin-top:0px;}
    textarea{
        resize:none;
        border-color:#ddd;
        width: 100%;
    }
    .xianjin{
        overflow: auto;
    }
    .yinghang .right-num,.zhifubao .right-num,.xianjin .right-num{
        width: 56%;
    }
</style>
