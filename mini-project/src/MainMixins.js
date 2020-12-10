export const mainMixins = {
  data() {
    return {
      text: "This Is Vuejs Filter",
      products: ["Fiora", "Jinx", "Jhin", "Neeko", "Varus", "Morgana", "Taric"],
      filter: ""
    };
  },
  computed: {
    filterMain() {
      return this.products.filter(element => {
        return element.toLowerCase().match(this.filter);
      });
    }
  }
};
