// v-model参数代替了.sync修饰符的作用
<template>
<input :value="name" @input="$emit('update:name',$event.target.value)">
<input :value="age" @input="$emit('update:age',$event.target.value)">
</template>

<script>
export default {
  name: 'V-model',
  props:{
    name: String,
    age: String
  },
  setup () {
    
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>