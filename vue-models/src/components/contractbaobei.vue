<!--报备数据父组件-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <div id="app" style="overflow-Y:scroll">
        <ContractTop tle="报备数据" tleurl="/shouye" style="position:fixed;top:0px;z-index: 999;background-color:#fff;"></ContractTop>
        <div id="appHead" style="width:100%;position:fixed;top:44px;background-color:#fff;z-index: 999;">
            <div class="search-btn" @click="trans()">
                {{ open ? '关闭' : '展开搜索' }}
            </div>
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
                    <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" v-on:select="confirmdept"></deptselect>
                </div>
                <div class="search-iterm">
                    <starttime v-on:date="start" v-bind:title="starttitle"></starttime>
                </div>
                <div class="search-iterm">
                    <endtime v-on:date="end" v-bind:title="endtitle"></endtime>
                </div>
                <div class="search-btn" @click="contidion">
                    查询
                </div>
            </div>
        </div>
        <mt-loadmore
                :top-method="handleTopChange"
                :bottom-method="handleBottomChange"
                :bottom-all-loaded="allLoaded"
                :auto-fill="false"
                ref="loadmore"
                :class="cls"
        >
        <ContractBlock2 v-bind:contracts="items"></ContractBlock2>
        <noData v-show="show" :class="cls"></noData>
        </mt-loadmore>
    </div>
</template>
<script>
    import ContractTop from '@/components/ContractTop';
    import ContractBlock2 from '@/components/ContractBlock2';
    import axios from 'axios';
    import noData from '@/components/noData';
    import qs from 'qs';
    import {Loadmore} from 'mint-ui';
    import starttime from '@/components/search-date';
    import endtime from '@/components/search-date';
    import deptselect from '@/components/search-select';
    import { Toast } from 'mint-ui';

    export default {
        data (){
            return {
                userid:'',
                show:false,
                items:[],
                department:'',    //所属部门
                contractNum:'',   //合同编号
                startTime:'', //起始时间
                endTime:'',   //终止时间
                page:1,
                pageSize:15,
                popupVisible4: false,
                open:false,
                depts:[{
                    flex: 1,
                    values: [],
                    textAlign: 'center',
                    className: 'slot1',
                }],
                starttitle:'起始时间',
                endtitle:'终止时间',
                titles:'所属部门',
                topStatus: '',
                cls:'class1',
                allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            }
        },
        created (){
             this.userid = this.$cookie.get("uid");
            axios.post(hostapi+'/auth/allbumen',qs.stringify({
            userId:this.userid,
        })).then(response=>{
                if(response.data.code=='200'){
                    this.depts[0].values=response.data.data;
//                    this.department=response.data.data[0];
                }
            }).catch(function(err){
                Toast('操作失败');
            });
            this.userid=this.$cookie.get('uid');
//            this.startTime=this.origintime();
//            this.endTime=this.origintime();
            this.load();
        },
        methods:{
            getCookie(cname){
                var name = cname + "=";
                var ca = document.cookie.split(";");
                for(var i=0;i<ca.length;i++){
                    var c = ca[i];
                    if(c=='') return "";
                    while(c.charAt(0)=='') c=c.substring(1);
                    if(c.indexOf(name)!=-1) return c.substring(name.length,c.length);
                }
                return "";
            },
            contidion(){
                this.items=[];
                this.load();
                this.open=false;
                this.cls="class1";
            },
            trans(){
                this.open=! this.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
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
            start(time){
                this.startTime = time;
                console.log(this.startTime);
            },
            end(time){
                this.endTime = time;
                console.log(this.endTime);
            },
            confirmdept:function(value){
                this.department=value;
            },
            origintime(){
                var date = new Date();
                return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            },
            load(){
                //获取合同数据
                axios.post(hostapi+'/contract/baobeilist', qs.stringify({
                    contractNum:this.contractNum,
                    department:this.department,
                    startTime:this.startTime,
                    endTime:this.endTime,
                    page:this.page,
                    pageSize:this.pageSize,
                    userId:this.userid
                })).then(response=>{
                    if(response.data.code=='200'){
                        this.show=false;
                        if(response.data.data=='' && this.page==1){
                            this.show=true;
                            this.allLoaded = true;
                            this.items=[];
                        }else{
                            this.items = this.items.concat(response.data.data);
                            console.log(this.items);
                            if(response.data.data==''){
                                this.allLoaded = true;
                            }
                        }
                    }
                }).catch(function(err){
                    Toast('操作失败');
                });
            },
        },
        components:{
            'ContractTop':ContractTop,
            'ContractBlock2':ContractBlock2,
            'noData':noData,
            'starttime':starttime,
            'endtime':endtime,
            'deptselect':deptselect,
        }
    }
</script>
<style scoped>
    @import "../assets/css/server.css";
    .class1{
        margin-top:88px;
    }
    .class2{
        margin-top:384px;
    }
</style>
