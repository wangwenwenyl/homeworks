<template>
  <div id="app" style="overflow-Y:scroll;">
      <ContractTop tle="房贷计算器" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
      <calculatorBlock style="margin-top:44px;"></calculatorBlock>
	</div>
</template>
<script>
import ContractTop from '@/components/ContractTop';
import calculatorBlock from '@/components/old/calculatorBlock';
export default {
  data () {
  return {

    }
  },
  mounted(){

  },
  methods:{

  },
  components:{
      'ContractTop':ContractTop,
      'calculatorBlock':calculatorBlock,
  }
}
</script>
<style scoped>

</style>
