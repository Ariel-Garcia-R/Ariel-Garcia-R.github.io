<template>
  <div class="slideinfo">
    <div class="information">
      <h2 class="information__title">Information Title</h2>
      <p class="information__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ullam eveniet.
      </p>
      <div class="information__link"><a>About</a></div>
    </div>
    <div class="slide">
      <h2 class='slide__title'>New</h2>
      <div class="slide__selector">
        <div class="ball" v-for="n in 4" :key=n></div>
      </div>
      <div class="slide__contenedor">
        <div class="article" v-for="n in 4" :key=n>
          <div class="article__title"><h3>Titulo del articulo</h3> </div>
          <div class="article__description"><h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .slideinfo{
      overflow: hidden;
      .information {
        background-color: #212121;
        width: 100vw;
        height: 20vh;
        padding: 10px 20px;
        color: #DED9C4;     
      
        .information__title{
          font-family: 'Poppins', sans-serif;
          letter-spacing: 2px;
          font-size: 25px;  
          color: #D4ECDD;      
        }

        .information__link{
          color:  #A2DBFA;
          margin-top: 10px;
        }
      }
      .slide{
        width: 100vw;
        height: 40vh;
        position: relative;

        .slide__title{
          position: absolute;
          z-index: 10;
          color: #A2DBFA;
          left: 10px;
          top: 10px;
          letter-spacing: 2px;
          background-color: #212121;
          border-radius: 15px;
          height: 45px;
          padding: 0 8px;      
          display:flex;
          justify-content: center;
          align-items: center;
        }
        .slide__selector{
          position: absolute;
          right: 4vw;
          top: 3vh;
          z-index:10;
          display: flex;
          .ball{
            width: 3vw;
            height: 3vw;
            background-color: #A2DBFA;
            border: 1px solid white;
            border-radius: 50%;
            margin-left: 2vw;
             
          
          }
        }

        .slide__contenedor{
          width:400vw;
          height: 100%;
          display: flex;
          animation: slide 25s infinite alternate linear;
          

          .article{
            width:100vw;
            height: 100%;
            background:  no-repeat center/cover;
            position: relative;
            &:nth-child(1){
              background-image: url(https://i.imgur.com/ugAtoHK.jpg);
              
            }
            &:nth-child(2){
              background-image: url(https://i.imgur.com/StnXAGu.jpg);
              
            }
            &:nth-child(3){
              background-image: url(https://i.imgur.com/DkQa5eN.jpg);
            
            }
            &:nth-child(4){
              background-image: url(https://i.imgur.com/DkQa5eN.jpg);
            
            }
            .article__title{
              position: absolute;
              top: 28vh;
              right: 4vw;
              color: #D4ECDD;
              background-color: #212121;
              padding: 5px;
              border-radius: 15px;
              letter-spacing: 1px;
            
            }
            .article__description{
              position: absolute;
              color:white;
              bottom: 0;
              background-color: #212121;
              width: 100vw;
              line-height: 2;
              border-radius: 10px 10px 0 0;
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }

    @keyframes slide {
  25% {  
        transform: translateX(0);
    }
    27% {
        transform: translateX(-100vw);
    }
    50% {  
        transform: translateX(-100vw);
    }
    52% {
        transform: translateX(-200vw);
    }
    75% {  
        transform: translateX(-200vw);
    }
    77% {  
        transform: translateX(-300vw);
    }
    100% {
        transform: translate(-300vw);
    }
}
</style>>

