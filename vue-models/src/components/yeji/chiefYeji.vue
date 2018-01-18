<template>
    <div>
        <ContractTop tle="业绩查看" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <div id="appHead" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;">
            <div class="search-btn" @click="trans()">
                {{ open ? '关闭' : '展开搜索' }}
            </div>
          <transition name="slider">
            <div class="search-box" v-show="open">
              <div class="search-iterm">
                <div class="follow-iterm-left">
                  <label class="contract-list-name">台账号：</label>
                </div>
                <div class="follow-iterm-right">
                  <input type="text" class="follow-input" v-model="accountNum"/>
                </div>
              </div>
              <div class="search-iterm">
                <div class="follow-iterm-left">
                  <label class="contract-list-name">客户姓名：</label>
                </div>
                <div class="follow-iterm-right">
                  <input type="text" class="follow-input" v-model="contractNum"/>
                </div>
              </div>
              <div class="search-iterm">
                <deptselect v-bind:selecttitle="depttitle" v-bind:datas="depts" v-on:select="confirmdept"></deptselect>
              </div>
              <div class="search-btn" @click="check()">
                查询
              </div>
              <div class="zhiMoney">
                当前合同业绩总额(元): <span class="money">120220</span>
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
            <div class="iterm" v-for="contract in items">
              <div style="width:100%;height:10px;background:#efeff4;"></div>
                <header>
                    <div class="contract-num">合同编号：</div>
                    <div class="contract-nums">{{ contract.contractNum }}</div>
                    <div class="contract-check" @click="watch(contract)"><img src="../../assets/image/check.png" alt="" class="check-img"/>
                      <router-link :to="{name:'checkmingxi',params:{}}" class="main-link">
                        查看明细
                      </router-link>
                    </div>
                </header>
                <section>
                    <div class="contract-list">
                        <div class="contract-list-left">
                            <div class="contract-list-name">
                                台账号：
                            </div>
                            <div class="contract-list-value">
                               {{ contract.accountNum }}
                            </div>
                        </div>
                        <div class="contract-list-right">
                          <span class="contract-list-name">
                              合同类型：
                          </span>
                          <span class="contract-list-value">
                              {{ contract.typeName }}
                          </span>
                        </div>
                    </div>
                    <div class="contract-list">
                        <div class="contract-list-left">
                            <div class="contract-list-name">
                                业绩归属人：
                            </div>
                            <div class="contract-list-value">
                               {{ dealword(contract.possessorName) }}
                            </div>
                        </div>
                        <div class="contract-list-right">
                          <span class="contract-list-name">
                              回款总额：
                          </span>
                          <span class="contract-list-value">
                               {{ parseFloat(contract.realamount) }}元
                          </span>
                        </div>
                    </div>
                    <div class="contract-list">
                        <div class="contract-list-left">
                          <div class="contract-list-name">
                            客户姓名：
                          </div>
                          <div class="contract-list-value">
                            {{ dealword(contract.possessorName) }}
                          </div>
                        </div>
                    </div>
                </section>
            </div>
        </mt-loadmore>
        <noData v-show="show" :class="cls"></noData>
    </div>
</template>

<script>
    import ContractTop from '@/components/ContractTop';
    import axios from 'axios';
    import noData from '@/components/noData';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import deptselect from '@/components/search-select';
    import typeselect from '@/components/search-select';
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                show:false,
                open:false,
                cls:'class1',
                popupVisible4: false,

                items:[],
                typetitle:'合同类型',
                depttitle:'审核时间',
                depts:[
                    {
                        flex: 1,
                        values: [],
                        textAlign: 'center',
                        className: 'slot1',
                    }
                ],
                types:[{
                    flex: 1,
                    values: ['请选择','信用贷','质押贷','抵押贷'],
                    textAlign: 'center',
                    className: 'slot1',
                }],

                page:1,
                pageSize:15,
                contractNum:'',
                accountNum:'',
                deptId:'',
                typeName:'',
                userId:'819384343152005127',

                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        methods:{
            watch(contract){
                console.log(contract);
            },
            trans(){
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            confirmtype(type){
                this.typeName=type;
            },
            confirmdept(dept){
                this.deptId=dept;
            },
            check(){
            axios.post(hostapi+'/yeji/list',qs.stringify({
              userId:this.userId,
              contractNum:this.contractNum,
              accountNum:this.accountNum,
              typeName:this.typeName,
              deptId:this.deptId,
              page:"",
              pageSize:"",
            })).then(response=>{
              console.log(response);
              if(response.data.code=='200'){
                this.show=false;
                this.items=[];
                if(response.data.data!=''){
                  this.items = this.items.concat(response.data.data);
                }
              }
            }).catch(function(err){
              Toast('操作失败');
            });
          },
            load(){
                axios.post(hostapi+'/yeji/list',qs.stringify({
                    userId:this.userId,
                    contractNum:this.contractNum,
                    accountNum:this.accountNum,
                    typeName:this.typeName,
                    deptId:this.deptId,
                    page:this.page,
                    pageSize:this.pageSize,
                })).then(response=>{
                    console.log(response);
                    if(response.data.code=='200'){
                        this.show=false;
                        if(response.data.data=='' && this.page==1){
                            this.show=true;
                            this.allLoaded=true;
                            this.items=[];
                        }else{
                            if(response.data.data==''){
                                this.allLoaded=true;
                            }
                            this.items = this.items.concat(response.data.data);
//                            console.log(response.data.data);
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
                if(words){
                    if(words.length>4){
                        return words.substr(0,4) + '...' ;
                    }else{
                        return words;
                    }
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
                    this.deptId=response.data.data[0];
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
            'typeselect':typeselect,
        }
    }
</script>

<style scoped>
    @import "../../assets/css/server.css";
    .class1{
        margin-top:110px;
    }
    .class2{
        margin-top:365px;
    }
    .search-box{padding:10px 10px;}
    .money{color:#FBAF37;}
    .main-link{color:#FBAF37;text-decoration:none;}
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
