<template>
<div class="divclass">
  <h1>Contentc2</h1>
  <p> My age on 2: {{useAge}} </p>
  <button @click="editAge">Change age</button>
</div>
  
</template>

<script>
export default {
  props:{
    useAge: Number
  },
  data: function() {
    return{
      // age:"22"
    }
  },
  methods:{
    editAge: function() {
      this.useAge = 30;
      this.$emit('ageWasEdit',this.useAge);
    }
  }
}
</script>

<style scoped>

</style>