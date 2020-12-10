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
        <p v-momo>DDerectivesderectivesderectives</p>
        <p v-moto="'red'">Moto</p>
        <p v-custom:background.delayed="'red'">agragragragragr</p>
        <p v-local:background.delayed.blink="{ main: 'violet' }">
          agragragragragr
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  components: {},
  methods: {
    ss() {}
  },
  directives: {
    local: {
      bind(el, binding, vnode) {
        var delay = 0;
        if (binding.modifiers["delayed"]) {
          delay = 1000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.main;
          let secondColor = "green";
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.agr != "background") {
                el.style.color = currentColor;
              } else {
                el.style.backgroundColor = currentColor;
              }
            });
          }, 800);
        } else {
          setTimeout(() => {
            if (binding.agr != "background") {
              el.style.color = binding.value;
            } else {
              el.style.backgroundColor = binding.value;
            }
          }, delay);
        }
      }
    }
  }
};
</script>

<style></style>
