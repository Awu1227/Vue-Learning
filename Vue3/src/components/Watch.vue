// watch和watchEffect的区别：
/* 
两者都可监听data属性变化
watch需要明确监听哪个属性
watchEffect会根据其中的属性，自动监听其变化
*/ 
<template>
<p>watch vs watchEffect</p>
<p>{{numberRef}}</p>
<p>{{name}}{{age}}</p>
</template>

<script>
import { reactive, ref, toRefs, watch, watchEffect } from "vue"

export default {
  setup () {
    const numberRef = ref(100)
    const state = reactive({
      name: '橙子',
      age: 18
    })
    watch(numberRef,(newNumber,oldNumber)=>{
      console.log('ref watch',newNumber,oldNumber);
    },{
      immediate: true // 初始化之前就监听
    })
    // setTimeout(() => {
    //   numberRef.value = 200
    // }, 
    // 1500);
    watch(
      // 第一个参数，确定要监听哪个属性
      () => state.age,

      // 第二个参数，回调函数
      (newAge,oldAge) => {
        console.log('state watch', newAge, oldAge)
      },

      // 第三个参数，配置项
      {
        immediate: true, // 初始化就监听
        deep: true // 深度监听
      }
    )
    watchEffect(()=>{
      console.log('watchEffect',state.age);
    })
    setTimeout(() => {
      state.age = 25
    }, 1500);
    return {
      numberRef,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>