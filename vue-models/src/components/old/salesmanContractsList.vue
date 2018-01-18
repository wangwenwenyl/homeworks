<template>
    <div class="contractList" style="overflow-Y:scroll;">
        <ContractTop tle="合同签单" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <salesmanContractsListData style="margin-top: 44px;"></salesmanContractsListData>
    </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import noData from '@/components/noData';
    import salesmanContractsListData from '@/components/old/salesmanContractsListData';
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
            'salesmanContractsListData':salesmanContractsListData,
        }
    }
</script>

