<template>
  <h3>Estas son las opciones de Fernando</h3>
  <h4>La primera es la correcta siempre</h4>
  <div class="options-container">
    <ul>
      <li @click="salida(option)" v-for="option in options" :key="option.id">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.options.sort();
  },
  props: {
    options: Array,
    nombre: String,
  },
  methods: {
    salida(nombre) {
      if (nombre == this.nombre) {
        console.log("si");
      } else {
        console.log("no");
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  list-style: none;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}
li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.options-container {
  display: flex;
  justify-content: center;
}
</style>