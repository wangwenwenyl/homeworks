<template>
  <div id="app">
	<ContractTop :tle="$route.params.tle" tleurl="/index"></ContractTop>
	  <dingJinZhuangYeJiBlock></dingJinZhuangYeJiBlock>
  </div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import dingJinZhuangYeJiBlock from '@/components/yeji/dingJinZhuangYeJiBlock';
import { InfiniteScroll } from 'mint-ui';
export default {
  components:{
	'ContractTop':ContractTop,
	'dingJinZhuangYeJiBlock':dingJinZhuangYeJiBlock,
  }
}
</script>

<style scoped>
	@import "../../assets/css/server.css";
	body{background:#fff;}
</style>
