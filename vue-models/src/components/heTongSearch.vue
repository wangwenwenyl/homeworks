<template>
  <div class="tiaojian" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;margin:auto;">
    <div class="search-btn" @click="trans()" style="margin-top:3px;">
      {{ open ? '关闭' : '展开搜索' }}
    </div>
    <transition name="slider">
      <div class="search-box" v-show="open" >
        <div class="search-iterm">
          <div class="follow-iterm-left">
            <label for=""> 申 请 人 : </label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" value="" class="search-input" v-model="submiter"/>
          </div>
        </div>
        <div class="search-iterm">
          <div class="follow-iterm-left">
            <label for=""> 台 账 号 : </label>
          </div>
          <div class="follow-iterm-right">
            <input type="text" class="search-input" value="" v-model="accountNum"/>
          </div>
        </div>
        <div class="search-iterm">
          <starttime v-on:date="start" v-bind:title="startTitle"></starttime>
        </div>
        <div class="search-iterm">
          <endtime v-on:date="end" v-bind:title="endTitle"></endtime>
        </div>
        <div class="search-btn" @click="contidion">
          查找
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    import starttime from '@/components/search-date';
    import endtime from '@/components/search-date';

    export default {

        data () {
            return {
              startTitle:'起始时间',
              endTitle:'终止时间',
              accountNum: '',
              submiter:'',
              fromTime:'',
              toTime:'',
            }
        },
        props:[ "open" ],
        mounted (){

        },
        components:{
            'starttime':starttime,
            'endtime':endtime,
        },
        methods:{
            trans(){
              this.$emit( "trans",{
                open: this.open,
              } );
            },
            contidion(){
              this.$emit( "contidion", {
                accountNum: this.accountNum,
                submiter: this.submiter,
                fromTime: this.fromTime,
                toTime: this.toTime
              } );
            },

            start(time){
              this.fromTime = time;
            },
            end(time){
              this.toTime = time;
            },
        }
    }

</script>

<style scoped>

    @import '../assets/css/Peng-common.css';
    @import "../assets/css/server.css";
    .slider-enter-active,.slider-leave-active{
      transition: all .5s;
    }
    .slider-enter,.slider-leave-active{
      transform: translateX(-100%);

    }
</style>
