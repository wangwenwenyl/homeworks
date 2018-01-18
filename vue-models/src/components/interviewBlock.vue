<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
      <div>
        <div class="search-btn" @click="openor=!openor">
          {{ openor ? '关闭' : '展开搜索' }}
        </div>
        <div class="search-box" v-show="openor">
          <div class="follow-iterm">
            <div class="follow-iterm-left">
              <label class="contract-list-name">客户姓名：</label>
            </div>
            <div class="follow-iterm-right">
              <input type="text" class="search-input"/>
            </div>
          </div>
          <div class="follow-iterm">
            <div class="follow-iterm-left">
              <label class="contract-list-name">业务部门：</label>
            </div>
            <div class="follow-iterm-right">
              <input type="text" class="search-input"/>
            </div>
          </div>
          <div class="search-btn">
            查询
          </div>
        </div>
      </div>
       <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list">
            <div class="iterms">
              <div class="follow-space"></div>
              <section>
                  <div class="contract-list">
                      <div class="contract-list-left">
                          <div class="contract-list-name">
                              王先生
                          </div>
                      </div>
                  </div>
                  <div class="contract-list">
                      <div class="contract-list-left">
                          <div class="contract-list-name">
                              业务员：
                          </div>
                          <div class="contract-list-value">
                              李鑫雨
                          </div>
                      </div>
                      <div class="contract-list-right">
                          <span class="contract-list-name">
                              隶属门店：
                          </span>
                          <span class="contract-list-value">
                              信贷五十一部
                          </span>
                      </div>
                  </div>
                  <div class="contract-list">
                      <div class="contract-list-left">
                          <div class="contract-list-name">
                              分配归属：
                          </div>
                          <div class="contract-list-value">
                              待分配
                          </div>
                      </div>
                      <div class="contract-list-right">
                          <span class="contract-list-name">
                              面签日期：
                          </span>
                          <span class="contract-list-value">
                              2017-04-14
                          </span>
                      </div>
                  </div>
              </section>
              <footer style="display:flex;justify-content: flex-end;">
                <!-- <div class="contract-btn">分配</div>-->
                <div class="page-datetime">
                    <div class="page-datetime-wrapper">
                        <mt-button v-on:click="openfather('picker2')" class="contract-btn" size="small">分配</mt-button>
                    </div>
                </div>
          </footer>
            </div>
          </li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  data () {
   return {
        openor:false,
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
  },
 methods: {
      handleBottomChange(status) {
        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
      open(picker) {
        this.$refs[picker][0].open();
      },
      handleChange(value) {
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },
      openfather:function(picker){
        this.$emit('openfather',picker);
      }
    },
    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
}
</script>
<style scoped>
  .mint-button--default{background:#fff;box-shadow:none;}
  @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }
      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }
      @descendent wrapper {
        overflow: scroll;
      }
      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;
      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
  .mintui{font-size:28px;margin-left:12px;}
    @component-namespace page {
    @component datetime {
      @descendent wrapper {
        padding: 0 20px;
        position: fixed 50% * 0 0;
        width: 100%;
        transform: translateY(-50%);
        button:not:(last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .iterms{margin-top:0px;}
</style>
