<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center" class="center">
        <div>购物车({{length}})</div>
      </div>
    </nav-bar>
    <cart-list :cart-list="cartList"></cart-list>
    <cart-bottom-bar v-show="isShow"></cart-bottom-bar>
  </div>
</template>

<script>
import navBar from "components/common/nav-bar/navBar";


import {mapGetters} from 'vuex';

import CartList from "./childComp/CartList";
import CartBottomBar from "./childComp/CartBottomBar";
export default {
  name: "cart",
  components:{
    CartBottomBar,
    navBar,
    CartList,
  },
  methods:{
  },
  computed:{
    //可以通过vuex中的mapGetters，将getters中定义的对象通过
    //通过扩展运算符，将里面的getters通过
    //对象或者数组的方式，取出来
    //数组的方式，不能给getters中里面的定义名字
    // ...mapGetters(['cartLength'])
    //对象的方式,还可以给getters中里面的定义名字
        ...mapGetters({
          length:'cartLength',
          cartList:'cartList',
        }),
    isShow(){
      return this.cartList.length!==0;
    }
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav{
    background:var(--color-tint);
  }
  .nav .center{
    color: white;
  }
</style>
