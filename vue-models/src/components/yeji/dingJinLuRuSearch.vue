<template>
  <div class="tiaojian" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;padding:0 30px;">
    <div class="search-btn" @click="dingJinTrans" style="margin-top:3px;margin-bottom:3px;">
      {{ open ? '关闭' : '展开搜索' }}
    </div>
    <transition name="slider">
      <div class="search-box" v-show="open" >
        <div class="search-iterm">
          <div class="follow-iterm-left">
            <label for=""> 台 账 号 : </label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" value="" class="search-input" v-model="accountNum"/>
          </div>
        </div>
        <div class="search-iterm">
          <div class="follow-iterm-left">
            <label for=""> 申 请 人 : </label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" class="search-input" value="" v-model="submiter"/>
          </div>
        </div>
        <div class="search-btn" @click="dingJinContidion">
          查询
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {

        data () {
            return {
              accountNum: '',
              submiter:'',
            }
        },
        props:[ "open" ],
        mounted (){

        },

        methods:{
          dingJinTrans(){
              this.$emit( "dingJinTrans",{
                open: this.open,
              } );
            },
          dingJinContidion(){
              this.$emit( "dingJinContidion", {
                accountNum: this.accountNum,
                submiter: this.submiter,
              } );
            },
        }
    }

</script>

<style scoped>

    .slider-enter-active,.slider-leave-active{
      transition: all .5s;
    }
    .slider-enter,.slider-leave-active{
      transform: translateX(-100%);
      opacity:0;
    }

    .search-iterm {
      text-align:left;
    }

    .follow-iterm-left {
      width: 30%;
    }
    .follow-iterm-right {
      width: 68%;
    }
    .search-btn{
      width: auto;
    }
    .search-box{
      padding-left: 0;
      padding-right: 0;
    }
</style>
