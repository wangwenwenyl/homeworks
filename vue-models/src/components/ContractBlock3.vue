<template>
    <div id="appBlock" style="overflow-Y:scroll">
        <div class="iterms" v-for="contract in contracts">
            <div class="follow-space"></div>
            <header style="position:relative;">
                <div class="contract-num">{{ contract.typename }}：</div>
                <div class="contract-nums">{{ contract.contractnum }}</div>
                <div class="contract-check" @click="check(contract)"><img src="../assets/image/check.png" alt="" class="check-img"/>查看</div>
            </header>
            <section>
                <!--<div class="contract-list">-->
                <!--<div class="contract-list-left">-->
                <!--<div class="contract-list-name">-->
                <!--{{ contract.typename }}-->
                <!--</div>-->
                <!--</div>-->
                <!--</div>-->
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            台账号：
                        </div>
                        <div class="contract-list-value">
                            {{ contract.accountNum }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                    <span class="contract-list-name">
                        合同名称：
                    </span>
                        <span class="contract-list-value">
                        {{ dealName(contract.contractname) }}
                    </span>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            签订日期：
                        </div>
                        <div class="contract-list-value">
                            {{ contract.signdate }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                    <span class="contract-list-name">
                        合同维护人：
                    </span>
                        <span class="contract-list-value">
                        {{ contract.username }}
                    </span>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            部门名称：
                        </div>
                        <div class="contract-list-value">
                            {{ contract.deptName }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                        <div class="contract-list-name">
                            客户名称：
                        </div>
                        <div class="contract-list-value">
                            {{ contract.custName }}
                        </div>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            合同状态：
                        </div>
                        <div class="contract-list-value">
                            {{ state(contract.state) }}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        mounted:function(){

        },
        props:["contracts"],
        methods:{
            dealName(name){
                if(name){
                    if(name.length>4){
                        return name.substr(0,4) + '...' ;
                    }else{
                        return name;
                    }
                }else{
                    return name;
                }
            },
            check(contract){
                this.$router.push({name: 'contractdetail', params: {contractnum: contract.contractnum, typeid: contract.typeid,contractid:contract.contractid}});
            },
            state(data) {
                if (data == "1") {
                    return "签单审核中";
                }
                if (data == "2") {
                    return "签单完成";
                }
                if (data == "3") {
                    return "审核退回";
                }
                if (data == "4") {
                    return "作废审核中";
                }
                if (data == "6") {
                    return "归档";
                }
                if (data == "7") {
                    return "报备审核中";
                }
                if (data == "8") {
                    return "被撤单";
                }
                if (data == "9") {
                    return "员工离职废除";
                }
                if (data == "10") {
                    return "已提交成交确认书";
                }
                if (data == "11") {
                    return "已报备";
                }
                if (data == "12") {
                    return "报备驳回";
                }
                if (data == "13") {
                    return "被作废";
                }
                if (data == "14") {
                    return "撤单审核中";
                }
                if (data == "15") {
                    return "业绩调拨审核中";
                }
            },
        }
    }
</script>
<style  scoped>
</style>
