<template>
  <div>
    This is A 组件。
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('A is mounted')
  },
  destroyed(){
    console.log('A is destroyed')
  }
}
</script>