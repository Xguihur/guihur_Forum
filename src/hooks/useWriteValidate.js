import { ref, reactive } from 'vue'
import { submitForm, validateNotVoid } from '@/hooks/useValidate.js'

const ruleFormRef = ref()
const ruleForm = reactive({
  title: '',
  content: '',
  introduction: ''
})

const rules = reactive({
  title: [{ validator: validateNotVoid, trigger: 'blur' }],
  content: [{ validator: validateNotVoid, trigger: 'blur' }],
  introduction: [{ validator: validateNotVoid, trigger: 'blur' }]
})

export { submitForm, ruleFormRef, ruleForm, rules }
