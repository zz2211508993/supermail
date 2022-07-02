<template>
  <div class="detail-recommend">
      <div class="recommend-item" v-for="item in list">
        <img :src="item.image" alt="" class="item-img">
        <div class="recommend-info">
          <p class="info-title">{{item.title}}</p>
          <span class="info-price">{{item.price}}</span>
          <i class="info-icon"></i>
          <span class="info-cfav">{{item.cfav}}</span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailRecommend",
  props:{
    list:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style scoped>
.detail-recommend{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5px;
  position: relative;
}
.recommend-item{
  width: 48%;
}
.recommend-item .item-img{
  width: 100%;
}
.recommend-info{
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-bottom: 5px;
}
.recommend-info span{
}
.recommend-info .info-title{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  width: 100%;
}
.recommend-info .info-icon{
  width: 15px;
  height: 15px;
  display: inline-block;
  background: url("~assets/img/detail/detail_bottom.png");
  background-size: 15px;
  vertical-align: text-bottom;
  margin:0 5px;

}
.recommend-info .info-price{
  color:var(--color-high-text)
}
</style>
