<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    :is-check='isSelectAll'
                    @click.native="btnClick"
      ></check-button>
      <span>
        全选
      </span>
    </div>
    <span class="total-price">合计:{{totalPrice}}</span>
    <span class="count">去计算({{productLength}})</span>
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import {mapGetters} from "vuex";
export default {
  name: "CartBottomBar",
  components: {CheckButton},
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return this.cartList.filter((item)=>{
        return item.checked;
      }).reduce((pre,item)=>{
        return pre + item.lowNowPrice * item.count;
      },0).toFixed(2);
    },
    productLength(){
      return this.cartList.filter((item)=>{return item.checked;}).length;
    },
    isSelectAll(){

      //1.使用filter
      return !this.cartList.filter((item)=>{
        return !item.checked
      }).length

      //1.判断是否为空
      // if(this.cartList.length===0) return false;
      //2.使用find进行结果的取反
/*      return !this.cartList.find(item=>{
        //先将结果true的取反，然后最终在取反也就是true变false false在变true
        //false 变true 在变false
        return !item.checked;
        //true //false
      })*/
      //true
      //false true
      //true false //true
      //false true false

      //3.使用for of
/*      let isChecked=false;
      for(let item of this.cartList){
        if(!item.checked){
          isChecked=false
          return isChecked;
        }else{
          isChecked=true;
        }
      }
      return isChecked*/
    }
  },
  methods:{
    btnClick(){
      //将每次的item赋值
      if(this.isSelectAll){
        this.cartList.forEach( item => {
          return item.checked=false;
        })
      }else {
        this.cartList.forEach( item => {
          return item.checked=true;
        })
      }
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  display: flex;
  position: relative;
  bottom: 0;
  height: 40px;
  align-items: center;
  background: #eeeeee;
  text-align: center;
}
.check-content{
  display: flex;
  width: 60px;
}
.total-price{
  font-size: 12px;
  flex:1;
}
.check-content span{
  font-size: 12px;
}
.count{
  font-size: 12px;
  color:white;
  width: 90px;
  background-color:orangered;
  height: 100%;
  line-height: 40px;
}
</style>
