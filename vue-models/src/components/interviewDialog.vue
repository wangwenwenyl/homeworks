<template>
    <div style="position:fixed;width:100%;height:100%;background:rgba(0,0,0,0.4);overflow-Y:scroll;" >
        <div style="position:absolute;width:86%;height:210px;background:#fff;top:33%;left:50%;margin-left:-43%;">
            <div style="width:100%;height:54px;text-align:center;font-size:18px;color:#333;line-height:54px;background:#efeff4;">分配</div>
            <div style="text-align:center;">
                <input type="text" :value="message" v-on:focus="opendialog" placeholder="请选择" style="width:260px;height:36px;margin:auto;margin-top:30px;border:1px solid #ddd;padding-left:10px;">
            </div>
             <div style="text-align:center;margin-top:20px;">
                <div class="cancel" v-on:click="closedialog">取消</div>
                <div class="sure" >确认</div>
                <router-link :to="{ name: 'diyadai', params: { userId: 123 }}">User</router-link>
                <!-- <router-link to="/diyadai">Affix</router-link> -->
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
  methods:{
        opendialog:function(){
            this.$emit("openfatherdialog","123");
        },
        closedialog:function(){
            this.$emit("closefatherdialog","123");
        }
  },
  props:["message"]
}
</script>
<style scoped>
  .mintui{font-size:28px;margin-left:12px;}
  .cancel,.sure{display:inline-block;width:115px;height:39px;text-align: center;line-height:39px;font-size:16px;
  border:1px solid #ddd;color:#666;border-radius:5px;}
  .sure{background:#fbaf37;margin-left:20px;color:#fff;}
</style>
