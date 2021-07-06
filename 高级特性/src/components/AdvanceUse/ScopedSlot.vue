<template>
  <div>
    <a href="url">
      <slot :slotData='website'>
        {{website.title}}
      </slot>
    </a>
  </div>
</template>
<script>
export default {
  props:['url'],
  data(){
    return{
      website:{
        url:'https://www.jd.com/',
        title:'京东购物'
      }
    }
  }
}
</script>