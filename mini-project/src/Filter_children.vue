<template>
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h3>Filter Children</h3>
      <input type="text" class="form-control mb-md-3" v-model="filter" />
      <div class="card">
        <ul>
          <li v-for="(product, index) in filterMain" :key="index">
            {{ product }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mainMixins } from "./MainMixins.js";
export default {
  mixins: [mainMixins]
};
</script>

<style></style>
