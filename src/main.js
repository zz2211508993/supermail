import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import toast from "components/common/toast";
import {formateDate} from 'common/formateDate'
//1.导入fastClick
import fastClick from 'fastclick'

//1.导入vue-lazyload
import VueLazyload from "vue-lazyload";
Vue.config.productionTip = false
Vue.prototype.$bus=new Vue({})

Vue.use(toast)
//2.使用fastClick
fastClick.attach(document.body)
//2.安装vuelazyload,并且使用


Vue.use(VueLazyload,{
  loading:require('./assets/img/common/placeholder.png')
});



//格式化时间
formateDate()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
