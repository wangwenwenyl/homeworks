<template>
  <div id="app" style="overflow-Y:scroll;">
	<ContractTop tle="银行面签" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	<!--<bankHead style="margin-top:44px;"></bankHead>-->
	<yinHangMianQianBlock></yinHangMianQianBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import yinHangMianQianBlock from '@/components/yinHangMianQianBlock';
export default {
  components:{
	'ContractTop':ContractTop,
	'yinHangMianQianBlock':yinHangMianQianBlock
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
