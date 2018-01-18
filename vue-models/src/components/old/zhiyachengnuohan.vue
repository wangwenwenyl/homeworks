<template>
  <div id="appchengnuohan" style="text-align: center;overflow-Y:scroll" >
		<form id="promise" action="" style="">
    <div class="iterm">
        <label for="">客户姓名：</label>
        <input  v-bind:disabled="showor" type="text" name="custname" class="word5" v-model="chengnuohanall.custname"/>
    </div>
    <div class="iterm">
        <label for="">身份证号：</label>
        <input  v-bind:disabled="showor" type="text" name="custnum" id="custnum" class="word5"  v-model="chengnuohanall.custnum"/>
    </div>
    <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">办理业务：</label>
            <input type="hidden"  name="secondHouseSituation" />
            <input type="text" class="word6 secondhousestate" v-if="chengnuohanall.typename===''" value="" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengnuohanall.typename=='银行抵押贷款'" value="银行抵押贷款" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengnuohanall.typename=='质押借款（民间借款）'" value="质押借款（民间借款）" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;"  v-show="showsave" @click="banlishow" class="tog2">></div>
            <div  class="tog2-content"  v-show="banli">
                <span class="single">银行抵押贷款<input type="radio" v-bind:checked="chengnuohanall.typename=='银行抵押贷款'?true:false" @click="banlione"  yewuinfo="银行抵押贷款" name="secondhousestate" stateinfo="0" class="single-value secondhousestate1" /></span>
                <span class="single" style="width:56% !important;display: inline-block;">质押借款（民间借款）<input type="radio" v-bind:checked="chengnuohanall.typename=='质押借款（民间借款）'?true:false" @click="banlitwo" stateinfo="1" name="secondhousestate" class="single-value secondhousestate2" /></span>
        </div>
        </div>
    <div class="iterm">
        <label for="" style="width:115px;">对应的台账号：</label>
        <input  disabled="disabled" type="text" name="ledgernum"  class="word6" :value="chengnuohanall.ledgernum"/>
    </div>
    <div class="iterm">
        <label for="">承诺人：</label>
        <input  v-bind:disabled="showor" type="text" name="committedperson" class="word5" v-model="chengnuohanall.committedperson"/>
    </div>
    <div class="iterm">
        <label for="">日期：</label>
        <input  v-bind:disabled="showor" type="date" name="commitdate" class="word5" v-model="chengnuohanall.commitdate"/>
    </div>
    <div class="big-save" v-show="showsave" @click="tijiao">
        保存
    </div>
</form>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
 import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import Exif from 'exif-js';
  import axios from 'axios';
  import qs from 'qs';
export default {
  data () {
  return {
      banli:false,
    }
  },
  mounted:function(){
    
  },
  methods:{
      banlione(){
          this.chengnuohanall.typename='银行抵押贷款';
      },
      banlitwo(){
          this.chengnuohanall.typename='质押借款（民间借款）';
      },
      banlishow(){
          this.banli=!this.banli;
      },
      tijiao(){
          if(this.chengnuohanall.custnum!=""){
              var res=/^\d{17}(\d|x)$/i;
              if(!res.test(this.chengnuohanall.custnum)){
                MessageBox('提示', '身份证号格式不正确');
                return false;
              }
          }
          this.chengnuohanall.contractid=this.contractid;
          this.chengnuohanall.contractnum=this.contractnum;
          Indicator.open();
           axios.post(host+"/app/savecntpromissoryCredit?uuid=" +this.uuid,this.chengnuohanall
           ).then(response=>{
               if(response.data.data.code==200){
                    Indicator.close();
                   MessageBox('提示', '保存成功');
                    this.$emit('chengnuoflag','');
               }else{
                   MessageBox('提示', '保存失败');
               }
                }).catch(function(err){
                    MessageBox('提示', '保存失败');
                });
      },
  },
  props:["chengnuohanall","showor","showsave","contractid","contractnum"],
}
</script>
 <style scoped>
		@import "../../assets/css/contract.css";
        *{color:#333;}
        input{color:#666;}
        .big-save{color:#fff;}
        input[disabled],input:disabled{
            /*border:1px solid #;*/
            background-color:#fff;
            color:#666;
            opacity:1 !important;
            -webkit-opacity:1 !important;
        }
        textarea[disabled],textarea:disabled{
            background-color:#fff;
            color:#666;
            opacity:1 !important;
            -webkit-opacity:1 !important;
        }
        .ret:before{
            height: 16px;
            width: 9px;
            display: inline-block;
            float: left;
            vertical-align: middle;
            position: absolute;
            margin: auto 0;
            left:2%;
            top:9px;
        }
        /*流程css 模块：附件上传 彭*/
        .imgupBox{
            margin-bottom: 18px;
            overflow: hidden;
        }
        .groupPhotoC,.IDPhotoC,.itPhotoC{
            padding: 0px 15px;
        }
        .groupPhoto,.IDPhoto,.itPhoto{
            border-top:9px solid #f5f5f5;
            overflow: hidden;
        }
        .Phototit{
            font-size: 14px;
            color: #666;
            line-height: 35px;
        }
        /*上传按钮*/
        .imgupbtn{
            border: 1px dashed #dadada;
            width: 29%;
            height:82px;
            position:relative;
            float: left;
        }
        .imgupbtnInp{
            opacity:0;
            filter:alpha(opacity=0);
            height: 82px;
            width: 100px;
            position: absolute;
            /*position:relative;*/
            top: 0;
            /*top: -64px;*/
            left: 0;
            z-index: 9;
        }
        .rep{
            padding: 0px 0px;
            margin: 0px 0px;
            overflow: hidden;
        }
        .rep>div{
            width: 29%;
            height: 84px;
            float: left;
            margin-right: 2.09%;
            margin-left: 2.09%;
            margin-top: 12px;
        }
        .imgCC{
            position:relative;
        }
        .imgCC>img{
            height: 100%;
            width: 100%;
        }
        .ImgClose{
            width: 20px;
            height:20px;
            background-color: #fff;
            background: url(@import "../assets/img/cancel.png") no-repeat;
            background-size: 100% 100%;
            position:absolute;
            right: -8%;
            top: -8%;
        }
        /*流程css结束*/
        .hide{display: none;}
    </style>
