<template>
    <form id="team" action="" style="overflow-Y:scroll;" >
        <div style="background:#efefef;height:10px;"></div>
        <div class="iterm" style="text-align: left;border-bottom:1px solid #ddd;">
            出借方信息
        </div>
        <div class="iterm">
            <label for="">银主姓名：</label>
            <input type="text" name="lendername" :value="hezuojiaojiedan.lendername" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">易遨ID：</label>
            <input type="text" name="lenderyiaoid" :value="hezuojiaojiedan.lenderyiaoid" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">区域总监：</label>
            <input type="text" name="lenderregionaldirector" :value="hezuojiaojiedan.lenderregionaldirector" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="lenderdept" class="word5" :value="hezuojiaojiedan.lenderdept" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">业务：</label>
            <input type="text" name="lenderclerk" class="word5" :value="hezuojiaojiedan.lenderclerk" v-bind:disabled="showor"/>
        </div>
        <div style="background:#efefef;height:10px;"></div>
        <div class="iterm" style="text-align:left;border-bottom:1px solid #ddd;">
            借贷方信息
        </div>
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" name="custname" class="word5" :value="hezuojiaojiedan.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">易遨ID：</label>
            <input type="text" name="borroweryiaoid" class="word5" :value="hezuojiaojiedan.borroweryiaoid" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">区域总监：</label>
            <input type="text" name="borrowerregionaldirector" class="word5" :value="hezuojiaojiedan.borrowerregionaldirector" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="borrowerdept" class="word5" :value="hezuojiaojiedan.borrowerdept" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">业务：</label>
            <input type="text" name="borrowerclerk" class="word5" :value="hezuojiaojiedan.borrowerclerk" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" id="formTeam-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    export default {
        props:['hezuojiaojiedan',"showor","showsave"],
    }
</script>
