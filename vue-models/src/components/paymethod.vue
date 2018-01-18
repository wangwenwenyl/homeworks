<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
    <div class="follow-content">
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
                <span class="follow-star">*</span><label for="">支付方式</label>
            </div>
            <div class="follow-iterm-right">
                <span>微信支付<input type="radio" name="num" checked  @click="showor=false" /></span>
                <span style="margin-left:20px;">支付宝支付 <input type="radio" name="num"  @click="showor=true"/></span>
                <div v-show="!showor">
                    <input type="text" class="follow-input follow-inputed">
                     <input type="text" class="follow-input follow-inputed">
                </div>
                <div v-show="showor">
                    <textarea cols="10" rows="4"></textarea>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
  return {
        showor:false,
    }
  },
  mounted:function(){

  },
  methods:{
   
  },
  props:["message"],
  components:{
      
  }
}
</script>
<style scoped>
  .mintui{font-size:28px;margin-left:12px;}
</style>
