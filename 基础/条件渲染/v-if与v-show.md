## v-if

`v-if`指令用于条件性地渲染一块内容。指令的表达式返回 truthy 值的时候被渲染。

> 也可以用`v-else`添加一个“else 块”；但必须连在一起否则不起作用。

```html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

###在`<template>`元素上使用`v-if`条件渲染分组

在<template>上使用用来切换多个元素

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

> `v-else-if`，顾名思义，充当`v-if`的“else-if 块”，可连续使用。

## v-show

用于条件性展示元素的指令。

```html
<h1 v-show="ok">Hello!</h1>
```

> 带有 v-show 的元素始终会被渲染并保留在 DOM 中。
>
> TIP:`v-show`不支持<template>元素，也不支持`v-else`

### v-if vs v-show

`v-if`是惰性的：如果在初始化渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

> 一般来说，`v-if`有更高的切换开销。如果需要非常频繁地切换，则使用`v-show`较好；如果在运行条件很少改变时，则使用`v-if`较好。

> 不推荐同时使用`v-if`和`v-for`,q 前者具有比后者更高的优先级。

```html
好例子：
<ul>
  <template v-for="user in users" :key="user.id">
    <li v-if="user.isActive">{{ user.name }}</li>
  </template>
</ul>
```
