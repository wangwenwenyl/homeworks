<template>
  <div id="appTop" style="text-align: center;border-bottom:1px solid #ddd;overflow-Y:scroll;" >
		 <mt-header :title="tle" style="height:44px;font-size:18px;font-weight:bold;background:#fff;color:#333;">
		  <router-link to="/" slot="left">
			<mt-button icon="back" style="width:26px;color:#333;"></mt-button>
		  </router-link>
		</mt-header>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
   props:["tle"]
}
</script>
<style scoped>
  .mintui{font-size:28px;margin-left:12px;}
</style>
