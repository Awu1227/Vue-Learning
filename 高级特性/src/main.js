import Vue from "vue"
import App from "./App.vue"
import Vuex from "vuex"
// import router from "./router"
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state) {
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    subN(state, step) {
      state.count -= step
    },
    sub(state) {
      state.count--
    },
  },
  actions: {
    addAsync(context) {
      setTimeout(() => {
        context.commit("add")
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit("addN", step)
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit("subN", step)
      }, 1000)
    },
  },
  getters: {
    showNum(state) {
      return "当前最新的数量是【" + state.count + "】"
    },
  },
})

new Vue({
  render: (h) => h(App),
  store,
  // router,
}).$mount("#app")
