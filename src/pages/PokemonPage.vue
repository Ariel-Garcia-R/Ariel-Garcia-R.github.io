<template>
  <div>
    <h1>¿Qui&eacute;n es este Pokem&oacute;n?</h1>
    <pokemon-picture></pokemon-picture>
    <pokemon-options></pokemon-options>
    <!-- TODO: Mostrar la imagen del pokemon
       TODO: Mostrar las opciones -->
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
export default {
  name: 'PokemonPage',
  components:{PokemonPicture, PokemonOptions},
  data(){
    return{

    }
  }
};
</script>

<style scoped>
</style>