<template>
  <div class="head-container">
    <div class="head">
      <div class="logo-box">
        <div class="logo">
            <span class="text1">Quantum </span>
            <span class="text2">Connection</span>
        </div>        
      </div>
      
        <div class="menu">
          <span class="material-icons-outlined">login</span>
          <div class="icon" @click="toggle">
            <div class="barra"></div>
            <div class="barra"></div>
            <div class="barra"></div>
          </div>
        </div>
        
    </div>
      <div class="rutas" :class="{showhide}" >
        <ul>
          <li>Principal</li>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
          <li>Opcion 3</li>
        </ul>
    </div>    
  </div>
  
  
  
  
</template>


<script>
export default {
  data() {
    return {
      showhide: false
    };
  },
  methods: {
    toggle() {
      this.showhide = !this.showhide;
    },
  },
};
</script>

<style scoped>
.head-container{
  animation: entrada 0.3s ease-in;
  position:fixed;
  top: 0;
  z-index: 10;

}
.head {
  width: 100vw;
  height: 5vh;
  background-color: #212121;
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px 0px 10px;
}
.logo-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.logo span {
  text-transform: uppercase;
}
.text1{
  color: #A2DBFA;  
}
.text2{
  color: #D4ECDD;
}
.menu{
  display: flex;
  height: 100%;
  width: 20%;
  align-items: center;
  justify-content: space-between
}
.menu span {
  color: white;
  
}
.icon{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 10vw;   
}

.barra {
    width: 20px;
    height: 2px;
    background-color: white;
}

.rutas{
  width: 100vw;
  background-color: #212121;
  height: 15vh;
  display: flex;
  justify-content: center;
  transform: scale(1,0);
  transform-origin: top;
  transition: transform 0.3s;
  position:absolute
}
ul{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;  
}
li:nth-child(odd){
  color: #A2DBFA;  
}
li:nth-child(even){
  color: #D4ECDD;  
}





.showhide {
  transform: scale( 1, 1);
}

@keyframes entrada {
  from 
  {
    transform: translateY( -100%)
  }
}


</style>