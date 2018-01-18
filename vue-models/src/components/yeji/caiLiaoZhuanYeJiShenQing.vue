<template>
  <div id="app">
	<ContractTop tle="材料转业绩申请" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
      <div class="search-iterm" style="position:fixed;top:32px;background:#fff;z-index:999;width:100%;">
          <div class="search-btn" @click="trans()">
              {{ open ? '关闭' : '展开搜索' }}
          </div>
          <transition name="slider">
              <div class="search-box" v-show="open">
                  <div class="search-iterm" >
                      <div class="follow-iterm-left">
                          <label class="contract-list-name">台账号：</label>
                      </div>
                      <div class="follow-iterm-right">
                          <input type="text" class="follow-input" v-model="number"/>
                      </div>
                      <div class="big-save">
                          查询
                      </div>
                  </div>
              </div>
          </transition>
      </div>
      <mt-loadmore
          :top-method="handleTopChange"
          :bottom-method="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          :auto-fill="false"
          ref="loadmore"
          :class="cls"
      >
          <div v-for="item in list"><caiLiaoZhuanYeJiShenQingBlock  v-bind:message="item" ></caiLiaoZhuanYeJiShenQingBlock></div>
      </mt-loadmore>
	</div>
</template>
<script>
//import deptselect from '@/components/search-select';
import ContractTop from '@/components/ContractTop';
import caiLiaoZhuanYeJiShenQingBlock from '@/components/yeji/caiLiaoZhuanYeJiShenQingBlock';
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {
		openvisible:false,
		list: [],
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
      cls:'class1',
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
      scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
    }
  },
  mounted:function(){

  },
  methods:{
	loadMore() {
	  this.loading = true;
	  var oResponse='';
	  Indicator.open({
		  text: '加载中...',
		  spinnerType: 'fading-circle'
		});
	  axios.get('http://www.test.blibang.com/index/allphone', {
			params: {
			  current: this.current,
			  pagesize:10
			}
		  })
		  .then(response=>{
				console.log(response['data']['rows'])
				if(response['data']['rows'].length!=0&&this.list.length<10){
					let last = this.list.length - 1;
				for (let i = 1; i <= 5; i++) {
				  this.list.push(response['data']['rows'][last + i]);
				}
				this.loading = false;
				this.current+=1;
				}
				Indicator.close();
		  })
		  .catch(function (error) {
			console.log(error);
		  });

	},
	goTop(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	},
      handleTopChange() {
          // 加载更多数据
          setTimeout(() => {
              this.page=1;
              this.items=[];
              this.loadMore();
              this.$refs.loadmore.onTopLoaded();
          }, 1500);

      },
      handleBottomChange() {
          // 加载更多数据
          setTimeout(() => {
              this.page +=1;
              this.loadMore();
              this.$refs.loadmore.onBottomLoaded();
          }, 1500);
      },
      trans(){
          this.open=! this.open;
          if(this.open){
              this.cls="class2";
          }else{
              this.cls="class1";
          }
      },
  },
    mounted(){
        this.loadMore();
    },
  components:{
	'ContractTop':ContractTop,
    'caiLiaoZhuanYeJiShenQingBlock':caiLiaoZhuanYeJiShenQingBlock
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
    .slider-enter-active,.slider-leave-active{
        transition: all .5s;
    }
    .slider-enter,.slider-leave-active{
        transform: translateX(-100%);
        opacity:0;
    }
    .class1{
        margin-top:110px;
    }
    .class2{
        margin-top:255px;
    }
    .search-box{width:300px;margin:auto;padding:19px 0px;}
</style>
