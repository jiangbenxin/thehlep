// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'
import i18n from '@/locale'
import config from '@/config'
import importDirective from '@/directive'
import { directive as clickOutside } from 'v-click-outside-x'
import installPlugin from '@/plugin'
import './index.less'
import '@/assets/icons/iconfont.css'
import TreeTable from 'tree-table-vue'
import VOrgTree from 'v-org-tree'
import 'v-org-tree/dist/v-org-tree.css'
import dayjs from 'dayjs'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { sha256 } from 'js-sha256'
import md5 from 'js-md5'
// 地图
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  // key: '39aa9b767ba49dd9326062ed9351a72c',
  key: '9e4e7d9d0d3416b9812041da6eacaab6',
  plugin: [
    'AMap.Geocoder',
    // `AMap.Autocomplete`, // 输入提示插件
    // `AMap.PlaceSearch`, // POI搜索插件
    `AMap.Scale`, // 右下角缩略图插件 比例尺
    `AMap.OverView`, // 地图鹰眼插件
    `AMap.ToolBar`, // 地图工具条
    `AMap.MapType`, // 类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    // `AMap.PolyEditor`, // 编辑 折线多，边形
    // `AMap.CircleEditor`, // 圆形编辑器插件
    `AMap.Geolocation` // 定位控件，用来获取和展示用户主机所在的经纬度位置],
  ],
  uiVersion: '1.0.11' // 版本号
})
Vue.prototype.$sha256 = sha256
Vue.prototype.$md5 = md5
Vue.use(ElementUI)

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(TreeTable)
Vue.use(VOrgTree)
/**
 * @description 注册admin内置插件
 */
installPlugin(Vue)
/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)
Vue.directive('clickOutside', clickOutside)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})

// 用语登录超时
window.addEventListener('click',()=>{
  //在这里再一次获取时间，方便后面进行比较,名称和前面一样，为了获取进入首页后的最新一次事件的时间
  if(localStorage.getItem('lastClick')){
     let loginTime = dayjs(localStorage.getItem('lastClick')).unix()
     let loginTimed = dayjs(Date()).unix()
     console.log(loginTime,loginTimed);
     if((loginTimed - loginTime) > 200){
         alert('信息超时，请重新登陆')
         localStorage.removeItem('lastClick')
     }
  }else{
    localStorage.setItem('lastClick',Date())
  }
},true)

