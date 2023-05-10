const loginModule = {
  namespaced: true,
  state() {
    return {
      username: '',
      password: null,
      loginOrRegister: false
    }
  },
  mutations: {
    setLoginMsg(state, username, password) {
      state.username = username
      state.password = password
    },
    changePanal(state) {
      state.loginOrRegister = !state.loginOrRegister
    }
  },
  getters: {},
  actions: {},
  modules: {}
}

export default loginModule
