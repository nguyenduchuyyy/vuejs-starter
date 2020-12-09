<template>
<div>
  <div>
    <h1>My name is <i>{{name}}</i> & I <i>{{age}}</i> years old</h1>
    <button @click="changeName">change Name</button>
  </div>
  <content-c1 :name="{name}" @nameWasReset="name = $event" :resetNameFn="resetName" :useAge="age"></content-c1>
  <content-c2 :useAge="age" @ageWasEdit="age = $event"></content-c2>
</div>
  
</template>

<script>
import Contentc1 from "./Contentc1.vue"
import Contentc2 from "./Contentc2.vue"

export default {
  components:{
    'content-c1':Contentc1,
    'content-c2':Contentc2,
  },
  data: function() {
    return{
      name:"Content",
      age:12
    }
  },
  methods:{
    changeName: function() {
      this.name = '   HUYYYYYYY   '
    },
    resetName: function() {
      this.name = "Content";
    }
  }
}
</script>

<style>
  
</style>