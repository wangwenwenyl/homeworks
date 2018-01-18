<template>
  <div id="appchengnuohan" style="text-align: center;overflow-Y:scroll" >
		<form id="promise" action="" style="">
    <div class="iterm">
        <label for="">客户姓名：</label>
        <input  v-bind:disabled="showor" type="text" name="custname" class="word5" :value="chengnuohanall.custname"/>
    </div>
    <div class="iterm">
        <label for="">身份证号：</label>
        <input  v-bind:disabled="showor" type="text" name="custnum" id="custnum" class="word5"  :value="chengnuohanall.custnum"/>
    </div>
    <div class="iterm">
        <label for="">办理业务：</label>
        <input  v-bind:disabled="showor" type="text" name="typename" class="word5" :value="chengnuohanall.typename"/>
    </div>
    <div class="iterm">
        <label for="" style="width:115px;">对应的台账号：</label>
        <input  v-bind:disabled="showor" type="text" name="ledgernum"  class="word6" :value="chengnuohanall.ledgernum"/>
    </div>
    <div class="iterm">
        <label for="">承诺人：</label>
        <input  v-bind:disabled="showor" type="text" name="committedperson" class="word5" :value="chengnuohanall.committedperson"/>
    </div>
    <div class="iterm">
        <label for="">日期：</label>
        <input  v-bind:disabled="showor" type="date" name="commitdate" class="word5" :value="chengnuohanall.commitdate"/>
    </div>
    <div class="big-save" v-show="showsave">
        保存
    </div>
</form>
  </div>
</template>

<script>
export default {
  data () {
  return {

    }
  },
  mounted:function(){
    this.fillPage("#appchengnuohan");
  },
  props:["chengnuohanall","showor","showsave"],
}
</script>
 <style scoped>
		@import "../assets/css/contract.css";
        *{color:#333;}
        input{color:#666;}
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
