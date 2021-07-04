## 3.5 Getter（只起到包装的作用）

Getter 用于对 Store 中的数据进行加工处理形成新的数据。

1. Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
2. Store 中数据发生变化，Getter 的数据也会跟着发生变化。

```js
// 定义Getter
const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    showNum: (state) => {
      return "当前最新的数量是【" + state.count + "】"
    },
  },
})
```

> 使用 getters 的第一种方式

```js
this.$store.getters.showNum
```

> 使用 getters 的第二种方式

```
import {mapGetters} from 'vuex'
computed:{
	..mapGetters(['showNum'])
}
```
