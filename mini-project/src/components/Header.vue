<template>
    <div class="row">
        <div class="col-sm-12">
            <h3>Item ADD</h3>
            <div class="progress">
                <div class="progress-bar bg-danger progress-bar-striped" role="progressbar"
                aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="{width:(itemCount/maxItem)*100+'%'}">
                    Complete 
                </div>
            </div>
            <span>{{itemCount}}/{{maxItem}}</span>
        </div>
    </div>
    
</template>

<script>
export default{
    props:['itemCount','maxItem'],
    data: function() {
        return{
        }
    },
    methods: {
        
    },
}
</script>

<style>
   
</style>
