<template>
  <div id="app">
	<ContractTop tle="业绩列表" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	<div class="search-iterm" style="position:fixed;top:24px;background:#fff;z-index:999;width:100%;padding:15px 30px 10px;">
			<div style="text-align:center;">
					<label>台账号:</label>
					<input class="follow-input" style="width:72%;margin-left:20px;">
			</div>
			<div class="big-save">
					查询
			</div>
	</div>
	<div style="margin-top:160px;" v-on:click="closelist">
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li v-for="item in list"><yeJiListBlock  v-bind:message="item"   v-bind:readOrNo="false"></yeJiListBlock></li>
		</ul>
		<!--<div style="background:#fff;text-align:center;padding-top:15px;margin-bottom:-10px;">-->
			<!--<span style="color:#666;">当前可分配金额(元):</span><span style="color:#fbaf37;">7634</span>-->
		<!--</div>-->
		 <!--<div class="follow-iterm btn-box" style="margin:0px;background:#fff;padding-top:30px;padding-bottom:20px;">-->
					<!--<div class="follow-cancel" >取消</div>-->
					<!--<div class="follow-sure" >确定</div>-->
    <!--</div>-->
	</div>

	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import yeJiListBlock from '@/components/yeji/yeJiListBlock';
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
    }
  },
  mounted:function(){

  },
  methods:{
	openlist:function(){
		this.openvisible=true;
	},
	closelist:function(){
		this.openvisible=false;
	},
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
	}

  },
  components:{
	'ContractTop':ContractTop,
	'yeJiListBlock':yeJiListBlock
  }
}
</script>

<style scoped>
	@import "../../assets/css/server.css";
	.mint-popup-bottom {
    width: 100%;
	}
		.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
	text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
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
</style>
