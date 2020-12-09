<template>
    <div>
       <h1>Contact</h1>
        <h2>{{count}}</h2>
        <button @click="count++"> UP</button>
        
    </div>
</template>

<script>
export default {
    // props:['cardWords']
    data: function() {
        return{
            count:0
        }
    },
    destroyed() {
        
    }
}
</script>

<style scoped>
    
</style>
