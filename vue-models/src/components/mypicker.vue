<!-- 页面模版 -->
<template>
  <div style="overflow-Y:scroll;">
    <div class="ybb-yuyue">
      <div class="yy-item-box mine-me">
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">头像</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value"></div>
              <img v-bind:src="data.photo" :onerror="headImg" class="img-box5">
            </div>
          </div>
        </a>
      </div>
      <div class="yy-item-box mine-me">
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">姓名</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value">
                <input placeholder="请输入姓名" type="text" class="mint-field-core text-right" v-model="data.userName">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
          </div>
        </a>
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
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">出生日期</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value is-link" @click="open('datePicker')">
                <input placeholder="请选择日期" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.birthday">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
            <i class="mint-cell-allow-right"></i>
            <mt-datetime-picker
              ref="datePicker"
              type="date"
              :startDate="startDate"
              :endDate="endDate"
              v-model="dateValue"
              @confirm="handleChange">
            </mt-datetime-picker>
          </div>
        </a>
      </div>
      <div class="yy-item-box mine-me">
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">电话号码</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value">
                <input placeholder="请输入电话号码" type="text" readonly="readonly" class="mint-field-core text-right gray" v-model="data.mobile">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
          </div>
        </a>
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">所在地区</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value is-link" @click="choiceArea">
                <input placeholder="请选择省市" type="text" class="mint-field-core text-right" readonly="readonly" v-model="data.areaText">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
            <i class="mint-cell-allow-right"></i>
            <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
              <div class="picker-toolbar">
                <span class="mint-datetime-action mint-datetime-cancel" @click="cancleaddress">取消</span>
                <span class="mint-datetime-action mint-datetime-confirm" @click="selectaddress">确定</span>
              </div>
              <mt-picker :slots="citySlots" @change="onCityChange" :visible-item-count="3"></mt-picker>
            </mt-popup>
          </div>
        </a>
        <a class="mint-cell mint-field">
          <div class="mint-cell-left"></div>
          <div class="mint-cell-wrapper">
            <div class="mint-cell-title">
              <span class="mint-cell-text">详细地址</span>
            </div>
            <div class="mint-cell-value">
              <div class="mint-cell-value">
                <input placeholder="街道、楼牌号等" type="text" class="mint-field-core text-right" v-model="data.address">
                <div class="mint-field-clear" style="display: none;"><i class="mintui mintui-field-error"></i></div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="yuyue-submit">
      <button class="mint-button mint-button--default mint-button--large ybb-btn"><label class="mint-button-text title-1">保存</label></button>
    </div>
    <!--container end-->
  </div>
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
        var res={
            "code": 200,
            "msg": "获取区域信息成功！",
            "t": {
                "areaList": [
                    {
                        "上海": [
                            "上海"
                        ],
                        "北京": [
                            "北京"
                        ],
                        "广东": [
                            "广州",
                            "深圳"
                        ],
                        "江苏": [
                            "徐州",
                            "南京"
                        ],
                        "福建": [
                            "福州"
                        ]
                    }
                ],
                "provinceCodeList": [
                    {
                        "上海": [
                            "120001"
                        ],
                        "北京": [
                            "110001"
                        ],
                        "广东": [
                            "130001"
                        ],
                        "江苏": [
                            "130007"
                        ],
                        "福建": [
                            "0100"
                        ]
                    }
                ],
                "cityCodeList": [
                    {
                        "上海": [
                            "120002"
                        ],
                        "北京": [
                            "110002"
                        ],
                        "广州": [
                            "130002"
                        ],
                        "南京": [
                            "130006"
                        ],
                        "深圳": [
                            "518000"
                        ],
                        "福州": [
                            "0200"
                        ],
                        "徐州": [
                            "130009"
                        ]
                    }
                ]
            }
        };
        this.areaList = res.t
     address = this.areaList.areaList[0]
    provinceCodeList = this.areaList.provinceCodeList[0]
    cityCodeList = this.areaList.cityCodeList[0]
    this.citySlots[0].values = Object.keys(address)
    this.citySlots[2].values = Object.values(address)[0]
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
    choiceArea: function () {
      this.popupVisible = true
      // 设置默认选中
      if (this.data.privinceName !== '' && this.data.cityName !== '') {
        this.areaPicker.setSlotValue(0, this.data.privinceName)
        this.areaPicker.setSlotValue(1, this.data.cityName)
        console.log(this.data.privinceName + '-' + this.data.cityName)
      }
    },
    cancleaddress: function () {
      this.popupVisible = false
      this.areaPicker.setSlotValue(0, this.data.privinceName)
      this.areaPicker.setSlotValue(1, this.data.cityName)
    },
    selectaddress: function () {
      this.popupVisible = false
      this.data.privinceName = this.addressProvince
      this.data.cityName = this.addressCity
      this.data.provinceId = this.addressProvinceId
      this.data.cityId = this.addressCityId
      this.data.areaText = this.data.privinceName + this.data.cityName
    },
    doAdd: function () {
      mineInfoService.updateAccount(this.data).then(res => {
        Toast('修改成功')
        this.$router.push('/Mine')
      })
    },
    onCityChange: function (picker, values) {
      this.areaPicker = picker
      /* 此处不直接使用this.data.privinceName、this.data.cityName、this.data.provinceId、this.data.cityId，由于在加载地区信息之后，我又重新设置了绑定到slots属性的值，此时也会触发@change事件，所以在nCityChange方法里需要用四个变量替代上述四个变量来记录当前选中的值，然后在点击确定之后的方法里将这四个值赋给上述四个变量。如果直接在该方法里使用上述四个变量来获取当前选中的值，可能导致数据错乱 */
      picker.setSlotValues(1, address[values[0]])
      this.addressProvince = values[0]
      this.addressCity = values[1]
      this.addressProvinceId = provinceCodeList[this.addressProvince] + ''
      this.addressCityId = cityCodeList[this.addressCity] + ''
    },
    open: function (picker) {
      this.dateValue = this.data.birthday
      this.$refs[picker].open()
    },
    handleChange: function (value) {
      this.data.birthday = window.moment(value).format('YYYY-MM-DD')
    },
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