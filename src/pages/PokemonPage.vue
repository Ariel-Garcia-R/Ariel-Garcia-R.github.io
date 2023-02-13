<template>
  <h1 v-if="!pokemon">Cargando juego...</h1>
  <div v-else>
    <h1>¿Qui&eacute;n es este Pokem&oacute;n?</h1>
    <pokemon-picture :id="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
    <pokemon-options :options="pokemonOptions" @selection="checkAnswer"></pokemon-options>
    <div v-if="showAnswer">
    <h2>{{ message }}</h2>
    <button @click="newGame">Volver a jugar</button>
  </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  mounted() {
    this.mixPokemonArray();
  },
  data() {
    return {
      pokemon: null,
      pokemonOptions: [],
      showPokemon: false,
      message: '',
      showAnswer: false
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonOptions = await getPokemonOptions()

      const rndInt = Math.floor(Math.random()*4)
      this.pokemon = this.pokemonOptions[rndInt]
      console.log(this.pokemon);
    },
    checkAnswer(id){
      this.showPokemon = true
      this.showAnswer = true
      if( id === this.pokemon.id){
        this.message = `Correcto, ${ this.pokemon.name }`
      }
      else {
        this.message = `Ooops, era ${ this.pokemon.name }`       
      }

    },
    newGame(){
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonOptions = []
      this.pokemon = null
      this.mixPokemonArray()
      
    }
  },
};
</script>

<style scoped>
</style>