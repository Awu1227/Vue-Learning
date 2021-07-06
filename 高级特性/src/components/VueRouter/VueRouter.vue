<template>
  <div>
<p>
  <router-link to="/user">这里是User界面</router-link>
  <router-link to="/register">这里是Register界面</router-link>
</p>
<router-view></router-view>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  }
}

</script>