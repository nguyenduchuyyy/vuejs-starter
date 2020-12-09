<template>
  <div class="container">
    <app-header :itemCount="item.length" :maxItem="maxItem"></app-header>
    <app-new-item @itenAdd = "addItem"></app-new-item>
    <app-items-layout :item="item" @removeItem="removeItem"></app-items-layout>
  </div>
</template>

<script>
import ItemsLayout from "./components/ItemsLayout.vue";
import NewItem from "./components/NewItem.vue";
import Header from "./components/Header.vue";


export default {
  data: function(){
    return{
      item:[
        'Bruno Mars',
        'Bille elist',
        'celine dion'
      ],
      maxItem:10
    }
  },
  components: {
    appItemsLayout : ItemsLayout,
    appNewItem : NewItem,
    appHeader : Header
  },
  methods: {
    addItem(item){
      if(this.item.length < this.maxItem){
        this.item.push(item);
      } else {
        alert('Delete some item to add');
      }
    },
    removeItem(index){
      this.item.splice(index,1);
    }
  },
}
</script>

<style>

</style>
