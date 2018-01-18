<template>
    <div style="overflow-Y:scroll;">
        <div class="follow-iterm-left">
             <span class="follow-star" v-show="staror">*</span><label class="contract-list-name">{{ title }}：</label>
        </div>
        <div  class="follow-iterm-right">
            <!--<input type="text"    class="follow-input" v-model="time"  @click="openPicker"  />-->
          <div class="follow-input" v-model="time"  @click="openPicker" style="text-align:left;border-radius:5px;">{{time}}</div>
        </div>
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
                var date = new Date(times);
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            },
        },
        props:['title',"staror","time"],
        created(){


        }
    }
</script>
<style scoped>
    .picker-toolbar{background:#ddd;color:#333;}
</style>
