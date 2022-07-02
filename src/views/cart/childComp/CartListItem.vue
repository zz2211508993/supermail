<template>
    <div class="cart-list-item">
      <div class="item-checkbox">
        <check-button :is-check="product.checked" @click.native="checkClick"></check-button>
      </div>
      <div class="item-img">
        <img :src="product.imgURL" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">
          {{product.title}}
        </div>
        <div class="item-desc">
          {{product.desc}}
        </div>
        <span class="item-oldPrice">
          ¥{{product.lowNowPrice}}
        </span>
        <span class="item-num">
          x{{product.count}}
        </span>
      </div>
    </div>
</template>

<script>
import CheckButton from "./CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton,
  },
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      this.product.checked=!this.product.checked
    }
  }
}
</script>

<style scoped>
.cart-list-item{
  display: flex;
  width: 100%;
  padding:5px;
  border-bottom: 1px solid blueviolet;
}
.cart-list-item .item-checkbox{
  display: flex;
  align-items: center;
}
.cart-list-item .item-img{

}
.item-img img{
  width: 68px;
  height: 85px;
  border-radius: 5px;
}
.cart-list-item .item-info{
  width: 100%;
  padding-left: 10px;
  overflow: hidden;
}

.item-info div{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin-bottom: 10px;
  color: #333;
}
.item-info span{
  font-size: 13px;
}
.item-info .item-title{
  font-size:14px ;
}
.item-info .item-desc{
  margin-bottom: 20px;
  font-size: 12px;
}
.item-info .item-oldPrice{
  float: left;
  color:orangered;
}
.item-info .item-num{
  float: right;
}

</style>
