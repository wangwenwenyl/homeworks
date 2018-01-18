<template>
  <div id="app">
    <ContractTop tle="进度列表" tleurl="/index" style="position:fixed;top:0px;z-index:999;"></ContractTop>
    <div class="box" style="position: relative;z-index:9;margin-top:54px;">
      <div class="website">
        <div class="progress-box">
          <div class="box-title">
            合同进度：
          </div>
          <div class="state" style="overflow-y: scroll;margin-bottom: 20px;margin-top:20px;">
            <table id="dataCtx" style="top:60px;width:100%;font-size: 14px;" v-for="(node, index) in progress">
              <tr v-if="index%2==0">
                <td v-if="node.n==1">
                  <div class="state-result" style="padding-left:20%;"></div>
                  <img src="../../assets/img/4.4.png" style="width:85%;margin-left:15%;"  alt=""/>
                  <div style="padding-left:20%;">审批部门:{{ node.g }}</div>
                  <div style="padding-left:20%;"></div>
                  <div>审批中</div>
                </td>
                <td v-else-if="node.a==1" >
                  <div class="state-result" >{{ node.st }}</div>
                  <img src="../../assets/img/4.3.png" style="width:85%;margin-left:15%;"alt=""/>
                  <div >审批人:{{ node.u }}</div>
                  <div >审批意见:{{ node.o }}</div>
                  <div class="state-result" style="left:-116px;">通过</div>'
                </td>
                <td v-else-if="node.a==2">
                  <div class="state-result">{{ node.st }}</div>
                  <img src="../../assets/img/4.2.png" style="width:85%;margin-left:15%;" alt=""/>
                  <div >审批人:{{ node.u }}</div>
                  <div >审批意见:{{ node.o }}</div>
                  <div class="state-result" style="left:-121px;">未通过</div>
                </td>
                <td v-else>
                  <div class="state-result"></div>
                  <img src="../../assets/img/4.1.png" style="width:85%;margin-left:15%;"alt=""/>
                  <div >待审批部门:{{ node.g }}</div>
                  <div ></div>
                  <div class="state-result" style="left:-121px;">未开始</div>
                </td>
                <td></td>
              </tr>
              <tr v-else>
                <td></td>
                <td v-if="node.n==1">
                  <div class="state-result" ></div>
                  <img src="../../assets/img/4.4.png" style="transform:rotate(180deg);width:85%;"  alt=""/>
                  <div style="padding-left:20%;">审批部门:{{ node.g }}</div>
                  <div ></div>
                  <div style="padding-left:20%;">审批中</div>
                </td>
                <td v-else-if="node.a==1">
                  <div class="state-result" style="padding-left:20%;">{{ node.st }}</div>
                  <img src="../../assets/img/4.3.png" style="transform:rotate(180deg);width:85%;"alt=""/>
                  <div style="padding-left:20%;">审批人:{{ node.u }}</div>
                  <div style="padding-left:20%;">审批意见:{{ node.o }}</div>
                  <div class="state-result" style="padding-left:20%;">通过</div>'
                </td>
                <td v-else-if="node.a==2">
                  <div class="state-result" style="padding-left:20%;">{{ node.st }}</div>
                  <img src="../../assets/img/4.2.png" style="transform:rotate(180deg);width:85%;" alt=""/>
                  <div style="padding-left:20%;">审批人:{{ node.u }}</div>
                  <div style="padding-left:20%;">审批意见:{{ node.o }}</div>
                  <div class="state-result" style="padding-left:20%;">未通过</div>
                </td>
                <td v-else>
                  <div class="state-result" style="padding-left:20%;"></div>
                  <img src="../../assets/img/4.1.png" style="transform:rotate(180deg);width:85%;"alt=""/>
                  <div style="padding-left:20%;">待审批部门:{{ node.g }}</div>
                  <div ></div>
                  <div class="state-result" style="padding-left:20%;">未开始</div>
                </td>
              </tr>
            </table>
            <div class="gradient">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import ContractTop from '@/components/ContractTop';
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import { Button } from 'mint-ui';
  import { Toast } from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    data() {
      return {
          contractId:'',
          dt:'',
          progress:'',
      }
    },
    mounted: function () {
        this.contractId = this.$route.params.contractid;
        this.dt = this.$route.params.dt;
        this.getProgress();
//        console.log(this.contractId);
    },
    methods: {
        goTop() {
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        },
        //通过合同id以及dt获取该合同的进度节点
        getProgress(){
            axios.get(hostone+"/hcxzapp/getProcessByConId/"+this.contractId+"/"+this.dt,{

            }).then(response=>{
                if(response.status=='200'){
                    this.progress = response.data;
                }else{
                    Toast("操作失败");
                }
            }).catch(function(err){
                Toast("操作失败");
            })
        }
    },
    components: {
      'ContractTop': ContractTop
    }
  }
</script>

<style scoped>
  body {
    background: #fff;
    font-size: 12px;
    overflow: auto;
  }

  .box-title {
    padding-left: 30px;
    padding-top: 25px;
  }

  .state {
    position: relative;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .gradient {
    background: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(192, 192, 192), rgb(255, 255, 255));
    width: 3px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: -5px;
  }

  td {
    padding: 0px 10px;
    position: relative;
  }

  tr:nth-child(odd) td div {
    line-height: 25px;
    padding-left: 40%;
  }

  tr:nth-child(even) td div {
    line-height: 25px;
    padding-left: 15%;
  }

  /*.state-result{position: absolute;}*/
  .hide {
    display: none;
  }

  .mui-btn {
    margin-top: 10px;
    margin-left: 10px;
  }

  td {
    height: 80px;
    width: 50%;
    padding: 0px;
  }

  .box {
    margin: auto;
  }

  .ret:before {
    height: 16px;
    width: 9px;
    display: inline-block;
    float: left;
    vertical-align: middle;
    /*background: url("../img/return.png") no-repeat;*/
    /*background-size:100% 100% ;*/
    /*margin-left: 4%;*/
    position: absolute;
    margin: auto 0;
    left: 4%;
    top: 9px;
  }

  .box-head {
    background-color: #fff;
    color: #333;
  }
</style>
