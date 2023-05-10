<template>
  <div class="login-box">
    <template v-if="!panalFlag">
      <!-- 登录 -->
      <gh-login></gh-login>
    </template>
    <template v-if="panalFlag">
      <!-- 注册 -->
      <gh-register></gh-register>
    </template>
    <!-- 切换 -->
    <el-button type="primary" class="change-btn" @click="changePanal">切换</el-button>
    <el-button type="primary" class="back-btn" @click="back">回到主页</el-button>
  </div>
</template>
<script setup>
import ghLogin from './components/loginPanal.vue'
import ghRegister from './components/registerPanal.vue'
import store from '@/store'
import { useRouter } from 'vue-router'

import { computed } from 'vue'

const router = useRouter()

const panalFlag = computed(() => {
  return store.state.loginModule.loginOrRegister
})

let timer = null // 做个节流防止疯狂点击

const changePanal = () => {
  throttle()
}

const throttle = () => {
  if (!timer) {
    // 马上切换，之后需要一秒后点击才生效
    store.commit('loginModule/changePanal')
    timer = setTimeout(() => {
      timer = null
    }, 1000)
  }
}
const back = () => {
  router.push('/main')
}
</script>
<style scoped lang="less">
.login-box {
  position: relative;
  width: 40vw;
  margin: 2vh auto;
  padding: 2vh 1vw;
  background-color: #ddd;
  border-radius: 1vh;
  box-shadow: 0.2vh 0.7vh 1vh #ccc;

  .change-btn {
    position: absolute;
    right: 7vw;
    bottom: 2vh;
  }
  .back-btn {
    position: absolute;
    right: 1vw;
    bottom: 2vh;
  }
}
</style>
