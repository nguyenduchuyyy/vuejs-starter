<template>
    <div>
        <h2>{{cardWords}}</h2>
        <h2>Declared</h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:['cardWords']
}
</script>

<style scoped>
    div{
        border: 1px solid black;
        text-align: center;
        box-shadow: 1px 1px 2px rebeccapurple;
        padding: 30px;
        margin: 20px;
    }
</style>
