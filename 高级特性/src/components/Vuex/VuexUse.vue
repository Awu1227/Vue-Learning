<template>
  <div>
    Vuex基本使用
    <hr>
    <Add/>
    <hr>
    <Sub/>
  </div>
</template>
<script>
import Add from './Addition.vue'
import Sub from './Subtraction.vue'
export default {
  data(){
    return{}
  },
  components:{
    Add,
    Sub
  }
}
</script>