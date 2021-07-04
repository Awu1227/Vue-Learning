##3.3 Mutation

> 在 Vuex 中不允许组件直接去修改 Store 里面的数据

Mutation 用于变更 Store 中的数据

1. 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据。
2. 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。

```js
// 定义Mutation
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state) {
      state.count++
    },
  },
})
```

```js
// 触发Mutation
methods:{
	add(){
    // 触发mutation的第一种方式
    this.$store.commit('add')
  }
}
```

> 可以在触发 mutation 时传递参数：

```js
// 定义Mutation
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state, step) {
      state.count += step
    },
  },
})
```

> 触发 mutation 的第一种方式

```js
// 触发Mutation
methods:{
	add(){
    // 触发mutation的第一种方式
    this.$store.commit('add',3)
  }
}
```

> 触发 mutation 的第二种方式

```
// 1. 从vuex中按需导入mapMutation函数
import {mapMutations} from 'vuex'
```

通过刚才导入的 mapMutations 函数,将需要的 mutations 函数,映射为当前组件的 methods 方法。

```vue
<template>
  <div>
    <p>当前count的最新值为：{{ count }}</p>
    <button @click="handle2">+1</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex"
export default {
  data() {
    return {}
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    handle2() {
      this.subN(3)
    },
  },
  computed: {
    ...mapState(["count"]),
  },
}
</script>
```

第二种方法可以通过`this.`直接调用映射过来的方法。
