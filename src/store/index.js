import Vue from 'vue';
import Vuex from 'vuex';
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
//1.安装插件
Vue.use(Vuex);

//2.创建store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  //actions:是异步操作和判断需要用到的函数
  actions:actions,
  //mutations中定义的方法，一个方法只做一件事
  mutations:mutations,
  getters:getters,
})

export default store;
