<template>
  <div>
<a :href="url">
      <slot>
        这里是默认内容
    </slot>
</a>
  </div>
</template>
<script>
export default {
  props:['url'],
  data(){
    return{}
  }
}
</script>