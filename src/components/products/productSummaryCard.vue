<template>
  <div class="card">
    <h3 class="product-name">{{product.name}}</h3>
    <h5 class="price">Price: ${{product.price.toFixed(2)}}</h5>
    <p class="description">Description: {{description}}</p>
    <p class="text-muted">{{product.category}}</p>
    <section class="product-view-like-section">
      <button class="view-product-button" @click="$emit('view-product', product)">View Product</button>
      <div class="like-section">
        <button class="like-button" @click="addProductLikes()">Like</button>
        <p class="like-count" v-if ="totalLikes"><span>{{totalLikes}}</span></p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props:['product'],
  computed:{
    description(){
      return this.product.description.substring(0, 150)
    },
    totalLikes(){
      return this.$store.getters.productLikes(this.product)
    }
  },
  methods:{
    addProductLikes(){
       return this.$store.commit("addLikes", this.product)
       
     }
  }
}
  
</script>

<style lang="scss">
.card{
  width: 80%;
  margin: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 0 5px gray;
  max-width: 380px;
    h3.product-name{
      background-color: rgb(79, 160, 187);
      padding: 1rem;

    }

    h5.price{
      border: 1px solid rgb(79, 160, 187);
      color: rgb(235, 240, 241);
      width: 80%;
      margin: auto;
      padding: .5rem;
      border-radius: .5rem;
      background-color: rgb(79, 160, 170);
    }

    p.description{
      font-size: 0.85rem;
      width: 80%;
      margin: auto;
      padding: 1.5rem 0 1rem 0;
    }

    p.text-muted{
      display: inline-block;
      color: rgb(235, 240, 241);
      margin: auto;
      padding: .8rem;
      border-radius: .5rem;
      background-color: rgb(79, 160, 170);
    }

   
}
.product-view-like-section{
  display: flex;
  flex-flow: row wrap;
  margin: 1rem;

   button.view-product-button{
      padding: .5rem;
      border: none;
      color: white;
      background-color: rgb(79, 160, 187);
      font-weight: bold;
      font-size: 1.15rem;
      border-radius: .5rem;
      cursor: pointer;
      height: 50px;
      width: 100%;

      @media only screen and (min-width:380px){
        flex: 0 1 50%;
      }
    }
   
    div.like-section{
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      padding: 1rem;
      @media only screen and (min-width:380px){
        flex: 0 1 40%;
        padding: 0px;
      }
      
      .like-button{
        flex: 0 1 30%;
        border: none;
        border-radius: .5rem;
        height: 50px;
        font-size: 1.1rem;
        color: rgb(79, 160, 187);
      }
      .like-button:hover{
        background-color: rgb(79, 160, 187);
        color: white;
        transition: 1s;
      }
      .like-count{
        flex: 0 1 30%;
        align-self: center;
        margin: 5px 0;
        padding: .5rem 0;
        border: 1px solid rgb(79, 160, 187);
        color: rgb(79, 160, 187);
        border-bottom-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
      }
       
    }

}
</style>
