<template>
  <div id="app">
    <ContractTop tle="业绩调拨" tleurl="/index" style="position:fixed;top:0px;z-index: 999;"></ContractTop>
    <tai-zhang-hao-search @dingJinTrans="dingJinTrans" @dingJinContidion="dingJinContidion" :open="open"></tai-zhang-hao-search>


    <mt-loadmore
      :top-method="handleTopChange"
      :bottom-method="handleBottomChange"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore"
      :class="cls"
    >
      <div>
        <ul>
          <li v-for="item in items"><yeJiDiaoBoList  v-bind:message="item" :luRuName="luRuName"></yeJiDiaoBoList></li>
        </ul>
      </div>
      <div v-show="show" :class="cls">
        <noData></noData>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
  import ContractTop from '@/components/ContractTop';
  import axios from 'axios';
  import taiZhangHaoSearch from '@/components/yeji/taiZhangHaoSearch.vue';
  import noData from '@/components/noData';
  import yeJiDiaoBoList from '@/components/yeji/yeJiDiaoBoList.vue';

  import {Toast} from 'mint-ui';

  export default {
    data () {
      return {
        userid:'',
        accountNum:'',
        classor:true,
        page:1,
        pageSize:15,
        allLoaded:false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        items:[
          {

          },
          {

          },
          {

          }
        ],
        show:false,
        open: false,
        cls:'class1',
        luRuName: "业绩调拨"
      }
    },
    mounted:function(){
      this.userid=this.$cookie.get('uid');
      this.load ();
    },
    methods:{
      tabshow(){
        if(this.classor){this.classor=false;}else{this.classor=true;}
      },
      goTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        // this.allLoaded = true;// 若数据已全部获取完毕
        // this.$refs.loadmore.onBottomLoaded();
        setTimeout(() => {
          this.page +=1;
          this.load();
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      load(){
//        axios.get('http://www.test.blibang.com/index/allphone',JSON.stringify({
//          userId:this.userid,
//          accountNum:this.accountNum,
//          page:this.page,
//          pageSize:this.pageSize,
//        })).then(response=>{
//          if(response.data.code=='200'){
//            this.show=false;
//            if(response.data.data=='' && this.page==1){
//              this.show=true;
//              this.allLoaded = true;
//              this.items=[];
//            }else{
//              this.items = this.items.concat(response.data.data);
//              console.log(response.data.data);
//              if(response.data.data==''){
//                this.allLoaded = true;
//              }
//            }
//          }
//        }).catch(function(err){
//          Toast('操作失败');
//        });
      },

      //控制查询框显示
      dingJinTrans(obj){
        this.open = !obj.open;
        if(this.open){
          this.cls="class2";
        }else{
          this.cls="class1";
        }
      },
      dingJinContidion(obj){
        this.items=[];
        this.accountNum = obj.accountNum;
        this.load();
        this.open=false;
        this.cls='class1';
      },
    },
    components:{
      'ContractTop':ContractTop,
      'tai-zhang-hao-search': taiZhangHaoSearch,
      'noData': noData,
      'yeJiDiaoBoList':yeJiDiaoBoList
    }
  }
</script>

<style scoped>
  @import "../../assets/css/server.css";
  .big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
    text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
  .mint-popup-bottom {
    width: 100%;
  }
  .mint-loadmore-top{
    marign-top:40px !important;
  }
  .arrow-up {
    width: 0px;
    height: 0px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #efeff4;
    /*以下属性可以是IE5兼容*/
    font-size: 0px;
    line-height: 0px;
    margin-top:-12px;
    margin-left:80px;
  }
  .class1{
    margin-top:92px;
  }
  .class2{
    margin-top:230px;
  }

</style>
