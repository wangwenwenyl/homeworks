<!--质押 佣金说明书-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="commission" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">台账号：</label>
            <input type="text" name="ledgernum" class="word5" :value="yongjinshuomingshu.ledgernum" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">门店：</label>
            <input type="text" name="shopname" class="word5" :value="yongjinshuomingshu.shopname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">甲方（客户）：</label>
            <input type="text" name="custname" class="word6" :value="yongjinshuomingshu.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">联系电话：</label>
            <input type="text" name="custphone" class="word5" value="***********" v-bind:disabled="showor" />
            <!--<input type="text" name="custphone" class="word5" :value="yongjinshuomingshu.custphone" v-bind:disabled="showor" />-->
        </div>
        <div class="iterm">
            <label for="">乙方：</label>
            <input type="text" class="word5" value="鸿诚祥兆投资担保有限公司" disabled/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">丙方（银主）：</label>
            <input type="text" name="lendername" class="word6" :value="yongjinshuomingshu.lendername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">联系电话：</label>
            <input type="text" name="lenderphone" class="word5" value="***********" v-bind:disabled="showor"/>
            <!--<input type="text" name="lenderphone" class="word5" :value="yongjinshuomingshu.lenderphone" v-bind:disabled="showor"/>-->
        </div>
        <div class="iterm">
            甲方委托乙方向丙方代为办理甲方 <input type="text" name="typename" style="width:50%;" :value="yongjinshuomingshu.typename" v-bind:disabled="showor"/>借款一事达成一致<br/>
            甲方委托乙方向丙方（银主）借款的金额为：<br/>（小写）<input type="text" name="amountnum" style="width:30%;" :value="yongjinshuomingshu.amountnum" v-bind:disabled="showor"/>元<br/>（大写）<input type="text" name="amountchar" style="width:50%;" :value="yongjinshuomingshu.amountchar" disabled/> 元整。
            <br/>
            丙方需向乙方（按照借款额的百分之 <input type="text" name="backpercent" style="width:15%;" id="formPoint" :value="yongjinshuomingshu.backpercent" v-bind:disabled="showor"/>）返还的全部佣金金额为：<br/>（小写）<input type="text" name="backnum" style="width:25%;" :value="yongjinshuomingshu.backnum" v-bind:disabled="showor"/>元 ,<br/>（大写）<input type="text" name="backchar" style="width:60%;" :value="yongjinshuomingshu.backchar" disabled/>元整<br/>共返还 <input type="text" name="backcount" style="width:20%;" :value="yongjinshuomingshu.backcount" v-bind:disabled="showor"/>次。<br/>
            甲方向乙方首次返还服务费的时间为 <input type="date" name="firstbackdate" style="width:50%;" :value="yongjinshuomingshu.firstbackdate" v-bind:disabled="showor"/>，返还金额为：<br/>（小写）<input type="text" name="firstbacknum" style="width:30%;" :value="yongjinshuomingshu.firstbacknum" v-bind:disabled="showor"/>元，<br/>（大写）<input type="text" name="firstbackchar" style="width:30%;" :value="yongjinshuomingshu.firstbackchar" disabled />元整；
        </div>
        <div class="iterm">
            1、明目：<input type="text" name="mingmuone" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyone" style="width:30%" :value="yongjinshuomingshu.moneyone" v-bind:disabled="showor"/>元。<br/>
            2、明目：<input type="text" name="mingmutwo" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneytwo" style="width:30%" :value="yongjinshuomingshu.moneytwo" v-bind:disabled="showor"/>元。<br/>
            3、明目：<input type="text" name="mingmuthree" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneythree" style="width:30%" :value="yongjinshuomingshu.moneythree" v-bind:disabled="showor"/>元。<br/>
            4、明目：<input type="text" name="mingmufour" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyfour" style="width:30%" :value="yongjinshuomingshu.moneyfour" v-bind:disabled="showor"/>元。<br/>
            5、明目：<input type="text" name="mingmufive" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneyfive" style="width:30%" :value="yongjinshuomingshu.moneyfive" v-bind:disabled="showor"/>元。<br/>
            6、明目：<input type="text" name="mingmusix" style="width:77%;" v-bind:disabled="showor"/><br/>金额：<input type="text" name="moneysix" style="width:30%" :value="yongjinshuomingshu.moneysix" v-bind:disabled="showor"/>元。
        </div>
        <div class="iterm">
            <label for="">业务员：</label>
            <input type="text" class="word5" name="clerkname" :value="yongjinshuomingshu.clerkname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">制单人：</label>
            <input type="text" class="word5" name="commituser" :value="yongjinshuomingshu.commituser" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还人：</label>
            <input type="text" class="word5" name="backusername" :value="yongjinshuomingshu.backusername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还日期：</label>
            <input type="date" class="word5"   name="backdate" :value="yongjinshuomingshu.backdate" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" id="formCommission-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    export default {
        props:['yongjinshuomingshu',"showor","showsave"],
    }
</script>
