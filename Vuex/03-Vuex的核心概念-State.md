# 3. Vuex 的核心概念

## 3.1 核心概念概述

Vuex 中的主要核心概念如下：

- State
- Mutation
- Action
- Getter

## 3.2 State

State 提供唯一的公共数据源，所有共享的数据都要统一放到 Store 的 State 中存储。

```
const store = new Vuex.Store({
	state:{count:0}
})
```

> 组件访问 State 数据的第一种方式

```
this.$store.state.count
```

> 组件访问 State 数据的第二种方式

```
// 1.从vuex中按需导入mapState函数
import {mapState} from 'vuex'
```

```
// 2.将全局数据，映射为当前组件的计算属性
computed:{
...mapState(['count'])
}
```
