<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1>{{ text }}</h1>
        <h2>have filter: {{ text | toLowerCase }}</h2>
        <h2>have filter: {{ text | uppercase }}</h2>
      </div>
      <div class="col-md-8 offset-md-2">
        <h3>Filter Character</h3>
        <button
          class="btn btn-block btn-danger "
          @click="products.push('Janna')"
          style="width:100%"
        >
          PUSH
        </button>
        <input type="text" class="form-control mt-md-3" v-model="filter" />
        <div class="card mt-3">
          <ul>
            <li v-for="(product, index) in filterMain" :key="index">
              {{ product }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <app-child></app-child>
  </div>
</template>

<script>
import Child from "./Filter_children.vue";
import { mainMixins } from "./MainMixins.js";

export default {
  data: function() {
    return {
      text: "This Is Vuejs Filter"
    };
  },
  computed: {
    filterMain1() {
      return this.products.filter(element => {
        return element.toLowerCase().match(this.filter);
      });
    }
  },
  components: {
    appChild: Child
  },
  methods: {
    ss() {}
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    }
  },
  mixins: [mainMixins]
};
</script>

<style></style>
