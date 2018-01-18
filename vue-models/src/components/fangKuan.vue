<template>
  <div id="app" style="overflow-Y:scroll;">
	<ContractTop tle="放款信息" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
	<!--<bankHead style="margin-top:44px;"></bankHead>-->
	<fangKuanBlock v-bind:id="id" v-bind:state="state" v-bind:contractid="contractid" v-bind:contractnum="contractnum"></fangKuanBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import fangKuanBlock from '@/components/fangKuanBlock';
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
	'fangKuanBlock':fangKuanBlock
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
