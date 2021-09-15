# Proxy响应式

 # PatchFlag

 - 编译模板时，动态节点做标记
 - 标记，分为不同的类型，如TEXT PROPS
 - diff算法时，可以区分静态节点以及不同类型的动态节点
![PatchFlag](https://user-images.githubusercontent.com/72426886/133395976-daaf2ac7-319a-4caf-9f9e-dda2e2aa002d.jpg)

# hoistStatic

- 将静态节点的定义，提升到父作用域，缓存起来
- 多个相邻的静态节点，会被合并起来
- 典型的拿空间换时间的优化策略

# cacheHandleer

- 缓存事件

# SSR优化

- 静态节点直接输出，绕过了vdom
- 动态节点，还是需要动态渲染

# tree shaking

- 编译时，根据不同的情况，引入不同的API
- 根据模板指令，需要什么import什么
