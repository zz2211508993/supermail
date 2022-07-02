<template>
  <div class="home-swiper">
    <Swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="loadImages">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default (){
        return [];
      }
    }
  },
  data(){
    return {
      isLoad:false,
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    loadImages(){
      //只执行一次发送事件
      if(!this.isLoad){
        this.$emit('swiperLoadImages')
        this.isLoad=true;
      }
    }
  }
}
</script>

<style scoped>
</style>
