## 3.4 Action

> 不要在 mutation 函数中，执行异步操作
>
> ```js
> // 下面这种写法是错误的
> mutation:{
>   add(state){
>     setTimeout(()=>{
>       state.count++
>     },1000)
>   }
> }
> ```

Action 用于处理异步任务的。

> 如果通过异步操作变更数据，必须通过 Action，而不能使用 Mutation，但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

```js
// 定义Action
const store = new Vuex.Store({
  state: { count: 0 },
  mutations: {
    add(state) {
      state.count++
    },
  },
  actions: {
    addAsync(context) {
      // 在actions中，不不能直接修改state里的值，必须通过commit修改state里的值。
      setTimeout(() => {
        context.commit("add")
      }, 1000)
    },
  },
})
```

> 触发 actions 的第一种方式

```js
// 触发action
methods:{
  handle(){
    // 这里的dispatch函数专门用来触发action
    this.$store.dispach('addAsync')
  }
}
```

异步操作不能直接修改 state 里的值必须通过 mutation 修改。

触发 action 异步任务时携带参数

```js
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
  },
```

```js
  methods:{
    add(){
      // commit的作用就是调用某个mutation函数
      //this.$store.commit('add')
      this.$store.dispatch('addAsync')
    },
    addN(){
      this.$store.dispatch('addNAsync',4)
    }
  }
```

> 触发 actions 的第二种方式：

```js
// 1. 从vuex中按需导入mapActions函数
import { mapActions } from "vuex"
```

```js
// 2. 通过刚才导入的mapActions函数，将需要的actions函数，映射为当前组件的methods方法：
methods:{
	...mapActions(['addAsync','addNAsync'])
  // 此处在组件中也可以直接使用addNAsync函数，下面的代码可省略
  handle3(){
    this.addNAsync(3)
  }
}
```

代码实现：

![image-20210704220247143](Vuex概述.assets/image-20210704220247143.png)
