<template>
  <div id="tab-bar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    text-align: center;
    position: fixed;
    left:0;
    right:0;
    bottom:-1px;
    z-index: 44;
    background: #f6f6f6;
    box-shadow: 1px 3px 10px rgba(100,100,100,0.2);
    height: 48px;
  }
</style>
