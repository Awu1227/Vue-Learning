# 2. Vuex 的基本使用

> 1. 安装 vuex 依赖包

```
npm install vuex --save
```

> 2. 导入 vuex 包

```
import Vuex from 'vuex'
Vue.use(Vuex)
```

> 3. 创建 store 对象

> 4. 将 store 对象挂载到 vue 实例中

```
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: { count: 0 },
})
new Vue({
  render: (h) => h(App),
  store,// 将创建的共享数据对象，挂载到vue实例中
  			// 所有的组件，就可以直接从store中获取全局的数据了
}).$mount("#app")
```
