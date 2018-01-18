<template>
  <div id="login-background">
    <img id="login-logo" src="../assets/img/login.png" alt="">
    <div id="login-container">
      <form action="" id="login-form">
        <img src="../assets/img/personName.png" alt="" class="logoImg">
        <input type="text" placeholder="请输入手机号" class="login-input" v-model="phoneNum">
        <img src="../assets/img/password.png" alt="" class="logoImg" style="top:45px;">
        <input type="password" placeholder="请输入密码" class="login-input" v-model="passWord">
      </form>
      <div id="login-button" @click="login">
        登录
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';
  import {Toast} from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        phoneNum: "",
        passWord: ""
      }
    },
    mounted: function () {

    },
    created: function () {
      this.$cookie.set('selected',"1");
    },
    methods: {
      login(){

        axios.post(hostapi+'/user/login', qs.stringify({
          uname: this.phoneNum,
          password: this.passWord,
          uuid: "123456"
        })).then(response => {
          if (response.data.code === '200') {
            if (response.data.type === '1' || response.data.type === '2' || response.data.type === '3') {
              this.$router.push({path: '/oldshouye/' + response.data.userid + "/" + response.data.username + "/123456/" + response.data.type + "/" + this.phoneNum});
            } else {
              this.$router.push({path: '/shouye/' + response.data.userid + "/" + response.data.username + "/123456/" + response.data.type + "/" + this.phoneNum});
            }
          }
        }).catch(function (err) {
          Toast(err);
        })
      }
    }
  }
</script>
<style scoped>
  #login-background {
    text-align: center;
    height: 100%;
  }

  #login-logo {
    width: 150px;
    margin-top: 100px;
    overflow-Y: scroll;
  }

  #login-container {
    width: 75%;
    margin: auto;
  }

  #login-form {
    margin-top: 60px;
    position: relative;
  }

  .logoImg {
    position: absolute;
    left: 0px;
    width: 20px;
    margin-top: 5px;
    margin-left: 5px;
  }

  .login-input {
    width: 75%;
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
    padding: 10px 0px 10px 50px;
    font-size: 14px;
    margin-bottom: 10px;
    background-color: transparent;
    /*opacity: ;*/
  }

  #login-button {
    background: #FBAF37;
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    border-radius: 5px;
    color: #fff;
    margin-top: 45px;
  }
</style>


