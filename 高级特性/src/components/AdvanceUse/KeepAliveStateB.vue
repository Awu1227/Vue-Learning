<template>
  <div>
        This is B 组件。
  </div>
</template>
<script>
export default {
  mounted() {
    console.log('B is mounted')
  },
  destroyed(){
    console.log('B is destroyed')
  }
}
</script>