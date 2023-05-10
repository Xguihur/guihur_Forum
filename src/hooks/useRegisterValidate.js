import { ref, reactive } from 'vue'
import { submitForm, validateAccount, validatePass, validatePass2 } from './useValidate.js'

const ruleFormRef = ref() //登录表单的dom
// 注册的数据
const ruleForm = reactive({
  account: '',
  pass: '',
  checkPass: ''
})

const rules = reactive({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }]
})

export { submitForm, ruleFormRef, ruleForm, rules }
