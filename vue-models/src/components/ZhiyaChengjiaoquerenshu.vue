<template>
    <form id="sure" action="" style="overflow-Y:scroll;" >
        <div class="iterm">
            <input type="text" name="weituoren" style="width:30%;" :value="chengjiaoquerenshu.weituoren" v-bind:disabled="showor"/>在 <input type="date" name="negotiateDate" style="width:45%;" :value="chengjiaoquerenshu.negotiateDate" v-bind:disabled="showor"/>日委托乙方寻找资金出借人。<br/>
            介绍出借人：<input type="text" name="chujieren" :value="chengjiaoquerenshu.chujieren" style="width:30%;" v-bind:disabled="showor"/>与委托人签署了《借款合同》
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">是否有抵押物：</label>
            <input type="hidden" name="hasCollateral"/>
            <input type="text" class="word6 diyaobj" v-if="chengjiaoquerenshu.hasCollateral==0" value="否" disabled/>
            <input type="text" class="word6 diyaobj" v-else-if="chengjiaoquerenshu.hasCollateral==1" value="是" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;display:none;" class="tog1">></div>
            <div style="display:none;" class="tog1-content">
                <span style="width:45%;display:inline-block;text-align: center;">是<input type="radio" hasdiyaInfo="1" name="orown" class="single-value diyaobj1" /></span>
                <span style="width:45%;display:inline-block;text-align: center;">否<input type="radio" hasdiyaInfo="0" name="orown" class="single-value diyaobj2" /></span>
            </div>
        </div>
        <div class="iterm">
            <label for="">房产1：</label>
        </div>
        <div class="iterm">
            <label for="">房产坐落：</label>
            <input type="text" name="firstHousePropertyArea" :value="chengjiaoquerenshu.firstHousePropertyArea" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">产权证编号：</label>
            <input type="text" name="firstHousePropertyCardNum" :value="chengjiaoquerenshu.firstHousePropertyCardNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">面积：</label>
            <input type="text" name="firstHouseProportion" :value="chengjiaoquerenshu.firstHouseProportion" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">抵押物估值：</label>
            <input type="text" name="firstHouseValuation" :value="chengjiaoquerenshu.firstHouseValuation" class="word5" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">目前房产状态：</label>
            <input type="hidden"  name="firstHouseSituation" />
            <input type="text" class="word6 housestate" v-if="chengjiaoquerenshu.firstHouseSituation==0" value="空置" disabled/>
            <input type="text" class="word6 housestate" v-else-if="chengjiaoquerenshu.firstHouseSituation==1" value="由抵押人自住" disabled/>
            <input type="text" class="word6 housestate" v-else-if="chengjiaoquerenshu.firstHouseSituation==2" value="在出租" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;display:none;" class="tog4">></div>
            <div style="display:none;" class="tog4-content">
                <span class="single">空置<input type="radio"stateinfo="0" name="housestate" class="single-value housestate1" /></span>
                <span class="single" style="width:37% !important;display: inline-block;">由抵押人自住<input type="radio" stateinfo="1" name="housestate" class="single-value housestate2" /></span>
                <span class="single">在出租<input type="radio" stateinfo="2" name="housestate" class="single-value housestate3" /></span>
            </div>
        </div>
        <div class="iterm" v-if="chengjiaoquerenshu.firstHouseSituation==2">
            <label for="">租期至：</label>
            <input type="date" name="firstHouseLeaseDate" :value="chengjiaoquerenshu.firstHouseLeaseDate" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">房产2：</label>
        </div>
        <div class="iterm">
            <label for="">房产坐落：</label>
            <input type="text" name="secondHousePropertyArea" :value="chengjiaoquerenshu.secondHousePropertyArea" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">产权证编号：</label>
            <input type="text" name="secondHousePropertyCardNum" :value="chengjiaoquerenshu.secondHousePropertyCardNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">建筑面积：</label>
            <input type="text" name="secondHouseProportion" :value="chengjiaoquerenshu.secondHouseProportion" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">抵押物估值：</label>
            <input type="text" name="secondHouseValuation" :value="chengjiaoquerenshu.secondHouseValuation" class="word5" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm" style="position: relative;">
            <label for="" style="width:115px;">目前房产状态：</label>
            <input type="hidden"  name="secondHouseSituation" />
            <input type="text" class="word6 secondhousestate" v-if="chengjiaoquerenshu.secondHouseSituation==0" value="空置" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengjiaoquerenshu.secondHouseSituation==1" value="由抵押人自住" disabled/>
            <input type="text" class="word6 secondhousestate" v-else-if="chengjiaoquerenshu.secondHouseSituation==2" value="在出租" disabled/>
            <div style="position:absolute;right:10%;width:35px;top:0;text-align:center;display:none;" class="tog2">></div>
            <div style="display:none;" class="tog2-content">
                <span class="single">空置<input type="radio" name="secondhousestate" stateinfo="0" class="single-value secondhousestate1" /></span>
                <span class="single" style="width:37% !important;display: inline-block;">由抵押人自住<input type="radio"  stateinfo="1" name="secondhousestate" class="single-value secondhousestate2" /></span>
                <span class="single">在出租<input type="radio"  name="secondhousestate" stateinfo="2" class="single-value secondhousestate3" /></span>
            </div>
        </div>
        <div class="iterm" v-if="chengjiaoquerenshu.secondHouseSituation==2">
            <label for="">租期至：</label>
            <input type="date" name="secondHouseLeaseDate" :value="chengjiaoquerenshu.secondHouseLeaseDate" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆型号：</label>
            <input type="text" name="carPropertyModel" :value="chengjiaoquerenshu.carPropertyModel" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆登记号：</label>
            <input type="text" name="carRegistrationNum" :value="chengjiaoquerenshu.carRegistrationNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车牌号码：</label>
            <input type="text" name="carLicensePlateNum" :value="chengjiaoquerenshu.carLicensePlateNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:115px;">车辆发动机号：</label>
            <input type="text" name="carEngineNum" class="word6" :value="chengjiaoquerenshu.carEngineNum" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">行驶证号码：</label>
            <input type="text" name="carDrivingLicenseNum" :value="chengjiaoquerenshu.carDrivingLicenseNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="">车辆估值：</label>
            <input type="text" name="carValuation" class="word5" :value="chengjiaoquerenshu.carValuation" style="width:57% !important;" v-bind:disabled="showor"/>万元
        </div>
        <div class="iterm">
            <label for="">借款时间：</label>
            <input type="date" name="loanDate" class="word5" :value="chengjiaoquerenshu.loanDate" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:110px;">借款起止时间：</label>
            <input type="date" name="loanDateFrom" class="word6" :value="chengjiaoquerenshu.loanDateFrom" v-bind:disabled="showor"/>
            <label for="" style="width:110px;"></label>
            至<input type="date" name="loanDateTo" class="word6" :value="chengjiaoquerenshu.loanDateTo" v-bind:disabled="showor"/>
        </div>
        <div class="iterm">
            <label for="" style="width:110px;">借款利息标准：</label>
            <input type="text" name="loanInterest" class="word7" :value="chengjiaoquerenshu.loanInterest" v-bind:disabled="showor"/>%/月
        </div>
        <div class="iterm">
            <label for="">综合服务费：</label>
            <input type="text" name="totalServiceCharge" :value="chengjiaoquerenshu.totalServiceCharge" class="word6" v-bind:disabled="showor"/>元
        </div>
        <div class="iterm">
            出借人向委托人借款的金额：
            <input type="text" name="loanAmountChar" :value="chengjiaoquerenshu.loanAmountChar" style="width:30%;" v-bind:disabled="showor"/>元人民币（大写）<input type="text" name="loanAmount" :value="chengjiaoquerenshu.loanAmount" style="width:50%;" v-bind:disabled="showor"/>人民币（小写）
        </div>
        <div class="iterm">
            <label for="">公证书号码：</label>
            <input type="text" name="notarizationNum" :value="chengjiaoquerenshu.notarizationNum" class="word5" v-bind:disabled="showor"/>
        </div>
        <div class="big-save"v-show="showsave">
            保存
        </div>
    </form>
</template>
<script>
    export default {
        props:['chengjiaoquerenshu',"showor","showsave"],
    }
</script>
