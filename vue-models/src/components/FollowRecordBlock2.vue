<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
      <!--<div class="follow-box">-->
          <!--<div class="follow-left follow-active">-->
              <!--跟进记录-->
          <!--</div>-->
          <!--<div class="follow-right">-->
               <!--<router-link :to="{ name: 'FollowManageNo', params: { userId: 123 }}" style="color:#333;text-decoration:none;">跟进处理</router-link>-->
          <!--</div>-->
      <!--</div>-->
      <div class="follow-space" ></div>
      <div class="follow-content" style="text-align: center;">
          <img src="../assets/image/nodata.png" alt="" style="margin-top:80px;"/>
          <div style="margin-top:50px;color:#666;">暂无数据</div>
      </div>
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

  }
}
</script>
<style scoped>
  .iterm-box{position:absolute;
      top: 84px;width:100%;}
  .mintui{font-size:28px;margin-left:12px;}
  .picker-toolbar{background:#ddd !important;}
</style>
