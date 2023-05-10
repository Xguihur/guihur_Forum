<template>
  <div>
    <h1>展示文章内容 -- md 文档格式</h1>
    <mavon-editor :value="getHtML()" :subfield="false" defaultOpen="preview" :toolbarsFlag="false" :editable="false"></mavon-editor>
  </div>
</template>
<script setup>
// 不知为啥展示不了内容，明明获取到了
import { ref } from 'vue'
import store from '@/store'
const text = ref()

const getHtML = () => {
  //理论上从接口获取数据 先暂时从 vuex 中获取数据
  text.value = store.state.myArticle

  console.log(text.value)
  // return marked(text.value)
  return text.value
}

console.log(getHtML())
</script>
<style scoped lang="less"></style>
