<!--合同申领-->
<template>
  <div id="appBlock" style="overflow-Y:scroll;height:100%">
    <div id="refreshContainer" class="mui-content mui-scroll-wrapper">
      <div class="follow-space"></div>
      <ul class="contract">
        <li>
          <div class="item-shenling-li">
            <label>抵押合同:</label>
            <input id="putDiya" v-model="messages1" type="number" :placeholder="holder1" @focus="cleared1()"
                   @blur="filler1()">
          </div>
        </li>
        <li>
          <div class="item-shenling-li">
            <label>信用合同:</label>
            <input id="putXinyong" v-model="messages2" type="number" :placeholder="holder2" @focus="cleared2()"
                   @blur="filler2()">
          </div>
        </li>
        <li>
          <div class="item-shenling-li">
            <label>质押合同:</label>
            <input id="putZhiya" v-model="messages3" type="number" :placeholder="holder3" @focus="cleared3()"
                   @blur="filler3()">
          </div>
        </li>
        <li>
          <div class="item-shenling-li">
            <label>申请原因:</label>
            <textarea @click="moveKey($event)" v-model="textmessage" style="border: solid 1px #cccccc;resize:none;"
                      id="putReason" name="" rows="5" cols="" placeholder="简述你的原由......	"></textarea>
          </div>
        </li>
        <li style="text-align: center;">
          <div id="btnApply" class="item-shenling-btn" @click="tijiao()">提交申请</div>
        </li>
      </ul>
      <div v-show="show" style="margin-top:44px;">
        <noData></noData>
      </div>
    </div>
  </div>
</template>
<script>
  import noData from '@/components/noData';
  import {InfiniteScroll} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import axios from 'axios';
  import {Button} from 'mint-ui';
  import qs from 'qs';
  import {popup} from 'mint-ui';
  import {Loadmore} from 'mint-ui';
  import {MessageBox} from 'mint-ui';

  export default {
    data () {
      return {
        userid: '',//孔祥宇
        uuid: '',
        username: '',
        popupVisible1: false,
        items: [],
        page: 1,
        show: false,
        allLoaded: false,//是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        holder1: "",
        holder2: "",
        holder3: "",
        diyaNum: "",
        xinyongNum: "",
        zhiyaNum: "",
        messages1: '',
        messages2: '',
        messages3: '',
        textmessage: "",
      }
    },
    created(){
      this.userid = this.$cookie.get("uid");
      this.uuid = this.$cookie.get("uuid");
      this.username = this.$cookie.get("uname");
      this.load();
    },
    methods: {
      cleared1(){
        this.holder1 = "";
      },
      cleared2(){
        this.holder2 = "";
      },
      cleared3(){
        this.holder3 = "";
      },
      filler1(){
        if (this.messages1 == "") {
          this.holder1 = "您最多可申请" + this.diyaNum + "份合同"
        }
      },
      filler2(){
        if (this.messages2 == "") {
          this.holder2 = "您最多可申请" + this.xinyongNum + "份合同"
        }
      },
      filler3(){
        if (this.messages3 == "") {
          this.holder3 = "您最多可申请" + this.zhiyaNum + "份合同"
        }
      },
      tijiao(){
        if (parseInt(this.messages1) > this.diyaNum || parseInt(this.messages1) < 0 || parseInt(this.messages1) > 5) {
          MessageBox.alert('请输入正确的合同数量!', '提示');
          return false;
        } else if (parseInt(this.messages2) > this.xinyongNum || parseInt(this.messages2) < 0 || parseInt(this.messages2) > 5) {
          MessageBox.alert('请输入正确的合同数量!', '提示');
          return false;
        } else if (parseInt(this.messages3) > this.zhiyaNum || parseInt(this.messages3) < 0 || parseInt(this.messages3) > 5) {
          MessageBox.alert('请输入正确的合同数量!', '提示');
          return false;
        } else if (this.messages1 == "" && this.messages2 == "" && this.messages3 == "") {
          MessageBox.alert('请输入正确的合同数量!', '提示');
          return false;
        } else if (this.messages1 == 0 && this.messages2 == 0 && this.messages3 == 0) {
          MessageBox.alert('请输入正确的合同数量!', '提示');
          return false;
        }
        //赋值为0是因为如果不填写某项数量就提交会失败
        if (this.messages1 == "" || this.messages1 == null) {
          this.messages1 = 0;
        }
        if (this.messages2 == "" || this.messages2 == null) {
          this.messages2 = 0;
        }
        if (this.messages3 == "" || this.messages3 == null) {
          this.messages3 = 0;
        }
        this.loading = true;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        axios.get(host + "/app/applycontract?userid=" + this.userid + "&dcount=" + this.messages1 + "&zcount=" + this.messages3 + "&wcount=" + this.messages2 + "&reason=" + this.textmessage + "&uuid=" + this.uuid, qs.stringify({})).then(response => {
          if (response.data.data.code == '200') {
            Toast("申请成功");
            this.load();
          } else {
            Toast("操作失败");
          }
          Indicator.close();
          console.log(response);
        }).catch(function (error) {
          Toast("网络超时");
          Indicator.close();
        });
      },
      load() {
        this.loading = true;
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        });
        axios.get(host + "/app/availablecontract?uname=" + this.username + "&userid=" + this.userid, qs.stringify({})).then(response => {
          if (response.data.data.dcount > 5) {
            this.diyaNum = 5;
          } else {
            this.diyaNum = response.data.data.dcount
          }
          if (response.data.data.wcount > 5) {
            this.xinyongNum = 5;
          } else {
            this.xinyongNum = response.data.data.wcount;
          }
          if (response.data.data.zcount > 5) {
            this.zhiyaNum = 5;
          } else {
            this.zhiyaNum = response.data.data.zcount;
          }
          this.messages1 = "";
          this.messages2 = "";
          this.messages3 = "";
          this.textmessage = "";
          this.holder1 = "您最多可申请" + this.diyaNum + "份合同";
          this.holder2 = "您最多可申请" + this.xinyongNum + "份合同";
          this.holder3 = "您最多可申请" + this.zhiyaNum + "份合同";
          Indicator.close();
        }).catch(function (error) {
          Toast("网络超时");
          Indicator.close();
        });
      },
    },
    components: {
      "noData": noData,
      'v-loadmore': Loadmore,
    }
  }
</script>
<style scoped>
  #appBlock {
    width: 100%;
  }

  body {
    background: #efeff4;
  }

  .contract {
    padding: 24px;
  }

  ul li {
    list-style: none;
  }

  .mui-spinner {
    width: 32px;
    height: 32px;
  }

  .height-300 {
    height: 150px;
  }

  .item-dingdan {
    margin-bottom: 9px;

    background: white;
  }

  .item-dingdan-title {
    margin-top: 10px;
  }

  .item-dingdan-number {
    margin-top: 14px;
  }

  .item-dingdan-button {
    background: #fbaf37;
    text-align: center;
    line-height: 27px;
    color: white;
    border-radius: 27px;
    float: right;
    width: 84px;
    height: 27px;
    font-family: "微软雅黑";
  }

  .item-dingdan-date {
    margin-top: 12px;
  }

  .item-dingdan-post {
    margin-top: 10px;
  }

  .item-dingdan-isAgree {
    font-size: 14px;
    font-family: "微软雅黑";
    color: #666666;
    margin-left: 24px;
    overflow: hidden;
  }

  .item-dingdan-img {
    vertical-align: middle;
  }

  .item-shenling {
    position: absolute;

    width: 100%;
    background: white;
    margin-bottom: 0px;
  }

  .item-shenling-ul {
    background: white;
    height: 615px;
    padding: 24px 24px 0 24px;
  }

  .item-shenling-li {
    overflow: hidden;
    line-height: 38px;
    margin-bottom: 9px;
  }

  .item-shenling-li > input {
    width: 62.7%;
    height: 36px;
    padding: 0 0 0 12px;
    margin-bottom: 0px;
    float: right;
    font-family: "微软雅黑";
    font-size: 14px;
    color: gray;
    /*margin-left: 5.3%;*/
    border: 1px solid rgb(204, 204, 204);
  }

  .item-shenling-li > label {
    font-family: "微软雅黑";
    font-size: 14px;
    color: #333333;
    /*font-weight: bold;*/
  }

  .item-shenling-li textarea {
    border: 0.5px solid rgba(0, 0, 0, .2);
    font-size: 14px;
    font-family: "微软雅黑";
    color: gray;
    line-height: 21px;
    width: 62.7%;
    float: right;
    height: 72px;
    padding: 7.5px 0 0 12px;

  }

  .item-shenling-btn {
    font-family: "微软雅黑";
    font-size: 16px;
    color: white;
    height: 39px;
    width: 83%;
    margin-left: 8.5%;
    margin-top: 15px;
    font-weight: bold;
    margin-right: 8px;
    background: #fabf37;
    border-radius: 5px;
    text-align: center;
    line-height: 39px;
  }

  .item-back-img {
    display: inline-block;
    height: 18px;
    width: 9px;
    float: left;
  }

  .mui-slider-progress-bar {
    background: none !important;
  }

  .mui-active {

    border-bottom: 2px solid #fbaf37 !important;

  }

  .mui-slider-item {
    border: none !important;
  }

  .imgBack {
    position: fixed;
    left: 10px;
    top: 6px;
    width: 9px;
    height: 16px;
    z-index: 4;
    color: black;
  }

  .mui-active {
    color: #FBAF37 !important;
  }

  .hiddenLi {
    overflow: hidden;
    padding: 0 24px;
  }

  .topbarTip {
    color: #333333;
    font-size: 14px;
  }
</style>
