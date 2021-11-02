import Header from '@/shared/components/Header.vue';
<template>
  <Header/>
  <BarraOpciones/>
</template>

<script>
import Header from '@/components/Header'
import BarraOpciones from '@/modules/home/components/BarraOpciones'
export default {
components: {
  Header,
  BarraOpciones
}

}
</script>

<style>
* {
  padding: 0;
  margin: 0
}

</style>