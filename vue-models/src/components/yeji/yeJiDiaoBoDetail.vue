<template>
  <div id="app">
	<ContractTop tle="业绩调拨" tleurl="/index" style="position:fixed;top:0px;"></ContractTop>
	<div class="search-iterm" style="position:fixed;top:36px;background:#fff;z-index:999;width:100%;padding:15px 20px 10px;">
			<div style="position:relative;overflow:hidden;margin-bottom:10px;">
				<div class="follow-iterm">
          <div class="follow-iterm-left">
							<label>调拨总计（元）：</label>
					</div>
					<div class="follow-iterm-right" style="float:right;">
							<input class="follow-input">
					</div>
				</div>
			</div>
			 <div style="position:relative;">
          <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-bind:staror="false" ></deptselect>
      </div>
			<div class="big-save">
					确认调拨
			</div>
      <ul>
        <li>可调拨额度为 <span class="fbb">20000</span> 元</li>
        <li>调拨额度最多为可调拨额度的 <span class="fbb">50%</span> </li>
      </ul>
	</div>
	</div>
</template>
<script>
import deptselect from '@/components/search-select';
import ContractTop from '@/components/ContractTop';
import axios from 'axios';
import { Button } from 'mint-ui';
export default {
  data () {
  return {
			popupVisible4: false,
			depts:[{
					flex: 1,
					values:['第一业务部','第二业务部','第三业务部'],
					textAlign: 'center',
					className: 'slot1',
			}],
			titles:'合作人',
    }
  },
  mounted:function(){

  },
  methods:{
	goTop(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

  },
  components:{
	'ContractTop':ContractTop,
	'deptselect':deptselect
  }
}
</script>

<style scoped>
	@import "../../assets/css/server.css";
	body{background:#fff;}
	.mint-popup-bottom {
    width: 100%;
	}

	.picker-toolbar{background:#ddd;}
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
  .search-iterm{
    font-size: 17px;
  }
  ul{
    margin-top: 20px;
  }
  li{
    text-align:center;
    margin-top: 10px;
  }
</style>
