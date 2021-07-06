<template>
  <div>
    <p>我的名字是{{name}}</p>
    <p>{{age}}</p>
    <p @click="showPicture">This is my picture</p>
  </div>
</template>
<script>
  import myMixin from './Mixin'
export default {
  mixins:[myMixin],
  data(){
    return{
        name:'橙子'
    }
  },
  mounted(){
    console.log('名字 is mounted');
  }
}
</script>