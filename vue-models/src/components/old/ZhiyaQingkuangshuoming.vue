<!--质押 情况说明书-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="state" action="" style="overflow-Y:scroll;">
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" name="customername" class="word5" v-model="qingkuangshuoming.customername" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">身份证号：</label>
            <input type="text" name="idcard" class="word5" v-model="qingkuangshuoming.idcard" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">借款金额：</label>
            <input type="text" name="jiekuan" class="word5" v-model="qingkuangshuoming.jiekuan" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">合同编号：</label>
            <input type="text" name="contractnum" class="word5" v-model="qingkuangshuoming.contractnum"  disabled/>
        </div>
        <div class="iterm" style="margin-top:15px;">
            <table style="width:100%;">
                <tr>
                    <td style="vertical-align: top;"> <span style="vertical-align: top;width:70px;">原因：</span></td>
                    <td>  <textarea  name="test" v-model="qingkuangshuoming.test" v-bind:disabled="showor"  rows="4"  style="width:90%;font-size:14px;background:#fff;border:1px solid #ddd;resize:none;"></textarea></td>
                </tr>
            </table>
        </div>
        <div class="iterm" style="display:none;" id="jingli" >
            <label for="">门店经理：</label>
            <input type="text" name="mendianjingli" class="word5" v-model="qingkuangshuoming.mendianjingli" disabled/>
        </div>
        <div class="big-save" @click="save" id="formState-submit" v-show="showsave">
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
            return{
                uuid:'',
            }
        },
        methods:{
            send(){
                this.$emit("qingkuangflag","");
            },
            save(){
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                axios.post(host+"/app/saveconditionstatement?uuid="+this.uuid,
                    this.qingkuangshuoming
                ).then(response=>{
                    if(response.data.code=='200'){
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
        },
        created(){
            this.uuid=this.$cookie.get("uuid");
        },
        props:['qingkuangshuoming',"showor","showsave"],
    }
</script>
