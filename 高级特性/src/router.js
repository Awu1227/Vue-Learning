import Vue from "vue"
import VueRouter from "vue-router"
import User from "./components/VueRouter/User.vue"
import Register from "./components/VueRouter/Register.vue"
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: "/user", component: User },
    { path: "/register", component: Register },
  ],
})
export default {
  router,
}
