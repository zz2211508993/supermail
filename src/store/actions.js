import {ADD_COUNT,ADD_INFO} from "./mutations-types";
export default {
  addData(context,payload){
    return new Promise((resolve, reject)=>{
      let oldProduct=null;
      //第一次还没有数据，所以执行那个了else
      //然后就执行那个了for

      //1.遍历cartList数组
      for(let item of context.state.cartList){
        //2.判断cartList出来的iid是否等于传进来的iid
        if(item.iid===payload.iid){
          //如果是就将item赋值给oldProduct
          oldProduct=item;
        }
      }
      //3.如果有商品就数量加1
      if(oldProduct) {
        context.commit(ADD_COUNT,payload);
        resolve('商品的数量')
      }
      //4.如果没有商品就添加商品
      else{
        payload.count=1;
        payload.checked=true;
        context.commit(ADD_INFO,payload)
        resolve('添加到商品')
      }
    })
  }
}
