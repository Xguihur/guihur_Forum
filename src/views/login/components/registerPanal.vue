<template>
  <div class="panalBox">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="5vw" class="demo-ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>

    <el-button class="submit" type="primary" @click="toRegister">注册</el-button>
  </div>
</template>
<script setup>
import { ElMessage } from 'element-plus'
import store from '@/store'
import { ref, reactive } from 'vue'

const toRegister = async () => {
  let result = await submitForm(ruleFormRef.value)
  if (result) {
    // 此处进行接口调用验证注册信息 注册成功、返回登录页面
    ElMessage({
      message: '注册成功',
      type: 'success'
    })
    // 切换为登录页面
    store.commit('loginModule/changePanal')
  } else {
    ElMessage({
      message: '注册失败',
      type: 'error'
    })
  }
}

const ruleFormRef = ref()

const validateAcount = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the Acount'))
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
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  account: '',
  pass: '',
  checkPass: ''
})

const rules = reactive({
  account: [{ validator: validateAcount, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
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
    width: 8vw;
  }
}
</style>
