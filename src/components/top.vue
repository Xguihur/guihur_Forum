<template>
  <div class="top-main">
    <div class="left" @click="toHome">桂花论坛</div>
    <div class="right">
      <!-- 未登录展示的 -->
      <template v-if="!dropDownFlag">
        <div>
          <el-button type="primary" @click="toLogin">登录 / 注册</el-button>
        </div>
      </template>
      <!-- 登录后展示的 -->
      <template v-if="dropDownFlag">
        <div class="hello">
          你好, <span>{{ name }}</span> !
        </div>
        <gh-dropdown class="dropdown" />
      </template>
    </div>
  </div>
</template>
<script setup>
import ghDropdown from './dropdown.vue'
import { computed } from 'vue'
import store from '@/store'

// 根据登录状态控制下拉框的展示
const dropDownFlag = computed(() => {
  console.log(store.state.loginState)
  return store.state.loginState
})
// 获取用户登陆后的名字
const name = computed(() => {
  return store.state.loginModule.username
})

import { useRouter } from 'vue-router'

const router = useRouter()

const toLogin = () => {
  router.push('/login')
}
const toHome = () => {
  router.push('/main')
}
</script>
<style scoped lang="less">
.top-main {
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1vh 1vw;
  height: 6.5vh;
  line-height: 6.5vh;

  background-color: #0d6efd;

  .left {
    cursor: pointer;
  }
  .right {
    position: relative;
    display: flex;

    > div {
      margin: 0 1vw;
    }
    .hello {
      padding-right: 8vw;
    }

    .dropdown {
      position: absolute;
      right: 0;
    }
  }
}
</style>
