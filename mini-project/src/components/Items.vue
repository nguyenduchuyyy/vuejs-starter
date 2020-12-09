<template>
    <div class="card mb-3">
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  data: function(){
    return{
      item:[
        'feeling the beat'
      ],
      maxItem:10
    }
  }  
}
</script>

<style>
    .card-body {
        font-size: 24px;
        color: violet;
    }
    .card {
        cursor: pointer;
        width: 20%;
        float: left;
        margin: 10px;

    }
    .card:hover {
        background-color:red;   
        color:white;
    }
    .card-body:hover {
        color: white;
        font-weight: bold;
        text-transform: capitalize;
    }
</style>
