<template>
  <div class="iterm-box" style="overflow-Y:scroll;">
      <div class="search-btn" @click="open=!open">
          {{ open ? '关闭' : '展开搜索' }}
      </div>
      <div class="search-box" v-show="open">
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
               <router-link :to="{ name: 'checkFuJian',params: { userId: 123 }}" style="text-decoration:none;" class="contract-btn">查看附件</router-link>
              <div class="contract-btn">查看</div>
          </footer>
      </div>
  </div>
</template>

<script>
import { Header } from 'mint-ui';
export default {
  data () {
  return {
        open:false,
    }
  },
  mounted:function(){

  }
}
</script>
<style scoped>
  .mintui{font-size:28px;margin-left:12px;}
  .iterms{margin-top:0px;}
</style>
