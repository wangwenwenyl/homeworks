<template>
    <div id="app" style="overflow-Y:scroll;">
        <FollowManageTop tle="面谈无效"></FollowManageTop>
	    <interviewNoCheck></interviewNoCheck>
    </div>
</template>

<script>
import { Header } from 'mint-ui';
import FollowManageTop from '@/components/FollowManageTop';
import interviewNoCheck from '@/components/interviewNoCheck';
export default {
  components:{
	'FollowManageTop':FollowManageTop,
	'interviewNoCheck':interviewNoCheck,
  }
}
</script>
<style scoped>
    @import "../assets/css/server.css";
  .mintui{font-size:28px;margin-left:12px;}
</style>
