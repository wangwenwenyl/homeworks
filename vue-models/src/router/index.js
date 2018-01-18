import Vue from 'vue'
import Router from 'vue-router'
import bankClient from '@/components/bankClient'
import bankInterview from '@/components/bankInterview'
import Hello from '@/components/Hello'
import ContractData from '@/components/ContractData'
//import FollowManageYes from '@/components/FollowManageYes'
//import FollowManageNo from '@/components/FollowManageNo'
import diyadai from '@/components/diyadai'
//import FollowRecordYes from '@/components/FollowRecordYes'
//import FollowRecordNo from '@/components/FollowRecordNo'
import follow from '@/components/follow'
import interviewYes from '@/components/interviewYes'
import interviewNo from '@/components/interviewNo'
import checkFuJian from '@/components/checkFuJian'
import datetime1 from '@/components/datetime1'
import xinyongdai from '@/components/xinyongdai'
import paymethod from '@/components/paymethod'
import zhiyabaobei from '@/components/ZhiyaBaobeidan'
import interviewStatistics from '@/components/interviewStatistics'
import interviewWuXiaoJiLu from '@/components/interviewWuXiaoJiLu'
import zhiyafanhetong from '@/components/ZhiyaFanhetong'
import mypicker from '@/components/mypicker'
import newmypicker from '@/components/newmypicker'
import finalmypicker from '@/components/finalmypicker'
import myecharts from '@/components/myecharts'
import returncontract from '@/components/returnContractP'
import baobeicontract from '@/components/ManagerReportP'
import baobeiyiban from '@/components/ManagerReportYBP'
import fanhetongyiban from '@/components/returnContractYBP'
import contractdetail from '@/components/contractdetail'
import login from '@/components/login'
import shouye from '@/components/shouye'
import fangKuan from '@/components/fangKuan'
import piDai from '@/components/piDai'
import huanHangGaiQian from '@/components/huanHangGaiQian'
import yinHangMianQian from '@/components/yinHangMianQian'
//业绩模块
import dingJinZhuangYeJi from '@/components/yeji/dingJinZhuangYeJi'
import fenPeiList from '@/components/yeji/fenPeiList'
import fenPeiRenYuan from '@/components/yeji/fenPeiRenYuan'
import contractbaobei from '@/components/contractbaobei'
import kuanXiangFenPei from '@/components/yeji/kuanXiangFenPei'
import kuanXiangChaKan from '@/components/yeji/kuanXiangChaKan'
import chiefzhichu from '@/components/yeji/chiefZhichu'
import chiefyeji from '@/components/yeji/chiefYeji'
import chiefhuikuan from '@/components/yeji/chiefHuikuan'
import checkmingxi from '@/components/yeji/chiefCheckmingxi'
import yeJiLuRu from '@/components/yeji/yeJiLuRu'
import yeJiBoHui from '@/components/yeji/yeJiBoHui'
import huiKuanLuRu from '@/components/yeji/huiKuanLuRu'
import dingJinYeJiLuRu from '@/components/yeji/dingJinYeJiLuRu'
import yeJiList from '@/components/yeji/yeJiList'
import yeJiDiaoBo from '@/components/yeji/yeJiDiaoBo'
import yeJiDiaoBoDetail from '@/components/yeji/yeJiDiaoBoDetail'
import chaKanDiaobo from '@/components/yeji/chaKanDiaobo'
import chaKanDiaoBo from '@/components/yeji/chaKanDiaoBo'
import zhiChuShenPi from '@/components/yeji/zhiChuShenPi'
import zhiChuLuRu from '@/components/yeji/zhiChuLuRu'
import dingJinLuRu from '@/components/yeji/dingJinLuRu'
import dingJinList from '@/components/yeji/dingJinList'
import tuiDingJin from '@/components/yeji/tuiDingJin'
import tuiDingJinPingDan from '@/components/yeji/tuiDingJinPingDan'
import dingJinZhuanYeJiShenQing from '@/components/yeji/dingJinZhuanYeJiShenQing'
import caiLiaoZhuanYeJiShenQing from '@/components/yeji/caiLiaoZhuanYeJiShenQing'
import zhiChuShenQing from '@/components/yeji/zhiChuShenQing'
import zhiChuShenQingPingDan from '@/components/yeji/zhiChuShenQingPingDan'
import contractProgress from '@/components/yeji/contractProgress'
//测试demo
import select from '@/components/search-select2'
//old APP模块
import cheDanShenPi from '@/components/old/cheDanShenPi'
import cheDanShenPiYiBan from '@/components/old/cheDanShenPiYiBan'
import fanHeTongShenPi from '@/components/old/fanHeTongShenPi'
import contractApprovalYBP from '@/components/old/contractApprovalYBP'
import fanHeTongShenPiYiBan from '@/components/old/fanHeTongShenPiYiBan'
import baoBeiShenPiOld from '@/components/old/baoBeiShenPiOld'
import baoBeiShenPiYiBan from '@/components/old/baoBeiShenPiYiBan'
import salesmanContractsList from '@/components/old/salesmanContractsList'
import heTongShenPi from '@/components/old/heTongShenPi'
import person from '@/components/old/person'
import message from '@/components/old/message'
import salesmanContracts from '@/components/old/salesmanContracts'
import oldxinyongdai from '@/components/old/oldxinyongdai'
import olddiyadai from '@/components/old/olddiyadai'
import oldshouye from '@/components/old/oldshouye'
import noticeList from '@/components/old/noticeList'
// import calculator from '@/components/old/calculator'
// import ZhiyaBaobeidan from '@/components/old/calculator'
import oldzhiyafanhetong from '@/components/old/ZhiyaFanhetong'
import oldbaobei from '@/components/old/ZhiyaBaobeidan'
Vue.use(Router)
export default new Router({
  routes: [
      {
          path:'/noticeList',
          name:'noticeList',
          component:noticeList,
      },
      {
        // path:'/oldbaobei',
          path:'/oldbaobei/:step/:nodeType/:processinstanceid/:contractnum/:typeid/:contractid',
          name:'oldbaobei',
          component:oldbaobei,
      },
      {
          path:'/message/:userid/:uuid',
          name:'message',
          component:message,
      },
      {
          path:'/person/:userid/:uuid/:utype',
          name:'person',
          component:person
      },
      {
          path:'/person/:userid/:uuid',
          name:'person',
          component:person
      },
      {
        path:'/salesmanContractsList',
        name:'salesmanContractsList',
        component:salesmanContractsList,
      },
      {
        path:'/select',
        name:'select',
        component:select,
      },
	  {
      path: '/bankClient',
      name: 'bankClient',
      component: bankClient
    },
    {
      path: '/bankInterview',
      name: 'bankInterview',
      component: bankInterview
    },
	  {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/diyadai/:step/:nodeType/:processinstanceid/:contractnum/:typeid/:contractid',
      name: 'diyadai',
      component: diyadai
    },
    {
      // path: '/follow',
      path: '/follow/:schedule/:id',
      name: 'follow',
      component: follow,
    },
     {
        path: '/interviewYes',
        name: 'interviewYes',
        component: interviewYes
      },
      {
      path: '/interviewNo',
      name: 'interviewNo',
      component: interviewNo
    },
     {
      path: '/interviewWuXiaoJiLu',
      name: 'interviewWuXiaoJiLu',
      component: interviewWuXiaoJiLu
    },
      {
      path: '/checkFuJian',
      name: 'checkFuJian',
      component: checkFuJian
    },
    {
      path: '/datetime1',
      name: 'datetime1',
      component: datetime1
    },
     {
      path: '/xinyongdai/:step/:nodeType/:processinstanceid/:contractnum/:contractid',
      name: 'xinyongdai',
      component: xinyongdai
    },
    {
      path: '/paymethod',
      name: 'ces',
      component: paymethod
    },
    {
      path:'/zhiyabaobei/:step/:nodeType/:processinstanceid/:contractnum/:typeid/:contractid',
      name:'zhiyabaobei',
      component: zhiyabaobei
    },
    {
      path:'/zhiyafanhetong/:step/:nodeType/:processinstanceid/:contractnum/:typeid/:contractid',
      name:'zhiyafanhetong',
      component:zhiyafanhetong
    },
    {
      path:'/interviewStatistics',
      name:'interviewStatistics',
      component: interviewStatistics
    },
      {
      path:'/ContractData',
      name:'ContractData',
      component: ContractData
    },
    {
      path:'/returncontract',
      name:'returncontract',
      component:returncontract
    },
    {
      path:'/mypicker',
      name:'mypicker',
      component: mypicker
    },
    {
      path:'/newmypicker',
      name:'newmypicker',
      component: newmypicker
    },
    {
      path:'/finalmypicker',
      name:'finalmypicker',
      component: finalmypicker
    },
    {
      path:'/myecharts',
      name:'myecharts',
      component: myecharts
    },
    {
      path:'/baobeishenpi',
      name:'baobeishenpi',
      component:baobeicontract
    },
    {
      path:'/baobeiyiban',
      name:'baobeiyiban',
      component:baobeiyiban
    },
    {
      path:'/fanhetongyiban',
      name:"fanhetongyiban",
      component:fanhetongyiban
    },
    {
      path:'/contractdetail/:contractnum/:typeid/:contractid',
      name:'contractdetail',
      component:contractdetail
    },
    {
      path:'/contractbaobei',
      name:'contractbaobei',
      component:contractbaobei
    },
     {
      path:'/dingJinZhuangYeJi',
      name:"dingJinZhuangYeJi",
      component:dingJinZhuangYeJi
    },
    {
      path:'/fenPeiList',
      name:"fenPeiList",
      component:fenPeiList
    },
    {
      path:'/fenPeiRenYuan',
      name:"fenPeiRenYuan",
      component:fenPeiRenYuan
    },
    {
      path:'/kuanXiangFenPei',
      name:"kuanXiangFenPei",
      component:kuanXiangFenPei
    },
    {
      path:'/kuanXiangChaKan',
      name:"kuanXiangChaKan",
      component:kuanXiangChaKan
    },
    {
      path:'/chiefhuikuan',
      name:'chiefhuikuan',
      component:chiefhuikuan,
    },
    {
      path:'/chiefzhichu',
      name:'chiefzhichu',
      component:chiefzhichu,
    },
    {
      path:'/chiefyeji',
      name:'chiefyeji',
      component:chiefyeji,
    },
    {
      path:'/checkmingxi',
      name:'checkmingxi',
      component:checkmingxi,
    },
      {
          path:'/yeJiLuRu',
          name:"yeJiLuRu",
          component:yeJiLuRu
      },
      {
          path:'/huiKuanLuRu',
          name:"huiKuanLuRu",
          component:huiKuanLuRu
      },
      {
        path:'/dingJinYeJiLuRu',
        name:"dingJinYeJiLuRu",
        component:dingJinYeJiLuRu
      },
      {
          path:'/yeJiList',
          name:"yeJiList",
          component:yeJiList
      },
      {
          path:'/yeJiDiaoBo',
          name:"yeJiDiaoBo",
          component:yeJiDiaoBo
      },
      {
        path:'/yeJiDiaoBoDetail',
        name:"yeJiDiaoBoDetail",
        component:yeJiDiaoBoDetail
      },
      {
        path:'/chaKanDiaobo',
        name:"chaKanDiaobo",
        component:chaKanDiaobo
      },
      {
            path:'/yeJiBoHui',
            name:"yeJiBoHui",
            component:yeJiBoHui
        },
      {
          path:'/chaKanDiaoBo',
          name:"chaKanDiaoBo",
          component:chaKanDiaoBo
      },
      {
          path:'/zhiChuShenPi',
          name:"zhiChuShenPi",
          component:zhiChuShenPi
      },
      {
          path:'/zhiChuLuRu',
          name:"zhiChuLuRu",
          component:zhiChuLuRu
      },
      {
          path:'/dingJinLuRu',
          name:"dingJinLuRu",
          component:dingJinLuRu
      },
      {
        path:'/dingJinList',
        name:"dingJinList",
        component:dingJinList
      },
      {
          path:'/tuiDingJin',
          name:"tuiDingJin",
          component:tuiDingJin
      },
      {
          path:'/tuiDingJinPingDan',
          name:"tuiDingJinPingDan",
          component:tuiDingJinPingDan
      },
      {
          path:'/dingJinZhuanYeJiShenQing',
          name:"dingJinZhuanYeJiShenQing",
          component:dingJinZhuanYeJiShenQing
      },
      {
          path:'/caiLiaoZhuanYeJiShenQing',
          name:"caiLiaoZhuanYeJiShenQing",
          component:caiLiaoZhuanYeJiShenQing
      },
      {
          path:'/zhiChuShenQing',
          name:"zhiChuShenQing",
          component:zhiChuShenQing
      },
      {
          path:'/zhiChuShenQingPingDan',
          name:"zhiChuShenQingPingDan",
          component:zhiChuShenQingPingDan
      },
      {
        path:'/contractProgress/:dt/:contractid',
        name:"contractProgress",
        component:contractProgress
      },
      {
        path:'/cheDanShenPi',
        name:"cheDanShenPi",
        component:cheDanShenPi
      },
      {
        path:'/cheDanShenPiYiBan',
        name:"cheDanShenPiYiBan",
        component:cheDanShenPiYiBan
      },
      {
        path:'/fanHeTongShenPi',
        name:"fanHeTongShenPi",
        component:fanHeTongShenPi
      },
      {
        path:'/contractApprovalYBP',
        name:"contractApprovalYBP",
        component:contractApprovalYBP
      },
      {
        path:'/fanHeTongShenPiYiBan',
        name:"fanHeTongShenPiYiBan",
        component:fanHeTongShenPiYiBan
      },
      {
        path:'/baoBeiShenPiOld',
        name:"baoBeiShenPiOld",
        component:baoBeiShenPiOld
      },
      {
        path:'/baoBeiShenPiYiBan',
        name:"baoBeiShenPiYiBan",
        component:baoBeiShenPiYiBan
      },
      {
        path:'/heTongShenPi',
        name:"heTongShenPi",
        component:heTongShenPi
      },
      {
          path:'/salesmanContracts',
          name:"salesmanContracts",
          component:salesmanContracts
        },
      {
        path:'/login',
        name:"login",
        component:login
      },
      {
        path:'/shouye/:userid/:uname/:uuid/:type/:uaccount',
        name:"shouye",
        component:shouye
      },
    {
      path:'/fangKuan',
      name:"fangKuan",
      component:fangKuan
    },
    {
      path:'/piDai',
      name:"piDai",
      component:piDai
    },
    {
      path:'/huanHangGaiQian',
      name:"huanHangGaiQian",
      component:huanHangGaiQian
    },
    {
      path:'/yinHangMianQian',
      name:"yinHangMianQian",
      component:yinHangMianQian
    },
    {
      path:'/oldxinyongdai/:step/:nodeType/:processinstanceid/:contractnum/:contractid',
      name:"oldxinyongdai",
      component:oldxinyongdai
    },
    {
      path:'/olddiyadai/:step/:nodeType/:processinstanceid/:contractnum/:contractid',
      name:"olddiyadai",
      component:olddiyadai
    },
    {
      path:'/oldshouye/:userid/:uname/:uuid/:type/:uaccount',
      name:'/oldshouye',
      component:oldshouye,
    },
    {
      path:'/oldzhiyafanhetong/:step/:nodeType/:processinstanceid/:contractnum/:contractid',
      name:'oldzhiyafanhetong',
      component:oldzhiyafanhetong
    },
    // {
    //   path:'/calculator',
    //   name:"calculator",
    //   component:calculator
    // },
  ]
})
