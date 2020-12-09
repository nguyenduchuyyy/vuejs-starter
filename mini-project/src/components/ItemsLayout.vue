<template>
    <div class="row">
        <app-item v-for="(ii,index) in item" v-bind:data="ii" v-bind:key="index" @click.native="removeItem(index)">
            {{ii}} 
        </app-item>
    </div>
</template>

<script>
import Items from "./Items.vue";
export default{
    props:['item'], 
    components: {
        appItem: Items 
    },
    methods: {
        removeItem: function(index) {
            this.$emit('removeItem',index);
            console.log(index);
        }
    },
}
</script>

<style>
   
</style>
