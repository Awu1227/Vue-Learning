<template>
  <div>
    <p>{{showNum}}</p>
    <button @click="handle2">-1</button>
    <button @click="handle3">-N Async</button>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions, mapGetters} from 'vuex'
export default {
  data(){
    return{}
  },
  methods:{
    ...mapMutations(['sub','subN']),
    ...mapActions(['subNAsync']),
    handle2(){
      this.subN(3)
    },
    handle3(){
      this.subNAsync(4)
    }
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
}
</script>