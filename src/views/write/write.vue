<template>
  <div class="panalBox">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="5vw" class="demo-ruleForm">
      <el-form-item label="标题" prop="title">
        <el-input v-model="ruleForm.title" type="title" autocomplete="off" />
      </el-form-item>

      <!-- <el-form-item label="内容" prop="content">
        <el-input v-model="ruleForm.content" type="content" autocomplete="off" />
      </el-form-item> -->
      <el-form-item prop="content">
        <mavon-editor v-model="ruleForm.content" class="mavonBox" />
      </el-form-item>
    </el-form>
    <el-button class="danger" type="danger" @click="clear">清空</el-button>
    <el-button class="submit" type="primary" @click="toPublic">发布</el-button>
  </div>
</template>
<script setup>
// import ghInput from '@/components/input-twrice.vue'
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
// import store from '@/store'

const router = useRouter()

// 发布
const toPublic = async () => {
  const result = await submitForm(ruleFormRef.value)
  if (!result) return //未通过验证
  // 此处未来调用接口验证登录信息
  // console.log(ruleForm.content)
  // 跳转到主页查看自己的文章
  setTimeout(() => {
    router.push('./main')
  }, 1000)

  ElMessage({
    message: '发布成功',
    type: 'success'
  })
}
// 清空
const clear = () => {
  ruleForm.title = ''
  ruleForm.content = ''
}

const ruleFormRef = ref()

const validateNotVoid = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Content not-allow void !'))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  title: '',
  content: ''
})

const rules = reactive({
  title: [{ validator: validateNotVoid, trigger: 'blur' }],
  content: [{ validator: validateNotVoid, trigger: 'blur' }]
})

const submitForm = formEl => {
  if (!formEl) return
  return formEl.validate(valid => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
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
