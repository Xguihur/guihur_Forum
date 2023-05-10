import { createStore } from 'vuex'
import loginModule from './login'

const store = createStore({
  state() {
    return {
      loginState: false,
      myArticle: ''
    }
  },
  mutations: {
    changeLoginState(state) {
      state.loginState = !state.loginState
    },
    changeMyArticle(state, payload) {
      state.myArticle = payload
    }
  },
  getters: {},
  actions: {
    // 异步获取文章的数据，然后存放到 vuex 中
  },
  modules: { loginModule }
})

export default store
