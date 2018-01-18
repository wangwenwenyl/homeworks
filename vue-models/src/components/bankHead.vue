<template>
  <div id="appHead" style="overflow-Y:scroll">
      <div class="search-btn" @click="open=!open" style="margin-top:6px;">
          {{ open ? '关闭' : '展开搜索' }}
      </div>
    <div class="search-box" v-show="open">
        <!--<div class="follow-iterm">-->
              <!--<div class="follow-iterm-left">-->
                <!--<label class="contract-list-name">台 账 号 ：</label>-->
            <!--</div>-->
            <!--<div class="follow-iterm-right">-->
                <!--<input type="text" class="follow-input" v-model="accountname"/>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="follow-iterm">-->
              <!--<div class="follow-iterm-left">-->
                <!--<label class="contract-list-name">合同编号：</label>-->
            <!--</div>-->
            <!--<div class="follow-iterm-right">-->
                <!--<input type="text" class="follow-input" v-model="contractnum"/>-->
            <!--</div>-->
        <!--</div>-->
        <div class="follow-iterm">
              <div class="follow-iterm-left">
                <label class="contract-list-name">客户姓名：</label>
            </div>
            <div class="follow-iterm-right">
                <input type="text" class="follow-input" v-model="username"/>
            </div>
        </div>
      <div class="follow-iterm">
        <div class="follow-iterm-left">
          <label class="contract-list-name">台 账 号 ：</label>
        </div>
        <div class="follow-iterm-right">
          <input type="text" class="follow-input" v-model="accountname"/>
        </div>
      </div>
        <div class="follow-iterm">
            <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-on:select="confirmdept"></deptselect>
        </div>
        <!--<div class="follow-iterm">-->
            <!--<starttime v-on:date="start" v-bind:title="starttitle"></starttime>-->
        <!--</div>-->
        <!--<div class="follow-iterm">-->
            <!--<endtime v-on:date="end" v-bind:title="endtitle"></endtime>-->
        <!--</div>-->
        <div class="follow-iterm" v-show="typeshow">
            <typeselect v-bind:selecttitle="typetitle" v-bind:datas="types" v-on:select="confirmtype"></typeselect>
        </div>
        <div class="search-btn" @click="sendtofarther">
            查询
        </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'qs';
    import starttime from '@/components/search-date';
    import endtime from '@/components/search-date';
    import deptselect from '@/components/search-select';
    import typeselect from '@/components/search-select';
    import { Toast } from 'mint-ui';

    export default {
      data () {
      return {
          userid:'',
          popupVisible4: false,
          open:false,
          types:[{
              flex: 1,
              values:[],
              textAlign:'center',
              className: 'slot1',
          }],
          depts:[{
              flex: 1,
              values: [],
              textAlign: 'center',
              className: 'slot1',
          }],
          department:'',    //所属部门
          accountname:'',   //台账号
          contractnum:'',   //合同编号
          username:'',      //业务员
          signdatestart:'', //起始时间
          signdateend:'',   //终止时间
          typeid:'',        //合同类型 0抵押1信用2质押
          starttitle:'起始时间',
          endtitle:'终止时间',
          titles:'业务部门',
          typetitle:'合同类型',
          bankInterviewuserName:'',
          bankInterviewaccountNum:'',
          bankInterviewdeptId:'',
          bankInterviewtypeId:'',
          typeshow:false,   //控制合同类型查询条件是否显示
        }
      },
      created:function(){
         this.userid = this.$cookie.get("uid");
         //只有信贷焦成燕，信贷韦彦杰以及李亮可以根据合同类型查询
         if(this.userid=='875554533975425038'||this.userid=='875554533975425039' || this.userid=='866832067684543684'){
             this.typeshow=true;
         }
        axios.post(hostapi+'/auth/allbumen',qs.stringify({
            userId:this.userid,
        })).then(response=>{
            console.log(response);
            if(response.data.code=='200'){
                this.depts[0].values=response.data.data;
                this.types[0].values=['抵押贷','信用贷'];
            }
        }).catch(function(err){
            Toast('操作失败');
        });

          //获取cookie中的查询条件
          this.bankInterviewuserName=this.$cookie.get("bankInterviewuserName");
          this.bankInterviewaccountNum=this.$cookie.get("bankInterviewaccountNum");
          this.bankInterviewdeptId=this.$cookie.get("bankInterviewdeptId");
          this.bankInterviewtypeId=this.$cookie.get("bankInterviewtypeId");
          if(this.bankInterviewuserName){
              this.username=this.bankInterviewuserName;
          }
          if(this.bankInterviewaccountNum){
              this.accountname=this.bankInterviewaccountNum;
          }
      },
      methods:{
          start(time){
              this.signdatestart = time;
              console.log(this.signdatestart);
          },
          end(time){
              this.signdateend = time;
              console.log(this.signdateend);
          },
          confirmdept:function(value){
              this.department=value;
          },
          confirmtype:function(value){
//               if("请选择"==value) {
//                   this.typeid = '';
//               }else{
//                   this.typeid=value;
//               }
                this.typeid=value;
              console.log(this.typeid);
          },
          sendtofarther(){
              this.$emit('childmessage',this.username,this.accountname,this.department,this.typeid);
          }
      },
      components:{
          'starttime':starttime,
          'endtime':endtime,
          'deptselect':deptselect,
          'typeselect':typeselect,
      }
    }
</script>
<style scoped>
    header{border-bottom:1px solid #ddd;}
</style>
