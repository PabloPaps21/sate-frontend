<template>
  <div class="envolver">
    <div class="calendar-wrapper">
      <Calendar :fullView="true" />
    </div>
    <Banner class="banner-spacing" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import Calendar from '@/components/Calendar.vue';

export default {
  components: {
    Banner,
    Calendar,
  },
};
</script>

<style lang="scss" scoped>
.envolver {
  background-color: #eae5dc;
}
.img-slide-wrapper {
  display: flex;
  height: 444px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.slide-title {
  color:  #e6d6ba;
  margin-bottom: 30px;
  font-size: 56px;
  font-family: 'Strait', sans-serif;
  font-weight: 400;
}
.cita-wrapper {
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
}
.exp-titulo-wrapper {
  display:flex;
  justify-content: center;
  width: 100%;
  background-color: #eae5dc;
}
.exp-titulo {
  display: flex;
  justify-content: center;
  width: 900px;
  font-size: 40px;
  font-family: 'Strait', sans-serif;
  margin-top: 50px;
}
.experiencia-wrapper {
  display: flex;
  justify-content: center;
  background-color:#eae5dc;
}
.experiencia {
  display: flex;
  justify-content: center;
  width: 900px;
  margin-top: 30px;
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
  flex-direction: column;
  margin-bottom: 40px;
}
.cita {
  display: flex;
  width:900px;
  margin-top: 34px;
}
.cita-texto {
  display: flex;
  flex-direction: column;
}
.cita-texto p {
  margin-top: 30px;
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 25px;
}
.texto {
  font-size: 20px;
}
.ricardo {
  font-size: 40px !important;
  font-family: kristi !important;
  font-weight: 600 !important;
}
.exp-wrapper {
display: flex;
width: 100%;
justify-content: center;
  background-color: #eae5dc;
}
.exp {
  display: flex;
  width:900px;
  margin-top: 50px;
  margin-bottom: 50px;
  justify-content: space-between;
}
.img-exp {
  height: auto;
  width: 70px;
}
.exp-icono {
  display: flex;
  width: 180px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icono-container {
  height: 70px;
  width: 70px;
}
.titulo-exp {
  text-align: center;
  font-family: 'Strait', sans-serif;
  font-size: 18px;
  color: #3e4e35;
  margin-top: 16px;
}
.experience-row {
  p {
    line-height: 20px;

    & + p {
      margin-top: 20px;
    }
  }
  &:nth-child(odd) {
    /deep/ .image {
      order: 2;
    }
    /deep/ .text {
      order: 1;
    }
  }
  & + .experience-row {
    margin-top: 50px;
  }
}
.banner-spacing {
  margin-top: 80px;
}
.calendar-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.events-list-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.events-list {
  width: 900px;
}
///movil
@media screen and (max-width: 980px) {
  .exp {
    width: 90%;
  }
  .experiencia {
    width: 90%;
  }
  .titulo-exp {
    font-style: 15px;
  }
  .grid {
    width: 90%;
  }
  .banner {
    width: 90%;
  }
  .exp-icono {
    margin-top: 30px;
  }
  .titulo-exp {
    margin-top: 0px;
  }
}
@media screen and (max-width: 800px) {
  .experience-row {
    &:nth-child(odd) {
      /deep/ .image {
        order: 1;
      }
      /deep/ .text {
        order: 2;
      }
    }
  }
}
@media screen and (max-width: 680px) {
  .img-slide-wrapper {
    height: 136px;
  }
  .slide-title {
    font-size: 30px;
    margin-bottom: 2px;
  }
  .exp {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .experiencia {
    width:90%;
  }
  .grid {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .grid-wrapper {
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
    .texto-grid {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .img-grid {
    width: 150px;
    height: 150px;
  }
  .descripcion-grid {
    padding: 20px 2px;
    width: 300px;
    justify-content: center;
  }
  .banner {
    flex-direction: column;
  }
  .btn-contactanos {
    margin-top: 15px;
  }
  .descripcion-movil {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  }
  .grid-m {
  display: flex;
  // width: 350px;
  width: 90%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  }
  .grid-w-m {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eae5dc;
  }
  .texto-titulo-grid {
    margin-top:30px;
  }
  .uno{order: 1;}
  .dos{order: 2;}
}
////media
@media screen and (max-width: 480px) {
  .img-slide-wrapper {
    height: 136px;
  }
  .slide-title {
    font-size: 30px;
    margin-bottom: 2px;
  }
  .exp-titulo {
    font-size: 25px;
  }
  .experiencia {
    font-size: 16px;
    width: 75%;
    text-align: justify;
  }
  .exp {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .grid {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
    .grid-wrapper {
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
  .descripcion-grid {
    padding: 20px 2px;
    width: 290px;
    text-align: justify;
    justify-content: center;
  }
  .img-grid {
    width: 150px;
    height: 150px;
  }
  .banner {
    flex-direction: column;
  }
  .btn-contactanos {
    margin-top: 15px;
  }
  .exp-icono {
    margin-top: 20px;
  }
  .titulo-exp {
    margin-top: 10px;
  }
  .texto-grid {
    width: 90%;
  }
  .texto-grid-der {
    width: 250px;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
  // .grid-wrapper {
  //   display:none;
  // }
  .texto-titulo-grid {
    margin-top: 30px;
    justify-content: center;
    text-align: center;
  }
  .cero{order: 0;}
  .uno{order: 1;}
  .dos{order: 2;}
}
</style>
