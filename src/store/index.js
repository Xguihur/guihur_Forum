import { createStore } from 'vuex'
import loginModule from './login'

const store = createStore({
  state() {
    return {
      loginState: false
    }
  },
  mutations: {
    changeLoginState(state) {
      state.loginState = !state.loginState
    }
  },
  getters: {},
  actions: {},
  modules: { loginModule }
})

export default store
