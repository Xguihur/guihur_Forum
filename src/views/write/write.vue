<template>
  <div class="panalBox">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="5vw" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" type="title" autocomplete="off" />
      </el-form-item>
      <el-form-item label="简介" prop="introduction">
        <el-input v-model="ruleForm.introduction" type="introduction" autocomplete="off" />
      </el-form-item>

      <!-- <el-form-item label="内容" prop="content">
        <el-input v-model="ruleForm.content" type="content" autocomplete="off" />
      </el-form-item> -->
      <el-form-item prop="content">
        <mavon-editor v-model="ruleForm.content" @change="changeData" class="mavonBox" />
      </el-form-item>
    </el-form>
    <el-button class="danger" type="danger" @click="clear">清空</el-button>
    <el-button class="submit" type="primary" @click="toPublic">发布</el-button>
  </div>
</template>
<script setup>
// import ghInput from '@/components/input-twrice.vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
import store from '@/store'

import { submitForm, ruleFormRef, ruleForm, rules } from '@/hooks/useWriteValidate.js'

const router = useRouter()

// 发布
const toPublic = async () => {
  const result = await submitForm(ruleFormRef.value)
  if (!result) return //未通过验证
  // 此处未来调用接口验证登录信息
  // console.log(ruleForm.content)
  // 获取到所有的内容整合成一个formdata对象
  const formData = new FormData()
  formData.append('title', ruleForm.title)
  formData.append('introduction', ruleForm.introduction)
  formData.append('content', store.state.render)
  // console.log(formData)//不能直接打印，这样是拿不到数据的
  // 以下成功存入 formData 中了，未来调用接口即可
  // console.log(formData.get('title'))
  // console.log(formData.get('introduction'))
  // console.log(formData.get('content'))
  // 先暂时存到 vuex 中
  store.commit('changeMyArticle', [ruleForm.title, ruleForm.introduction])
  // console.log(store.state.myArticle)

  // 跳转到主页查看自己的文章
  setTimeout(() => {
    router.push('./main')
  }, 1000)

  ElMessage({
    message: '发布成功',
    type: 'success'
  })
}
// 根据md文件的变化生成render（可解析的html文本）
const changeData = (value, render) => {
  store.commit('changeRender', render)
}
// 清空
const clear = () => {
  ruleForm.title = ''
  ruleForm.content = ''
}
</script>
<style scoped lang="less">
.panalBox {
  width: 60vw;
  margin: 0 auto;
  margin-top: 2vh;

  > .gh-input {
    margin-bottom: 2vh;
  }

  .submit {
    width: 10vw;
  }
  .danger {
    width: 6vw;
    font-size: 12px;
  }

  .mavonBox {
    min-height: 60vh;
  }
}
</style>
