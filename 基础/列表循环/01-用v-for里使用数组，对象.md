## 用 v-for 把一个数组对应为一组元素

`v-for`指令需要使用`item in items`形式的特殊语法，其中 items 是源数据数组，而`item`则是被迭代的数组元素的别名。

```html
<ul id="array-rendering">
  <li v-for="item in items">{{ item.message }}</li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      items: [{ message: "Foo" }, { message: "Bar" }],
    }
  },
}).mount("#array-rendering")
```

> v-for 块中，我们可以访问所有父作用域的 property。v-for 还支持一个可选的第二个参数，即当前项的索引。

## v-for 里使用对象

你也可以用`v-for`来遍历一个对象的 property。

```html
<ul id="v-for-object" class="demo">
  <li v-for="value in myObject">{{ value }}</li>
</ul>
```

```js
Vue.createApp({
  data() {
    return {
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    }
  },
}).mount("#v-for-object")
```

> 第二个参数为 property(也就是键名 key)

> 可以用第三个参数作为索引
