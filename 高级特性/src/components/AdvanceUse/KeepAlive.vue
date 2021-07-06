<template>
  <div>
    <button @click="changeState('A')">A</button>
    <button @click="changeState('B')">B</button>
    <button @click="changeState('C')">C</button>
    <keep-alive>
      <KeepAliveA v-if="state==='A'"/>
      <KeepAliveB v-if="state==='B'"/>
      <KeepAliveC v-if="state==='C'"/>
    </keep-alive>
  </div>
</template>
<script>
import KeepAliveA from './KeepAliveStateA.vue'
import KeepAliveB from './KeepAliveStateB.vue'
import KeepAliveC from './KeepAliveStateC.vue'
export default {
  components:{
    KeepAliveA,
    KeepAliveB,
    KeepAliveC
  },
  data(){
    return{
      state:'A'
    }
  },
  methods:{
    changeState(state){
      this.state=state
    }
  }
}
</script>