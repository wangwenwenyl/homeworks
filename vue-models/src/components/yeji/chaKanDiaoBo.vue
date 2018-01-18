<template>
  <div id="app">
	    <ContractTop tle="查看调拨" tleurl="/index"></ContractTop>
	     <chaKanDiaoBoBlock></chaKanDiaoBoBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import chaKanDiaoBoBlock from '@/components/yeji/chaKanDiaoBoBlock';
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
  methods:{

  },
  components:{
	'ContractTop':ContractTop,
    'chaKanDiaoBoBlock':chaKanDiaoBoBlock,
  }
}
</script>
<style scoped>

</style>
