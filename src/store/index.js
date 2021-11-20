import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

// method to update local storage
function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default new Vuex.Store({
  state: {
    cart: []
  },
  plugins: [createPersistedState()],
  getters: {
    
    // retrieving product quantity
    productQuantity: state => product => {
      /*check if the item exist*/
      const item = state.cart.find(i => i.id === product.id)

      /*if the item exist then return the item quantity*/
      if (item) return item.quantity
      else return null
    },

    // retrieving product likes
    productLikes: state => product => {
      /*checking if the item exist*/
      let item = state.cart.find(el => el.id === product.id)

      if (item) return item.productLikes
      else return null
    },

    // retrieving items added to cart
    cardItems: state => {
      return state.cart
    },

    // retrieving total amount value of cart item
    cartTotal: state => {
      let nonZeroValueCart = []
      state.cart.map(el => {
        if (el.quantity > 0) {
          nonZeroValueCart.push(el)
        }
      })
      return nonZeroValueCart.reduce((a, b) => a + (b.price * b.quantity), 0)
    }
  },
  mutations: {

    // defining a method to add items to the cart
    addToCart(state, product){
      /*check if the item exist*/
      let item = state.cart.find(i => i.id === product.id)
      /*if the item exist, then add to the quantity it is having in the cart*/
      if(item){
        item.quantity++
      }else{
        /*if the item does not exist, then add it to the cart with initial quantity of 1*/
        state.cart.push({...product, quantity: 1})
      }
      updateLocalStorage(state.cart)
    },

    // defining a method to delete item from the cart
    removeFromCart(state, product){
      let item = state.cart.find(i => i.id === product.id)

      if(item){
        if(item.quantity > 1){
          item.quantity--
        }else{
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }

      updateLocalStorage(state.cart)
    },

    // defining a method to add likes to product
    addLikes(state, product) {
      let item = state.cart.find(el => el.id === product.id)

      if(item){item.productLikes++} 
      else {
        state.cart.push({ ...product, productLikes: 1 })
      }
      
      updateLocalStorage(state.cart)
    },

    // defining a method to update cart from local storage
    updateCartFromLocalStorage(state){
      const cart = localStorage.getItem('cart')

      if(cart){
        state.cart = JSON.parse(cart)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
