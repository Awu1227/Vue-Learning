<template>
  <div>
    <p>Vue高级特性</p>
    <h2>{{name}}</h2>
    <DynamicCom/>
  </div>
</template>
<script>
//import SlotDemo from './Slot.vue'
//import ScopedSlot from './ScopedSlot.vue'
//import NamedSlot from './NamedSlot.vue'
import DynamicCom from './DynamicComponent.vue'
//import KeepAlive from './KeepAlive.vue'
//import Minxin from './Mixin.vue'
//import CunstomVmodel from './ComponentVmodel.vue'
export default {
  components:{
    //SlotDemo
    //ScopedSlot
    //NamedSlot
    DynamicCom
    //KeepAlive
    //AsyncComp:()=>import('./AsynComponent.vue')
    //Minxin
    //CunstomVmodel
  },
  data(){
    return{
      name:'橙子的前端游乐园',
      website:{
        url:'www.baidu.com',
        title:'百度一下'
      },
      isShow:false
    }
  },
  methods:{
    showComp(){
      this.isShow=!this.isShow
    }
  }
}
</script>
<style>
body{
  background-color: rgb(176, 138, 226);
}
  p:nth-child(2){
    color: lightgreen;
  }
</style>