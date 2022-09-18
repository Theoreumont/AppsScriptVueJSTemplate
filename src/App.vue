<template>
  <div>
    <h1>My App</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  
  h1{
    text-align: center;
    padding: 1rem;
    background-color: #3f51b5;
    border-radius: 3rem;
  }

  p{
    text-align: center;
  }

</style>