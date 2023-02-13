<template>
  <h3>Opciones:</h3>
  <div class="options-container">
    <ul>
      <li @click="$emit( 'selection', option.id )" v-for="option in options" :key="option.id">
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
}
  </script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
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