<template>
  <div id="app" style="overflow-Y:scroll;">
    <ContractTop tle="面谈有效" tleurl="/index" style="position:fixed;top:0px;z-index:999;"></ContractTop>
    <interviewBlock v-on:openfather="openfather"></interviewBlock>
    <div ref="picker3" style="display:none;width:100%;height:100%;margin-top:-44px;">
      <interviewDialog v-on:openfatherdialog="openfatherdialog" v-on:closefatherdialog="closefatherdialog"
                       v-bind:message="dialogmessage"></interviewDialog>
    </div>
    <mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
      </div>
      <mt-picker ref="picker" v-bind:slots="slots" @change="confirmall" :visible-item-count="5"
                 :show-toolbar="false"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import ContractTop from '@/components/ContractTop';
  import interviewBlock from '@/components/interviewBlock';
  import interviewDialog from '@/components/interviewDialog';
  import {InfiniteScroll} from 'mint-ui';
  export default {
    data () {
      return {
        popupVisible4: false,
        buttonBottom: 0,
        dialogmessage:'',
        valueall:'',
        valueone:['1','2','3','6'],
        slots: [
          {
            flex: 1,
            values: [' '],
            className: 'slot1',
            textAlign: 'right',
          },
        ],
      };
    },
    components: {
      'ContractTop': ContractTop,
      'interviewBlock': interviewBlock,
      'interviewDialog': interviewDialog,
    },

    methods: {
      openfather: function (picker) {
        //this.$refs['picker'].setSlotValues(0,this.valueone);123
        this.$refs.picker3.style.display = "block";
        this.slots[0].values = ['1', '2', '3', '4'];
        document.body.style.overflow = "hidden";
      },
      openfatherdialog: function () {
        //this.$refs['picker2'].open();
//        console.log(this.slots.values);
        this.popupVisible4 = true;
        //this.dialogmessage=this.valueone;
      },
      closefatherdialog: function () {
        this.$refs['picker3'].style.display = "none";
        document.body.style.overflow = "auto";
      },
      confirmall: function (picker, values) {
        //console.log(values);
          this.valueall=values[0];
//          picker.setSlotValues(0,['www','ddd'])
        this.dialogmessage = values[0];
        //this.valueone=values;
      },
      cancleaddress: function () {
      this.popupVisible4 = false;
      this.$refs['picker'].setSlotValues(0,this.valueone);
    },
    selectaddress: function () {
       this.popupVisible4 = false;
       console.log(this.valueall);
       this.dialogmessage=this.valueall;
       //this.$refs['picker'].setSlotValues(0,this.valueone);
       //js控制路由跳转
       //this.$router.push({name: 'diyadai', params: {userId: 1}});
    },
    }
  }
</script>

<style scoped>
  @import "../assets/css/server.css";

  .picker-item {
    text-align: center;
  }

  .mint-popup-bottom {
    width: 100%;
  }

  /*body {*/
    /*background: #efeff4;*/
  /*}*/

  @component-namespace page {
    @component popup {
      @descendent wrapper {
        padding:

      0 20px

      ;
        position: absolute

      50% * * *

      ;
        width:

      100%;
        transform:

      translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
      .mint-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);

      h1 {
        font-size: 20px;
        color: #26a2ff;
      }

      p {
        margin-bottom: 10px;
      }
    }
    .mint-popup-1::before {
      triangle: 10px top #fff;
      content: '';
      position: absolute;
      top: -20px;
      right: 50px;
    }

    .mint-popup-2 {
      width: 100%;
      height: 50px;
      text-align: center;
      background-color: rgba(0, 0, 0, .7);
      backface-visibility: hidden;
    }

    .mint-popup-2 p {
      line-height: 50px;
      color: #fff;
    }

    .mint-popup-3 {
      width: 100%;
      height: 100%;
      background-color: #fff;
    }

    .mint-popup-3 .mint-button {
      position: absolute;
      width: 90%;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
    }

    .mint-popup-4 {
      width: 100%;

    .picker-slot-wrapper, .picker-item {
      backface-visibility: hidden;
    }
  }
  }
  }
</style>
