import Header from '@/shared/components/Header.vue';
<template>
  <Header/>
  <BarraOpciones/>
  <SlideInformation/>
</template>

<script>
import Header from '@/components/Header'
import BarraOpciones from '@/modules/home/components/BarraOpciones'
import SlideInformation from '@/modules/home/components/SlideInformation'

export default {
components: {
  Header,
  BarraOpciones,
  SlideInformation
}

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Zen Kurenaido', sans-serif;;
}

</style>