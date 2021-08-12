<template>
  <!-- <h2>{{titulo || 'Contador'}}</h2> -->
  <h2>{{customTitle}}</h2> 
  <p>{{counter}} <sup>2</sup> = {{computarCuadrado}} </p>
  <div>
    <button @click="incremento">+1</button>
    <button @click="decremento">-1</button>
  </div>
</template>

<script>
export default {
    //name: 'MiComponenteContador'
    //props: ['titulo','start'],
    props: {
      titulo: String,
      start: {
        type: Number,
        default: 100,
        validator(value) {
          return value >= 0
        }
        //required: true
      }
    },
    data() {
      return {
        counter: this.start
      }
    },
    methods: {
      getValorAlCuadrado() {
        //console.log('getValorAlCuadrado')
        return this.counter * this.counter
      },
      incremento() {
        return this.counter++
      },
      decremento() {
        return this.counter--
      }
    },
    computed: {
      computarCuadrado() {
        //console.log('computarCuadrado')
        return this.counter * this.counter
      },
      customTitle() {
        /* if (this.titulo === undefined) {
          console.log(this.titulo)
          return 'Contador'
        } else {
          console.log(this.titulo)
          return this.titulo
        } */
        //return this.titulo ? this.titulo : 'Contador'
        return this.titulo || 'Contador'
      }
    }
}
</script>

<style>
button{
  background-color: #64BB87;
  border-radius: 5px;
  border: 1px solid white;
  cursor: pointer;
  color: white;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}

button:hover{
  background-color: #5aa67b;
  transition: 0.3s ease-in-out;
}
</style>