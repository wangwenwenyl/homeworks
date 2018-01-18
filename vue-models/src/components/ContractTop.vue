<template>
  <div id="appTop" style="text-align: center;width:100%;overflow-Y:scroll">
		 <mt-header :title="tle" style="height:44px;font-size:18px;font-weight:bold;background:#fff;color:#333;border-bottom:1px solid #ddd;">
		  <!--<router-link :to="tleurl" slot="left" >-->
			<mt-button icon="back" slot="left" @click="back"  style="width:30px;color:#333;"></mt-button>
		  <!--</router-link>-->
		</mt-header>
    <span  v-show="submit" style="position:absolute;right:10px;top:15px;font-size:14px;" id="formzong-submit" @click="submitone">提交</span>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  data () {
  return {

    }
  },
  methods:{
      back(){
          if(this.tleurl == "/shouye"){
              this.$router.push({path:'/shouye/'+this.$cookie.get("uid")+"/"+this.$cookie.get("uname")+"/"+this.$cookie.get("uuid")+"/"+this.$cookie.get("utype")+"/"+this.$cookie.get("uaccount")});
		  }else{
              this.$router.go(-1);
          }
//          return false;
      },
      submitone(){
        this.$emit("submitone",'');
      }
  },
  mounted:function(){

  },
  props:["tle","tleurl","submit"],
}
</script>
<style scoped>
  .mintui{font-size:18px !important;margin-left:0px !important;}
</style>
