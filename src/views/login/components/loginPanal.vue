<template>
  <div class="panalBox">
    <!-- <gh-input title="账号：" class="gh-input">
      <el-input v-model="account" placeholder="Please input account" clearable @blur="validate" />
    </gh-input>
    <gh-input title="密码：" class="gh-input">
      <el-input v-model="password" placeholder="Please input password" clearable />
    </gh-input> -->

    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="5vw" class="demo-ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-button class="danger" type="danger" @click="forget">忘记密码</el-button>
    <el-button class="submit" type="primary" @click="toLogin">登录</el-button>
  </div>
</template>
<script setup>
// import ghInput from '@/components/input-twrice.vue'
import { ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import store from '@/store'
import { useRouter } from 'vue-router'

const router = useRouter()

// 登录
const toLogin = async () => {
  const result = await submitForm(ruleFormRef.value)
  if (!result) return //未通过验证
  // 此处未来调用接口验证登录信息
  store.commit('changeLoginState') // 改变登录状态
  store.commit('loginModule/setLoginMsg', ruleForm.account, ruleForm.pass) //将登录信息存入vuex
  // console.log(store.state.loginState)
  if (store.state.loginState) {
    ElMessage({
      message: '登陆成功',
      type: 'success'
    })
    // 跳转到首页
    router.push('/main')
  } else {
    ElMessage({
      message: '登录失败',
      type: 'error'
    })
  }
}
// 忘记密码
const forget = () => {
  ElMessage({
    message: '忘记密码'
  })
}

const ruleFormRef = ref()

const validateAccount = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the account'))
  } else {
    callback()
  }
}

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}

const ruleForm = reactive({
  account: '',
  pass: ''
})

const rules = reactive({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }]
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
}
</style>
