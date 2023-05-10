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
    // 不知道这段干嘛的，先不理他吧  不行，得拿到才行，可能还需要去了解 element 的验证函数才能进行下一步封装吧
    // if (ruleForm.checkPass !== '') {
    //   if (!ruleFormRef.value) return
    //   ruleFormRef.value.validateField('checkPass', () => null)
    // }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  }
  // 暂时注释，了解完 element 再进行封装
  // else if (value !== ruleForm.pass) {
  //   callback(new Error("Two inputs don't match!"))
  // }
  else {
    callback()
  }
}

const validateNotVoid = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Content not-allow void !'))
  } else {
    callback()
  }
}

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

export { submitForm, validateAccount, validatePass, validatePass2, validateNotVoid }
