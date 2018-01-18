<template>
  <div id="app" style="overflow-Y:scroll;">
	<FollowManageTop tle="无效记录"></FollowManageTop>
	<interviewBlock2></interviewBlock2>
  </div>
</template>

<script>
import FollowManageTop from '@/components/FollowManageTop';
import interviewBlock2 from '@/components/interviewBlock2';
import { InfiniteScroll } from 'mint-ui';
export default {
  components:{
	'FollowManageTop':FollowManageTop,
	'interviewBlock2':interviewBlock2,
  }
}
</script>

<style scoped>
	@import "../assets/css/server.css";
	body{background:#efeff4;}
</style>
