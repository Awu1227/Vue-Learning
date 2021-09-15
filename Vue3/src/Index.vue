<template>
<p>{{name}}{{age}}</p>
<!-- <v-model
v-model:name='name'
v-model:age='age'
></v-model> -->
<watch/>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity"
// import VModel from './components/V-model.vue'
import Watch from './components/Watch.vue'

export default {
  name: 'Index',
  components: { Watch },
  setup () {
    const state = reactive({
      name: '橙子',
      age: '18'
    })
    return toRefs(state)
  }
}
</script>

<style lang="scss" scoped>

</style>