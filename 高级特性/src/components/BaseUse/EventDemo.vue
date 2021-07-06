<template>
  <div>
    <p>{{num}}</p>
    <button @click="increment1">+1</button>
    <button @click="increment2(2,$event)">+2</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:0
    }
  },
  methods:{
    increment1(event){
      console.log('event',event,event.__proto__.constructor);
      console.log(event.target);
      console.log(event.currentTarget);
      this.num++
      // event 是原生的
      // 事件被挂载到当前元素
    },
    increment2(val,event){
      console.log(event);
      console.log(event.target);
      this.num +=val
    }
  }
}
</script>
<style lang="">
  
</style>