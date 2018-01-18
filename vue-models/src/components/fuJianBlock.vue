<template>
    <div id="fujian" style="overflow-Y:scroll;">
        <div>面谈附件上传</div>
        <div class="fujian-box">
            <div class="fujian-iterm"></div>
            <div class="fujian-iterm"></div>   
            <div class="fujian-iterm"></div> 
            <div class="fujian-iterm"></div>        
        </div>
        <div style="margin-top:14px;">
            <div style="width:26%;display:inline-block;vertical-align:top;">选择类型:</div>
            <div style="width:72%;display:inline-block;">
                <p><input type="radio" name="futype">&nbsp;查看附件并确认有效</p>
                <p><input type="radio" name="futype">&nbsp;查看附件并确认无效</p>
                <p><input type="radio" name="futype">&nbsp;附件不合格并重新上传</p>
            </div>
        </div>
        <div style="margin-top:14px;">
             <div style="width:26%;display:inline-block;vertical-align:top;">附件备注:</div>
              <div style="width:72%;display:inline-block;">
                    <textarea style="width:100%;resize:none;" rows="5"></textarea>
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
  .mintui{font-size:28px;margin-left:12px;}
  #fujian{padding:16px;}
  .fujian-box{align-items: center;}
  .fujian-iterm{width:90px;height:82px;border:1px solid #ddd;margin-top:14px;display:inline-block;}
  .fujian-iterm:nth-child(2){margin-left:5px;margin-right:5px;}
  p{margin-bottom:5px;}
</style>
