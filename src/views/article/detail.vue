<template>
  <div>
    <h1>展示文章内容 -- md 文档格式</h1>
    <div class="showHtml" v-html="getHtML()"></div>
    <!-- <mavon-editor :value="getHtML()" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :editable="false"></mavon-editor> -->
  </div>
</template>
<script setup>
// 不知为啥展示不了内容，明明获取到了
import { ref } from 'vue'
import store from '@/store'
const text = ref()

const getHtML = () => {
  //理论上从接口获取数据 先暂时从 vuex 中获取数据
  text.value = store.state.render //确实拿到了 html 格式的文本
  return text.value
}

// console.log(getHtML())
</script>
<style scoped lang="less"></style>
