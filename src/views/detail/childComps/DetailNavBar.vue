<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">
        <div class="title">
          <div v-for="(item,index) in titles" class="title-item"
               :class="{active:index === currentIndex}"
               @click="itemClick(index)"
          >{{item}}</div>
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/nav-bar/navBar";

export default {
  name: "DetailNavBar",
  data(){
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex:0,
    }
  },
  components: {navBar},
  methods:{
    itemClick(index){
      this.currentIndex=index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .left img{
    vertical-align: middle;
  }

  .active{
    color:var(--color-tint)
  }
</style>
