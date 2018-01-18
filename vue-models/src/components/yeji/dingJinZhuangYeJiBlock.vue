<template>
  <div class="iterm-box">
    <div class="follow-space" ></div>
    <div class="follow-content">
         <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">业绩归属人：</label>
            </div>
            <div class="follow-iterm-right">
               <span>王梦柯</span>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">转业绩金额来源：</label>
            </div>
            <div class="follow-iterm-right">
               <span>定金</span>
            </div>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">可支配金额(元)：</label>
            </div>
            <div class="follow-iterm-right">
               <span>定金</span>
            </div>
        </div>
         <div class="search-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">转业绩金额(元)：</label>
            </div>
            <div class="follow-iterm-right">
               <input type="text" class="follow-input" id=""/>
            </div>
        </div>
        <div class="follow-iterm" style="margin-top:15px;">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">申请理由：</label>
            </div>
            <div class="follow-iterm-right">
                <textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" rows="3"></textarea>
            </div>
        </div>
        <div class="follow-iterm btn-box">
            <div class="follow-submit" @click="followsubmit">取消</div>
        </div>
    </div>
</div>
</template>

<script>
import { Header } from 'mint-ui';
import {qs} from 'qs';
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
  props:["message"],
  components:{

  },
  methods:{
    followsubmit:function(){

    },
    subcancel:function(){

    }
  }
}
</script>
<style scoped>
  .mintui{font-size:28px;margin-left:12px;}
  .follow-submit{height:40px;line-height:40px;background:#fbaf37;color:#fff;text-align:center;width:90%;border-radius:5px;}
    .iterm-box{top:44px;}
</style>
