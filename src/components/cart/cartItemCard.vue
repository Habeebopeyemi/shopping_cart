<template>
  <div class="cart-item-card" v-if="product.quantity > 0">
    <header class="header">
      <h2>{{product.name}}</h2>
      <h4>In Cart: {{product.quantity}}</h4>
      <h4>Total cost:{{item_cost.toFixed(2)}}</h4>
    </header>

    <p class="description">{{description}}</p>
  </div>
</template>

<script>
export default {
  props:['product'],
  computed:{
    item_cost(){
      return this.product.price * this.product.quantity
    },
    description(){
      return this.product.description.substring(0, 120)
    }
  }
}
</script>
<style lang="scss">
.cart-item-card{
  width: 90%;
  max-width: 330px;
  margin: 10px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  text-align: start;
  display: flex;
  flex-direction: column;
  .header{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #4fa0bb;
    padding: 10px;
    h2{
      text-align: center;
      border-bottom: 1px solid white;
    }
    h4{
      color: #fff
    }
  }
  .description{
    padding: 10px;
    text-align: center;
  }
}
</style>
