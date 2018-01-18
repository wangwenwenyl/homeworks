<template>
  <div id="appHead">
     <div class="iterm">
         <header style="display:flex;  align-items: center;">
             <div style="width:5px;height:20px;background:#fbaf37;margin-right:5px;"></div>
             <div >支出凭单</div>
         </header>
        <section>
            <div class="iterms-list">
                <div class="left-name">
                    日期:
                </div>
                <div class="right-num">
                    2017-05-18
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    科目:
                </div>
                <div class="right-num">
                    如果图
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
                    HXY00630
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    项目名称:
                </div>
                <div class="right-num">
                    材料费
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    预算科目:
                </div>
                <div class="right-num">
                    电饭煲
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    摘要及用途:
                </div>
                <div class="right-num">
                    购买房屋
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    业务员:
                </div>
                <div class="right-num">
                    王梦柯
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    金额(元):
                </div>
                <div class="right-num">
                    53
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">

                </div>
                <div class="right-num" style="font-size:12px;color:#666;">
                    人民币(大写):<span>五百三十四元整</span>
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    备注:
                </div>
                <div class="right-num">
                    备注备注备注备注 备注备注备注备注 备注备注备注备注
                </div>
            </div>
        </section>
    </div>
    <div class="iterm">
         <header style="display:flex;  align-items: center;">
             <div style="width:5px;height:20px;background:#fbaf37;margin-right:5px;"></div>
             <div >审批历史</div>
         </header>
        <section>
            <div class="iterms-list">
                <div class="left-name">
                    审批人:
                </div>
                <div class="right-num">
                    张宝宝
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    审批时间:
                </div>
                <div class="right-num">
                    2017-08-17
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    审批意见:
                </div>
                <div class="right-num">
                    阿斯利康地方阿萨德离开家发阿斯蒂芬了接口
                </div>
            </div>
        </section>
    </div>
    <div class="iterm">
         <header style="display:flex;  align-items: center;">
             <div style="width:5px;height:20px;background:#fbaf37;margin-right:5px;"></div>
             <div >审批意见</div>
         </header>
        <section>
            <div class="iterms-list">
                <div class="left-name">
                    审批人:
                </div>
                <div class="right-num">
                    张成华
                </div>
            </div>
            <div class="iterms-list">
                <div class="left-name">
                    审批意见:
                </div>
                <div class="right-num">
                    <div style="width:100%;height:100px;">
                         <textarea  style="resize:none;width:100%;height:100%;padding:5px;"></textarea>
                    </div>
                </div>
            </div>
            <div  style="margin:30px 0px 20px;text-align:center;">
                <div class="disapprove">不同意</div>
                <div class="approve">同意</div>
            </div>
        </section>
    </div>
  </div>
</template>
<script>
export default {
  data () {
  return {

    }
  },
  mounted:function(){

  },
   components:{

  }
}
</script>
<style scoped>
  header{border-bottom:1px solid #ddd;line-height:32px;}
  section{padding:16px 25px;}
	.big-save{width:100%;height:39px;background:#fbaf37;color:#fff;
	text-align:center;line-height:39px;border-radius:5px;margin-top:20px;}
  .left-name{float:left;font-size:14px;color:#666;}
  .right-num{float:right;font-size:14px;color:#333;}
  .iterms-list{line-height:30px;}
  .iterms-list:after{display:table;content:"";clear:both;}
  .follow-input{height:23px !important;}
  .yulan-box{width:100%;height:150px;border:1px solid #ddd;margin-top:10px;}
  .picker-toolbar{background:#ddd;}
   .right-num{width:70%;text-align:right;}
   .disapprove{width:100px;height:35px;line-height:30px;text-align:center;color:#aaa;
   border-radius:5px;border:1px solid #ddd;display:inline-block;}
   .approve{width:100px;height:35;line-height:30px;text-align:center;color:#fff;border-radius:5px;
   border:1px solid #ddd;display:inline-block;background:#fbaf37;margin-left:15px;}
</style>
