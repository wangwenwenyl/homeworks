<template>
  <div id="app" style="overflow-Y:scroll">
	<ContractTop tle="银行面签" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	<bankHead style="margin-top:44px;width:100%;background:#fff;z-index: 999999;" v-on:childmessage="childmessage"></bankHead>
    <mt-loadmore
      :top-method="handleTopChange"
      :bottom-method="handleBottomChange"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore"
      :class="cls"
    >
      <bankInterviewBody v-bind:contracts="items" style="margin-top:0px;"></bankInterviewBody>
      <noData :class="cls" v-show="show"></noData>
    </mt-loadmore>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import bankHead from '@/components/bankHead';
import noData from '@/components/noData';
import bankInterviewBody from '@/components/bankInterviewBody';
import {Loadmore} from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import axios from 'axios';
import qs from 'qs';
export default {
  data(){
      return{
        show:false,
        titles:'所属部门',
        typetitle:'合同类型',
        items:[],
        department:'',    //所属部门
        accountNum:'',   //台账号
        contractNum:'',   //合同编号
        typeId:'',        //合同类型 0抵押1信用2质押
        userName:'',
        page:1,
        pageSize:5,
        userid:'',
        cls:'class1',
        topStatus: '',
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        i:"",
          bankInterviewuserName:'',
          bankInterviewaccountNum:'',
          bankInterviewdeptId:'',
          bankInterviewtypeId:'',
      }
  },
  created(){
    this.userid=this.$cookie.get("uid");
      //获取cookie中的查询条件
      this.bankInterviewuserName=this.$cookie.get("bankInterviewuserName");
      this.bankInterviewaccountNum=this.$cookie.get("bankInterviewaccountNum");
      this.bankInterviewdeptId=this.$cookie.get("bankInterviewdeptId");
      this.bankInterviewtypeId=this.$cookie.get("bankInterviewtypeId");
      if(this.bankInterviewuserName){
          this.userName=this.bankInterviewuserName;
      }
      if(this.bankInterviewaccountNum){
          this.accountNum=this.bankInterviewaccountNum;
      }
      if(this.bankInterviewdeptId){
          this.department=this.bankInterviewdeptId;
      }
      if(this.bankInterviewtypeId){
          this.typeId=this.bankInterviewtypeId;
      }
      this.load();
  },
  methods:{
      //下拉刷新数据列表
    handleTopChange() {
      // 加载更多数据
      setTimeout(() => {
        this.page=1;
        this.items=[];
        this.load();
        this.$refs.loadmore.onTopLoaded();
      }, 1500);
    },
    //上拉加载更多数据
    handleBottomChange() {
      // 加载更多数据
//                this.allLoaded = true;// 若数据已全部获取完毕
//                this.$refs.loadmore.onBottomLoaded();
      setTimeout(() => {
        this.page +=1;
        this.load();
        this.$refs.loadmore.onBottomLoaded();
      }, 1500);
    },
    load(){
        console.log(this.bankInterview);
        Indicator.open();
        //调取查询接口返回银行面签列表数据
      axios.post(hostapi+'/yhmq/mianqianlist',qs.stringify({
        userId:this.userid,
        userName:this.userName,
        deptId:this.department,
        typeId:this.typeId,
        accountNum:this.accountNum,
        page:this.page,
        pageSize:this.pageSize
      })).then(response=>{
        if(response.data.code=='200'){
          this.show=false;
          if(response.data.data=='' && this.page==1){
            this.show=true;
            this.allLoaded=true;
            this.items=[];
          }else{
            if(response.data.data==''){
              this.allLoaded=true;
            }
            this.items = this.items.concat(response.data.data);
            console.log(this.items);
          }
        }
          Indicator.close();
      }).catch(function(err){
        Toast('操作失败');
          Indicator.close();
      });
    },
    childmessage(userName,accountNum,deptId,typeId){
        //接收从子组件返回的查询条件
        this.userName=userName;
        this.accountNum=accountNum;
        this.department=deptId;
        this.typeId=typeId;
        //将查询的条件存入cookie
        this.bankInterviewuserName=userName;
        this.bankInterviewaccountNum=accountNum;
        this.bankInterviewdepartment=deptId;
        this.bankInterviewtypeId=typeId;
        this.$cookie.set('bankInterviewuserName', this.bankInterviewuserName, 365);
        this.$cookie.set('bankInterviewaccountNum', this.bankInterviewaccountNum, 365);
        this.$cookie.set('bankInterviewdepartment', this.bankInterviewdepartment, 365);
        this.$cookie.set('bankInterviewtypeId', this.bankInterviewtypeId, 365);
        Indicator.open();
        //调用查询接口
        axios.post(hostapi+"/yhmq/mianqianlist",qs.stringify({
        userId:this.userid,
        userName:this.userName,
        deptId:this.department,
        typeId:this.typeId,
        accountNum:this.accountNum,
        page:1,
        pageSize:5
      })).then(response=>{
        if(response.data.code=='200'){
          console.log(response);
          this.items=[];
            this.items=this.items.concat(response.data.data);
        }
            Indicator.close();
      }).catch(function(err){
          console.log(err);
            Indicator.close();
      });
    }
  },
  components:{
	'ContractTop':ContractTop,
	'bankHead':bankHead,
	'bankInterviewBody':bankInterviewBody,
	'noData':noData,
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
