<template>
  <div id="app">
	<ContractTop tle="面谈无效" tleurl="/index" style="position:fixed;top:0px;z-index:999;overflow-Y:scroll;"></ContractTop>
	<interviewBlock2></interviewBlock2>
  </div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import interviewBlock2 from '@/components/interviewBlock2';
import { InfiniteScroll } from 'mint-ui';
export default {
  components:{
	'ContractTop':ContractTop,
	'interviewBlock2':interviewBlock2,
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
