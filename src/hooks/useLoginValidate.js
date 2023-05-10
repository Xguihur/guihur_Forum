import { ref, reactive } from 'vue'
import { submitForm, validateAccount, validatePass } from './useValidate.js'

const ruleFormRef = ref() //登录表单的dom
// 登录的数据
const ruleForm = reactive({
  account: '',
  pass: ''
})

const rules = reactive({
  account: [{ validator: validateAccount, trigger: 'blur' }],
  pass: [{ validator: validatePass, trigger: 'blur' }]
})

export { submitForm, ruleFormRef, ruleForm, rules }
