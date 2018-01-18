<!--质押 无合同声明-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="nocontract" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">合同编号：</label>
            <input type="text" class="word5" name="contractnum" v-model="wuhetongshengming.contractnum" disabled/>
        </div>
        <div class="iterm">
            <label for="">台账号：</label>
            <input type="text" name="ledgernum" class="word5" v-model="wuhetongshengming.ledgernum" disabled="disabled"/>
        </div>
        <div class="iterm">
            <label for="">银主姓名：</label>
            <input type="text" name="lendername" class="word5" v-model="wuhetongshengming.lendername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" class="word5" name="custname" v-model="wuhetongshengming.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            于 <input type="date" name="notarizationdate"  style="width:50%;" v-model="wuhetongshengming.notarizationdate" v-bind:disabled="showor"/>在 <input type="text" style="width:30%" name="notarizationarea" v-model="wuhetongshengming.notarizationarea" v-bind:disabled="showor"/>公证处做公证手续。
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="deptname" class="word5" v-model="wuhetongshengming.deptname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">返还人：</label>
            <input type="text" class="word5" name="nocontractstatesignature" v-model="wuhetongshengming.nocontractstatesignature" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" @click="save" id="formNocontract-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    import axios from 'axios';
    import qs from 'qs';
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return {
                uuid:'',
            }
        },
        methods:{
            save(){
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                axios.post(host+"/app/savenocontractstatemenbook?uuid="+this.uuid,
                this.wuhetongshengming
                ).then(response=>{
                    if(response.data.data.code=='200'){
                        MessageBox.alert("保存成功");
                        this.send();
                    }else{
                        MessageBox.alert("操作失败");
                    }
                    Indicator.close();
                }).catch(function(err){
                    MessageBox.alert("网络超时");
                    Indicator.close();
                })
            },
            send(){
                this.$emit("wuhetongflag","");
            },
        },
        created(){
            this.uuid=this.$cookie.get("uuid");
        },
        props:['wuhetongshengming',"showor","showsave"],
    }
</script>
