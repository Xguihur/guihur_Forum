<template>
  <div class="cardBox" @click="showDetail">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="profile">{{ profile }}</div>
    </div>
    <div class="img" v-if="img">
      <img :src="img" alt="" />
    </div>
  </div>
</template>
<script setup>
// import { ElMessage } from 'element-plus'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  },
  img: {
    type: String
  }
})

const router = useRouter()

const showDetail = () => {
  router.push('/article_detail')
  // ElMessage({
  //   message: '查看文章详情-通过query参数请求接口数据渲染-未实现',
  //   type: 'success'
  // })
}
</script>
<style scoped lang="less">
.cardBox {
  cursor: pointer;
  display: flex;
  // align-items: center;
  text-align: left;
  padding: 1vh;
  border-radius: 1.5vh;
  background-color: #fff;

  .content {
    flex: 3;
    // background-color: pink;

    .title {
      font-size: 20px;
      padding: 1vh 0;
      font-weight: 600;
    }
  }
  .img {
    flex: 1;
    height: 20vh;
    text-align: right;

    img {
      // width: 100%;
      height: 100%;
      // object-fit: contain;
    }
  }
}
</style>
