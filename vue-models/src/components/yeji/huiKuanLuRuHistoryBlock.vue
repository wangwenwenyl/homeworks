<template>
  <div id="appHead">
     <div class="iterm" >
        <div class="follow-space"></div>
        <section>
            <div class="iterms-list">
                <div class="left-name">
                    日期:
                </div>
                <div class="right-num">
                    2017-08-22
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    款项类别:
                </div>
                <div class="right-num">
                    加急费
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    业绩归属人:
                </div>
                <div class="right-num">
                    王梦柯
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    实收金额（元）:
                </div>
                <div class="right-num">
                    10000
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    收据号:
                </div>
                <div class="right-num">
                    a12234755
                </div>
            </div>
        </section>
    </div>
  </div>
</template>

<script>
import deptselect from '@/components/search-select';
export default {
  data () {
  return {
        popupVisible4: false,
        depts:[{
            flex: 1,
            values:['启动','暂停','开始'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles:'款项类别',
        popupVisible4: false,
        depts2:[{
            flex: 1,
            values:['北京银行','工商银行','建设银行'],
            textAlign: 'center',
            className: 'slot1',
        }],
        titles2:'收款账号',
    }
  },
  mounted:function(){

  },
   components:{
    'deptselect':deptselect
  }
}
</script>
<style scoped>
  body{background:#fff;}
  header{border-bottom:1px solid #ddd;}
  section{padding:16px 15px;}
	.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
	text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
  .left-name{float:left;font-size:14px;color:#666;}
  .right-num{float:right;font-size:14px;color:#333;}
  .iterms-list{height:30px;line-height:30px;}
  .iterms-list:after{display:table;content:"";clear:both;}
  .follow-input{height:23px !important;}
  .yulan-box{width:100%;height:150px;border:1px solid #ddd;margin-top:10px;}
  .picker-toolbar{background:#ddd;}
</style>
