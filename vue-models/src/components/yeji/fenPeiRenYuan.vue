<template>
  <div id="app">
	<ContractTop tle="分配人员" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	<div style="position:fixed;right:10px;top:15px;" v-on:click="openlist">编辑</div>
    <div class="search-iterm" style="position:fixed;top:24px;background:#fff;z-index:999;width:100%;padding:15px 30px 10px;">
            <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" ></deptselect>
    </div>
	<div style="margin-top:115px;" v-on:click="closelist">
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
			<li v-for="item in list"><fenPeiRenYuanBlock  v-bind:message="item"></fenPeiRenYuanBlock></li>
		</ul>
		 <div class="follow-iterm btn-box" style="margin:0px;background:#fff;padding-top:30px;padding-bottom:20px;">
             <span style="vertical-align:middle;line-height:40px;margin-right:10px;">全选<input type="radio" style="margin-left:5px;"></span>
            <div class="follow-cancel" style="width:100px;">取消</div>
            <div class="follow-sure" style="width:100px;">确定</div>
    </div>
	</div>
	</div>
</template>
<script>
import deptselect from '@/components/search-select';
import ContractTop from '@/components/ContractTop';
import fenPeiRenYuanBlock from '@/components/yeji/fenPeiRenYuanBlock';
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
    }
  },
  mounted:function(){
    document.getElementById("follow-star").style.display="none";
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
    'fenPeiRenYuanBlock':fenPeiRenYuanBlock,
     'deptselect':deptselect
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
