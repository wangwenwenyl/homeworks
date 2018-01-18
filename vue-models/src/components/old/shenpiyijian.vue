<template>
    <form id="approve" action="" style="overflow-Y:scroll;">
        <history v-show="showhistory" v-bind:history="history"></history>
        <div class="iterm">
            <label for="">审批人：</label>
            <input type="text" readonly name="approvePerson" v-model="name" class="word5"/>
        </div>
        <div class="iterm" style="margin-top:10px;">
            <table style="width:100%;">
                <tr>
                    <td style="vertical-align: top;width:85px;"><label style="vertical-align: top;width:70px;">审批意见：</label></td>
                    <td><textarea rows="4" ref="shenpiyijian" name="approveIdea" v-model="messagea.option"  style="width:90%;font-size:14px;resize:none;border:1px solid #ddd;"  ></textarea></td>
                </tr>
            </table>
        </div>
        <div class="iterm" style="margin-left:70px;">
            <div class="cancel" v-on:click="unapprove" id="cancel">不同意</div>
            <div class="save" id="approve-save" v-on:click="approve" style="color:#fff;float:right;margin-right:7%;">同意</div>
        </div>
    </form>
</template>

<script>
import history from '@/components/shenpiHistory';
export default {
  data () {
  return {
		messagea:{
            name:'',
            option:'',
        }
    }
  },
  created:function(){
        this.name=this.$cookie.get('uname');
  },
  mounted(){
    this.fillPage( "#approve" );
  },
  methods:{
	approve:function(){
        console.log(this.messagea);
        this.$emit('approve',this.$refs['shenpiyijian'].value);
    },
    unapprove:function(){
        this.$emit('unapprove',this.$refs['shenpiyijian'].value);
    }
  },
  components:{
	'history':history,
  },
  props:["message",'showhistory','history']
}
</script>

<style scoped>
		@import "../../assets/css/contract.css";
        *{color:#333;}
        input,textarea{outline:none;padding-left:10px;}
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
