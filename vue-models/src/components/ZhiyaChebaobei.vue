<template>
    <form id="buchong" action="" style="overflow-Y:scroll;" >
        <div class="iterm">
            <span class="star">*</span>
            <label for="">机构名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="organname" id="organname" v-model="buchong.organName" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">客户名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="custname" id="custname" v-model="buchong.custName"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">区域：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="region" id="region" v-model="buchong.region"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">部门：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="deptname"  id="deptname" v-model="buchong.deptName"/>
        </div>
        <div class="iterm">
            <label for="">报备人姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="reportname" v-model="buchong.reportName" />
        </div>
        <div class="iterm">
        <!--<div class="iterm" v-if="detailShow">-->
            <span class="star">*</span>
            <label for="">报备时间：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="reporttime" v-model="buchong.reportTime" />
        </div>
        <!--<div class="iterm" v-else>-->
            <!--<reportTime v-bind:title="'报备时间'" v-bind:time="buchong.reportTime" v-on:start="report"></reportTime>-->
        <!--</div>-->
        <div class="iterm">
            <span class="star">*</span>
            <label for="">经理姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="managername" id="managername" v-model="buchong.managerName"/>
        </div>
        <!--<div class="iterm">-->
            <!--<label for="">主管姓名：</label>-->
            <!--<input disabled type="text" class="word5" name="directorname" id="directorname" value="***********"/>-->
            <!--&lt;!&ndash;<input v-bind:disabled="detailShow" type="text" class="word5" name="directorname" id="directorname" v-model="buchong.directorName"/>&ndash;&gt;-->
        <!--</div>-->
        <div class="iterm">
            <span class="star">*</span>
            <label for="">业务姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="salesmanname" id="salesmanname" v-model="buchong.salesmanName"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">借款期限：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="loantime" id="loantime" v-model="buchong.loanTime" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:110px;" for="">借款金额（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" style="width:55%;" name="loanmoney" id="loanmoney" v-model="buchong.loanMoney" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">点位及返点：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="point" id="point" style="display:inline-block;" v-model="buchong.point"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">服务费金额：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="servicemoney"  id="servicemoney" v-model="buchong.serviceMoney"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:100px;" for="">返费金额（元）：</label>
            <input v-bind:disabled="detailShow" type="text" style="width:59%;" name="returnmoney" id="returnmoney" v-model="buchong.returnMoney"/>
        </div>
        <div class="iterm">
            <label for="">车辆评估值：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="carvalue" v-model="buchong.carValue"/>
        </div>
        <div class="iterm">
            <label for="">尾款（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="retainagemoney" v-model="buchong.retainageMoney"/>
        </div>
        <div class="iterm">
            <label for="">排量：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="displacement" v-model="buchong.displacement"/>
        </div>
        <div class="iterm">
        <!--<div class="iterm" v-if="detailShow">-->
            <label for="">行驶证日期：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="drivetime" v-model="buchong.driveTime"/>
        </div>
        <!--<div class="iterm" v-else>-->
            <!--<drivingTime v-bind:title="'行驶证日期'" v-bind:time="buchong.driveTime" v-on:start="driving"></drivingTime>-->
        <!--</div>-->
        <div class="iterm">
            <span class="star">*</span>
            <label for="">车辆款型：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="vehiclemodel" id="vehiclemodel" v-model="buchong.vehicleModel"/>
        </div>
        <div class="iterm">
        <label for="">审批员意见</label>
        </div>
        <div class="iterm">
            <span class="star">*</span>
        <label for="">车辆评估值：</label>
        <input v-bind:disabled="detailShow" type="text" class="word5" v-model="buchong.approveValue" name="approveValue"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
        <label for="">融资上限：</label>
        <input v-bind:disabled="detailShow" type="text" class="word5" v-model="buchong.financeLimit" name="financeLimit"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
        <label for="">抵押率：</label>
        <input v-bind:disabled="detailShow" type="text" class="word5" v-model="buchong.mortgageRate" name="mortgageRate"/>
        </div>
        <div class="iterm">
        <label for="">信审员签字：</label>
        <input v-bind:disabled="showor" type="text" name="lettername" v-model="buchong.letterName"/>
        </div>
        <div class="iterm">
        <label for="">审批人意见：</label>
        <input v-bind:disabled="detailShow" type="text" class="word5" name="approveopinion" v-model="buchong.approveOpinion"/>
        </div>
        <div class="big-save" @click="save" id="formCheBao-submit" v-show="showsave">
            保存
        </div>
    </form >
</template>

<script>
    import reportTime from '@/components/search-date2';
    import drivingTime from '@/components/search-date2';
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
        props:['buchong','showsave','detailShow'],
        methods:{
            send(){
                this.$emit('child-info','200');
            },
            driving(time){
                this.buchong.driveTime=time;
            },
            report(time){
                this.buchong.reportTime=time;
            },
            save(){
                var rex=/^\d+(\.\d{1,2})?$/;
                var rex1=/^\d+$/;
                var rex2=/^1[34578]\d{9}$/;
                if(this.buchong.organName==""||this.buchong.organName==null){
                    MessageBox.alert("机构名不能为空");
                    return false;
                }
                if(this.buchong.custName==""||this.buchong.custName==null){
                    MessageBox.alert("客户名不能为空");
                    return false;
                }
                if(this.buchong.region==""||this.buchong.region==null){
                    MessageBox.alert("区域不能为空");
                    return false;
                }
                if(this.buchong.deptName==""||this.buchong.deptName==null){
                    MessageBox.alert("部门不能为空");
                    return false;
                }
                if(this.buchong.reportTime==""||this.buchong.reportTime==null){
                    MessageBox.alert("报备时间不能为空");
                    return false;
                }
                if(this.buchong.managerName==""||this.buchong.managerName==null){
                    MessageBox.alert("经理姓名不能为空");
                    return false;
                }
                if(this.buchong.salesmanName==""||this.buchong.salesmanName==null){
                    MessageBox.alert("业务姓名不能为空");
                    return false;
                }
                if(this.buchong.loanTime==""||this.buchong.loanTime==null){
                    MessageBox.alert("借款期限不能为空");
                    return false;
                }
                if(this.buchong.loanMoney==""||this.buchong.loanMoney==null){
                    MessageBox.alert("借款金额不能为空");
                    return false;
                }else{
                    if(!rex.test(this.buchong.loanMoney)){
                        MessageBox.alert("借款金额格式不正确");
                        return false;
                    }
                }
                if(this.buchong.point==""||this.buchong.point==null){
                    MessageBox.alert("点位及返点不能为空");
                    return false;
                }
                if(this.buchong.serviceMoney==""||this.buchong.serviceMoney==null){
                    MessageBox.alert("服务费金额不能为空");
                    return false;
                }else{
                    if(!rex1.test(this.buchong.serviceMoney)){
                        MessageBox.alert("服务费金额格式不正确");
                        return false;
                    }
                }
                if(this.buchong.returnMoney==""||this.buchong.returnMoney==null){
                    MessageBox.alert("返费金额不能为空");
                    return false;
                }else{
                    if(!rex1.test(this.buchong.returnMoney)){
                        MessageBox.alert("返费金额格式不正确");
                        return false;
                    }
                }
                if(this.buchong.vehicleModel==""||this.buchong.vehicleModel==null){
                    MessageBox.alert("车辆款型不能为空");
                    return false;
                }
                if(this.buchong.retainageMoney!=""&&this.buchong.retainageMoney!=null){
                    if(!rex.test(this.buchong.retainageMoney)){
                        MessageBox.alert("尾款格式不正确");
                        return false;
                    }
                }
                if(this.buchong.carValue!=""&&this.buchong.carValue!=null){
                    if(!rex.test(this.buchong.carValue)){
                        MessageBox.alert("车辆评估值格式不正确");
                        return false;
                    }
                }
                if(this.buchong.approveValue=="" || this.buchong.approveValue==null){
                    MessageBox.alert("车辆评估值不能为空");
                    return false;
                }
                if(this.buchong.financeLimit=="" || this.buchong.financeLimit==null){
                    MessageBox.alert("融资上限不能为空");
                    return false;
                }
                if(this.buchong.mortgageRate=="" || this.buchong.mortgageRate==null){
                    MessageBox.alert("抵押率不能为空");
                    return false;
                }
                Indicator.open();
                axios.post(hostapi+'/contract/baobeidanche',qs.stringify(
                    this.buchong
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
            'drivingTime':drivingTime,
        }
    }
</script>
