<template>
  <div id="app" style="overflow-Y:scroll;">
      <ContractTop tle="银行客户" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
      <ContractHead v-on:open="trans" v-bind:open="open" v-on:contidion="getContidion" style="position:fixed;top:54px;z-index:999;width:100%;"></ContractHead>
      <mt-loadmore
              :top-method="handleTopChange"
              :bottom-method="handleBottomChange"
              :bottom-all-loaded="allLoaded"
              :auto-fill="false"
              ref="loadmore"
              :class="cls"
              :style="{'-webkit-overflow-scrolling': scrollMode}"
      style="margin-top:98px;">
	  <li v-for="item in items"><ContractBlock  v-bind:message="item" ></ContractBlock></li>
          <noData v-show="show" :class="cls"></noData>
      </mt-loadmore>
      <!--<mt-button type="danger" style="position:fixed;right:30px;bottom:50px;color:#fff;" @click="goTop">回到顶部</mt-button>-->
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import ContractHead from '@/components/ContractHead';
import ContractBlock from '@/components/ContractBlock';
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
import { Button } from 'mint-ui';
import qs from 'qs';
import noData from '@/components/noData';
import { Toast } from 'mint-ui';

export default {
  data () {
  return {
      userid:'',
      open:false,
	  popupVisible4: false,
      show:false,
      cls:'class1',
	  loading: false,
	  items:[],
      page:1,
      pageSize:15,
      typeId:'',
      custName:'',
      state:'',
      department:'',
      accountNum:'',

      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    }
  },
  mounted(){
//      this.checkCookie();
     this.userid = this.$cookie.get('uid');
//      console.log(this.userid);
      this.load();
  },
  methods:{
      getCookie(cname){
          var name = cname + "=";
          var ca = document.cookie.split(";");
          console.log(ca);
          console.log("");
          for(var i=0;i<ca.length;i++){
              var c = ca[i];
              console.log(c);
              if(c=='') return "";
              while(c.charAt(0)=='') c=c.substring(1);
              if(c.indexOf(name)!=-1) return c.substring(name.length,c.length);
          }
          return "";
      },
      getContidion(state,custName,department,type,accountNum){
          this.state=state;
          this.custName=custName;
          this.department=department;
          this.typeId=type;
          this.accountNum=accountNum;
          this.items=[];
          this.load();
          this.open=false;
          this.cls='class1';
      },
      trans(open){
//          console.log("open:"+open);
          if(open){
              this.cls="class2";
          }else{
              this.cls="class1";
          }
          this.open = open;
      },
	  load() {
          this.loading = true;
          Indicator.open({
              text: '加载中...',
              spinnerType: 'fading-circle'
          });
          axios.post(hostapi+'/yhmq/userlist ', qs.stringify({
              page:this.page,
              pageSize:this.pageSize,
              userId:this.userid,
              department:this.department,
              state:this.state,
              custName:this.custName,
              typeId:this.typeId,
              accountNum:this.accountNum,
		  })).then(response=>{
              if(response.data.code=='200'){
                  this.scrollMode = "touch";
                  this.show=false;
                  if(response.data.data=='' && this.page==1){
//                      this.show=true;
                      this.allLoaded=true;
                      this.items=[];
                      this.show=true;
                  }else{
                      if(response.data.data==''){
                          this.allLoaded=true;
                      }
                      this.items = this.items.concat(response.data.data);
                            console.log(response.data.data);
//                            console.log(this.items);
                  }
              }
              Indicator.close();
		  }).catch(function (error) {
              Toast('操作失败');
		  });
      },
      handleTopChange() {
          // 加载更多数据
          setTimeout(() => {
              this.page=1;
              this.items=[];
              this.load();
              this.$refs.loadmore.onTopLoaded();
          }, 1500);

      },
      handleBottomChange() {
          // 加载更多数据
          setTimeout(() => {
              this.page +=1;
              this.load();
              this.$refs.loadmore.onBottomLoaded();
          }, 1500);
      },
      goTop(){
          document.body.scrollTop = document.documentElement.scrollTop = 0;
      },
  },
  components:{
      'ContractTop':ContractTop,
      'ContractBlock':ContractBlock,
      'ContractHead':ContractHead,
      'noData':noData,
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
	.mint-popup-bottom {
        width: 100%;
    }
    li{
        list-style-type: none;
    }
    /*.class1{*/
        /*margin-top:88px;*/
    /*}*/
    /*.class2{*/
        /*margin-top:420px;*/
    /*}*/
</style>
