<!--质押 委托协议-->
<!--维护人 沈松 2017年9月26日-->
<template>
<form id="contract"  action=""  style="overflow-Y:scroll;">
    <input type="hidden"  name="contractId" :value="xieyi.contractId"/>
    <input type="hidden"  name="contractNum" :value="xieyi.contractNum"/>
    <div class="iterm">
        <label for="" >甲方：</label>
        <input type="text" name="custName" class="word5" id="custName" :value="xieyi.custName" disabled/>
    </div>
    <div class="iterm">
        <label for="">身份证号码：</label>
        <input type="text" name="custNumber" class="word5" id="custNumber" :value="xieyi.custNumber" disabled />
    </div>
    <div class="iterm">
        <label for="">联系电话：</label>
        <input v-if="step==0" type="text" name="custPhone" class="word5" :value="xieyi.custPhone" disabled/>
        <input v-else type="text" name="custPhone" class="word5" value="***********" disabled/>
    </div>
    <div class="iterm">
        <label for="">紧急联系人：</label>
        <input type="text" name="emergencycontact" class="word5" id="emergencycontact" :value="xieyi.emergencycontact" disabled/>
    </div>
    <div class="iterm">
        <label for="">联系电话：</label>
        <input v-if="step==0" type="text" name="emergencycontactphone" class="word5" id="emergencycontactphone" :value="xieyi.emergencycontactphone" disabled/>
        <input v-else type="text" name="emergencycontactphone" class="word5" id="emergencycontactphone" value="***********" disabled/>
    </div>
    <div class="iterm">
        <label for="">家庭住址：</label>
        <input type="text" name="custAddress" class="word5" :value="xieyi.custAddress" disabled/>
    </div>
    <div class="iterm">
        <label for="">电子邮箱：</label>
        <input type="text" name="emergencycontactemail" class="word5" id="emergencycontactemail" :value="xieyi.emergencycontactemail" disabled/>
    </div>
    <div class="iterm">
        <label for="" >乙方：</label>
        <input type="text"  class="word5" value="北京鸿诚祥兆投资担保有限公司" disabled/>
    </div>
    <div class="iterm">
        <label for="">注册地址：</label>
        <input type="text" class="word5" value="北京市朝阳区延静西里2号华商大厦1311" disabled/>
    </div>
    <div class="iterm">
        <label for="">经办人：</label>
        <input type="text" name="clerkname" class="word5" :value="xieyi.clerkname" disabled/>
    </div>
    <div class="iterm">
        <label for="">联系电话：</label>
        <input type="text" name="clerkphone" class="word5" :value="xieyi.clerkphone" disabled/>
    </div>
    <div class="iterm">
        <label for="">业务邮箱：</label>
        <input type="text" name="clerkemail" class="word5" :value="xieyi.clerkemail" disabled/>
    </div>
    <div class="iterm">
        <label for="">房产坐落：</label>
        <input type="text" name="firstHousePropertyArea" class="word5" :value="xieyi.firstHousePropertyArea" disabled/>
    </div>
    <div class="iterm">
        <label for="">产权证编号：</label>
        <input type="text" name="firstHousePropertyCardNum" class="word5" :value="xieyi.firstHousePropertyCardNum" disabled/>
    </div>
    <div class="iterm">
        <label for="">建筑面积：</label>
        <input type="text" name="firstHouseProportion" class="word5" :value="xieyi.firstHouseProportion" disabled/>
    </div>
    <div class="iterm">
        <label for="">抵押物估值：</label>
        <input type="text" name="firstHouseValuation" class="word5" :value="xieyi.firstHouseValuation" disabled/>
    </div>
    <div class="iterm" style="position: relative;">
        <label for="" style="width:115px;">目前房产状态：</label>
        <!--<input type="hidden"  name="firstHouseSituation" />-->
        <input type="text" class="word6 housestate" v-if="xieyi.firstHouseSituation==0" value="空置" readonly/>
        <input type="text" class="word6 housestate" v-else-if="xieyi.firstHouseSituation==1" value="由抵押人自住"  readonly/>
        <input type="text" class="word6 housestate" v-else-if="xieyi.firstHouseSituation==2" value="在出租" readonly/>
        <!--<div style="position:absolute;right:10%;width:35px;top:0;text-align:center;" class="tog2">></div>-->
        <div style="display:none;" class="tog2-content">
            <span class="single">空置<input type="radio" housestateinfo="0" name="housestate" class="single-value housestate1" /></span>
            <span class="single">由抵押人自住<input type="radio" housestateinfo="1" name="housestate" class="single-value housestate2" /></span>
            <span class="single">在出租<input type="radio" housestateinfo="2" name="housestate" class="single-value housestate3" /></span>
        </div>
    </div>
    <div class="iterm">
        <label for="">租期至：</label>
        <input type="date" name="firstHouseLeaseDate" class="word5" :value="xieyi.firstHouseLeaseDate" disabled/>
    </div>
    <div class="iterm">
        <label for="">车辆型号：</label>
        <input type="text" name="carPropertyModel" class="word5" :value="xieyi.carPropertyModel" disabled/>
    </div>
    <div class="iterm">
        <label for="">车辆登记号：</label>
        <input type="text" name="carRegistrationNum" class="word5" :value="xieyi.carRegistrationNum" disabled/>
    </div>
    <div class="iterm">
        <label for="">车牌号码：</label>
        <input type="text" name="carLicensePlateNum" class="word5" :value="xieyi.carLicensePlateNum" disabled/>
    </div>
    <div class="iterm">
        <label for="" style="width:115px;">车辆发动机号：</label>
        <input type="text" name="carEngineNum" class="word6" :value="xieyi.carEngineNum" disabled/>
    </div>
    <div class="iterm">
        <label for="">行驶证号码：</label>
        <input type="text" name="carDrivingLicenseNum" class="word5" :value="xieyi.carDrivingLicenseNum" disabled/>
    </div>
    <div class="iterm">
        <label for="">车辆估值：</label>
        <input type="text" name="carValuation" class="word5" :value="xieyi.carValuation" disabled/>万元
    </div>
    <div class="iterm">
        <label for="">抵押物情况：</label>
        <input type="text" name="pawnState" class="word5" :value="xieyi.pawnState" disabled/>
    </div>
    <div class="iterm">
        <label for="">抵押物评估：</label>
        <input type="text" name="pawnAssessment" class="word5" :value="xieyi.pawnAssessment" disabled/>
    </div>
    <div class="iterm">
        <label for="">股权质押：</label>
        <input type="text" name="stockPledge" class="word5" :value="xieyi.stockPledge" disabled/>
    </div>
    <div class="iterm">
        <label for="">公司名称：</label>
        <input type="text" name="pledgeDept" class="word5" :value="xieyi.pledgeDept" disabled/>
    </div>
    <div class="iterm">
        <label for="">质押股份：</label>
        <input type="text" name="pledgeStock" class="word5" :value="xieyi.pledgeStock" disabled/>
    </div>
    <div class="iterm">
        甲方预计向资金持有人借款：<input type="text" name="amountNum" style="width:30%;" :value="xieyi.amountNum" disabled/>元（大写 <input type="text" name="amountChar" style="width:50%;" :value="xieyi.amountChar" disabled/>）<br/>
        甲方应以《借款合同》或《借款及担保合同》合同编号 <input type="text" name="contractNum" style="width:55%;" :value="xieyi.contractNum" disabled/>中所确定的借款额度的 <input type="text" name="point" style="width:20%" :value="xieyi.point" disabled/>%
        作为综合服务费用；<br/>
        服务费：<input type="text" name="totalAmount" style="width:50%;" :value="xieyi.totalAmount" disabled/>元（大写 <input type="text" name="totalChar" style="width:80%;" :value="xieyi.totalChar" disabled/>）;
    </div>
    <div class="iterm">
        <label for="" style="vertical-align: top;">甲方：</label>
        <!--<input type="text" class="word5"/>-->
        <img :src="xieyi.custSignature" alt="" id="custSignature" style="width:40%;height:50px;" disabled/>
    </div>
    <div class="iterm">
        <label for="">签约时间：</label>
        <input type="date" class="word5" name="custSignatureDate" :value="xieyi.custSignatureDate" disabled/>
    </div>
    <div class="iterm">
        <label for="">乙方：</label>
        <input type="text" class="word5" value="北京鸿诚祥兆投资担保有限公司" disabled/>
    </div>
    <div class="iterm">
        <label for="">签约时间：</label>
        <input type="text" class="word5" name="contractDate" :value="xieyi.contractDate" disabled/>
    </div>
</form>
</template>

<script>
    import axios from 'axios';

    export default {
        data () {
            return {

            }
        },
        props:['xieyi','step'],
    }
</script>
