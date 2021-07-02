## 在`v-for`里使用值的范围

`v-for` 也可以接受整数。在这种情况下，它会把模板重复对应次数。

```html
<div id="range" class="demo">
  <span v-for="n in 10" :key="n">{{ n }} </span>
</div>
```

> 输出为：
>
> 12345678910

## 在 template 中使用`v-for`

利用带有`v-for`的 template 来循环渲染一段包含多个元素的内容。

```html
<ul>
  <template v-for="item in items" :key="item.msg">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

## v-for 与 v-if 一同使用

```html
<template v-for="todo in todos" :key="todo.name">
  <li v-if="!todo.isComplete">{{ todo.name }}</li>
</template>
```

## 在组件上使用 v-for

在自定义组件上，你可以像在任何普通元素上一样使用 `v-for`：

```html
<my-component v-for="item in items" :key="item.id"></my-component>
```

然而，任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用 props：
