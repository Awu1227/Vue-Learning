<template>
  <div>
    <p>输入框：</p>
    <input type="text" v-model.trim="name">
    <input type="text" v-model.lazy="name">
    <input type="text" v-model.number="age">
    <p>多行文本</p>
    <textarea  cols="30" rows="10" v-model="text"></textarea>
    <p>复选框</p>
    <input id="橙子" type="checkbox" v-model="checked1">
    <label for="橙子">橙子</label>
    <input id="柚子" type="checkbox" v-model="checked2">
    <label for="柚子">柚子</label>
    <input id="菠萝" type="checkbox" v-model="checked3">
    <label for="菠萝">菠萝</label>
    <p>单选框</p>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">女</label>
    <p>下拉列表选择（单选）</p>
    <select name="" id="" v-model="selected">
      <option disabled value="">请选择</option>
      <option value="">A</option>
      <option value="">B</option>
      <option value="">C</option>
      <option value="">D</option>
    </select>
    <p>下拉列表选择（多选）</p>
    <select name="" id="" v-model="selectedList" multiple>
      <option disabled value="">请选择</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
    </select>
  </div>
</template>
<script>
export default {
  data(){
    return {
      name:'橙子',
      age:18,
      text:'1314520',
      checked1:true,
      checked2:false,
      checked3:true,
      gender:'male',
      selected:'',
      selectedList:[]
    }
  }
}
</script>
<style>
  input{
    display: block;
    margin: 10px;
    border: 1px solid skyblue;
  }
</style>