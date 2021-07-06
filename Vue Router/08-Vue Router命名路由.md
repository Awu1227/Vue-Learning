# 6. Vue Router 命名路由

## 6.1 命名路由的配置规则

为了更加方便的表示路由的路径，可以给路由规则起一个别名，即为”命名路由”。

```js
const routes = [
  {
    name: "user",
    path: "/user/:id",
    component: User,
    props: (route) => ({ username: "橙子", age: 18, id: route.params.id }),
  },
  { path: "/register", component: Register },
]
```

```js
      <router-link to='/user/1'>User1</router-link>
      <router-link to='/user/2'>User2</router-link>
      <router-link :to='{name:"user",params:{id:3}}'>User3</router-link>
      <router-link to='/register'>Register</router-link>
```
