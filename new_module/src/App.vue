<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <app-card card-words="meow">
            <p>hihihi</p>
          </app-card>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Card from "./components/Card.vue"

export default {
  components:{
    'app-card':Card,
  },
  data: function() {
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
