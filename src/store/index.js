import { createStore } from 'vuex'
import loginModule from './login'

const store = createStore({
  state() {
    return {
      loginState: false,
      myArticle: {},
      render: ''
    }
  },
  mutations: {
    changeLoginState(state) {
      state.loginState = !state.loginState
    },
    changeMyArticle(state, payload) {
      state.myArticle.title = payload[0]
      state.myArticle.introduction = payload[1]
      state.myArticle.content = state.render
    },
    changeRender(state, payload) {
      state.render = payload
    }
  },
  getters: {},
  actions: {
    // 异步获取文章的数据，然后存放到 vuex 中
  },
  modules: { loginModule }
})

export default store
