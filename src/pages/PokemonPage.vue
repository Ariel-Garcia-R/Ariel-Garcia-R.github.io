<template>
  <div>
    <h1>¿Qui&eacute;n es este Pokem&oacute;n?</h1>
    <pokemon-picture :id="pokemonNumber" :showPokemon="true"></pokemon-picture>
    <pokemon-options
      :options="pokemonOptions"
      :nombre="pokemonName">
    </pokemon-options>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";
export default {
  name: "PokemonPage",
  components: { PokemonPicture, PokemonOptions },
  created() {
    this.randomNumber();
    this.getPokemon();
    this.getOptions();
  },
  data() {
    return {
      pokemonName: null,
      pokemonNumber: null,
      pokemonOptions: [],
    };
  },
  methods: {
    randomNumber() {
      this.pokemonNumber = Math.floor(Math.random() * 1008);
    },
    async getPokemon() {
      const { forms } = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.pokemonNumber}`
      ).then((r) => r.json());
      this.pokemonName = forms[0].name;
      this.pokemonOptions.push(this.pokemonName);
    },
    async getOptions() {
      for (let i = 0; i < 3; i++) {
        const { forms } = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1008)}`).then((r) => r.json());
        this.pokemonOptions.push(forms[0].name);
      }
    },
  },
};
</script>

<style scoped>
</style>