import registerElement from './register-element'

export default function (app) {
  // 在index文件中统一将多个方法进行管理执行
  app.use(registerElement)
}
