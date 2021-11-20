<template>
  <div id="app">
    <div id="nav">
      <router-link :class="{active: $route.name === 'Home'}" to="/">Home</router-link> |
      <router-link :class="{active: $route.name === 'Cart'}" to="/Cart">Cart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.commit("updateCartFromLocalStorage")
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
body{
  background-color: rgb(245, 245, 245)
}
#nav{
  padding: 10px;
  width: 100%;
  height: 30px;
  background-color: white;
  line-height: 30px;
}
a{
  font-weight: bold;
  margin: 0 5px;
  text-decoration: none;
  font-size: 1.25rem;
  color: darkgray;
  &.active{
    color: #2c3e50;
  }
}
</style>
