<template>
  <div class="divclass">
      <h1>Contentc1</h1>
      <h2>{{temp}}</h2>
      <button @click= "resetName()"> Reset Name</button>
      <button @click="resetNameFn()"> Reset Name Callback</button>
  </div>
  
</template>

<script>
  export default {
    props:{
      name:{
        type: Object,
        default:"default name"
      },
      resetNameFn: Function
    },  
    data: function(){
      return{
        temp:''
      }
    },
    watch: {
      name: function() {
        return this.temp = this.name.name
      }
    },
    methods:{
      editName: function() {
        return this.name.name;
      },
      resetName: function() {
        console.log(this.temp);
        this.temp = "Content";
        this.$emit('nameWasReset',this.temp);
      }
    }
  }
</script>

<style >
  .divclass{
    width: 50%;
    float: left;
    height: 300px;
  }
</style>