<template>
        <div class="iterm-box" style="overflow-Y:scroll;">
            <div class="follow-space" ></div>
            <div class="follow-content">
                <div class="follow-iterm">
                    <div class="follow-iterm-left">
                        <label for="">跟进人：</label>
                    </div>
                    <div class="follow-iterm-right">
                        韩箐华
                    </div>
                </div>
                <div class="follow-iterm">
                    <div class="follow-iterm-left">
                        <label for="">跟进日期：</label>
                    </div>
                    <div class="follow-iterm-right">
                        2017-14-01
                    </div>
                </div>
                <div class="follow-iterm">
                    <div class="follow-iterm-left">
                        <label for="">跟进方式：</label>
                    </div>
                    <div class="follow-iterm-right">
                        电话
                    </div>
                </div>
                <div class="follow-iterm">
                    <div class="follow-iterm-left" style="vertical-align:top;">
                        <label for="">跟进备注：</label>
                    </div>
                    <div class="follow-iterm-right">
                        <textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" rows="3"></textarea>
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

  }
}
</script>
<style scoped>
    @import "../assets/css/server.css";
  .mintui{font-size:28px;margin-left:12px;}
</style>
