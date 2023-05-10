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
import storage from '@/utils/cache.js'
import store from '@/store'
import { useRouter } from 'vue-router'

const router = useRouter()

// 页面一加载就获取缓存查看登陆状态
const loginMsg = {
  account: storage.getCache('username'),
  pass: storage.getCache('password')
}
if (loginMsg.account && loginMsg.pass) {
  // 存在登录信息，重新渲染 vuex
  store.commit('changeLoginState') // 改变登录状态
  store.commit('loginModule/setLoginMsg', loginMsg) //将登录信息存入vuex
  // 跳转到首页
  router.push('/main')
}
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
