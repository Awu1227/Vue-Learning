<template>
  <div>
    <!-- <p>当前count的最新值为：{{this.$store.state.count}}</p> -->
    <p>{{this.$store.getters.showNum}}</p>
    <!-- 在template中这里的this可以省略-->
    <button @click="add">+1 Async</button>
    <button @click="addN">+N Aysnc</button>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    add(){
      // commit的作用就是调用某个mutation函数
      //this.$store.commit('add')
      this.$store.dispatch('addAsync')
    },
    addN(){
      this.$store.dispatch('addNAsync',4)
    }
  }
}
</script>