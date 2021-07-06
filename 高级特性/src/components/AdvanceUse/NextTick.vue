<template>
  <div>
    <ul ref="ul1">
      <li v-for="(item,index) in fruits" :key="index">{{item}}</li>
    </ul>
    <button @click="addItem">add</button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      fruits:['橙子','柚子','菠萝']
    }
  },
  methods:{
    addItem(){
      this.fruits.push(`${Date.now()}`)
      this.fruits.push(`${Date.now()}`)
      this.fruits.push(`${Date.now()}`)
      // 1.异步渲染，$nextTick待DOM渲染完再回调
      // 2.页面渲染时会将data的修改做整合，多次data修改只会渲染一次
    this.$nextTick(()=>{
      const ulElem = this.$refs.ul1
      console.log(ulElem.childNodes.length);
    })

    }
  }
}
</script>