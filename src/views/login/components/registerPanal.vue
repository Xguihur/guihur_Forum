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
import { submitForm, ruleFormRef, ruleForm, rules } from '@/hooks/useRegisterValidate.js'

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
