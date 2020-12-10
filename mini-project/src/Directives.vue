<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <h1>Build in derectives</h1>
        <p v-text="'Something `bout you'"></p>
        <p v-html="'<h2>Something `bout you</h2>'"></p>
      </div>
      <div class="col-md-4 offset-md-4">
        <h1>Customize in derectives</h1>
        <p v-momo="'red'">DDerectivesderectivesderectives</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function(){
    return{
     
    }
  },
  components: {
  },
  methods: {
    ss(){
    }
  },
}
</script>

<style>

</style>
