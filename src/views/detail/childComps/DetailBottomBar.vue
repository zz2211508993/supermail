<template>
  <div class="detail-bottom-nav">
    <div class="bottom-nav-left">
        <div class="left-service">
          <i></i>
          <span>客服</span>
        </div>
        <div class="left-shop">
          <i></i>
          <span>客服</span>
        </div>
      <div class="left-collect">
        <i></i>
        <span>客服</span>
      </div>
    </div>
    <div class="bottom-nav-right">
      <div class="cart" @click="buyClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods:{
    buyClick(){
      this.$emit('barClick')
    }
  }
}
</script>

<style scoped>
  .detail-bottom-nav{
    width: 100%;
    height: 50px;
    position: relative;
    left:0;
    right: 0;
    z-index: 999;
    background: white;
    display: flex;
  }
  .bottom-nav-left{
    flex:1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .bottom-nav-left i{
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url("~assets/img/detail/detail_bottom.png");
    background-size: 18px;
    margin:5px 0;

  }
  .bottom-nav-left span{
    font-size: 11px;
    display: inline-block;
  }
  .left-service,.left-shop,.left-collect{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .left-service i{
    background-position: 0 80px;
  }
  .left-shop{
  }
  .left-shop i{
    background-position: 0 43px;
  }
  .left-collect{
  }
  .left-collect i{
    background-position: 0 0;
  }

  .bottom-nav-right{
    flex:1;
    display: flex;
    text-align: center;
    line-height: 50px;
    font-size: 12px;
  }
  .bottom-nav-right .cart{
    height: 100%;
    background: pink;
    flex: 1;

  }
  .bottom-nav-right .buy{
    height: 100%;
    background: yellow;
    flex:1;

  }
</style>

