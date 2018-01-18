<template>
  <div id="app" style="overflow-Y:scroll;">
	<ContractTop tle="批贷信息" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	<piDaiBlock v-bind:id="id" v-bind:state="state" v-bind:contractid="contractid" v-bind:contractnum="contractnum"></piDaiBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import piDaiBlock from '@/components/piDaiBlock';
export default {
    data(){
      	return{
      	  contractid:'',
          contractnum:'',
          id:'',
          state:'',
		}
	},
  components:{
	'ContractTop':ContractTop,
	'piDaiBlock':piDaiBlock
  },
  	created(){
    	this.contractid=this.$route.params.contractid;
    	this.id=this.$route.params.id;
    	this.state=this.$route.params.state;
    	this.contractnum=this.$route.params.contractnum;
	}
}
</script>

<style scoped>
	@import "../assets/css/server.css";
</style>
