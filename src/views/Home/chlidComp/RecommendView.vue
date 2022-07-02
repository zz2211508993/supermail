<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <div class="recommend-icon">
        <img :src="item.image" alt="">
      </div>
      <a href="#">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendInfo",
  props:{
    recommends:{
      type:Array,
      default() {
        return [];
      },
    }
  },
  created() {
    setTimeout(()=>{

    })
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    padding: 14px 0 30px 0 ;
    border-bottom: 10px solid #eee;
    text-align: center;
  }
  .recommend-item{
    flex:1;
  }

  .recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .recommend-item a{
    font-size: 14px;
  }
</style>
