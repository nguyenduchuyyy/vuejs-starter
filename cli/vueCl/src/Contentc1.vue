<template>
  <div class="divclass">
      <h1>Contentc1</h1>
      <h2>{{temp}}</h2>
      <p>My age on 1: {{ useAge }}</p>
      <button @click= "resetName()"> Reset Name</button>
      <button @click="resetNameFn()"> Reset Name Callback</button>
  </div>
  
</template>

<script>
  import {evenBus} from './main.js'
  export default {
    props:{
      name:{
        type: Object,
        default:"default name"
      },
      resetNameFn: Function,
      useAge: Number 
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
    },
    created(){
      evenBus.$on('ageWasEdit',(age)=>{
        this.useAge = age
      })
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