<template>
    <div class="row">
        <form style="width:100%">
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <label for="">U can saying</label>
                <input type="text" class="form-group" v-model="item" id="" cols="30" rows="10"></input>
            </div>
            <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
                <button class="btn btn-success" @click.prevent="createNew">Push</button>
            </div>
        </form>
    </div>
</template>

<script>
export default{
    data: function() {
        return{
            item:''
        }
    },
    methods: {
        createNew: function() {
            if(this.item != ''){
                this.$emit('itenAdd',this.item);
                this.item = ''
            }
          ;
        }
    },
}
</script>

<style>
   
</style>
