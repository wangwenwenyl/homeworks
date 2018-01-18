<template>
  <div id="boxFixed">
    <ContractTop tle="定金录入" tleurl="/index"></ContractTop>
    <ding-jin-lu-ru-search @dingJinTrans="dingJinTrans" @dingJinContidion="dingJinContidion" :open="open"></ding-jin-lu-ru-search>


    <mt-loadmore
      :top-method="handleTopChange"
      :bottom-method="handleBottomChange"
      :bottom-all-loaded="allLoaded"
      :auto-fill="false"
      ref="loadmore"
      :class="cls"
    >
      <div>
        <ul>
          <li v-for="item in items"><dingJinLuRuList  v-bind:message="item" :luRuName="luRuName"></dingJinLuRuList></li>
        </ul>
      </div>
      <div v-show="show" :class="cls">
        <noData></noData>
      </div>


    </mt-loadmore>
  </div>
</template>
<script>
    import axios from 'axios';

    import ContractTop from '@/components/ContractTop';
    import dingJinLuRuList from '@/components/yeji/dingJinLuRuList';
    import dingJinLuRuSearch from '@/components/yeji/dingJinLuRuSearch.vue';
    import noData from '@/components/noData';

    import {Toast} from 'mint-ui';

    export default {
        data () {
            return {
                userid:'',
                submiter:'',
                accountNum:'',
                page:1,
                pageSize:15,
                allLoaded:false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
                scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
                items:[
                    {
                        name: 0
                    },
                    {
                        name: 1
                    },
                    {
                        name: 2
                    },
                    {
                        name: 3
                    },
                    {
                        name: 4
                    },
                    {
                        name: 5
                    },
                ],
                show:false,
                open: false,
                cls:'class1',
                luRuName: "定金录入"
            }
        },

        mounted(){
            this.userid=this.$cookie.get('uid');
            this.load ();
        },

        methods:{
            handleTopChange() {
                // 加载更多数据
                setTimeout(() => {
                    this.page=1;
                    //this.items=[];
                    this.load();
                    this.$refs.loadmore.onTopLoaded();
                }, 1500);

            },
            handleBottomChange() {
                // 加载更多数据
                // this.allLoaded = true;// 若数据已全部获取完毕
                // this.$refs.loadmore.onBottomLoaded();
                setTimeout(() => {
                    this.page +=1;
                    this.load();
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            },
            load(){
    //          axios.get('http://www.test.blibang.com/index/allphone',JSON.stringify({
    //              userId:this.userid,
    //              name:this.submiter,
    //              accountNum:this.accountNum,
    //              page:this.page,
    //              pageSize:this.pageSize,
    //          })).then(response=>{
    //              if(response.data.code=='200'){
    //                  this.show=false;
    //                  if(response.data.data=='' && this.page==1){
    //                      this.show=true;
    //                      this.allLoaded = true;
    //                      this.items=[];
    //                  }else{
    //                      this.items = this.items.concat(response.data.data);
    //                      console.log(response.data.data);
    //                      if(response.data.data==''){
    //                          this.allLoaded = true;
    //                      }
    //                  }
    //              }
    //          }).catch(function(err){
    //              Toast('操作失败');
    //          });
            },

            //控制查询框显示
            dingJinTrans(obj){
                this.open = !obj.open;
                if(this.open){
                    this.cls="class2";
                }else{
                    this.cls="class1";
                }
            },
            dingJinContidion(obj){
                this.items=[];
                this.accountNum = obj.accountNum;
                this.submiter = obj.submiter;
                this.load();
                this.open=false;
                this.cls='class1';
            },
        },

        components:{
            'ContractTop':ContractTop,
            'ding-jin-lu-ru-search': dingJinLuRuSearch,
            'noData': noData,
            'dingJinLuRuList':dingJinLuRuList
        }
  }
</script>

<style scoped>
    @import "../../assets/css/server.css";

    .class1{
        margin-top: 92px;
        overflow-y: scroll;
    }
    .class2{
        margin-top: 275px;
    }

</style>
