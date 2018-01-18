<template>
  <div id="app" style="overflow-Y:scroll">
	<ContractTop tle="附件查看" tleurl="/index"></ContractTop>
	<fuJianBlock></fuJianBlock>
  </div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import fuJianBlock from '@/components/fuJianBlock';
import { InfiniteScroll } from 'mint-ui';
export default {
  components:{
	'ContractTop':ContractTop,
	'fuJianBlock':fuJianBlock,
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
	body{background:#fff;}

</style>
