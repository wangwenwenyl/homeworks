<template>
<div>
    <ContractTop tle="支出查看" tleurl="/index" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
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
                <input type="text" class="follow-input" v-model="number"/>
              </div>
            </div>
            <div class="search-iterm">
              <div class="follow-iterm-left">
                <label class="contract-list-name">合同编号：</label>
              </div>
              <div class="follow-iterm-right">
                <input type="text" class="follow-input" v-model="accountNum"/>
              </div>
            </div>
            <div class="search-iterm">
              <statueselect v-bind:selecttitle="statuetitle" v-bind:datas="statues" v-on:select="confirmstatue"></statueselect>
            </div>
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
        <div class="iterm" v-for="contract in items">
          <div style="width:100%;height:10px;background:#efeff4;"></div>
            <header>
                <div class="contract-num">合同编号：</div>
                <div class="contract-nums">{{ contract.contractNum }}</div>
                <div class="contract-check"><img src="../../assets/image/check.png" alt="" class="check-img"/>
                  <router-link :to="{name:'',params:{}}" class="main-link">
                    查看进度
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
                            {{ contract.number }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                    <span class="contract-list-name">
                        日期：
                    </span>
                        <span class="contract-list-value">
                         {{ dealtime(contract.formdate) }}
                    </span>
                    </div>
                </div>
                <!--<div class="contract-list">-->
                    <!--<div class="contract-list-left">-->
                        <!--<div class="contract-list-name">-->
                            <!--业务员：-->
                        <!--</div>-->
                        <!--<div class="contract-list-value">-->
                           <!--{{ contract.userName }}-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="contract-list-right">-->
                    <!--<span class="contract-list-name">-->
                        <!--部门：-->
                    <!--</span>-->
                        <!--<span class="contract-list-value">-->
                         <!--{{ contract.deptName }}-->
                    <!--</span>-->
                    <!--</div>-->
                <!--</div>-->
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            科目：
                        </div>
                        <div class="contract-list-value">
                            {{ dealword(contract.subject) }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                    <span class="contract-list-name">
                        项目名称：
                    </span>
                        <span class="contract-list-value" v-if="contract.proName==1">服务费</span>
                        <span class="contract-list-value" v-else-if="contract.proName==2">公证费</span>
                        <span class="contract-list-value" v-else-if="contract.proName==3">三方费</span>
                        <span class="contract-list-value" v-else-if="contract.proName==4">材料费</span>
                        <span class="contract-list-value" v-else-if="contract.proName==5">加急费</span>
                        <span class="contract-list-value" v-else-if="contract.proName==6">定金</span>
                        <span class="contract-list-value" v-else-if="contract.proName==7">其他</span>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            预算科目：
                        </div>
                        <div class="contract-list-value">
                            {{ dealword(contract.budget) }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                      <span class="contract-list-name">
                          金额：
                      </span>
                        <span class="contract-list-value">
                        {{ parseFloat(contract.amount) }}元
                      </span>
                    </div>
                </div>
                <div class="contract-list">
                    <div class="contract-list-left">
                        <div class="contract-list-name">
                            摘要及用途：
                        </div>
                        <div class="contract-list-value">
                            {{ dealword(contract.purpose) }}
                        </div>
                    </div>
                    <div class="contract-list-right">
                        <span class="contract-list-name">
                            状态：
                        </span>
                        <span class="contract-list-value" v-if="contract.state==1">审核中</span>
                        <span class="contract-list-value" v-else-if="contract.state==2">已驳回</span>
                        <span class="contract-list-value" v-else-if="contract.state==3">审核已通过</span>
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
                statuetitle:'状态',
                depttitle:'所属部门',
                depts:[
                    {
                        flex: 1,
                        values: [],
                        textAlign: 'center',
                        className: 'slot1',
                    }
                ],
                statues:[{
                    flex: 1,
                    values: ['请选择','审核中','已驳回','审核已通过'],
                    textAlign: 'center',
                    className: 'slot1',
                }],

                page:1,
                pageSize:15,
                contractNum:'',
                accountNum:'',
                deptId:'',
                statue:'',
                typeUser:2,
                typeId:'',//合同类型
                number:'',
                state:'',
                userId:'819384343152005127',

                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        methods:{
            dealword(words){
                if(words.length>4){
                    return words.substr(0,4) + '...' ;
                }else{
                    return words;
                }

            },
            trans(){
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            dealtime(time){
                var date = new Date(time);
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            },
            confirmstatue(state){
                this.state=state;
            },
            confirmdept(dept){
                this.deptId=dept;
            },
            load(){
                axios.post(hostapi+'/yeji/zhichu',qs.stringify({
                    userId:this.userId,
                    accountNum:this.accountNum,
                    state:this.state,
                    number:this.number,
                    page:this.page,
                    pageSize:this.pageSize,
                    typeId:this.typeId,
                    deptId:this.deptId,
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
        margin-top:350px;
    }
    .search-box{padding:10px 10px;}
  .search-btn{margin-top:10px;}
  .main-link{color:#FBAF37;text-decoration:none;}
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
