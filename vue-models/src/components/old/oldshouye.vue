<template>
  <div class="page-navbar" style="overflow-Y:scroll">
    <mt-navbar class="page-part" v-model="selected" style="position: relative;">
      <div>
        <img src="../../assets/img/banner.jpg" alt="" style="width:100%;">
      </div>
      <div v-show="this.type=='1'">
        <mt-navbar v-model="selected" style="width:100%;margin-top:-50px;height:50px;background:rgba(0,0,0,0.2);z-index:999;position:absolute;">
          <div class="contract-tab" style="width:100%;overflow:scroll;position: relative;">
            <mt-tab-item id="1">合同管理</mt-tab-item>
          </div>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div style="border-bottom:1px solid #ddd;" >
              <div class="contract-item" >
                <router-link :to="{name:'salesmanContracts',params:{}}" style="text-decoration: none;color:#333;">
                    <img src="../../assets/img/合同申领.png" alt="" class="contract-img">
                    <div>合同申领</div>
                </router-link>
              </div>
              <div class="contract-item" style="border-right:none;" >
                <router-link :to="{name:'salesmanContractsList',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/合同数据.png" alt="" class="contract-img" >
                  <div >合同签单</div>
                </router-link>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <div v-show="this.type!='1'">
        <mt-navbar v-model="selected" style="width:100%;margin-top:-50px;height:50px;background:rgba(0,0,0,0.2);z-index:999;position:absolute;">
          <div class="contract-tab" style="width:100%;overflow:scroll;position: relative;">
            <mt-tab-item id="1" @click.native="choiceSelected">待办事项</mt-tab-item>
            <mt-tab-item id="2" @click.native="choiceSelected">已办事项</mt-tab-item>
            <mt-tab-item id="3" @click.native="choiceSelected">业绩管理</mt-tab-item>
          </div>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <div style="border-bottom:1px solid #ddd;" >
              <div class="contract-item" v-show="this.zongjian">
                <router-link :to="{name:'heTongShenPi',params:{}}" style="text-decoration: none;color:#333;">
                    <img src="../../assets/img/合同审批.png" alt="" class="contract-img">
                    <div>合同审批</div>
                </router-link>
              </div>
              <div class="contract-item" style="border-right:none;" >
                <router-link :to="{name:'fanHeTongShenPi',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/返合同审批.png" alt="" class="contract-img" >
                  <div >返合同审批</div>
                </router-link>
              </div>
            </div>
            <div style="border-bottom:1px solid #ddd;"  v-show="this.zongjian">
              <div class="contract-item" >
                <router-link :to="{name:'baoBeiShenPiOld',params:{}}" style="text-decoration: none;color:#333;">
                    <img src="../../assets/img/报备审批.png" alt="" class="contract-img">
                    <div>报备审批</div>
                </router-link>
              </div>
              <div class="contract-item" style="border-right:none;" >
                <router-link :to="{name:'cheDanShenPi',params:{}}" style="text-decoration: none;color:#333;">
                    <img src="../../assets/img/作废审批.png" alt="" class="contract-img" >
                    <div >作废/撤单审批</div>
                </router-link>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
          <div style="border-bottom:1px solid #ddd;" >
            <div class="contract-item" v-show="this.zongjian">
              <router-link :to="{name:'contractApprovalYBP',params:{}}" style="text-decoration: none;color:#333;">
                <img src="../../assets/img/合同审批.png" alt="" class="contract-img">
                <div>合同审批</div>
              </router-link>
            </div>
            <div class="contract-item" style="border-right:none;" >
              <router-link :to="{name:'fanHeTongShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                <img src="../../assets/img/返合同审批.png" alt="" class="contract-img" >
                <div >返合同审批</div>
              </router-link>
            </div>
          </div>
          <div style="border-bottom:1px solid #ddd;" v-show="this.zongjian">
            <div class="contract-item" >
              <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                <img src="../../assets/img/报备审批.png" alt="" class="contract-img">
                <div>报备审批</div>
              </router-link>
            </div>
            <div class="contract-item" style="border-right:none;" >
              <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                <img src="../../assets/img/作废审批.png" alt="" class="contract-img" >
                <div >作废/撤单审批</div>
              </router-link>
            </div>
          </div>
        </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div style="border-bottom:1px solid #ddd;" >
              <div class="contract-items" v-show="this.zongjian">
                <router-link :to="{name:'contractApprovalYBP',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/业绩录入.png" alt="" class="contract-img">
                  <div>业绩录入</div>
                </router-link>
              </div>
              <div class="contract-items"  >
                <router-link :to="{name:'fanHeTongShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/定金录入.png" alt="" class="contract-img" >
                  <div >定金录入</div>
                </router-link>
              </div>
              <div class="contract-items" style="border-right:none;" >
                <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/业绩调拨.png" alt="" class="contract-img">
                  <div>业绩调拨</div>
                </router-link>
              </div>
            </div>
            <div style="border-bottom:1px solid #ddd;" v-show="this.zongjian">
              <div class="contract-items"  >
                <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/支出查看.png" alt="" class="contract-img" >
                  <div >支出查看</div>
                </router-link>
              </div>
              <div class="contract-items" >
                <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/回款查看.png" alt="" class="contract-img">
                  <div>回款查看</div>
                </router-link>
              </div>
              <div class="contract-items" style="border-right:none;" >
                <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/业绩驳回.png" alt="" class="contract-img" >
                  <div >业绩驳回</div>
                </router-link>
              </div>
            </div>
            <div style="border-bottom:1px solid #ddd;" v-show="this.zongjian">
              <div class="contract-items" >
                <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/支出申请.png" alt="" class="contract-img">
                  <div>支出申请</div>
                </router-link>
              </div>
              <div class="contract-items" >
                <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/退定金申请.png" alt="" class="contract-img" >
                  <div>退定金申请</div>
                </router-link>
              </div>
              <div class="contract-items" style="border-right:none;" >
                <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/业绩查看.png" alt="" class="contract-img">
                  <div>业绩查看</div>
                </router-link>
              </div>
            </div>
            <div style="border-bottom:1px solid #ddd;" v-show="this.zongjian">
              <div class="contract-items"  >
                <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/业绩统计.png" alt="" class="contract-img" >
                  <div>业绩统计</div>
                </router-link>
              </div>
              <div class="contract-items" >
                <router-link :to="{name:'baoBeiShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/定金转业绩申请.png" alt="" class="contract-img">
                  <div>定金转业绩申请</div>
                </router-link>
              </div>
              <div class="contract-items" style="border-right:none;">
                <router-link :to="{name:'cheDanShenPiYiBan',params:{}}" style="text-decoration: none;color:#333;">
                  <img src="../../assets/img/材料费转业绩申请.png" alt="" class="contract-img" >
                  <div>材料费转业绩</div>
                </router-link>
              </div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </mt-navbar>
    <ContractTools style="margin-top:-3px;"></ContractTools>
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
      zongjian:'',
      selected: '1',
      type:'',
      userId:'',
      uuid:'',
      uname:'',
      authArr:'',
      uaccount:'',
      authDz:{'1':'待办事项','2':'已办事项','3':'合同管理','4':'客户管理','5':'产品管理','6':'业绩管理','7':'统计管理'},
    }
  },
  created:function(){
    // 获取到缓存的上次选中的tab项
    this.selected = this.$cookie.get('selected') || "1";

    this.type=this.$route.params.type;
    this.userId=this.$route.params.userid;
    this.uuid=this.$route.params.uuid;
    this.uname=this.$route.params.uname;
    this.uaccount=this.$route.params.uaccount;
    this.$cookie.set('uid',this.userId, 365);
    this.$cookie.set('utype',this.type, 365);
    this.$cookie.set('uname',this.uname, 365);
    this.$cookie.set('uuid',this.uuid, 365);
    this.$cookie.set('uaccount',this.uaccount, 365);
    if(this.type=="3"){
      this.zongjian=false;
    }else{
      this.zongjian=true;
    }
   // alert(this.$cookie.get('uid'));
//      axios.post('http://tsapi.hcxzdanbao.com/auth/userauth',qs.stringify({
//            userId:this.userId,
//          })).then(response=>{
//            if(response.data.code=='200'){
//              this.authArr=response.data.data;
//              if(this.authArr.hasOwnProperty("1")){
//                this.selected='1';
//              }else if(this.authArr.hasOwnProperty("2")){
//                this.selected='2';
//              }else if(this.authArr.hasOwnProperty("3")){
//                this.selected='3';
//              }else if(this.authArr.hasOwnProperty("4")){
//                this.selected='4';
//              }
//            }
//          }).catch(function(err){
//            console.log(err);
//          });
            },
  mounted:function(){

  },
  updated(){

  },
  methods:{
    contain:function($arr,$str){
      for(var index in $arr){
          for(var arrIndex in $arr[index]){
            if($arr[index][arrIndex]==$str){
              return true
            }
         }
      }
      return false;
    },

  },
  components:{
    'ContractTools':ContractTools,
    'notice':notice,
  }
}
</script>
<style scoped>
  @import "../../assets/css/server.css";
  .page-part{width:100%;}
    .mint-tab-item{width:33.3%;}
    .is-selected{border-bottom:4px solid #FBAF37 !important;margin-bottom:0px;color:#fff !important;}
  .contract-item{width:49%;display:inline-block;text-align: center;border-right:1px solid #ddd;padding:23px 0px;color:#333;}
  .contract-items{width:32%;display:inline-block;text-align: center;border-right:1px solid #ddd;padding:23px 0px;color:#333;}
  .contract-img{width:40px;margin-bottom:5px;}
  /*.contract-tab{width:100%;height:56px;margin-top:-56px;position: relative;z-index:999;background:rgba(0,0,0,0.2);}*/
  .contract-tab{width:100%;height:50px;position: relative;z-index:999;background:rgba(0,0,0,0.2);}
  .mint-tab-item{color:#fff;font-weight:bold;}
  .mint-navbar .mint-tab-item{padding:15px 0px;}
</style>


