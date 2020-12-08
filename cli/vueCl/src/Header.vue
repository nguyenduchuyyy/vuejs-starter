<template>
<div class="head">
  <h1>THE USER COMPONENT</h1>
  <h3>Hi, I'm {{name}}</h3>

</div>
  
</template>

<script>
export default {
  data: function() {
    return{
      name:"USER"
    }
  },
  methods:{
    changeName: function(){
      this.name = "HUY NGUYỄN"
    }
  }
}
</script>

<style>
  .head{ 
    background: pink;
  }
</style>