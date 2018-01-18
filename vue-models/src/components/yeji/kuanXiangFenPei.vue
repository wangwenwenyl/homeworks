<template>
  <div id="app">
	<ContractTop tle="款项分配" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	<div style="margin-top:54px;" >
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li v-for="item in list"><kuanXiangFenPeiBlock  v-bind:message="item"></kuanXiangFenPeiBlock></li>
		</ul>
	</div>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import kuanXiangFenPeiBlock from '@/components/yeji/kuanXiangFenPeiBlock';
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
	'kuanXiangFenPeiBlock':kuanXiangFenPeiBlock
  }
}
</script>

<style scoped>
	@import "../../assets/css/server.css";
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
</style>
