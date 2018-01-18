<template>
  <div id="appHead" style="overflow-Y:scroll">
      <div class="search-btn" @click="trans" style="margin:auto;">
          {{ open ? '关闭' : '展开搜索' }}
      </div>
     <div class="search-box" v-show="open">
         <div class="search-iterm">
            <pointselect v-bind:selecttitle="pointtitle" v-bind:datas="points" v-on:select="pointselect"></pointselect>
         </div>
         <div class="follow-iterm">
            <div class="follow-iterm-left">
              <label class="contract-list-name">客户姓名：</label>
            </div>
           <div class="follow-iterm-right">
             <input type="text" v-model="custName" class="search-input"/>
           </div>
         </div>
         <div class="search-iterm">
             <deptselect v-bind:selecttitle="depttitle" v-bind:datas="depts" v-on:select="deptselect"></deptselect>
         </div>
         <div class="search-iterm">
             <typeselect v-bind:selecttitle="typetitle" v-bind:datas="types" v-on:select="typeselect"></typeselect>
         </div>
         <div class="follow-iterm">
            <div class="follow-iterm-left">
              <label class="contract-list-name"> 台 账 号 ： </label>
            </div>
            <div class="follow-iterm-right">
              <input type="text" v-model="accountNum" class="search-input"/>
            </div>
         </div>
            <div class="search-btn" @click="contidion">
                查询
            </div>
        </div>
  </div>
</template>

<script>
    import pointselect from '@/components/search-select';
    import deptselect from '@/components/search-select';
    import typeselect from '@/components/search-select';
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'mint-ui';

export default {
  data () {
  return {
      custName:'',
      department:'',
      type:'',
      accountNum:'',
      point:'',
      points: [
          {
              flex: 1,
              values: [],
              className: 'slot1',
              textAlign: 'center',
          },
      ],
      depts:[{
          flex: 1,
          values: [],
          textAlign: 'center',
          className: 'slot1',
      }],
      types:[{
          flex: 1,
          values: [],
          textAlign: 'center',
          className: 'slot1',
      }],
      pointtitle:'跟进节点',
      depttitle:'业务部门',
      typetitle:'合同类型',
    }
  },
  mounted:function(){
       this.userid = this.$cookie.get("uid");
      axios.post(hostapi+'/auth/allbumen',qs.stringify({
            userId:this.userid,
        })).then(response=>{
          if(response.data.code=='200'){
              this.depts[0].values=response.data.data;
              this.types[0].values=['不限','抵押贷','信用贷'];
              this.points[0].values=['不限','待跟进','补件','件齐','做卷','报分行','换行改签','审批','补调','复议','被拒','已批贷','解押中','送房本','抵押中','回它项','暂停','已放款','毙单','打官司'];
//                    this.department=response.data.data[0];
          }else{
              Toast("操作失败");
          }
      }).catch(function(err){
          Toast('操作失败');
      });
  },
   methods:{
       contidion(){
            this.$emit('contidion',this.point,this.custName,this.department,this.type,this.accountNum);
       },
       trans(){
           var open = !this.open;
           this.$emit('open',open);
       },
       pointselect(point){
           if(point=="不限"){
               this.point="";
           }else{
               this.point=point;
           }
       },
       deptselect(dept){
            this.department=dept;
       },
       typeselect(type){
           this.type=type;
       }
   },
    props:["message",'open'],
    components:{
        'deptselect':deptselect,
        'pointselect':pointselect,
        'typeselect':typeselect,
    }
}
</script>
<style scoped>
  /*#appHead{width:100%;height:auto;position: fixed;top:54px;}*/
    .follow-input{
        padding-left: 10px;
    }
</style>
