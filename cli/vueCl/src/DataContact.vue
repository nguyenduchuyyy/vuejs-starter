<template>
  <div>
    <p :class="{red:flag}" >My address: {{address}}</p>
    <hr>
    <button @click="changePhone" > Show me</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return{
      address:"Đây là địa chỉ",
      flag:false,
    }
  },
  methods: {
    changePhone(){
      this.address = " Đây là địa chỉ update rồiiiiiiiiii",
      this.flag = !this.flag
    }
  }
}
</script>

<style>
.red{
  color:red;
}
</style>