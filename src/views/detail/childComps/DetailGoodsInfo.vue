<template>
  <div class="detail-goods-info" v-if="Object.keys(detailInfo).length!==0">
      <div class="info-desc">
        {{detailInfo.desc}}
      </div>
      <div class="info-key">
        {{detailInfo.detailImage[0].key}}
      </div>
      <div class="info-list" v-for="item in detailInfo.detailImage">
        <img v-for="i in item.list" :src="i" alt="" :key="i"  @load="imgLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      counter:0,
      imagesLength:0
    }
  },
  methods: {
    imgLoad() {
      //每次加1 第一次0 然后===11 不等于 1===11 直到11===11 才发送事件，只执行一次
   /*   if (++this.counter === this.imagesLength) {
        this.$emit('loadImages')
      }*/
      this.$emit('loadImages')
    }
  },
/*  watch:{
    detailInfo(){
      //保存图片的个数
      this.imagesLength=this.detailInfo.detailImage[0].list.length;
    }
  }*/
}
</script>

<style scoped>
  .detail-goods-info{
    background: white;
    border-bottom: 4px solid bisque;
  }
  .info-desc{
    font-size: 14px;
    margin: 10px 0;
  }
  .info-key{
    margin-bottom: 10px;
  }
  .info-list img{
    width: 100%;
  }
  .info-list img:last-child{
    margin-bottom: 20px;
  }
</style>
