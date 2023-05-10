<template>
  <div>
    <div class="demo-collapse">
      <el-collapse ref="elCol">
        <el-collapse-item name="1">
          <template #title>
            <div class="text">更多选项<el-icon class="header-icon" /></div>
          </template>
          <div @click="profile">个人主页</div>
          <div><router-link to="/write" class="turn-write">新建文章</router-link></div>
          <div @click="exit">退出登陆</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script setup>
import store from '@/store'
import { ElMessage } from 'element-plus'

const exit = () => {
  setTimeout(() => {
    store.commit('changeLoginState')
  }, 500)
  ElMessage({
    message: '退出登陆成功',
    type: 'success'
  })
}

const profile = () => {
  ElMessage({
    message: '前往个人主页--未完成',
    type: 'success'
  })
}
</script>
<style scoped lang="less">
.demo-collapse {
  .text {
    font-size: 14px;
    padding: 0 0.5vw 0 1vw;
    box-sizing: border-box;
  }

  /deep/.el-collapse-item__content {
    > div {
      padding: 0.5vh;
      cursor: pointer;
    }
    > div:hover {
      background-color: #ccc;
    }
  }
}
.turn-write {
  color: #303133;
  text-decoration: none;
}
</style>
