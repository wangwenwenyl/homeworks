<!--消息列表父组件-->
<!--包括已读消息子组件和未读消息子组件-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div class="message" style="overflow-Y:scroll;">
        <mt-header :title="'消息'" style="height:44px;width:100%;font-size:18px;font-weight:bold;position:fixed;top:0px;z-index:999;background:#fff;color:#333;border-bottom:1px solid #ddd;">
        </mt-header>
        <mt-navbar v-model="selected" style="width:100%;position:fixed;top:44px;z-index:999;background:#fff;" value=1>
            <div>
                <mt-tab-item id="1" style="width:50%;">未读</mt-tab-item>
                <mt-tab-item id="2" style="width:50%;">已读</mt-tab-item>
            </div>
        </mt-navbar>

        <mt-tab-container v-model="selected" style="margin-top: 88px;" :swipeable.sync='swipeable'>
            <mt-tab-container-item id="1">
                <unread v-bind:pmsglist="pmsglist" v-bind:userId="userId" v-bind:uuid="uuid" v-bind:pmsgshow="pmsgshow" v-on:send="reload"></unread>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <read v-bind:readlist="readlist" v-bind:userId="userId" v-bind:uuid="uuid" v-bind:readshow="readshow"></read>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script scoped>

    import { TabContainer, TabContainerItem } from 'mint-ui';
    import ContractTop from '@/components/ContractTop';
    import axios from 'axios';
    import {Toast} from 'mint-ui';
    import read from '@/components/old/messageYES';
    import unread from '@/components/old/messageNO';

    export default {
        data(){
            return {
                swipeable: true,
                selected:'1',
                userId:'',
                uuid:'',
                pmsglist:'',
                readlist:'',
                pmsgshow:false,
                readshow:false,
            }
        },
        methods:{
            reload(message){
                if(message=='200'){
                    //清除消息缓存，重新获取。以实现页面重新加载的效果
                    this.pmsgshow=false;
                    this.readshow=false;
                    this.pmsglist="";
                    this.readlist="";
                    this.getMessage();
                }
            },
            getMessage(){
                axios.get(host+"/app/msglist?userid="+this.userId,{

                }).then(response=>{
                    console.log(response);
                    //未读消息
                    this.pmsglist=response.data.data.pmsglist;
                    //控制未读消息为空时的状态
                    if(this.pmsglist==''){
                        this.pmsgshow=true;
                    }
                    //已读消息
                    this.readlist=response.data.data.readlist;
                    //控制已读消息为空时的状态
                    if(this.readlist==""){
                        this.readshow=true;
                    }
                }).catch(function(err){
                    Toast("操作失败");
                })
            }
        },
        created(){
//            this.userId=this.$cookie.get("uid");
            this.userId=this.$route.params.userid;
            this.uuid=this.$route.params.uuid;
            this.getMessage();
        },
        mounted(){
          this.moveControl();
        },
        components:{
            'read':read,
            'unread':unread,
            'ContractTop':ContractTop,
        }
    }
</script>
