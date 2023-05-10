<template>
  <div class="main">
    <div class="content">
      <!-- 空白文章的时候展示 -->
      <gh-blank></gh-blank>

      <div class="more">
        <el-button type="primary" @click="showArticle" plain>浏览文章 👉</el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import ghBlank from './components/blank-artical.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const showArticle = () => {
  router.push('/article')
}
</script>
<style scoped lang="less">
.main {
  .more {
    margin-top: 5vh;
  }
}
</style>
