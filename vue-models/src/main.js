// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './config'
import { Picker } from 'mint-ui';
import { DatetimePicker } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import echarts from "echarts";
import { Loadmore } from 'mint-ui';
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Picker.name, Picker);
Vue.use(MintUI);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.config.productionTip =

  // 用于填充指定元素的高度，使其充满全屏
  Vue.prototype.fillPage = function(flag){
    document.querySelector( flag ).style.height = document.documentElement.clientHeight + "px";
  };

  // 用于android中，防止软键盘弹出时遮挡
  Vue.prototype.moveKey = function(e){
    if( navigator.userAgent.indexOf("Android") > -1 ){
      e.target.scrollIntoView();
    }
  };
  // 用于缓存首页面中顶部tab选项卡的选中项
  Vue.prototype.choiceSelected = function(){
    this.$cookie.set('selected',this.selected);
  }

  // 用于tab选项卡，方式斜向滑动
  Vue.prototype.moveControl = function(){
    var xx,yy,XX,YY,swipeX,swipeY, currentItemCount, currentSelected ;
    var _this = this;
    var target = document.querySelector( ".mint-tab-container" );

    target.addEventListener('touchstart',function(event){
      event.stopPropagation();//阻止冒泡
      currentItemCount = this.querySelectorAll(".mint-tab-container-item").length;

      xx = event.targetTouches[0].screenX ;
      yy = event.targetTouches[0].screenY ;
      swipeX = true;
      swipeY = true ;
    })

    target.addEventListener('touchmove',function(event){
      XX = event.targetTouches[0].screenX ;
      YY = event.targetTouches[0].screenY ;
      currentSelected = _this.selected;

      if(swipeX && Math.abs(XX-xx)-Math.abs(YY-yy)>0){  //左右滑动

            event.stopPropagation();
            event.preventDefault();
            swipeY = false;

      }else if(swipeY && Math.abs(XX-xx)-Math.abs(YY-yy)<0){  //上下滑动
        swipeX = false;

        //上下滑动，使用浏览器默认的上下滑动
        if( XX-xx < -30 ){    //手势向左滑
          event.preventDefault();
          swipeY = false ;
          swipeX = true;

          if( _this.selected < currentItemCount){
            _this.selected++;
          }else{
            _this.selected = currentSelected;
          }

          _this.selected = _this.selected.toString();

          // target.querySelector(".mint-tab-container-wrap").classList.add( "swipeLeft" );
        }else if( XX-xx > 30 ){   //手势向右滑
          event.preventDefault();
          swipeY = false ;
          swipeX = true;

          if( _this.selected > 1 ){
            _this.selected--;
          }else{
            _this.selected = currentSelected;
          }
          _this.selected = _this.selected.toString();

        }
      }
    })

    target.addEventListener('touchend',function(event){
      // target.querySelector(".mint-tab-container-wrap").classList.remove( "swipeLeft" );
      event.stopPropagation();
      event.preventDefault();
    })
  };

  // 用于保持顶部选项卡被选中选项始终处于可视化范围，根据实际显示的内容
  // 由于minUI组件库的原因，该方法需要单独放置在updated里面调用
  Vue.prototype.tabItemIntoView = function(){
    document.querySelector(".is-selected").scrollIntoView();
  };

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router:router,
    template: '<App/>',
    components: { App },
    mounted(){
        this.boxFixedFill();
    },
    updated(){
        this.boxFixedFill();
    },
    methods: {
        boxFixedFill(){
            if( document.querySelector( "#boxFixed" ) ){
                // 去除mint-loadmore类名元素的margin-top对实际高度的影响
                document.querySelector( "#boxFixed" ).style.height = document.documentElement.clientHeight - document.querySelector( ".mint-loadmore" ).offsetTop  + "px";
                document.querySelector( "#boxFixed" ).style.top = document.querySelector( ".mint-loadmore" ).offsetTop  + "px";
                document.querySelector( ".mint-loadmore" ).style.marginTop = 0;
            }
        }
    }
})



