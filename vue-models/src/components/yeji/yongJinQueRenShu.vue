<template>
    <!-- 佣金确认书 -->
    <div class="iterm" v-show="shows">
        <div class="follow-space"></div>
        <header>
            <div></div>
            <div >佣金确认书</div>
        </header>
        <section>
            <div class="iterms-list">
                <div class="left-name">
                    丙方(银主):
                </div>
                <div class="right-num">
                    九州机构
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    联系电话:
                </div>
                <div class="right-num">
                    18811186495
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    佣金确认情况如下:
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    一、甲方（客户）委托乙方向丙方（银主）借款的总额为：
                    <span class="right-num">6200000元</span>
                </div>
                <div class="right-num moneyUpper">
                    人民币（大写）壹佰万元整
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    二、丙方需向乙方（按照借款额的百分之0.9）返还的全部佣金金额为（共返还1次）：
                    <span class="right-num">6200000元</span>
                </div>
                <div class="right-num moneyUpper">
                    人民币（大写）壹佰万元整
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    三、丙方需向乙方（按照借款额的百分之0.9）返还的全部佣金金额为（共返还1次）：
                    <span class="right-num">6200000元</span>
                </div>
                <div class="right-num moneyUpper">
                    人民币（大写）壹佰万元整
                </div>
            </div>
            <div class="iterms-list">
                <div class="">
                    四、其他收费
                </div>
                <ul class="">
                    <li>
                        <div class="left-name">
                            1.明目:
                        </div>
                        <div class="right-num">
                            公正返费
                        </div>
                    </li>
                    <li>
                        <div class="left-name">
                            金额(元):
                        </div>
                        <div class="right-num">
                            1200
                        </div>
                    </li>
                    <li>
                        <div class="left-name">
                            1.明目:
                        </div>
                        <div class="right-num">
                            公正返费
                        </div>
                    </li>
                    <li>
                        <div class="left-name">
                            金额(元):
                        </div>
                        <div class="right-num">
                            1200
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    import axios from 'axios';
    import {Toast} from 'mint-ui';
    export default {
        data () {
            return {
            }
        },
        props: {
            shows: {
                default: true
            }
        },

        mounted:function(){
            //交接单回显
        //    axios.post(host+"/app/loadcntdeliveryofGuaranty?contractnum="+this.contractnum,{
        //      headers:{'Content-Type': 'application/x-www-form-urlencoded'},
        //    })
        //      .then(response=>{
        //        console.log(response.data.diya);
        //        this.jiaojiedancontent=response.data.diya;
        //        this.contractid=response.data.diya.contractId;
        //        console.log('交接单');
        //        console.log(this.jiaojiedancontent);
        //      })
        //      .catch(function(err){
        //          Toast('操作失败');
        //      })
          },

        methods:{

        },
        components:{

        }
    }
</script>
<style scoped>
    @import "../../assets/css/server.css";
    header{border-bottom: 1px solid #ddd;display: flex;align-items: center;}
    header>div:first-of-type{
        width:5px;
        height:20px;
        background:#fbaf37;
        margin-right:5px;
    }
    section{padding: 16px;}

    .iterm{padding: 0px !important;margin-bottom: 20px;margin-top: 0px;}

    .iterms-list{line-height: 30px;overflow: hidden;}
    .left-name{float:left;font-size:14px;color:#666;}
    .right-num{float:right;font-size:14px;color:#333;}
    ul li{
        overflow: hidden;
    }
    .moneyUpper{
        font-size: 12px;
        color: #666;
    }
</style>
