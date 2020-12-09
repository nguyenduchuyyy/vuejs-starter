<template>
<div class="head">
  <h1>THIS IS HEADER</h1>

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