<template>
    <div id="app" style="overflow-Y:scroll;">
        <FollowManageTop tle="面谈无效"></FollowManageTop>
	    <interviewWuXiaoJiLuBlock></interviewWuXiaoJiLuBlock>
    </div>
</template>

<script>
import { Header } from 'mint-ui';
import FollowManageTop from '@/components/FollowManageTop';
import interviewWuXiaoJiLuBlock from '@/components/interviewWuXiaoJiLuBlock';
export default {
  components:{
	'FollowManageTop':FollowManageTop,
	'interviewWuXiaoJiLuBlock':interviewWuXiaoJiLuBlock,
  }
}
</script>
<style scoped>
    @import "../assets/css/server.css";
  .mintui{font-size:28px;margin-left:12px;}
</style>
