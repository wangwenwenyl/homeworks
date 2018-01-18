<template>
    <form id="state" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" name="customername" class="word5" :value="qingkuangshuoming.customername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">身份证号：</label>
            <input type="text" name="idcard" class="word5" :value="qingkuangshuoming.idcard" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">借款金额：</label>
            <input type="text" name="jiekuan" class="word5" :value="qingkuangshuoming.jiekuan" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">合同编号：</label>
            <input type="text" name="contractnum" class="word5" :value="qingkuangshuoming.contractnum"  disabled/>
        </div>
        <div class="iterm" style="margin-top:15px;">
            <table style="width:100%;">
                <tr>
                    <td style="vertical-align: top;"> <span style="vertical-align: top;width:70px;">原因：</span></td>
                    <td>  <textarea  name="test" :value="qingkuangshuoming.test" v-bind:disabled="showor"  rows="4"  style="width:90%;font-size:14px;background:#fff;"></textarea></td>
                </tr>
            </table>
        </div>
        <div class="iterm" style="display:none;" id="jingli" >
            <label for="">门店经理：</label>
            <input type="text" name="mendianjingli" class="word5" :value="qingkuangshuoming.mendianjingli" disabled/>
        </div>
        <div class="big-save" id="formState-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    export default {
        props:['qingkuangshuoming',"showor","showsave"],
    }
</script>
