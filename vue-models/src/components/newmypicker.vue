<template>  
     <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">性别</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value is-link" @click="sexVisible = true">
                <input placeholder="请选择性别" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.sexText">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
            <i class="mint-cell-allow-right"></i>
            <mt-actionsheet :actions="sexs" v-model="sexVisible" cancel-text="取消"></mt-actionsheet>
          </div>
        </a>
</template>  
   
<script>
import {Toast} from 'mint-ui'

export default {
  components: {
    
  },
  data: () => ({
    headImg: '',
    headerData: {
      title: '我的资料',
      toLink: '/Mine'
    },
    popupVisible: false,
    sexVisible: false,
    areaPicker: '',
    areaList: [],
    data: {
      photo: '',
      userName: '',
      sex: '',
      sexText: '',
      mobile: '',
      birthday: '',
      privinceName: '',
      provinceId: '',
      cityName: '',
      cityId: '',
      address: '',
      areaText: ''
    },
    sexs: [],
    citySlots: [
      {
        flex: 1,
        values: Object.keys(address),
        className: 'slot1',
        textAlign: 'center'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: Object.values(address)[0],
        className: 'slot3',
        textAlign: 'center'
      }
    ],
    addressProvince: '',
    addressProvinceId: '',
    addressCity: '',
    addressCityId: '',
    dateValue: new Date(),
    startDate: new Date('1900-01-01'),
    endDate: new Date()
  }),
  created () {
    
  },
  mounted () {
    this.sexs = [{
      name: '男',
      method: this.selectMan
    }, {
      name: '女',
      method: this.selectWoman
    }]
  },
  methods: {
    selectMan: function () {
      this.data.sex = '1'
      this.data.sexText = '男'
    },
    selectWoman: function () {
      this.data.sex = '0'
      this.data.sexText = '女'
    }
  }
}

let address = {}
let provinceCodeList = {}
let cityCodeList = {}
</script>
<style scoped>
.mint-popup-4 {
    width: 100%;
}
.mint-popup-4 .picker-slot-wrapper, .page-popup .mint-popup-4 .picker-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
</style>