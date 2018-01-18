<template>
    <div class="follow-iterm" style="overflow-Y:scroll;">
        <div class="follow-iterm-left">
            <span class="follow-star" id="follow-star" v-show="staror">*</span><label class="contract-list-name">{{ selecttitle }}：</label>
        </div>
        <div  class="follow-iterm-right" style="float:right;">
             <!--<input type="text" style="padding-left:0px;caret-color:auto;caret-color: transparent;" v-model="data" readonly class="follow-input" placeholder="请选择" @click="popupVisible4=true" id="jiedian">-->
            <div  style="text-align:left;border-radius:5px;" class="follow-input"  @click="popupVisible4=true" id="jiedian" >{{data}}</div>
        </div>
        <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4" style="width:100%;">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="confirmall">确定</span>
            </div>
            <mt-picker
                    v-bind:slots="datas"
                    @change="selectaddress"
                    :visibleItemCount="5"
                    v-model="data"
                    ref="picker"
            >
            </mt-picker>
        </mt-popup>

    </div>
</template>
<script>
    export default {
        data () {
            return {
                popupVisible4:false,
                data:'请选择',
                title:'',
                picker:'',
            }
        },
        methods:{
            confirmall:function(){
                this.$emit('select',this.picker);
                this.data=this.picker;
                this.popupVisible4 = false;
            },
            cancleaddress:function(){
                this.popupVisible4 = false;
//                this.data="";
            },
            selectaddress:function(picker, values){
                this.picker=values[0];
                this.$emit('listionChildEvent',this.picker);
            }
        },
        props:['datas','selecttitle','staror'],
    }
</script>
<style scoped>
    .contract-list-name{font-size:14px;color: #666;}
    .follow-iterm-left,.follow-iterm-right{
        vertical-align: top;
    }
    .follow-input{
        position: relative;
        padding-left: 10px;
    }
    .follow-input:after{
        content: '';
        position: absolute;
        top: 0;
        right: 5px;
        width: 15px;
        height: 100%;
        background: url('../assets/image/selectdown@2x.png') no-repeat center center;
        background-size: contain;
    }
</style>
