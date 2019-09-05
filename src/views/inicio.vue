<template>
<div class="envolver">
  <div class="about-wrapper">
    <!-- <div class="about img-about" style="background-image:url('/food-hero3.jpg')"> -->
    <div class="about img-about">
      <div class="wistia_responsive_padding"
      style="padding:56.25% 0 0 0;position:relative;">
      <div class="wistia_responsive_wrapper"
      style="height:100%;left:0;position:absolute;top:0;width:100%;">
      <div class="wistia_embed wistia_async_f8zo1q986m videoFoam=true"
      style="height:100%;position:relative;width:100%">
          &nbsp;
        </div>
      </div>
    </div>
    </div>
  </div>
  <div class="cita-wrapper" style="background-image:url('/kraft.jpg')">
    <div class="cita">
      <div class="cita-texto">
        <p class="texto">
          SATÉ es un proyecto multidisciplinario que
          integra diferentes industrias relacionadas
          con la alimentación. El objetivo es ofrecer
          un lugar de encuentro para las personas
          interesadas en mejorar su alimentación y lograr
          un modo de vida más consciente y feliz donde podrán
          obtener información, compartir ideas y experiencias.
          Creemos que la comida es un agente de cambio crucial
          en temas como nutrición, agricultura, economía y sustentabilidad.
          Al ser también el centro de la vida social es un factor de
          conectividad cultural entre todas las personas.
        </p>
        <p class="texto">
          En SATÉ encontrarás la posibilidad de mejorar tus
          habilidades para cocinar, descubrir nuevos
          ingredientes y lugares, así como ampliar tu
          perspectiva sobre lo que involucra comer. Te
          invitamos a formar parte del futuro que queremos
          hacer realidad.
        </p>
        <p class="ricardo">
          Ricardo Rafael
        </p>
      </div>
    </div>
  </div>
  <div class="calendar-wrapper">
      <Calendar />
    </div>
  <Banner />
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
  .about-wrapper {
    display: flex;
    width: 100%;
    background-color: #eae5dc;
    justify-content: center;
  }
  .about {
    width: 900px;
    padding: 30px 0;
  }
  .video-about {
    display: flex;
    justify-content: center;
    width:100%;
    height:auto;
  }
  .cita-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .cita {
    display: flex;
    width:900px;
    padding: 70px 0;
    text-align: left;
  }
  .cita-texto {
    display: flex;
    flex-direction: column;
  }
  .cita-texto p {
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 18px;
    line-height: 25px;

    + p {
      margin-top: 30px;
    }
  }
  .texto {
    font-size: 20px;
  }
  .ricardo {
    font-size: 40px !important;
    font-family: kristi !important;
    font-weight: 600 !important;
  }
  .mapa-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #f5f3ef;
    overflow-x: hidden;
  }
  .mapa {
    display: flex;
    justify-content: center;
    width: 700px;
    margin-top: 50px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    // overflow-x: hidden;
  }
  .titulo-mapa {
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 40px;
    margin-bottom: 50px;
  }
  .img-mapa {
    width: 900px;
    height: auto;
  }
  .prox-cursos-titlew {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f5f3ef;
  }
  .prox-cursos-title {
    display: flex;
    justify-content: center;
    width: 900px;
    font-family: 'Strait', sans-serif;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .proximos-cursos-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f5f3ef;
  }
  .proximos-cursos {
    display: flex;
    width: 900px;
    justify-content: space-around;
    margin-bottom: 50px;
  }
  .curso {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 330px;
    height: 347px;
    border: 2px solid #000;
  }
  .fecha-curso {
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    text-align: center;
    // margin-left: 30px;
  }
  .titulo-curso {
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-left: 1px;
    text-align: center;
  }
  .add-curso {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    font-family: 'Strait', sans-serif;
    font-size: 12px;
    color:black;
    margin-left: 30px;
    height: 38px;
    background-color: #d8c7ad;
    border: 2px solid black;
    text-decoration: none;
  }
  .renglon {
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 1200px;
  }
  .celda {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 36%;
  }
  .renglon-interior {
    display: flex;
    justify-content: center;
    height: 100%;
  }
  .celda-centro {
    display: flex;
    justify-content: center;
  }
  .img-size {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 120px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
    width: 250px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  //hover
  .celda-interior {
    display: flex;
    justify-content: center;
    // width: 100%;
    position: relative;
    cursor: pointer;
  }
  .celda-interior .cheftext {
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    width: 110px;
    height: 110px;
    background-color: rgba(62,78,53,0.8);
    color: #e6d6ba;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px 5px 5px;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    font-family: 'Strait', sans-serif;
  }
  .celda-interior:hover .cheftext {
    visibility: visible;
  }
  .celda-interior:hover {
    visibility:hidden;
  }
  .font-link {
    color: #e6d6ba;
  text-decoration: none;
  }
  //centro
  .celda-centro {
    display: flex;
    justify-content: center;
    // width: 100%;
    position: relative;
    cursor: pointer;
  }
  .celda-centro .chefcentro {
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    width: 250px;
    height: 250px;
    background-color: rgba(62,78,53,0.8);
    color: #e6d6ba;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px 5px 5px;
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    font-family: 'Strait', sans-serif;
  }
  .celda-centro:hover .chefcentro {
    visibility: visible;
  }
  .celda-centro:hover {
    visibility:hidden;
  }
  .font-link {
    color: #e6d6ba;
    text-decoration: none;
  }
  .calendar-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0 50px 0;
    background-color: #eae5dc;
  }
  @media screen and (max-width: 980px) {
    .about {
      width: 100%;
    }
    .proximos-cursos {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .prox-cursos-title {
      font-size: 27px;
    }
    .cita {
      width: 90%;
      padding-left: 20px;
      padding-right: 20px;
    }
    .cita-texto p {
      font-size: 16px;
    }
    .ricardo {
      font-size: 30px !important;
    }
    .banner {
      flex-direction: column;
    }
    .mapa {
      display: 70%;
    }
    .img-size {
      height: 75px;
      width: 75px;
    }
    .renglon {
      width:967px;
    }
    .cheftext {
      height: 75px;
      width: 75px;
    }
    .btn-contactanos {
      margin-top: 15px;
    }
    .curso {
      margin-top: 10px;
    }
    .about {
      padding: 0px;
    }
  }
  @media screen and (max-width: 870px) {
    .mapa {
      display: none;
    }
    .prox-cursos-title {
      margin-top: 30px;
      font-size: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    .prox-cursos-title {
      margin-top: 30px;
      font-size: 25px;
    }
  }
  @media screen and (max-width: 480px) {
    .proximos-cursos {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .prox-cursos-title {
      margin-top: 75px;
      font-size: 25px;
    }
    .cita-wrapper {
       height: auto;
    }
    .cita {
      width: 75%;
    }
    .cita-texto p {
      font-size: 16px;
    }
    .ricardo {
      font-size: 30px !important;
    }
    .banner {
      flex-direction: column;
    }
    .about {
      width: 100%;
    }
    .mapa {
      display: none;
    }
    .btn-contactanos {
      margin-top: 15px;
    }
    .curso {
      margin-top: 10px;
      width: 90%;
    }
  }
</style>
