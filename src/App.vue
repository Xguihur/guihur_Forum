<template>
  <div class="main-page">
    <div class="top">
      <gh-top></gh-top>
    </div>
    <router-view />
    <div class="bottom">
      <gh-bottom></gh-bottom>
    </div>
  </div>
</template>

<script setup>
import ghTop from './components/top.vue'
import ghBottom from './components/bottom.vue'
</script>

<style lang="less" scoped>
.main-page {
  margin: 0 auto;
  width: 90%;
  text-align: center;

  .bottom {
    margin-top: 5vh;
  }
}
</style>
