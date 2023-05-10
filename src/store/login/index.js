import storage from '@/utils/cache.js'

const loginModule = {
  namespaced: true,
  state() {
    return {
      username: '',
      password: '',
      loginOrRegister: false
    }
  },
  mutations: {
    setLoginMsg(state, { account, pass }) {
      // 解构账号和密码
      state.username = account
      state.password = pass
      // 存入缓存
      storage.setCache('username', account)
      storage.setCache('password', pass)
    },
    changePanal(state) {
      state.loginOrRegister = !state.loginOrRegister
      if (!state.loginOrRegister) {
        // 退出登陆清除缓存
        storage.deleteCache('username')
        storage.deleteCache('password')
      }
    }
  },
  getters: {},
  actions: {},
  modules: {}
}

export default loginModule
