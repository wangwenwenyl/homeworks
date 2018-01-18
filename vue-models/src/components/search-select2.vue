<template>
    <div class="follow-iterm" style="overflow-Y:scroll;">
        <div class="follow-iterm-left">
            <span class="follow-star" id="follow-star" v-show="staror">*</span><label class="contract-list-name">所属部门：</label>
        </div>
        <div  class="follow-iterm-right">
            <input type="text" v-model="data" class="follow-input" placeholder="请选择节点" @click="popupVisible4=true" id="jiedian">
        </div>
        <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4" style="width:100%;">
            <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
            </div>
            <mt-picker
                    v-bind:slots="datas"
                    @change="confirmall"
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
                staror:true,
                popupVisible4:false,
                data:'',
                title:'',
                year:'',
                month:'',
                datas:[
                    {
                        flex: 1,
                        values: ['2005', '2006', '2007', '2008', '2009', '2010'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2005', '2006', '2007', '2008', '2009', '2010'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ],
            }
        },
        methods:{
            confirmall:function(picker, values){
                this.fontdata=values[1];
                //values[0]代表第一个
                //values[1]代表第二个
                this.enddata=  values[1];
                this.$emit('select',this.fontdata,this.enddata);
            },
            cancleaddress:function(){
                this.popupVisible4 = false;
                this.data="";
            },
            selectaddress:function(){
                this.popupVisible4 = false;
            },
        },
//        props:['datas','selecttitle','staror'],
    }
</script>