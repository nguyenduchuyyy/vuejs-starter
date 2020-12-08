<template>
<div id="all" >
  <h2>Title : {{title}}</h2>
  <br>
  <button @click='changeTitle'>Change Title</button>
  <header-component></header-component>
  <!-- content -->
  <content-component></content-component>
  <footer-component></footer-component>
</div>
  
</template>

<script>
export default {
  data: function() {
    return{
      text:"APP",
      title:"THIS IS TITLE"
    }
  },
  methods:{
    changeTitle: function() {
      this.title = " TITLEEE CHANGEEE"
    }
  }
}
</script>

<style>
 div{
    text-align: center;
    border: 1px solid red;
 } 
  #all{
    width:50%;
    margin:auto;
  }
</style>