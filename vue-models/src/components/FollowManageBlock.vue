<template>
  <div class="iterm-box" style="overflow-Y:scroll;top:84px !important;">
    <div class="follow-space" ></div>
    <div class="follow-content">
         <div class="search-iterm">
            <genginriqi v-on:date="start" v-bind:title="genjindate"></genginriqi>
        </div>
        <div class="search-iterm">
            <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-on:listionChildEvent="parent" v-on:select="confirmdept"></deptselect>
        </div>
        <div class="follow-iterm">
            <div class="follow-iterm-left" style="vertical-align:top;">
               <label for="">跟进备注：</label>
            </div>
            <div class="follow-iterm-right">
                <textarea name="" id="" style="width:100%;resize:none;border:1px solid #ddd;" rows="3" v-model="beizhu"></textarea>
            </div>
        </div>
        <div class="follow-iterm btn-box">
            <div class="follow-cancel" @click="subcancel">取消</div>
            <div class="follow-sure" @click="subsure">确定</div>
        </div>
    </div>
</div>
</template>

<script>
import deptselect from '@/components/search-select';
import genginriqi from '@/components/search-date';
import { MessageBox } from 'mint-ui';
import { Header } from 'mint-ui';
import axios from 'axios';
import qs from 'qs';
import { Indicator } from 'mint-ui';
export default {
  data () {
  return {
        userid:'',
        beizhu:'',
        jiedian:"",
        popupVisible4: false,
        open:false,
        signdatestart:'',
        types:[{
            flex: 1,
            values:['请选择','抵押贷','信用贷','质押贷'],
            textAlign:'center',
            className: 'slot1',
        }],
         depts:[{
              flex: 1,
              values:['补件','件齐','做卷','报分行','换行改签','审批','补调','复议','被拒','已批贷','解押中','送房本','抵押中','回它项','暂停','已放款','毙单','打官司'],
              textAlign: 'center',
              className: 'slot1',
          }],
        titles:'跟进节点',
        genjindate:'跟进日期',
    }
  },
  mounted:function(){
      this.userid=this.$cookie.get("uid");
  },
  props:["message","scheduleid",'id'],
  components:{
      'deptselect':deptselect,
      'genginriqi':genginriqi
  },
  methods:{
      getCookie(cname){
          var name = cname + "=";
          var ca = document.cookie.split(";");
          for(var i=0;i<ca.length;i++){
              var c = ca[i];
              if(c=='') return "";
              while(c.charAt(0)=='') c=c.substring(1);
              if(c.indexOf(name)!=-1) return c.substring(name.length,c.length);
          }

          return "";
      },
      start(time){
        this.signdatestart = time;
    },
    opendialog:function(){
        this.$emit("openfatherdialog","123");
    },
    closedialog:function(){
        this.$emit("closefatherdialog","123");
    },
    confirmdept:function(value){
        this.department=value;
    },
    parent(data){
      this.jiedian=data;
    },
    subsure:function(){
        if(document.getElementById("jiedian").value==""){
            MessageBox.alert('请输入节点!', '提示');
        }else{
          Indicator.open();
          axios.post(hostapi+'/follow/adddetail',qs.stringify({
            userId:this.userid,
//            userId:"866832067684543684",
            createdate: this.signdatestart,
            node:this.jiedian,
            scheduleId:this.scheduleid,
            remark:this.beizhu
          })).then(response=>{
            if(response.data.code=='200'){
              Indicator.close();
                this.$router.push({name:"bankClient",params:{}});
              //this.$router.push({path:"/follow",params:{'schedule':this.scheduleid,id:this.id}});
//              if(response.data.data==''){
//                this.records=[];
//                this.recordshow=false;
//              }else{
//                this.records = this.records.concat(response.data.data);
//                console.log(response.data.data);
//              }
            }else{
              Toast("操作失败");
              Indicator.close();
            }
          }).catch(function(err){
            Toast("网络异常");
            Indicator.close();
          });
        }
    },
    subcancel:function(){
            this.$route.go(-1);
    }
  }
}
</script>
<style scoped>
  .iterm-box{top:84px !important;}
  .picker-toolbar{background:#ddd !important;}
  .mintui{font-size:28px;margin-left:12px;}
</style>
