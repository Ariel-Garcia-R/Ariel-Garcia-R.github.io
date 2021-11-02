<template>
      <nav class="scrollmenu">
            <a>Noticias</a>
            <a>Tecnología</a>
            <a>Ciencia</a>
            <a>Tips y Herramientas</a>
            <a>Curiosidades</a>
            <a>Recomendaciones</a>
      </nav>
      

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

nav{
    background-color: #212121;
    overflow: scroll;
    white-space: nowrap;
    margin-top: 5vh;

    a{
        display: inline-block;
        color: white;
        text-align: center;
        padding: 10px;
        text-decoration: none;
        font-family: 'Zen Kurenaido', sans-serif;  
    }
    &:hover{
        background-color: #777;
    }
}     

.prueba{
    width: 50vw;
    height: 100vw;
    overflow-x: scroll;
    overflow-y: hidden;

}

</style>>


