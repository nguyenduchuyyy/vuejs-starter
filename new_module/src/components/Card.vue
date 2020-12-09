<template>
    <div>
        <h2>{{cardWords}}</h2>
        <h2>Declared</h2>
        <div class="title">
            <slot name="title"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>

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
