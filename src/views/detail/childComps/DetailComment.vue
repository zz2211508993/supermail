<template>
  <div class="detail-comment" v-if="Object.keys(rate).length!==0" >
      <div class="comment">
        <span>用户评价</span>
        <span>更多</span>
      </div>
      <div class="user">
        <img :src='rate.list[0].user.avatar' class="user-icon" alt="">
        <span class="user-text">{{rate.list[0].user.uname}}</span>
      </div>
      <p class="content">{{rate.list[0].content}}</p>
      <span class="time-style">{{Format(rate.list[0].created)}} {{rate.list[0].style}}</span>
     <div class="info-img" v-for="item in rate.list">
       <img :src="value" alt="" v-for="value in item.images">
     </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props:{
    rate:{
      type:Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return{
      unixTimestamp:{},
    }
  },
  computed: {
    //格式化时间
    Format() {
      return function (date) {
        this.unixTimestamp = new Date(date * 1000).toLocaleString();
        return this.unixTimestamp;
      }
    },
  },
}
</script>

<style scoped>
.detail-comment{
  padding:10px 5px;
  border-bottom: 1px solid rgba(100,100,100,.1);
  position: relative;
}
.comment{
  display: flex;
  padding-right: 5px;
  height: 50px;
  box-sizing: border-box;
  line-height: 50px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100,100,100,.1)
}
.user{
  margin-top: 10px;

}
.user .user-icon{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.user .user-text{
  font-size: 15px;
}
.content{
  font-size: 14px;
  margin: 10px 0;
}
.time-style{
  font-size: 12px;
  color:#999999;
}
.info-img img{
  width: 70px;
  height: 70px;
  margin: 5px 0;
}

</style>
