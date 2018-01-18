<template>
    <div calss="history" style="overflow-Y:scroll;" >
        <div class="item-box" v-for="message in history">
            <div class="item-line1">
                <div class="item-left">
                    <span>步骤：</span>
                    <span>{{ message.step }}</span>
                </div>
                <div class="item-right">
                    <span>日期：</span>
                    <span>{{ dealtime(message.updatetime) }}</span>
                </div>
            </div>
            <div class="item-line1">
                <div class="item-left">
                    <span>审批人：</span>
                    <span>{{ message.auditorName }}</span>
                </div>
                <div class="item-right">
                    <span>意见：</span>
                    <span>{{ message.auditorOpinion }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        dealtime(time){
            if(time){
//                var date = new Date(time);
//                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
                return time.split(" ")[0];
            }else{
                return "";
            }
        },
    },
    mounted(){

    },
    components:{

    },
    props:['history'],
}
</script>

<style scoped>
    .item-box{
        margin-top:10px;
        margin-left:1rem;
        margin-right:1rem;
        border:1px solid #ddd;
        font-size: 14px;
    }
    .item-line1{
        margin-bottom:10px;
        margin-top:10px;
    }
    .item-line2{
        margin-bottom:10px;
        padding-left:5px;
    }
    .item-left{
        display:inline-block;
        width:48%;
        padding-left:5px;
    }
    .item-right{
        display:inline-block;
        width:48%;
    }
</style>
