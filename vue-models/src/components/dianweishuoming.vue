<template>
  <div id="appdianweishuoming" style="text-align: center;overflow-Y:scroll" >
		 <form id="point" action="" style="">
    <div class="iterm">
        <label for="">台账号：</label>
        <input  v-bind:disabled="showor" type="text" name="ledgernum" class="word5" :value="dianweishuomingall.ledgernum"/>
    </div>
    <div class="iterm">
        <label for="">客户姓名：</label>
        <input  v-bind:disabled="showor" type="text" name="custname" class="word5" :value="dianweishuomingall.custname"/>
    </div>
    <div class="iterm">
        <label for="">贷款点位：</label>
        <input  v-bind:disabled="showor" type="text" name="point" class="word5" :value="dianweishuomingall.point"/>
    </div>
    <div class="iterm" style="margin-top:10px;">
        <table style="width:100%;">
            <tr>
                <td style="vertical-align: top;"> <span style="vertical-align: top;">原因说明：</span></td>
                <td><textarea v-bind:disabled="showor"  id="" name="reason" rows="4" style="width:90%;font-size:14px;resize:none;" :value="dianweishuomingall.reason"></textarea></td>
            </tr>
        </table>
    </div>
    <div class="iterm">
        <label for="">日期：</label>
        <input  v-bind:disabled="showor" type="date" name="signdate"  class="word5" :value="dianweishuomingall.signdate"/>
    </div>
    <div class="iterm" id="jingli" style="">
        <label for="" style="width:115px;">门店经理：</label>
        <input  v-bind:disabled="showor" type="text" class="word6" name="shopownername" disabled :value="dianweishuomingall.shopownername"/>
    </div>
    <div class="iterm" id="zongjian" style="">
        <label for="" style="width:115px;">业务总监：</label>
        <input  v-bind:disabled="showor" type="text" class="word6" name="businessdirectorname" disabled :value="dianweishuomingall.businessdirectorname"/>
    </div>
     <div class="iterm" id="zongjian" style="">
         <label for="" style="width:115px;">银行业务发展部：</label>
         <input  v-bind:disabled="showor" type="text" class="word6" name="businessdirectorname" disabled :value="name"/>
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
        name:'',
    }
  },
  mounted:function(){
      this.name=this.$cookie.get("uname");
  },
  props:["dianweishuomingall","showor","showsave"],
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
