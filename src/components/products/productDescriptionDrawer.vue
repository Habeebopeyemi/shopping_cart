<template>
  <!-- drawer modal background -->
  <div class="drawer_background" :class="{show: active}">
      <!--  drawer container to house the details -->
    <div class="drawer" :class="{show: active}">
      <div class="drawer_close">
        <span @click="$emit('close-product-drawer')">X</span> 
      </div>

      <div class="product-details" v-if="product">
        <h3 class="text-center">{{product.name}}</h3>
        <p class="description">{{product.description}}</p>
        <h3 class="text-center">Unit Price: ${{product.price.toFixed(2)}}</h3>
      </div>

      <div class="card-total" v-if="product_total">
        <h3>In cart</h3>
        <h4>{{ product_total }}</h4>
      </div>

      <div class="button-container">
        <button class="remove" @click="removeFromCart()">Remove</button>
        <button class="add" @click="addToCart()">Add</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  props:['product', 'active'],
  methods:{
    addToCart(){
      return this.$store.commit('addToCart', this.product)
    },
    removeFromCart(){
      return this.$store.commit('removeFromCart', this.product)
    }
  },
  computed:{
    product_total(){
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss">
.drawer_background{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(124, 124, 124, 0.55);
  display: none;
  transition: display .5s;

  &.show{
    display: block;
  }
}
.drawer{
  width: 95%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: -105vw;
  transition: left 1.5s;
  z-index: 101;
  padding: 15px;
  overflow-y: scroll;

  &.show{
    left: 0;
  }
}
.drawer_close{
  font-size: 1.5rem;
  padding: 5px;
  color: gray;
  display: flex;
  justify-content: flex-end;

  & span{
     border: 1px solid gray;
     width: 20px;
     padding: 5px;
     cursor: pointer;
     border-radius: 5px;

     &:hover{
       background-color: lightgray;
     }

  }
}
.product-details{
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description{
    padding: 20px;
    line-height: 1.5rem;
  }
  
}
.button-container {
    button {
      width: 150px;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
      margin: 0 5px 50px 5px;
    }
  }
@media only screen and (min-width: 500px){
  .drawer{
    width: 450px;
  }
}
</style>
