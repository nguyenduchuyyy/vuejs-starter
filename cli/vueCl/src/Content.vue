<template>
<div>
  <div>
    <h1>Content of {{name}}</h1>
    <button @click="changeName">change Name</button>
  </div>
  <content-c1 :name="{name}" @nameWasReset="name = $event"></content-c1>
  <content-c2></content-c2>
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
      name:"Content"
    }
  },
  methods:{
    changeName: function() {
      this.name = '   HUYYYYYYY   '
    }
  }
}
</script>

<style>
  
</style>