<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import {Toast} from "mint-ui";

  //引入自定义字体样式
  import "./assets/css/iconfont.css";

  export default {
    name: 'app',
    data(){
      return {
        uname: '',
        uuid: '',
        flag: '',
      }
    },
    methods: {
      //验证用户是否在线
      checkYh(obj){
        this.uname = this.$cookie.get('uaccount');
        this.uuid = this.$cookie.get('uuid');
        console.log(this.uuid);
        console.log(this.uname);
        axios.post(host + "/app/isLogined", qs.stringify({
          uname: this.uname,
          uuid: this.uuid,
        })).then(response => {
          if (response == '200') {
            this.flag = true;
          } else {
            this.flag = false;
          }
        }).catch(function () {
          Toast("操作失败");
        });
        return this.flag;
//    $.ajax({
//        url:host+'/app/isLogined',
////          url:'http://a.wryray.com/gate/ddd',
//        dataType:'text',
//        data:{'uname':uname,'uuid':uuid},
//        type:'post',
////          type:'get',
//        success:function(res){
//            console.log(res)
//            if(res==200){
////              if(res="1111"){
//                flag=true;
//            }else if(res==400){
//                flag =false;
//            }
//        },
//        async:false
//    })
//    return flag;
      },
      checkXl(){
        this.uname = this.$cookie.get('uaccount');
        this.uuid = this.$cookie.get('uuid');
        console.log(this.uuid);
        axios.post(host + "/app/isLogined", qs.stringify({
          uname: this.uname,
          uuid: this.uuid,
        })).then(response => {
          if (response == 200) {
            this.flag = true;
          } else if (response == 400) {
            this.flag = false;
          }
        }).catch(function (err) {
          Toast("操作失败");
        });
        return this.flag;
//    var flag=true;
//    $.ajax({
//        url:host+'/app/isLogined',
//        //url:'http://a.wryray.com/gate/ddd',
//        dataType:'text',
//        data:{'uname':uname,'uuid':uuid},
//        type:'post',
//        //type:'get',
//        success:function(res){
//            if(res==200){
//                //if(res="1111"){
//                flag=true;
//            }else if(res==400){
//                flag =false;
//            }
//        },
//        async:false
//    })
//    return flag;
      },
      checkYhTap(obj){
        this.uname = this.$cookie.get('uaccount');
        this.uuid = this.$cookie.get('uuid');
        axios.post(host + "/app/isLogined", qs.stringify({
          uname: this.uname,
          uuid: this.uuid,
        })).then(response => {
          if (response == 200) {
            this.flag = true;
          } else if (response == 400) {
            this.flag = false;
          }
        }).catch(function (err) {
          Toast("操作失败");
        });
        return this.flag;
//    $.ajax({
//        url:host+'/app/isLogined',
//        //url:'http://a.wryray.com/gate/ddd',
//        dataType:'text',
//        data:{'uname':uname,'uuid':uuid},
//        type:'post',
//        //type:'get',
//        success:function(res){
//            if(res==200){
//                //if(res="1111"){
//                flag=true;
//            }else if(res==400){
//                flag =false;
//            }
//        },
//        async:false
//    })
//    return flag;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;
    height: 100%;
  }
  ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body,html{
    height: 100%;

    /* background: linear-gradient(45deg, seashell 50%, antiquewhite 50%); */
  }
  .swipeLeft{
    transform:translateX(0) !important;
    -webkit-transform:translateX(0) !important;
    -moz-transform:translateX(0) !important;
  }
  .fbb{
    color: #fbb64e;
  }
  #appTop{
      position:fixed;
      z-index: 999;
      top:0px;
  }
  .follow-box{
      z-index: 999;
  }
  #boxFixed{
      width: 100%;
      position: fixed;
      overflow-y: scroll;
  }
</style>
