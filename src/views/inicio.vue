<template>
<div class="envolver">
  <div class="about-wrapper">
    <div class="about img-about" style="background-image:url('/food-hero3.jpg')">
    </div>
  </div>
  <div class="cita-wrapper" style="background-image:url('/kraft.jpg')">
    <div class="cita">
      <div class="cita-texto">
        <p class="texto">
          SATÉ es un proyecto multidisciplinario que integra diferentes industrias relacionadas
          con la alimentación.
          El objetivo es ofrecer un lugar de encuentro para las personas interesadas
          en mejorar su alimentación y lograr un modo de vida más consciente y feliz
          donde podrán obtener información, compartir ideas y experiencias.
        </p>
        <p class="texto">
          Creemos que la comida es un agente de cambio crucial en temas como nutrición,
          agricultura, economía y sustentabilidad.
          Al ser también el centro de la vida social es un factor de conectividad cultural
          entre todas las personas.
        </p>
        <p class="texto">
          En SATÉ encontrarás la posibilidad de mejorar tus habilidades para cocinar,
          descubrir nuevos ingredientes
          y lugares así como ampliar tu perspectiva sobre lo que involucra comer.
        </p>
        <p class="texto">
          Te invitamos a sembrar las semillas del futuro que queremos hacer realidad.
        </p>
        <p class="ricardo">
          Ricardo Rafael
        </p>
      </div>
    </div>
  </div>
  <div class="prox-cursos-titlew">
    <div class="prox-cursos-title">
      PRÓXIMOS CURSOS
    </div>
  </div>
  <div class="proximos-cursos-wrapper">
    <div class="proximos-cursos">
      <div class="curso">
        <div class="fecha-curso">
            24 - 03 febrero - marzo domingo
        </div>
        <div class="titulo-curso">
            Clase de cocina italiana 1 – Pasta fresca
        </div>
        <a href="clase.html" class="add-curso">VER DETALLE</a>
      </div>
      <div class="curso">
          <div class="fecha-curso">
              24 - 03 febrero - marzo domingo
          </div>
          <div class="titulo-curso">
              Clase de cocina italiana 1 – Pasta fresca
          </div>
          <a href="clase.html" class="add-curso">VER DETALLE</a>
        </div>
    </div>
  </div>
  <div class="banner-wrapper">
    <div class="banner">
      <div class="texto-banner">
          Se parte de la experiencia Saté
      </div>
      <!-- <button class="btn-contactanos">CONTÁCTANOS</button> -->
      <a href="contacto.html" class="btn-contactanos">CONTÁCTANOS</a>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
  .about-wrapper {
    display: flex;
    width: 100%;
    background-color: #eae5dc;
    justify-content: center;
  }
  .about {
    display: flex;
    width: 900px;
    height: 630px;
  }
  .img-about {
    width: 100%;
    height: 602px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .cita-wrapper {
  display: flex;
  width: 100%;
  height: 500px;
  justify-content: center;
  }
  .cita {
    display: flex;
    width:900px;
    margin-top: 34px;
    text-align: left;
  }
  .cita-texto {
    display: flex;
    flex-direction: column;
  }
  .cita-texto p {
    margin-top: 30px;
    font-family: 'Strait', sans-serif;
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
    font-size: 50px;
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
    background-color: #f5f3ef;
    border: 2px solid black;
  }
  .banner-wrapper {
    display: flex;
    width: 100%;
    height: 140px;
    background-color: #403726;
    justify-content: center;
    align-items: center;
  }
  .banner {
    display: flex;
    width: 900px;
    color:#fff;
    justify-content: space-between;
    align-items: center;
  }
  .texto-banner {
    font-size: 22px;
    font-family: 'Strait', sans-serif;
  }
  .btn-contactanos {
    background-color: #403726;
    color: #fff;
    border: 2px solid #fff;
    width:120px;
    height:48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-family: 'Strait', sans-serif;
  }
</style>
