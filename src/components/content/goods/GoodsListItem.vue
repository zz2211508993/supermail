<template>
    <div class="goods-item">
      <!-- 3.在模板中使用vue-lazyload 将src修改成v-lazy     -->
      <img v-lazy="goodsItems.show.img" alt="" @load="loadItemsImages" @click="itemClick" key="">
      <div class="goods-info">
        <p class="title">{{goodsItems.title}}</p>
        <span class="price">{{goodsItems.price}}</span>
        <span class="cfav">{{goodsItems.cfav}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItems:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    loadItemsImages(){
      this.$bus.$emit('loadItemsImages')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsItems.iid)
    },
  },
}

</script>

<style scoped>
  .goods-item{
    display: flex;
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-item .goods-info{
    position: absolute;
    left:0;
    bottom: 5px;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    right:0;
  }
  .goods-item .goods-info p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .goods-item .goods-info .price{
    color:var(--color-tint);
    margin-right: 20px;
  }
  .goods-item .goods-info .cfav{
    position: relative;
  }
  .goods-item .goods-info .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;

  }
</style>
