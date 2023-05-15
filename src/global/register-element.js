import { ElButton, ElInput, ElCollapse, ElCollapseItem, ElMessage, ElForm, ElFormItem, ElIcon } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'

const elComponents = [ElButton, ElInput, ElCollapse, ElCollapseItem, ElMessage, ElForm, ElFormItem, ElIcon, Plus]

export default function (app) {
  // 循环注册组件
  for (const cpn of elComponents) {
    app.component(cpn.name, cpn)
  }
}
