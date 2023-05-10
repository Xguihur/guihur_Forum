<template>
  <div class="gh-input">
    <div class="title">{{ title }}</div>
    <!-- 用来放input框 -->
    <slot></slot>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: '标题'
  }
})
</script>
<style scoped lang="less">
.gh-input {
  display: flex;
  height: 5vh;
  line-height: 5vh;

  .title {
    // 不知道为什么这里没办法自适应，害 先用 6vw 占位好了
    width: 6vw;
  }
}
</style>
