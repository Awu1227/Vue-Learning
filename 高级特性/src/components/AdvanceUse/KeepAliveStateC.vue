<template>
  <div>
        This is C 组件。
  </div>
</template>
<script>
export default {
    mounted() {
    console.log('C is mounted')
  },
  destroyed(){
    console.log('C is destroyed')
  }
}
</script>