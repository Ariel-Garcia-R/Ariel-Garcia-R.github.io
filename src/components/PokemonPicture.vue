<template>
  <div class="pokemon-container">
    <!-- <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/.svg" 
               alt="pokemon"
               class="hidden-pokemon"> -->
    <img :src="url" class="fade-in" alt="pokemon" />
  </div>
</template>
  
  <script>
export default {
  created() {
    this.updateUrl();
  },
  props: {
    id: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  data() {
    return {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/",
    };
  },
  methods: {
    updateUrl() {
      this.url += this.id + ".svg";
    },
  },
};
</script>
  
  <style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style> 