<!--质押 无合同声明-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="nocontract" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">合同编号：</label>
            <input type="text" class="word5" name="contractnum" :value="wuhetongshengming.contractnum" disabled/>
        </div>
        <div class="iterm">
            <label for="">台账号：</label>
            <input type="text" name="ledgernum" class="word5" :value="wuhetongshengming.ledgernum" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">银主姓名：</label>
            <input type="text" name="lendername" class="word5" :value="wuhetongshengming.lendername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" class="word5" name="custname" :value="wuhetongshengming.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            于 <input type="date" name="notarizationdate"  style="width:50%;" :value="wuhetongshengming.notarizationdate" v-bind:disabled="showor"/>在 <input type="text" style="width:30%" name="notarizationarea" :value="wuhetongshengming.notarizationarea" v-bind:disabled="showor"/>公证处做公证手续。
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="deptname" class="word5" :value="wuhetongshengming.deptname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还人：</label>
            <input type="text" class="word5" name="nocontractstatesignature" :value="wuhetongshengming.nocontractstatesignature" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" id="formNocontract-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    export default {
        props:['wuhetongshengming',"showor","showsave"],
    }
</script>
