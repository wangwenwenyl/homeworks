<template>
    <div>
        <ContractTop tle="回款查看" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <div id="appHead" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;">
            <div class="search-btn" @click="trans()">
                {{ open ? '关闭' : '展开搜索' }}
            </div>
          <transition name="slider">
            <div class="search-box" v-show="open">
              <div class="search-iterm">
                <div class="follow-iterm-left">
                  <label class="contract-list-name">合同编号：</label>
                </div>
                <div class="follow-iterm-right">
                  <input type="text" class="follow-input" v-model="contractNum"/>
                </div>
              </div>
              <div class="search-iterm">
                <div class="follow-iterm-left">
                  <label class="contract-list-name">台账号：</label>
                </div>
                <div class="follow-iterm-right">
                  <input type="text" class="follow-input" v-model="ledgerNum"/>
                </div>
              </div>
              <!--<div class="search-iterm">-->
              <!--<deptselect v-bind:selecttitle="depttitle" v-bind:datas="depts" v-on:select="confirmdept"></deptselect>-->
              <!--</div>-->
              <div class="search-btn" @click="load()">
                查询
              </div>
              <div class="zhiMoney">
                当前支出总计金额(元): <span class="money">120220</span>
              </div>
            </div>
          </transition>
        </div>
        <mt-loadmore
                :top-method="handleTopChange"
                :bottom-method="handleBottomChange"
                :bottom-all-loaded="allLoaded"
                :auto-fill="false"
                ref="loadmore"
                :class="cls"
        >
            <div class="iterm" >
              <div style="width:100%;height:10px;background:#efeff4;"></div>
                <header>
                    <div class="contract-num">合同编号：</div>
                    <div class="contract-nums">
                      <!--{{ contract.contractNum }}-->
                      121212312313
                    </div>
                </header>
                <section>
                    <div class="contract-list">
                        <div class="contract-list-left">
                            <div class="contract-list-name">
                                台账号：
                            </div>
                            <div class="contract-list-value">
                                <!--{{ contract.ledgerNum }}-->
                              4as45df
                            </div>
                        </div>
                        <div class="contract-list-right">
                          <span class="contract-list-name">
                              收据号：
                          </span>
                          <span class="contract-list-value">
                               <!--{{ contract.receiptNumber }}-->
                            4565
                          </span>
                        </div>
                    </div>
                    <div class="contract-list">
                        <div class="contract-list-left">
                            <div class="contract-list-name">
                              还款日期：
                            </div>
                            <div class="contract-list-value">
                              2017-06-01
                              <!--{{ dealtime(contract.updateTime) }}-->
                            </div>
                        </div>
                        <div class="contract-list-right">
                              <span class="contract-list-name">
                                  回款金额(元)：
                              </span>
                              <span class="contract-list-value">
                                125222
                            <!--{{ contract.actualServiceCharge }}-->
                              </span>
                        </div>
                    </div>
                    <div class="contract-list">
                        <div class="contract-list-left">
                            <div class="contract-list-name">
                                款项类别：
                            </div>
                            <div class="contract-list-value">
                               <!--{{ contract.paymentCategory }}-->
                              贷款
                            </div>
                        </div>
                        <div class="contract-list-right">
                            <span class="contract-list-name">
                                审核状态：
                            </span>
                            <span class="contract-list-value">
                              已驳回
                                 <!--{{ contract.actualServiceCharge }}-->
                            </span>
                        </div>
                    </div>
                </section>
            </div>
        </mt-loadmore>
        </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import axios from 'axios';
    import noData from '@/components/noData';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import deptselect from '@/components/search-select';
    import statueselect from '@/components/search-select';
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                show:false,
                open:false,
                cls:'class1',
                popupVisible4: false,

                items:[],
                depttitle:'所属部门',
                depts:[
                    {
                        flex: 1,
                        values: [],
                        textAlign: 'center',
                        className: 'slot1',
                    }
                ],

                page:1,
                pageSize:15,
                contractNum:'',
                accountNum:'',
                department:'',
                statue:'',
                ledgerNum:'',//台账号
                userId:'819384343152005127',
                typeUser:2,

                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        methods:{
            dealtime(time){
                var date = new Date(time);
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            },
            trans(){
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            confirmstatue(){},
            confirmdept(){},
            load(){
                axios.post(hostapi+'/yeji/huikuan',qs.stringify({
                    userId:this.userId,
                    accountNum:this.accountNum,
                    ledgerNum:this.ledgerNum,
                    page:this.page,
                    pageSize:this.pageSize,
                    typeUser:this.typeUser,
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.show=false;
                        if(response.data.data=='' && this.page==1){
                            this.show=true;
                            this.allLoaded=true;
                            this.items=[];
                        }else{
                            this.items = this.items.concat(response.data.data);
                            console.log(response.data.data);
                            if(response.data.data==''){
                              this.allLoaded = true;
                            }
                        }
                    }
                }).catch(function(err){
                    Toast('操作失败');
                });
            },
            handleTopChange() {
                // 加载更多数据
                setTimeout(() => {
                    this.page=1;
                    this.items=[];
                    this.load();
                    this.$refs.loadmore.onTopLoaded();
                }, 1500);

            },
            handleBottomChange() {
                // 加载更多数据
                setTimeout(() => {
                    this.page +=1;
                    this.load();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            dealword(words){
                if(words.length>10){
                    return words.substr(0,10) + '...' ;
                }else{
                    return words;
                }

            },
        },
        mounted(){
            axios.post(hostapi+'/auth/userallauth',qs.stringify({
                userId:this.userId,
            })).then(response=>{
                if(response.data.code=='200'){
                    this.depts[0].values=response.data.data;
                    this.department=response.data.data[0];
                }
            }).catch(function(err){
                Toast('操作失败');
            });
            this.load();
        },
        components:{
            'ContractTop':ContractTop,
            'noData':noData,
            'deptselect':deptselect,
            'statueselect':statueselect,

        }
    }
</script>

<style scoped>
    @import "../../assets/css/server.css";
    .class1{
        margin-top:100px;
    }
    .class2{
        margin-top:315px;
    }
    .search-btn{margin-top:10px;}
    .money{color:#FBAF37;}
    .zhiMoney{font-size:12px;color:#999;text-align: center;margin-top:15px;}
    .slider-enter-active,.slider-leave-active{
      transition: all .5s;
    }
    .slider-enter,.slider-leave-active{
      transform: translateX(-100%);
      opacity:0;
    }
    .search-box{width:300px;margin:auto;padding:19px 0px;}
</style>
