import { ElButton, ElInput, ElCollapse, ElCollapseItem, ElMessage, ElForm, ElFormItem, ElIcon } from 'element-plus'

const elComponents = [ElButton, ElInput, ElCollapse, ElCollapseItem, ElMessage, ElForm, ElFormItem, ElIcon]

export default function (app) {
  // 循环注册组件
  for (const cpn of elComponents) {
    app.component(cpn.name, cpn)
  }
}
