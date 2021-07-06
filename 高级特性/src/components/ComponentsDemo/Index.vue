<template>
  <div>
    <Input @add="addHandler"/>
    <List :list="list" @delete="deleteHandler"/>
  </div>
</template>
<script>
import Input from './Input.vue'
import List from './List.vue'

export default {
  components:{
    Input,
    List
  },
  data(){
    return {
      list:[
        {
          id:1,
          title:'标题1'
        },
        {
          id:2,
          title:'标题2'
        }
      ]
    }
  },
  methods:{
        addHandler(title) {
        this.list.push({
              id: `${Date.now()}`,
              title
            })
        },
        deleteHandler(id) {
        this.list = this.list.filter(item => item.id !== id)
        }
  }
}
</script>