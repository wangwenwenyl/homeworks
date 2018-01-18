<!--押车报备单-->
<!--维护人 沈松 2017年9月26日-->
<template>
    <form id="chebaobei" action="" style="overflow-Y:scroll;" >
        <div class="iterm">
            <span class="star">*</span>
            <label for="">机构名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="organname" id="organname" v-model="chebaobei.organname" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">客户名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="custname" id="custname" v-model="chebaobei.custname"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">区域：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="region" id="region" v-model="chebaobei.region"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">部门：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="deptname"  id="deptname" v-model="chebaobei.deptname"/>
        </div>
        <div class="iterm">
            <label for="">报备人姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="reportname" v-model="chebaobei.reportname" />
        </div>
        <div class="iterm" v-if="detailShow">
            <span class="star">*</span>
            <label for="">报备时间：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="reporttime" v-model="chebaobei.reporttime" />
        </div>
        <div class="iterm" v-else>
            <!--<reportTime v-bind:title="'报备时间'" v-bind:time="chebaobei.reportTime" v-on:date="report"></reportTime>-->
            <span class="star">*</span>
            <label for="">报备时间：</label>
            <input type="date" class="word5" v-model="chebaobei.reporttime"/>
            <!--<input type="text" class="word5" readonly v-model="chebaobei.reportTime" @click="openPicker1"/>-->

            <!--<mt-datetime-picker-->
                    <!--ref="picker1"-->
                    <!--type="date"-->
                    <!--v-model="times"-->
                    <!--@confirm="reportTime"-->
            <!--&gt;-->
            <!--</mt-datetime-picker>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">经理姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="managername" id="managername" v-model="chebaobei.managername"/>
        </div>
        <!--<div class="iterm">-->
            <!--<span class="star">*</span>-->
            <!--<label for="">主管姓名：</label>-->
            <!--<input v-if="step==0" v-bind:disabled="detailShow" type="text" class="word5" name="directorname" id="directorname" v-model="chebaobei.directorname"/>-->
            <!--<input v-else disabled type="text" class="word5" name="directorname" id="directorname" value="***********"/>-->
        <!--</div>-->
        <div class="iterm">
            <span class="star">*</span>
            <label for="">业务姓名：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="salesmanname" id="salesmanname" v-model="chebaobei.salesmanname"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">借款期限：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="loantime" id="loantime" v-model="chebaobei.loantime" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:110px;" for="">借款金额（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="loanmoney" id="loanmoney" v-model="chebaobei.loanmoney" />
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:110px;" for="">点位及返点(%)：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="point" id="point" style="display:inline-block;" v-model="chebaobei.point"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style="width:110px;" for="">服务费金额(元)：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="servicemoney"  id="servicemoney" v-model="chebaobei.servicemoney"/>
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label style='width:104px;' for="">返费金额（元）：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="returnmoney" id="returnmoney" v-model="chebaobei.returnmoney"/>
        </div>
        <div class="iterm">
            <label style="width:110px;" for="">车辆评估值(万元)：</label>
            <input v-bind:disabled="detailShow" type="text" class="word6" name="carvalue" v-model="chebaobei.carvalue"/>
        </div>
        <div class="iterm">
            <label for="">尾款（万元）：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="retainagemoney" v-model="chebaobei.retainagemoney"/>
        </div>
        <div class="iterm">
            <label for="">排量：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="displacement" v-model="chebaobei.displacement"/>
        </div>
        <div class="iterm" v-if="detailShow">
            <label for="">行驶证日期：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="drivetime" v-model="chebaobei.drivetime"/>
        </div>
        <div class="iterm" v-else>
            <!--<drivingTime v-bind:title="'行驶证日期'" v-bind:time="chebaobei.driveTime" v-on:date="driving"></drivingTime>-->
            <label for="">行驶证日期：</label>
            <input type="date" class="word5" name="drivetime" v-model="chebaobei.drivetime"/>
            <!--<input type="text" class="word5" readonly name="drivetime" v-model="chebaobei.driveTime" @click="openPicker2"/>-->

            <!--<mt-datetime-picker-->
                    <!--ref="picker2"-->
                    <!--type="date"-->
                    <!--v-model="times"-->
                    <!--@confirm="driveTime"-->
            <!--&gt;-->
            <!--</mt-datetime-picker>-->
        </div>
        <div class="iterm">
            <span class="star">*</span>
            <label for="">车辆款型：</label>
            <input v-bind:disabled="detailShow" type="text" class="word5" name="vehiclemodel" id="vehiclemodel" v-model="chebaobei.vehiclemodel"/>
        </div>
        <!--<div class="iterm">-->
        <!--<label for="">审批员意见</label>-->
        <!--</div>-->
        <!--<div class="iterm">-->
        <!--<label for="">车辆评估值：</label>-->
        <!--<input v-bind:disabled="detailShow" type="text" class="word5" v-model="chebaobei.approveValue" name="approveValue"/>-->
        <!--</div>-->
        <!--<div class="iterm">-->
        <!--<label for="">融资上限：</label>-->
        <!--<input v-bind:disabled="detailShow" type="text" class="word5" v-model="chebaobei.financeLimit" name="financeLimit"/>-->
        <!--</div>-->
        <!--<div class="iterm">-->
        <!--<label for="">抵押率：</label>-->
        <!--<input v-bind:disabled="detailShow" type="text" class="word5" v-model="chebaobei.mortgageRate" name="mortgageRate"/>-->
        <!--</div>-->
        <!--<div class="iterm">-->
        <!--<label for="">信审员签字：</label>-->
        <!--<input v-bind:disabled="showor" type="text" name="lettername" v-model="chebaobei.letterName"/>-->
        <!--</div>-->
        <!--<div class="iterm">-->
        <!--<label for="">审批人意见：</label>-->
        <!--<input v-bind:disabled="detailShow" type="text" class="word5" name="approveopinion" v-model="chebaobei.approveOpinion"/>-->
        <!--</div>-->
        <div class="big-save" @click="save" id="formCheBao-submit" v-show="showsave">
            保存
        </div>
    </form >
</template>

<script>
    import reportTime from '@/components/search-date2';
    import drivingTime from '@/components/search-date2';
    import { Toast } from 'mint-ui';
    import axios from 'axios';
    import qs from 'qs';
    import { InfiniteScroll } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { MessageBox } from 'mint-ui';
    export default {
        data () {
          return {
              times:new Date(),
              uuid:'',
          }
        },
        props:['chebaobei','showsave','detailShow','step'],
        methods:{
            dealtime(times){
                if(times){
                    var date = new Date(times);
                    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
                }else{
                    return "";
                }
            },
            openPicker1(){
                this.$refs.picker1.open();
            },
            openPicker2(){
                this.$refs.picker2.open();
            },
            reportTime(time){
                //this.$emit('selectdate',this.time);
                this.chebaobei.reportTime = this.dealtime(time);
                console.log(this.chebaobei.reportTime);
            },
            driveTime(time){
                //this.$emit('selectdate',this.time);
                this.chebaobei.driveTime = this.dealtime(time);
                console.log(this.chebaobei.driveTime);
            },
            send(){
                this.$emit('child-info','');
            },
            save(){
                var rex=/^\d+(\.\d{1,2})?$/;
                var rex1=/^\d+$/;
                var rex2=/^1[34578]\d{9}$/;
                    if(this.chebaobei.organname==""||this.chebaobei.organname==null){
                        MessageBox.alert("机构名不能为空");
                        return false;
                    }
                    if(this.chebaobei.custname==""||this.chebaobei.custname==null){
                        MessageBox.alert("客户名不能为空");
                        return false;
                    }
                    if(this.chebaobei.region==""||this.chebaobei.region==null){
                        MessageBox.alert("区域不能为空");
                        return false;
                    }
                    if(this.chebaobei.deptname==""||this.chebaobei.deptname==null){
                        MessageBox.alert("部门不能为空");
                        return false;
                    }
                    if(this.chebaobei.reporttime==""||this.chebaobei.reporttime==null){
                        MessageBox.alert("报备时间不能为空");
                        return false;
                    }
                    if(this.chebaobei.managername==""||this.chebaobei.managername==null){
                        MessageBox.alert("经理姓名不能为空");
                        return false;
                    }
//                    if(this.chebaobei.directorname==""||this.chebaobei.directorname==null){
//                        MessageBox.alert("主管姓名不能为空");
//                        return false;
//                    }
                    if(this.chebaobei.salesmanname==""||this.chebaobei.salesmanname==null){
                        MessageBox.alert("业务姓名不能为空");
                        return false;
                    }
                    if(this.chebaobei.loantime==""||this.chebaobei.loantime==null){
                        MessageBox.alert("借款期限不能为空");
                        return false;
                    }
                    if(this.chebaobei.loanmoney==""||this.chebaobei.loanmoney==null){
                        MessageBox.alert("借款金额不能为空");
                        return false;
                    }else{
                        if(!rex.test(this.chebaobei.loanmoney)){
                            MessageBox.alert("借款金额格式不正确");
                            return false;
                        }
                    }
                    if(this.chebaobei.point==""||this.chebaobei.point==null){
                        MessageBox.alert("点位及返点不能为空");
                        return false;
                    }
                    if(this.chebaobei.servicemoney==""||this.chebaobei.servicemoney==null){
                        MessageBox.alert("服务费金额不能为空");
                        return false;
                    }else{
                        if(!rex1.test(this.chebaobei.servicemoney)){
                            MessageBox.alert("服务费金额格式不正确");
                            return false;
                        }
                    }
                    if(this.chebaobei.returnmoney==""||this.chebaobei.returnmoney==null){
                        MessageBox.alert("返费金额不能为空");
                        return false;
                    }else{
                        if(!rex1.test(this.chebaobei.returnmoney)){
                            MessageBox.alert("返费金额格式不正确");
                            return false;
                        }
                    }
                    if(this.chebaobei.vehiclemodel==""||this.chebaobei.vehiclemodel==null){
                        MessageBox.alert("车辆款型不能为空");
                        return false;
                    }
                    if(this.chebaobei.retainagemoney!=""&&this.chebaobei.retainagemoney!=null){
                        if(!rex.test(this.chebaobei.retainagemoney)){
                            MessageBox.alert("尾款格式不正确");
                            return false;
                        }
                    }
                    if(this.chebaobei.carvalue!=""&&this.chebaobei.carvalue!=null){
                        if(!rex.test(this.chebaobei.carvalue)){
                            MessageBox.alert("车辆评估值格式不正确");
                            return false;
                        }
                    }
                    Indicator.open({
                        text: '加载中...',
                        spinnerType: 'fading-circle'
                    });
                    if(this.step==0){
                        this.url=host+"/app/saveCarReport?uuid="+this.uuid;
                    }else{
                        this.url=host+"/app/saveCarReportAgain?uuid="+this.uuid;
                    }
                    axios.post(this.url,
                        this.chebaobei
                    ).then(response=>{
                        if(response.data.data.code=='200'){
                            MessageBox.alert("保存成功");
                            this.send();
                        }else{
                            MessageBox.alert("操作失败");
                        }
                        this.isSave=true;
                        Indicator.close();
                    }).catch(function(err){
                        MessageBox.alert("网络超时");
                        this.isSave=true;
                        Indicator.close();
                    })

            },
        },
        components:{
            'reportTime':reportTime,
            'drivingTime':drivingTime,
        },
        created(){
            this.uuid=this.$cookie.get("uuid");
        }
    }
</script>
