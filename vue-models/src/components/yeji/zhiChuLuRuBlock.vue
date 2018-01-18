<template>
  <div id="appHead">
     <div class="iterm">
        <section>
            <div class="iterms-list">
                <div>
                    <genginriqi v-on:date="start" v-bind:title="genjindate" v-bind:staror="false"></genginriqi>
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    科目:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    部门:
                </div>
                <div class="right-num">
                    信贷七十三部
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    台账号:
                </div>
                <div class="right-num">
                    HXY00639
                </div>
            </div>
            <div class="iterms-list">
                <deptselect v-bind:selecttitle="titles" v-bind:datas="depts" ></deptselect>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    预算科目:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list" style="margin:10px 0px;">
                <div class="left-name">
                    摘要及用途:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;">
                         <textarea  style="resize:none;width:100%;height:100%;padding:5px;"></textarea>
                    </div>
                </div>
            </div>
            <div class="iterms-list">
                <deptselect v-bind:selecttitle="titles2" v-bind:datas="depts2" ></deptselect>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    金额:
                </div>
                <div class="right-num">
                    <input class="follow-input">
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">

                </div>
                <div class="right-num" style="font-size:12px;color:#666;">
                    <div  class="range">超出额度,您可支出额度766.0元</div>
                    <div  class="range">剩余支出额度人民币<span>266</span>元</div>
                    <div  class="range">人民币(大写):<span></span></div>
                </div>
            </div>
            <div class="iterms-list" style="margin:10px 0px;">
                <div class="left-name">
                    备注:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;">
                         <textarea  style="resize:none;width:100%;height:100%;padding:5px;"></textarea>
                    </div>
                </div>
            </div>
            <div class="big-save">提交</div>
        </section>
    </div>
  </div>
</template>

<script>
import genginriqi from '@/components/search-date';
import deptselect from '@/components/search-select';
export default {
  data () {
  return {
        genjindate:'跟进日期',
        popupVisible4: false,
        depts:[{
            flex: 1,
            values:['服务费','公证费','材料费'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles:'项目名称',
        depts2:[{
            flex: 1,
            values:['王梦柯','李永生','张成华'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles2:'业务员',
    }
  },
  methods:{
      start(time){
        this.signdatestart = time;
    }
  },
  mounted:function(){

  },
   components:{
    'deptselect':deptselect,
    'genginriqi':genginriqi
  }
}
</script>
<style scoped>
  .contract-list-name{color:#666;}
  header{border-bottom:1px solid #ddd;}
  section{padding:16px 15px;}
	.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
	text-align:center;line-height:39px;border-radius:5px;margin:20px 0px;}
  .left-name{float:left;font-size:14px;color:#666;}
  .right-num{float:right;font-size:14px;color:#333;width:60%;text-align:right;}
  .iterms-list{line-height:30px;}
  .iterms-list:after{display:table;content:"";clear:both;}
  .follow-input{height:23px !important;}
  .yulan-box{width:100%;height:150px;border:1px solid #ddd;margin-top:10px;}
  .picker-toolbar{background:#ddd;}
  .range{line-height:20px;color:red;}
</style>
