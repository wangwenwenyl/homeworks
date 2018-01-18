<!--已读消息列表-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div style="overflow-Y:scroll;" class="messageYes">
        <noData v-if="readshow"></noData>
        <ul v-else v-for="list in readlist">
        <li class=" back-white marginBottom9 prepareMsg" @click="check">
            <img class="msgImg" src="../../assets/img/message.png" alt="" />
            <div class="prepareTitle" style="color: #666666;">{{ list.title }}</div>
            <div class="prepareContent" style="color: #999999;">
                <span>{{ list.content }}</span>
            </div>
        </li>
        </ul>
    </div>
</template>

<script scoped>
    import noData from '@/components/noData';
    import { MessageBox } from 'mint-ui';

    export default{
        data(){
            return {

            }
        },
        mounted(){
          this.fillPage( ".messageYes" );
        },
        props:['readlist','readshow','userId','uuid'],
        methods:{
            check(){
                MessageBox({
                    'message':'已读消息',
                    'title':'提示',
                    'showCancelButton':true,
                });
            },
        },
        components:{
            'noData':noData,
        }
    }
</script>

<style scoped>
    @import "../../assets/css/syn.css" ;

    .titlebar{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #efefef;
        line-height: 44px;
        text-align: center;
        background: white;
        font-family: "微软雅黑";
        font-size: 18px;
        font-weight: bold;
        position: fixed;
        top: 0px;
    }
    .slider{
        position: fixed;
        top: 44px;
    }
    .marginBottom9{
        margin-bottom: 9px;
    }
    .mui-slider-progress-bar{
        background:none !important;
    }
    .prepareMsg{
        width: 100%;
        /*height: 67px;*/
        position: relative;
        padding-right: 4%;
        padding-top: 16px;
        padding-bottom: 14px;
    }
    .prepareTitle{
        font-size: 14px;
        font-family: "微软雅黑";
        margin-left: 10%;
        line-height: 14px;
    }
    .prepareContent{
        font-family: "微软雅黑";
        font-size: 12px;
        margin-left: 10%;
        color: #666666;
        margin-top: 9px;
    }
    .mui-active{
        color: #FBAF37 !important;
    }
    .imgBack{
        position: fixed;
        left: 10px;
        top: 10px;
        width: 9px;
        height: 16px;
        z-index: 10;
        color: black;
    }
    .msgImg{
        width: 15px !important;
        height: 13px;
        position: absolute;
        top: 17px;
        left: 4.13%;
    }
</style>
