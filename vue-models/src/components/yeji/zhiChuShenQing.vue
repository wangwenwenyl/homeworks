<template>
  <div id="app">
    <ContractTop tle="支出申请" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
    <tai-zhang-hao-search @dingJinTrans="dingJinTrans" @dingJinContidion="dingJinContidion" :open="open"></tai-zhang-hao-search>

    <div style="" :class="cls">
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in list"><zhiChuShenQingBlock  v-bind:message="item"></zhiChuShenQingBlock></li>
      </ul>
    </div>
	</div>
</template>
<script>
//import deptselect from '@/components/search-select';
import ContractTop from '@/components/ContractTop';
import zhiChuShenQingBlock from '@/components/yeji/zhiChuShenQingBlock';
import taiZhangHaoSearch from '@/components/yeji/taiZhangHaoSearch.vue';

import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {
		openvisible:false,
		list: [
            {
                type: "diyadai"
            },
            {
                type: "zhiyadai"
            },
            {
                type: ""
            },
            {
                type: ""
            },
        ],
		loading: false,
        current:1,
        popupVisible4: false,
        open:false,
				depts:[{
						flex: 1,
						values:['启动','暂停','开始'],
						textAlign: 'center',
						className: 'slot1',
				}],
			titles:'分配人',
			luruname:"回款录入",
      open: false,
      cls:'class1',
    }
  },
  mounted:function(){

  },
  methods:{
      loadMore() {
//          this.loading = true;
//          var oResponse='';
//          Indicator.open({
//            text: '加载中...',
//            spinnerType: 'fading-circle'
//          });
//          axios.get('http://www.test.blibang.com/index/allphone', {
//            params: {
//              current: this.current,
//              pagesize:10
//            }
//          }).then(response=>{
//              console.log( response );
//              console.log(response['data']['rows'])
//              if(response['data']['rows'].length!=0&&this.list.length<10){
//                  let last = this.list.length - 1;
//                  for (let i = 1; i <= 5; i++) {
//                      this.list.push(response['data']['rows'][last + i]);
//                  }
//                  this.loading = false;
//                  this.current+=1;
//              }
//              Indicator.close();
//          }).catch(function (error) {
//              console.log(error);
//          });

      },
      goTop(){
          document.body.scrollTop = document.documentElement.scrollTop = 0;
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
      }

  },
  components:{
	  'ContractTop':ContractTop,
    'zhiChuShenQingBlock':zhiChuShenQingBlock,
    'tai-zhang-hao-search': taiZhangHaoSearch
  }
}
</script>

<style scoped>
	@import "../../assets/css/server.css";
	.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;text-align:center;line-height:39px;border-radius:5px;margin-top:15px;}
	.mint-popup-bottom {
    width: 100%;
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
