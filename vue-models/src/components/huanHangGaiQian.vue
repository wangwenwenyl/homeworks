<template>
  <div id="app" style="overflow-Y:scroll;">
	<ContractTop tle="换行改签" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	<huanHangGaiQianBlock></huanHangGaiQianBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import huanHangGaiQianBlock from '@/components/huanHangGaiQianBlock';
export default {
  components:{
	'ContractTop':ContractTop,
	'huanHangGaiQianBlock':huanHangGaiQianBlock
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
