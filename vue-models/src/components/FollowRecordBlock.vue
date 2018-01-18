<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
      <!--<div class="follow-box">-->
          <!--<div class="follow-left follow-active">-->
              <!--跟进记录-->
          <!--</div>-->
          <!--<div class="follow-right ">-->
              <!--<router-link :to="{ name: 'FollowManageNo', params: { userId: 123 }}" style="color:#333;text-decoration:none;">跟进处理</router-link>-->
          <!--</div>-->
      <!--</div>-->

      <div class="follow-content" v-for="message in messages">
          <div class="follow-space"></div>
          <div style="padding:20px 10px;">
            <div class="follow-iterm">
              <div class="follow-iterm-left">
                <label for="">跟进人：</label>
              </div>
              <div class="follow-iterm-right">
                {{ message.followPerson }}
              </div>
            </div>
            <div class="follow-iterm">
              <div class="follow-iterm-left">
                <label for="">跟进日期：</label>
              </div>
              <div class="follow-iterm-right">
                {{ dealtime(message.createDate) }}
              </div>
            </div>
            <div class="follow-iterm">
              <div class="follow-iterm-left">
                <label for="">跟进节点：</label>
              </div>
              <div class="follow-iterm-right">
                {{ message.node }}
              </div>
            </div>
            <div class="follow-iterm">
              <div class="follow-iterm-left" style="vertical-align:top;">
                <label for="">跟进备注：</label>
              </div>
              <div class="follow-iterm-right">
                <!--<textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" rows="3" readonly></textarea>-->
                <textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" rows="3">{{ message.remark }}</textarea>
              </div>
            </div>
          </div>
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

  },
  props:['messages','records'],
  methods:{
      dealtime(time){
          if(time){
              return time.split(" ")[0];
//              var date = new Date(time);
//              return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
          }else{
              return "";
          }
      },
  }
}
</script>
<style scoped>
  .iterm-box{position:absolute;top:84px !important;width:100%;}
  .follow-content{padding:0px;}
  .mintui{font-size:28px;margin-left:12px;}
</style>
