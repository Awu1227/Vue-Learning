# 2.Vue Router 的基本使用

## 2.1 基本使用步骤

1. 安装
2. 添加路由链接
3. 添加路由填充位
4. 定义路由组件
5. 配置路由规则并创建路由实例
6. 把路由挂载到 Vue 根实例中

### 1.安装

```
npm install vue-router
```

我们在 package.json 文件中查看是否安装成功

![image-20210705090421015](Vue Router.assets/image-20210705090421015.png)

> 因为我们是在一个模块化工程中使用它，必须通过`Vue.use`明确地安装路由功能：

```js
import VueRouter from "vue-router"
Vue.use(VueRouter)
```

写在入口文件 main.js 中

![image-20210705090700179](Vue Router.assets/image-20210705090700179.png)

### 2. 添加路由链接

```vue
// router-link
是vue中提供的标签，默认会被渲染为a标签，to属性默认会被渲染为href属性，to属性的默认值会被渲染为#开头的hash地址
<router-link to="/user">这里是User界面</router-link>
<router-link to="/register">这里是Register界面</router-link>
```

### 3. 添加路由填充位

> 也叫做路由占位符
>
> 将来通过路由规则匹配到的组件，将会被渲染到 router-view 所在的位置

```vue
<router-view></router-view>
```

### 4. 定义路由组件

```vue
<template>
  <div>这里是User界面</div>
</template>
<script>
export default {}
</script>
```

```vue
<template>
  <div>这里是Register界面</div>
</template>
<script>
export default {}
</script>
```

### 5. 配置路由规则并创建路由实例

```js
// 创建路由实例对象
const router = new VueRouter({
  // routers是路由实例规则
  routers: [
    // 每条路由规则都是一个配置对象，其中至少包含path和component两个属性
    // path表示当前路由规则匹配的hash地址
    // component表示当前路由规则对应要展示的组件
    { path: "/user", component: User },
    { path: "/register", component: Register },
  ],
})
```

### 6. 把路由挂载到 Vue 根实例中

```
new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app")
```
