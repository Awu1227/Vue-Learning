<template>
<div>
    <div v-for="(val,key) in comname" :key='key'>
    <component :is="val.type"></component>
  </div>
</div>
</template>
<script>
import MyText from './Text.vue'
import MyImage from './Image.vue'
export default {
    components:{
    MyText,
    MyImage
  },
  data(){
    return{
      comname:{
        1:{
          type:'MyText'
        },
        2:{
          type:'MyText'
        },
        3:{
          type:'MyImage'
        },
      }
    }
  }
}
</script>