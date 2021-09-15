// setup中如何获取组件实例
/*
1. 在setup和其他Composition API中没有this

2. 可通过getCuurentInstance获取当前实例

 */

<template>
  <div>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted } from "vue";

export default {
  name: 'GetCurrentInstance',
  data(){
    return{
      x: 1,
      y: 2
    }
  },
  setup () {
    console.log('this',this);
    const instance = getCurrentInstance()
    
    onMounted(()=>{
      console.log('instance x',instance.data.x);
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>