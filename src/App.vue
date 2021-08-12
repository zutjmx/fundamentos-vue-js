<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> --> 
  <!-- <Contador :start="1"/> -->
  <indecision/>
</template>

<script>

//import Contador from './components/Contador.vue'
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  components: {
    //Contador
    Indecision
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
