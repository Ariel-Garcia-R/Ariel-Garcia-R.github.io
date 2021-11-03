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
      <div class="slide__contenedor">
        <div class="article" v-for="n in 4" :key=n>
          <div class="article__title"></div>
          <div class="article__description"></div>
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

        .slide__contenedor{
          width:400vw;
          height: 100%;
          display: flex;
          animation: slide 25s infinite alternate linear;

          .article{
            width:100vw;
            height: 100%;
            background:  no-repeat center/cover;
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

