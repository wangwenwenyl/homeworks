<template>
  <div class="page-navbar" style="overflow-Y:scroll">
    <mt-navbar class="page-part" v-model="selected" style="position: relative;">
      <div>
        <img src="../assets/img/banner.jpg" alt="" style="width:100%;">
      </div>
      <mt-navbar v-model="selected"
                 style="width:100%;margin-top:-53px;height:50px;background:rgba(0,0,0,0.2);z-index:999;position:absolute;">
        <div class="contract-tab" style="width:500px;overflow:scroll;position: relative;">
          <mt-tab-item v-for="(item,index) in authArr" v-bind:id="index"
                       v-show="((type==8)&&(index==1 || index==2 || index==3 || index==4)) ||((type==7)&&(index==1 || index==2 || index==3))">
            {{authDz[index]}}
          </mt-tab-item>
          <!-- <mt-tab-item id="2">已办事项</mt-tab-item>
          <mt-tab-item id="3">待填</mt-tab-item>
          <mt-tab-item id="4">待填</mt-tab-item> -->
        </div>
      </mt-navbar>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div style="border-bottom:1px solid #ddd;" v-show="type==8">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'1.1')))">
            <router-link :to="{name:'returncontract',params:{}}" class="main-link">
              <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
              <div>返合同审批</div>
            </router-link>
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'1.2')))&&false">
            <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
            <div>支出审批</div>
          </div>
        </div>
        <div style="border-bottom:1px solid #ddd;" v-show="type==7">
          <div class="contract-item" v-show="((type==7 && contain(authArr,'1.1')))">
            <router-link :to="{name:'returncontract',params:{}}" class="main-link">
              <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
              <div>返合同审批</div>
            </router-link>
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==7 && contain(authArr,'1.2')))">
            <router-link :to="{name:'baobeishenpi',params:{}}" class="main-link">
              <img src="../assets/img/报备审批.png" alt="" class="contract-img">
              <div>报备审批</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/baobeishenpi" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/报备审批.png" alt="" class="contract-img">-->
              <!--<div>报备审批</div>-->
            <!--</a>-->
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div style="border-bottom:1px solid #ddd;" v-show="type==8">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'2.1')))">
            <router-link :to="{name:'fanhetongyiban',params:{}}" class="main-link">
              <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
              <div>返合同审批</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/fanhetongyiban" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/返合同审批.png" alt="" class="contract-img">-->
              <!--<div>返合同审批</div>-->
            <!--</a>-->
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'2.2')))&&false">
            <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
            <div>支出审批</div>
          </div>
        </div>
        <div style="border-bottom:1px solid #ddd;" v-show="type==7">
          <div class="contract-item" v-show="((type==7 && contain(authArr,'2.1')))">
            <router-link :to="{name:'fanhetongyiban',params:{}}" class="main-link">
              <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
              <div>返合同审批</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/fanhetongyiban" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/返合同审批.png" alt="" class="contract-img">-->
              <!--<div>返合同审批</div>-->
            <!--</a>-->
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==7 && contain(authArr,'2.2')))">
            <router-link :to="{name:'baobeiyiban',params:{}}" class="main-link">
              <img src="../assets/img/报备审批.png" alt="" class="contract-img">
              <div>报备审批</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/baobeiyiban" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/返合同审批.png" alt="" class="contract-img">-->
              <!--<div>报备审批</div>-->
            <!--</a>-->
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div style="border-bottom:1px solid #ddd;" v-show="type==8">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'3.1')))">
            <router-link :to="{name:'ContractData',params:{}}" class="main-link">
              <img src="../assets/img/合同数据.png" alt="" class="contract-img">
              <div>合同数据</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/contractdata" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/合同数据.png" alt="" class="contract-img">-->
              <!--<div>合同数据</div>-->
            <!--</a>-->
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'3.2')))">
            <router-link :to="{name:'bankInterview',params:{}}" class="main-link">
              <img src="../assets/img/银行面签.png" alt="" class="contract-img">
              <div>银行面签</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/bankInterview" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/银行面签.png" alt="" class="contract-img">-->
              <!--<div>银行面签</div>-->
            <!--</a>-->
          </div>
        </div>
        <div style="border-bottom:1px solid #ddd;" v-show="type==7">
          <div class="contract-item" v-show="((type==7 && contain(authArr,'3.1')))">
            <router-link :to="{name:'ContractData',params:{}}" class="main-link">
              <img src="../assets/img/合同数据.png" alt="" class="contract-img">
              <div>合同数据</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/contractdata" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/合同数据.png" alt="" class="contract-img">-->
              <!--<div>合同数据</div>-->
            <!--</a>-->
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==7 && contain(authArr,'3.2')))">
            <router-link :to="{name:'contractbaobei',params:{}}" class="main-link">
              <img src="../assets/img/报备数据.png" alt="" class="contract-img">
              <div>报备数据</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/contractbaobei" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/报备数据.png" alt="" class="contract-img">-->
              <!--<div>报备数据</div>-->
            <!--</a>-->
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div style="border-bottom:1px solid #ddd;" v-show="type==8">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'4.1')))">
            <router-link :to="{name:'bankClient',params:{}}" class="main-link">
              <img src="../assets/img/银行客户.png" alt="" class="contract-img">
              <div>银行客户</div>
            </router-link>
            <!--<a href="http://ts.hcxzdanbao.com/vue/#/bankClient" style="color:#333;text-decoration:none;">-->
              <!--<img src="../assets/img/银行客户.png" alt="" class="contract-img">-->
              <!--<div>银行客户</div>-->
            <!--</a>-->
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        <div style="border-bottom:1px solid #ddd;" v-show="type==8">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'5.1')))&&false">
            <img src="../assets/img/合同审批.png" alt="" class="contract-img">
            <div>银行产品</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="6">
        <div style="border-bottom:1px solid #ddd;">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'6.1')))&&false">
            <img src="../assets/img/合同审批.png" alt="" class="contract-img">
            <div>批贷管理</div>
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'6.2')))&&false">
            <img src="../assets/img/返合同审批.png" alt="" class="contract-img">
            <div>非正常批贷管理</div>
          </div>
        </div>
        <div style="border-bottom:1px solid #ddd;">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'6.3')))&&false">
            <img src="../assets/img/报备审批.png" alt="" class="contract-img">
            <div>款项录入</div>
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'6.4')))&&false">
            <img src="../assets/img/作废审批.png" alt="" class="contract-img">
            <div>支出查看</div>
          </div>
        </div>
        <div style="border-bottom:1px solid #ddd;">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'6.5')))&&false">
            <img src="../assets/img/报备审批.png" alt="" class="contract-img">
            <div>回款查看</div>
          </div>
          <div class="contract-item" style="border-right:none;" v-show="((type==8 && contain(authArr,'6.6')))&&false">
            <img src="../assets/img/作废审批.png" alt="" class="contract-img">
            <div>业绩查看</div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="7">
        <div style="border-bottom:1px solid #ddd;">
          <div class="contract-item" v-show="((type==8 && contain(authArr,'7.1')))&&false">
            <img src="../assets/img/合同审批.png" alt="" class="contract-img">
            <div>银行面签</div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <ContractTools></ContractTools>
    <notice></notice>
  </div>
</template>
<script>
  import ContractTools from '@/components/ContractTools';
  import notice from '@/components/notice';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    name: 'page-navbar',
    data () {
      return {
        selected: '1',
        type: '',
        userId: '',
        uuid: '',
        uname: '',
        authArr: '',
        uaccount: '',
        authDz: {'1': '待办事项', '2': '已办事项', '3': '合同管理', '4': '客户管理', '5': '产品管理', '6': '业绩管理', '7': '统计管理'},
      }
    },
    created: function () {

      this.type = this.$route.params.type;
      this.userId = this.$route.params.userid;
      this.uuid = this.$route.params.uuid;
      this.uname = this.$route.params.uname;
      this.uaccount = this.$route.params.uaccount;
      this.$cookie.set('uid', this.userId, 365);
      this.$cookie.set('utype', this.type, 365);
      this.$cookie.set('uname', this.uname, 365);
      this.$cookie.set('uuid', this.uuid, 365);
      this.$cookie.set('uaccount', this.uaccount, 365);
      // alert(this.$cookie.get('uid'));
      axios.post(hostapi + '/auth/userauth', qs.stringify({
        userId: this.userId,
      })).then(response => {
        if (response.data.code == '200') {
          this.authArr = response.data.data;
          if (this.authArr.hasOwnProperty("1")) {
            this.selected = '1';
          } else if (this.authArr.hasOwnProperty("2")) {
            this.selected = '2';
          } else if (this.authArr.hasOwnProperty("3")) {
            this.selected = '3';
          } else if (this.authArr.hasOwnProperty("4")) {
            this.selected = '4';
          }
        }
      }).catch(function (err) {
        console.log(err);
      });
    },
    mounted: function () {

    },
    methods: {
      contain: function ($arr, $str) {
        for (var index in $arr) {
          for (var arrIndex in $arr[index]) {
            if ($arr[index][arrIndex] == $str) {
              return true
            }
          }
        }
        return false;
      }
    },
    components: {
      'ContractTools': ContractTools,
      'notice': notice,
    }
  }
</script>
<style scoped>
  @import "../assets/css/server.css";

  .main-link {
    text-decoration: none;
    color: #333;
  }

  .page-part {
    width: 100%;
  }

  .mint-tab-item {
    width: 125px;
  }

  .is-selected {
    border-bottom: 4px solid #FBAF37 !important;
    margin-bottom: 0px;
    color: #fff !important;
  }

  .contract-item {
    width: 49%;
    display: inline-block;
    text-align: center;
    border-right: 1px solid #ddd;
    padding: 23px 0px;
    color: #333;
  }

  .contract-img {
    width: 40px;
    margin-bottom: 5px;
  }

  /*.contract-tab{width:100%;height:56px;margin-top:-56px;position: relative;z-index:999;background:rgba(0,0,0,0.2);}*/
  .contract-tab {
    width: 100%;
    height: 50px;
    position: relative;
    z-index: 999;
    background: rgba(0, 0, 0, 0.2);
  }

  .mint-tab-item {
    color: #fff;
    font-weight: bold;
  }

  .mint-navbar .mint-tab-item {
    padding: 15px 0px;
  }
</style>


