<template>
    <form id="team" action="" style="overflow-Y:scroll;" >
        <div style="background:#efefef;height:10px;"></div>
        <div class="iterm" style="text-align: left;border-bottom:1px solid #ddd;">
            出借方信息
        </div>
        <div class="iterm">
            <label for="">银主姓名：</label>
            <input type="text" name="lendername" v-model="hezuojiaojiedan.lendername" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">易遨ID：</label>
            <input type="text" name="lenderyiaoid" v-model="hezuojiaojiedan.lenderyiaoid" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">区域总监：</label>
            <input type="text" name="lenderregionaldirector" v-model="hezuojiaojiedan.lenderregionaldirector" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="lenderdept" class="word5" v-model="hezuojiaojiedan.lenderdept" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">业务：</label>
            <input type="text" name="lenderclerk" class="word5" v-model="hezuojiaojiedan.lenderclerk" v-bind:disabled="showor"/>
        </div>
        <div style="background:#efefef;height:10px;"></div>
        <div class="iterm" style="text-align:left;border-bottom:1px solid #ddd;">
            借贷方信息
        </div>
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input type="text" name="custname" class="word5" v-model="hezuojiaojiedan.custname" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">易遨ID：</label>
            <input type="text" name="borroweryiaoid" class="word5" v-model="hezuojiaojiedan.borroweryiaoid" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">区域总监：</label>
            <input type="text" name="borrowerregionaldirector" class="word5" v-model="hezuojiaojiedan.borrowerregionaldirector" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">部门：</label>
            <input type="text" name="borrowerdept" class="word5" v-model="hezuojiaojiedan.borrowerdept" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">业务：</label>
            <input type="text" name="borrowerclerk" class="word5" v-model="hezuojiaojiedan.borrowerclerk" v-bind:disabled="showor"/>
        </div>
        <div class="big-save" @click="sengHezuo" id="formTeam-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    import { MessageBox } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { Toast } from 'mint-ui';
import Exif from 'exif-js';
  import axios from 'axios';
  import qs from 'qs';
    export default {
         data (){
        return {     
            uuid:'',
        }
    },
        props:['hezuojiaojiedan',"showor","showsave",'custname','contractid','contractnum'],
        created:function(){
            this.uuid=this.$cookie.get('uuid');
        },
        methods:{
            sengHezuo(){
                Indicator.open();
                this.hezuojiaojiedan.contractid=this.contractid;
                this.hezuojiaojiedan.contractnum=this.contractnum;
                axios.post(host+"/app/savecntdeliveryTrust?uuid=" +this.uuid,this.hezuojiaojiedan
                ).then(response=>{
                    if(response.data.data.code==200){
                        Indicator.close();
                            MessageBox('提示', '保存成功');
                             this.$emit('hezuoflag','');
                    }else{
                            Indicator.close();
                        MessageBox('提示', '保存失败');
                    }
                        }).catch(function(err){
                            Indicator.close();
                            MessageBox('提示', '保存失败');
                        });
            }
        }
    }
</script>
