<template>
  <div class="wrapper">
    <h1>Your Cart</h1>
    <div class="product-in-cart">
        <cartItemCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="cart-payment-summary">
      <cartSummaryPaymentCard/>
    </div>
    
  </div>
</template>

<script>
import cartItemCard from '@/components/cart/cartItemCard.vue'
import cartSummaryPaymentCard from '@/components/cart/cartSummaryPaymentCard.vue'
export default {
  components:{
    cartItemCard,
    cartSummaryPaymentCard
  },
  computed:{
    products(){
      return this.$store.getters.cardItems
    }
  }
}
</script>

<style lang="scss">
  .wrapper{
    display: flex;
    flex-flow: row wrap;
    .product-in-cart{
      flex: 0 1 100%;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
    .cart-payment-summary{
      flex: 0  1 100%;
    }
    h1{
      flex: 0 1 100%;
    }
  }
</style>
