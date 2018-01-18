<template>
    <form id="fangbaobei" action="" style="overflow-Y:scroll;" >
        <div class="iterm">
            <span class="star">*</span>
            <label for="">区域：</label>
            <input v-bind:disabled="detailShow" type="text" name="quyu" class="word5" id="quyu" v-model="fangbaobei.quyu"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">部门：</label>
            <input v-bind:disabled="detailShow" type="text" name="bumen" class="word5" id="bumen" v-model="fangbaobei.bumen"/>
        </div>
        <div class="iterm">
            <label for="">报备人姓名：</label>
            <input v-bind:disabled="detailShow" type="text" name="name" class="word5" v-model="fangbaobei.name"/>
        </div>
        <div class="iterm" v-if="detailShow">
            <label for="">报备时间：</label>
            <input type="date" v-bind:disabled="detailShow" name="time"  class="word5" v-model="fangbaobei.time"/>
            <!--<reportTime v-bind:title="'报备时间'" v-bind:time="fangbaobei.time" v-on:start="report"></reportTime>-->
        </div>
        <div class="iterm" v-else>
            <label for="">报备时间：</label>
            <input type="date" name="time"  class="word5" v-model="fangbaobei.time"/>
            <!--<reportTime v-bind:title="'报备时间'" v-bind:time="fangbaobei.time" v-on:start="report"></reportTime>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">经理姓名：</label>
            <input v-bind:disabled="detailShow" type="text" name="jingli" class="word5" id="jingli" v-model="fangbaobei.jingli"/>
        </div>
        <!--<div class="iterm">-->
            <!--<label for="">主管姓名：</label>-->
            <!--<input type="text" disabled name="zhuguan" class="word5" id="zhuguan" value="***********"/>-->
            <!--&lt;!&ndash;<input type="text" v-bind:disabled="showor" name="zhuguan" class="word5" id="zhuguan" v-model="fangbaobei.zhuguan"/>&ndash;&gt;-->
        <!--</div>-->
        <div class="iterm">
            <span class="star">*</span>
            <label for="">业务姓名：</label>
            <input v-bind:disabled="detailShow" type="text" name="yewu" class="word5" id="yewu" v-model="fangbaobei.yewu"/>
        </div>
        <div class="iterm" v-if="detailShow">
            <label for="">做单时间：</label>
            <input v-bind:disabled="detailShow" type="date" name="zuodantime" class="word5" v-model="fangbaobei.zuodantime"/>
            <!--<singleTime v-bind:title="'做单时间'" v-bind:time="fangbaobei.zuodantime" v-on:start="single"></singleTime>-->
        </div>
        <div class="iterm" v-else>
            <label for="">做单时间：</label>
            <input v-bind:disabled="detailShow" type="date" name="zuodantime" class="word5" v-model="fangbaobei.zuodantime"/>
            <!--<singleTime v-bind:title="'做单时间'" v-bind:time="fangbaobei.zuodantime" v-on:start="single"></singleTime>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">银主部门：</label>
            <input v-bind:disabled="detailShow" type="text" name="yinzhubumen" class="word5" id="yinzhubumen" v-model="fangbaobei.yinzhubumen"/>
        </div>
        <div class="iterm">
            <label for="">银主姓名：</label>
            <input v-bind:disabled="detailShow" type="text" name="yinzhuname" class="word5" v-model="fangbaobei.yinzhuname"/>
        </div>
        <div class="iterm">
            <label for="">客户姓名：</label>
            <input v-bind:disabled="detailShow" type="text" name="custname" class="word5" v-model="fangbaobei.custname"/>
        </div>
        <div class="iterm">
            <label for="">客户电话：</label>
            <input type="text" v-bind:disabled="showor" name="custphone" class="word5" value="***********"/>
            <!--<input type="text" v-bind:disabled="showor" name="custphone" class="word5" v-model="fangbaobei.custphone"/>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="" style="width:130px;">借款金额（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" name="jiekuan" class="word6" style="width:50% !important;" v-model="fangbaobei.jiekuan" id="jiekuan"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="" style="width:130px;">点位及返点（%）：</label>
            <input v-bind:disabled="detailShow" type="text" name="pointandback" class="word6" style="width:50% !important;display:inline-block;" id="point" alt="number" v-model="fangbaobei.pointandback"/>
            <!--<input v-bind:disabled="detailShow" type="text" name="pointandback" class="word6" style="width:50% !important;display:inline-block;" id="point" alt="number" v-model="fangbaobei.pointback"/>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">返费方式：</label>
            <input v-bind:disabled="detailShow" type="text" name="fanfeifangshi" v-model="fangbaobei.fanfeifangshi" class="word5" id="fanfeifangshi"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:100px;" for="">返费金额（元）：</label>
            <input v-bind:disabled="detailShow" type="text" name="fanfeijine" v-model="fangbaobei.fanfeijine" class="word5"  id="fanfeijine" style="width:59% !important;"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">借款期限：</label>
            <input v-bind:disabled="detailShow" type="text" name="jiekuanqixian" v-model="fangbaobei.jiekuanqixian" class="word5" id="jiekuanqixian"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">服务费（元）：</label>
            <input v-bind:disabled="detailShow" type="text" name="fuwufei" class="word5" v-model="fangbaobei.fuwufei" id="fuwufei" style="width:59% !important;"/>
        </div>
        <div class="iterm">
            <label for="">借款用途：</label>
            <input v-bind:disabled="detailShow" type="text" name="yongtu" v-model="fangbaobei.yongtu" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">还款来源：</label>
            <input v-bind:disabled="detailShow" type="text" name="huankuanlaiyuan" v-model="fangbaobei.huankuanlaiyuan" class="word5"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">质押类型：</label>
            <input v-bind:disabled="detailShow" type="text" name="zhiyaleixing" v-model="fangbaobei.zhiyaleixing" class="word5" id="zhiyaleixing"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">尾款（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" name="weikuan" v-model="fangbaobei.weikuan" class="word5" id="weikuan"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">客户年龄：</label>
            <input v-bind:disabled="detailShow" type="text" name="kehuage" v-model="fangbaobei.kehuage" class="word5" id="kehuage"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">客户类型：</label>
            <input v-bind:disabled="detailShow" type="text" name="kehuleixing" v-model="fangbaobei.kehuleixing" class="word5" id="kehuleixing"/>
        </div>
        <div class="iterm">
            <label style="width:104px;" for="">房屋评估值(万元)：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwuguzhi" v-model="fangbaobei.fangwuguzhi" style="width:59%;"/>
        </div>
        <div class="iterm">
            <label for="">房屋面积：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwumianji" v-model="fangbaobei.fangwumianji" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">房屋朝向：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwuchaoxiang" v-model="fangbaobei.fangwuchaoxiang" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">房屋类型：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwuleixing" v-model="fangbaobei.fangwuleixing" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">房屋地址：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwudizhi" v-model="fangbaobei.fangwudizhi" class="word5" id="fangwudizhi"/>
        </div>
        <div class="iterm">
            一抵银行贷款合同及银行电话：<input v-bind:disabled="detailShow" type="text" name="hetongdianhua" v-model="fangbaobei.hetongdianhua" style="width:100%;"/>
        </div>
        <div class="iterm">
            报备信息真实有效，经理确认签字：<input v-bind:disabled="showor" type="text" name="jingliqianzi" :value="fangbaobei.jingliqianzi" style="width:100%;"/>
        </div>
        <div class="iterm">
            报备信息真实有效，总监确认签字：<input v-bind:disabled="showor" type="text" name="zongjianqianzi" :value="fangbaobei.zongjianqianzi" style="width:100%;"/>
        </div>
        <div class="iterm">
            业务总经理签字：<input v-bind:disabled="showor" type="text" name="ywubuqianzi" :value="fangbaobei.ywubuqianzi" style="width:100%;"/>
        </div>
        <div class="iterm">
            <label for="">审批员意见</label>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">房屋评估值：</label>
            <input v-bind:disabled="detailShow" type="text" name="fangwuguzhis" v-model="fangbaobei.fangwuguzhis" class="word5"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">融资上限：</label>
            <input v-bind:disabled="detailShow" type="text" name="rongzishangxian" v-model="fangbaobei.rongzishangxian" class="word5"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">抵押率：</label>
            <input v-bind:disabled="detailShow" type="text" name="diyalv" v-model="fangbaobei.diyalv" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">信审员签字：</label>
            <input v-bind:disabled="showor" type="text" name="xinshenyuanqianzi" :value="fangbaobei.xinshenyuanqianzi" class="word5"/>
        </div>
        <div class="iterm">
            <label for="">审批人意见：</label>
            <input v-bind:disabled="detailShow" type="text" name="shenpirenyijian" v-model="fangbaobei.shenpirenyijian" class="word5"/>
        </div>
        <div class="iterm">
            注：报备信息必须真实有效，如有假报、后报、不报，按照短融处罚条例，处以降职、开除，罚款1000-5000元等
        </div>
        <div class="big-save" @click="save" id="formFangBao-submit" v-show="showsave">
            保存
        </div>
    </form>
</template>

<script>
    import reportTime from '@/components/search-date2';
    import singleTime from '@/components/search-date2';
    import { Toast } from 'mint-ui';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import axios from 'axios';
    import qs from 'qs';
    import { MessageBox } from 'mint-ui';
    export default {
        data () {
            return {
                showor:true,
            }
        },
        props:['fangbaobei','showsave','detailShow'],
        methods:{
            send(){
                this.$emit('child-info','200');
            },
            single(time){
                this.fangbaobei.zuodantime=time;
            },
            report(time){
                this.fangbaobei.time=time;
            },
            save(){
                var rex=/^\d+(\.\d{1,2})?$/;
                var rex1=/^\d+$/;
                var rex2=/^1[34578]\d{9}$/;
                var rex3=/^[-\+]?\d+(\.\d+)?$/;
                if(this.fangbaobei.quyu==""||this.fangbaobei.quyu==null){
                    MessageBox.alert("区域不能为空");
                    return false;
                }
                if(this.fangbaobei.bumen==""||this.fangbaobei.bumen==null){
                    MessageBox.alert("部门不能为空");
                    return false;
                }
                if(this.fangbaobei.jingli==""||this.fangbaobei.jingli==null){
                    MessageBox.alert("经理姓名不能为空");
                    return false;
                }
                if(this.fangbaobei.yewu==""||this.fangbaobei.yewu==null){
                    MessageBox.alert("业务姓名不能为空");
                    return false;
                }
                if(this.fangbaobei.yinzhubumen==""||this.fangbaobei.yinzhubumen==null){
                    MessageBox.alert("银主部门不能为空");
                    return false;
                }
                if(this.fangbaobei.jiekuan==""||this.fangbaobei.jiekuan==null){
                    MessageBox.alert("借款金额不能为空");
                    return false;
                }else{
                    if(!rex.test(this.fangbaobei.jiekuan)){
                        MessageBox.alert("借款金额格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.fanfeifangshi==""||this.fangbaobei.fanfeifangshi==null){
                    MessageBox.alert("返费方式不能为空");
                    return false;
                }
                if(this.fangbaobei.fanfeijine==""||this.fangbaobei.fanfeijine==null){
                    MessageBox.alert("返费金额不能为空");
                    return false;
                }else{
                    if(!rex1.test(this.fangbaobei.fanfeijine)){
                        MessageBox.alert("返费金额格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.jiekuanqixian==""||this.fangbaobei.jiekuanqixian==null){
                    MessageBox.alert("借款期限不能为空");
                    return false;
                }
                if(this.fangbaobei.fuwufei==""||this.fangbaobei.fuwufei==null){
                    MessageBox.alert("服务费不能为空");
                    return false;
                }else{
                    if(!rex1.test(this.fangbaobei.fuwufei)){
                        MessageBox.alert("服务费格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.zhiyaleixing==""||this.fangbaobei.zhiyaleixing==null){
                    MessageBox.alert("质押类型不能为空");
                    return false;
                }
                if(this.fangbaobei.weikuan==""||this.fangbaobei.weikuan==null){
                    MessageBox.alert("尾款不能为空");
                    return false;
                }else{
                    if(!rex.test(this.fangbaobei.weikuan)){
                        MessageBox.alert("尾款格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.kehuage==""||this.fangbaobei.kehuage==null){
                    MessageBox.alert("客户年龄不能为空");
                    return false;
                }
                if(this.fangbaobei.kehuleixing==""||this.fangbaobei.kehuleixing==null){
                    MessageBox.alert("客户类型不能为空");
                    return false;
                }
                if(this.fangbaobei.fangwudizhi==""||this.fangbaobei.fangwudizhi==null){
                    MessageBox.alert("房屋地址不能为空");
                    return false;
                }
                if(this.fangbaobei.custphone!=""&&this.fangbaobei.custphone!=null){
                    if(!rex2.test(this.fangbaobei.custphone)){
                        MessageBox.alert("客户电话格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.fangwuguzhi!=""&&this.fangbaobei.fangwuguzhi!=null){
                    if(!rex.test(this.fangbaobei.fangwuguzhi)){
                        MessageBox.alert("房屋评估值格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.hetongdianhua!=""&&this.fangbaobei.hetongdianhua!=null){
                    if(!rex2.test(this.fangbaobei.hetongdianhua)){
                        MessageBox.alert("合作银行电话格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.pointandback==""||this.fangbaobei.pointandback==null){
                    MessageBox.alert("点位必填");
                    return false;
                }else{
                    if(!rex3.test(this.fangbaobei.pointandback)){
                        MessageBox.alert("点位及返点格式不正确");
                        return false;
                    }
                }
                if(this.fangbaobei.fangwuguzhis==""|| this.fangbaobei.fangwuguzhis==null){
                    MessageBox.alert("房屋评估值不能为空");
                    return false;
                }
                if(this.fangbaobei.diyalv=="" || this.fangbaobei.diyalv==null){
                    MessageBox.alert("抵押率不能为空");
                    return false;
                }
                if(this.fangbaobei.rongzishangxian=="" || this.fangbaobei.rongzishangxian==null){
                    MessageBox.alert("融资上限不能为空");
                    return false;
                }
                Indicator.open();
                axios.post(hostapi+'/contract/baobeidan',qs.stringify(
                    this.fangbaobei
                )).then(response=>{
                    console.log(response);
                    if(response.data.code=='200'){
                        Indicator.close();
                        MessageBox.alert("保存成功");
                        this.send();
                    }else{
                        MessageBox.alert("操作失败");
                        Indicator.close();
                    }
                }).catch(function(err){
                    MessageBox.alert("网络异常");
                    Indicator.close();
                })
            }
        },
        components:{
            'reportTime':reportTime,
            'singleTime':singleTime,
        }
    }
</script>
