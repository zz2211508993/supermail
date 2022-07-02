<template>
  <div class="check-button" :class="{isCheck:isCheck}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
    isCheck:{
      type:Boolean,
      default:false,
    }
  }
}
</script>

<style scoped>
.check-button{
  width: 18px;
  height: 18px;
  margin: 0 5px;
  border-radius: 50%;
  box-sizing: border-box;
  background: white;
  border:2px solid #ccc;
}
.isCheck{
  background: red;
}
</style>
