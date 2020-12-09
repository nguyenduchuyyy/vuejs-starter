<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <button class="btn btn-ouline-danger" @click="selectComponent ='app-card'">Card</button>
          <button class="btn btn-ouline-danger" @click="selectComponent ='app-about'">About</button>
          <button class="btn btn-ouline-danger" @click="selectComponent ='app-contact'">Contact</button>
        </div>
        <div class="col-xs-12">
          <!-- <div>
            <p>{{selectComponent}}</p>
          </div>
          <app-card card-words="meow">
            <p slot='title'>THIS TITLE</p>
            <p slot='content'>THIS CONTENT</p>
          </app-card> -->
          <keep-alive>
            <component :is="selectComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Card from "./components/Card.vue"
import About from "./components/About.vue"
import Contact from "./components/Contact.vue"

export default {
  components:{
    'app-card':Card,
    'app-about':About,
    'app-contact':Contact,

  },
  data: function() {
    return{
      selectComponent:"app-card",
    }
  },
  methods:{
    
  }
}
</script>

<style>

</style>
