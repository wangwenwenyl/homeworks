<template>
    <div style="overflow-Y:scroll;">

            <label for="">{{ title }}：</label>
            <!--<input type="text" class="word5" v-model="time" @click="openPicker"/>-->
      <div class="follow-input" v-model="time"  @click="openPicker" style="text-align:left;border-radius:5px;">{{time}}</div>
        <mt-datetime-picker
                ref="picker"
                type="date"
                v-model="times"
                @confirm="start"
        >
        </mt-datetime-picker>
        <!--<mt-datetime-picker-->
        <!--ref="picker"-->
        <!--type="date"-->
        <!--v-model="times"-->
        <!--year-format="{value} 年"-->
        <!--month-format="{value} 月"-->
        <!--date-format="{value} 日"-->
        <!--@confirm="start">-->
        <!--</mt-datetime-picker>-->
    </div>
</template>

<script>
    export default
    {
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
            start(time1){
                //this.$emit('selectdate',this.time);
                this.time = this.dealtime(time1);
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
        props:['title',"time"],
        mounted(){
            //this.time=this.dealtime(new Date());
        }
    }
</script>
<style scoped>
    .picker-toolbar{background:#ddd;color:#333;}
</style>
