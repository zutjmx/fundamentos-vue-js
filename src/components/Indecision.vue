<template>
  <img v-if="img" :src="img" alt="bg">
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" 
             placeholder="Hazme una pregunta" 
             v-model="question">
      <p>Recuerda terminar con un signo de interrogación ( ? )</p>
      <div v-if="esUnaPreguntaValida">
          <h2> {{question}} </h2>
          <h1>{{answer}}</h1>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            question: null,
            answer: null,
            img: null,
            esUnaPreguntaValida: false
        }
    },
    methods: {
        async getRespuesta() {

            try {
                
                this.answer = 'Pensando la respuesta ....'
                const {answer, image} = await fetch('https://yesno.wtf/api').then(resultado => resultado.json())

                switch (answer) {
                    case 'yes':
                        this.answer = 'Sí!!!'
                        break;
                    case 'no':
                        this.answer = 'No!!!'
                        break;
                    case 'maybe':
                        this.answer = 'Posiblemente...'
                        break;
                    default:
                        break;
                }

                this.img = image

            } catch (error) {
                console.log('IndecisionComponent:', error);
                this.answer = 'No se pudo cargar el API'
                this.img = null
            }

        }
    },
    watch: {
        question(value, oldValue) {
            this.esUnaPreguntaValida = false
            
            console.log(value);
            
            if (!value.includes('?')) return
            
            this.esUnaPreguntaValida = true
            
            this.getRespuesta()
        }
    }
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>
