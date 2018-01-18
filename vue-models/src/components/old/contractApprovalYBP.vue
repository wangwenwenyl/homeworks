<template>
<div class="" style="overflow-Y:scroll;">
    <ContractTop tle="合同申请审批" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
    <contractApprovaData v-bind:contracts="contractData" style="margin-top: 44px;"></contractApprovaData>
</div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import contractApprovaData from  '@/components/old/contractApproveData';
    import axios from 'axios';
    import noData from '@/components/noData';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default {
        data (){
            return {
              contractData:'',
              userid:'',
              username:'',
              uuid:'123456',
            }
        },
        methods:{

        },
        created(){
          this.uuid=this.$cookie.get("uuid");
          this.username=this.$cookie.get("uname");
          this.userid=this.$cookie.get("uid");
            //获取合同申领的数据列表
            axios.get(host+"/app/contractapplydone?userid="+this.userid,{
            }).then(response=>{
                this.contractData=response.data.data;
            }).catch(function(err){
                Toast("操作失败");
            });
        },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'contractApprovaData':contractApprovaData,
        }
    }
</script>

