<template>
    <div id="appHead">
        <div class="iterm">
            <div class="follow-space"></div>
            <header>
                <div></div>
                <div >调拨信息</div>
            </header>
            <section>
                <div class="contract-list">
                    <div class="contract-list-left">
                        业绩总额(元)：
                    </div>
                    <div class="contract-list-right">
                        1000
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        原始部门：
                    </div>
                    <div class="contract-list-right">
                        信贷七十三部
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        调拨部门：
                    </div>
                    <div class="contract-list-right">
                        信贷一十三部
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        调拨人：
                    </div>
                    <div class="contract-list-right">
                        曹操
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        调拨到：
                    </div>
                    <div class="contract-list-right">
                        刘备
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        剩余金额（元）：
                    </div>
                    <div class="contract-list-right">
                        1000
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        调拨金额（元）：
                    </div>
                    <div class="contract-list-right">
                        2000
                    </div>
                </div>
            </section>
        </div>
        <div class="iterm">
            <div class="follow-space"></div>
            <header>
                <div></div>
                <div >合同客户信息</div>
            </header>
            <section>
                <div class="contract-list">
                    <div class="contract-list-left">
                        业务员：
                    </div>
                    <div class="contract-list-right">
                        张祥鼐
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        所在部门：
                    </div>
                    <div class="contract-list-right">
                        信贷五十一部
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        客户姓名：
                    </div>
                    <div class="contract-list-right">
                        张三
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        客户身份证号：
                    </div>
                    <div class="contract-list-right">
                        110101198411158769
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        客户手机号：
                    </div>
                    <div class="contract-list-right">
                        18811186495
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        其他电话:
                    </div>
                    <div class="contract-list-right">
                        110105199212055817
                    </div>
                </div>
            </section>

            <footer>
                <div class="contract-btn" style="width:120px;" v-on:click="sort">查看佣金确认书</div>
            </footer>
        </div>

        <!-- 佣金确认书 -->
        <yongJinQueRenShu :shows="shows"></yongJinQueRenShu>
    </div>
</template>
<script>
    import axios from 'axios';
    import {Toast} from 'mint-ui';

    import yongJinQueRenShu from './yongJinQueRenShu'
    export default {
        data () {
            return {
                shows:false,
            }
        },

        mounted:function(){

        },

        methods:{
            sort(){
                if( !this.shows ){
                    this.shows=true;
                }else{
                    this.shows=false;
                }
            }
        },
        components:{
            'yongJinQueRenShu': yongJinQueRenShu
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
    #appHead{
        margin-top: 44px;
    }
    .iterm{padding: 0px !important;margin-bottom: 20px;margin-top: 0px;}
    .contract-list-right{
        text-align: right;
    }
    footer{
        padding-top: 20px;
        padding-bottom: 0;
    }
</style>
