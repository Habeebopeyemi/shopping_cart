<template>
  <div class="cart-payment-card">
    <h3>Cart Total: <span>${{cart_total.toFixed(2)}}</span></h3>

    <button class="view-product-button">Pay by credit card</button>
  </div>
  
</template>

<script>
export default {
  computed:{
    cart_total(){
      return this.$store.getters.cartTotal
    }
  }
}
</script>
<style lang="scss">
.cart-payment-card{
  width: 90%;
  max-width: 330px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  text-align: start;
  padding: 1rem;
  button.view-product-button{
      padding: 10px;
      border: none;
      color: white;
      background-color: rgb(79, 160, 187);
      font-weight: bold;
      font-size: 1.15rem;
      border-radius: 5px;
      cursor: pointer;
    }
}
 
</style>
