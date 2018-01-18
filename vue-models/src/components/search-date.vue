<template>
    <div style="overflow-Y:scroll;">
        <div class="follow-iterm-left">
             <span class="follow-star" v-show="staror">*</span><label class="contract-list-name">{{ title }}：</label>
        </div>
        <div  class="follow-iterm-right">
            <!--<input type="text" readonly  class="follow-input" v-model="time"  @click="openPicker" style="border:none;" />-->
            <div class="follow-input" v-model="time"  @click="openPicker">{{time}}</div>
        </div>
        <mt-datetime-picker
                ref="picker"
                type="date"
                v-model="times"
                @confirm="start"
        >
        </mt-datetime-picker>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                times:new Date(),
                value:'',
                time:'',
                data:''
            }
        },
        methods:{
            openPicker(){
                this.$refs.picker.open();
            },
            start(time){
                //this.$emit('selectdate',this.time);
                this.time = this.dealtime(time);
                this.$emit('date',this.time);
            },
            dealtime(times){
                if(times){
                    var date = new Date(times);
                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
                }else{
                    return "";
                }
            },
        },
        props:['title',"staror","riqi"],
        created(){
            //this.time=this.dealtime(new Date());
            if(this.riqi!=''){
                this.time=this.riqi;
            }
        }
    }
</script>
<style scoped>
    .picker-toolbar{background:#ddd;color:#333;}
    .follow-iterm-left,.follow-iterm-right{
        vertical-align: top;
    }
    .follow-iterm-right{
        float:right;
    }
    .contract-list-name{color:#666;}
    .follow-input{
        text-align:left;
        padding-left:10px;
        position: relative;
    }
    .follow-input:after{
        content: '';
        position: absolute;
        top: 0;
        right: 5px;
        width: 15px;
        height: 100%;
        background: url('../assets/image/calender.png') no-repeat center center;
        background-size: contain;
    }
</style>
