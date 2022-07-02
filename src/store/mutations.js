import {ADD_COUNT,ADD_INFO} from "./mutations-types";

export default {
  //count自增
    [ADD_COUNT](state,payload){
      payload.count++;
    },
  //添加商品信息
    [ADD_INFO](state,payload){
      state.cartList.push(payload)
    }
}
