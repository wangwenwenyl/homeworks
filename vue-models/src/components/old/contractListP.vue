<template>
    <div class="contractList" style="overflow-Y:scroll;">
        <ContractTop tle="合同签单" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <contractListData style="margin-top: 44px;"></contractListData>
    </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import noData from '@/components/noData';
    import contractlist from '@/components/old/contractListData';
    export default {
        data(){
            return {

            }
        },
        mounted(){

        },
        methods:{

        },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'contractListData':contractlist,
        }
    }
</script>

