<template>
<div class="envolver">
  <div class="about-wrapper">
    <!-- <div class="about img-about" style="background-image:url('/food-hero3.jpg')"> -->
    <div class="about img-about">
      <video controls autoplay>
        <source src="/videos/Video_sate.mov" type="video/mp4" style="width=100%">
      </video>
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
  <!-- MAPA -->
  <div class="mapa-wrapper">
    <div class="mapa">
      <!-- arriba renglon-->
      <div class="renglon" style="justify-content: center;">
        <div class="celda">
          <div class="renglon-interior">
            <div class="celda-interior">
              <div class="img-size">
                <img src="/asesorias.svg" alt="" >
              </div>
              <div class="cheftext menu-img">Menú</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/zero-waste.svg" alt="" >
              </div>
              <div class="cheftext">Zero Waste</div>
            </div>
          </div>
          <div class="renglon-interior">
            <div class="celda-interior">
               <div class="img-size">
                <img src="/estilismo-camara.svg" alt="" >
              </div>
              <div class="cheftext camara-img">Cámara</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/food-design-N.svg" alt="" >
              </div>
              <div class="cheftext food-design-img">
                <router-link to="/design" class="font-link">
                  Food Design
                </router-link>
              </div>
            </div>
          </div>
          <!-- <div class="renglon-interior"></div> -->
        </div>
        <div class="celda" style="width:180px;"></div>
        <div class="celda">
          <div class="renglon-interior" >
            <div class="celda-interior">
              <div class="img-size">
                <img src="/delivery3.svg" alt="" >
              </div>
              <div class="cheftext verduras-img" style="margin-top: 2px;">
                Verduras
              </div>
            </div>
            <div class="celda-interior"></div>
          </div>
          <div class="renglon-interior">
            <div class="celda-interior">
              <div class="img-size">
                <img src="/delivery2.svg" alt="" >
              </div>
              <div class="cheftext delivery-img">
                  <router-link to="/food" class="font-link">
                    Delivery
                  </router-link>
                </div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/delivery1.svg" alt="" >
              </div>
              <div class="cheftext" style="margin-top: -10px;">Lunch</div>
            </div>
          </div>
          <div class="renglon-interior"></div>
        </div>
      </div>
      <!-- centro renglon-->
      <div class="renglon" style="height: 150px; display: flex; align-items: center;">
        <div class="celda"></div>
        <div class="celda-centro">
          <div class="img-center">
            <img src="/chef-yo2.svg" alt="">
          </div>
          <div class="chefcentro">Sate</div>
        </div>
        <div class="celda"></div>
      </div>
      <!-- abajo renglon-+-->
      <div class="renglon" style="justify-content: center;">
        <div class="celda">
          <!-- <div class="renglon-interior">
            <div class="celda-interior"></div>
            <div class="celda-interior"></div>
            <div class="celda-interior"></div>
          </div> -->
          <div class="renglon-interior">
            <div class="celda-interior">
              <div class="img-size">
                <img src="/catering.svg" alt="" >
              </div>
              <div class="cheftext catering-img">Catering</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/e-culinarias.svg" alt="" >
              </div>
              <div class="cheftext culi-img">
                  <router-link to="/experience" class="font-link">
                    Experiencias culinarias
                  </router-link>
                </div>
            </div>
            <div class="celda-interior"></div>
          </div>
          <div class="renglon-interior" style="justify-content:space-around;">
            <div class="celda-interior">
              <div class="img-size">
                <img src="/v-gastronomicos.svg" alt="" >
              </div>
              <div class="cheftext" style="margin-top: -6px;">Viajes Gastronómicos</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/clases-cocina.svg" alt="" >
              </div>
              <div class="cheftext clases-img">Clases de cocina</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/e-multi.svg" alt="" >
              </div>
              <div class="cheftext multi-img">
                Experiencias multisensoriales
              </div>
            </div>
          </div>
        </div>
        <div class="celda" style="width:180px;"></div>
        <div class="celda">
          <!-- <div class="renglon-interior">
            <div class="celda-interior"></div>
            <div class="celda-interior"></div>
            <div class="celda-interior"></div>
          </div> -->
          <div class="renglon-interior">
            <!-- <div class="celda-interior"></div> -->
            <div class="celda-interior">
              <div class="img-size">
                <img src="/mercado.svg" alt="" >
              </div>
              <div class="cheftext market-img">
                <router-link to="/market" class="font-link">
                  Mercado Digital
                </router-link>
              </div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/moda.svg" alt="" >
              </div>
              <div class="cheftext moda-img">Moda</div>
            </div>
          </div>
          <div class="renglon-interior">
            <!-- <div class="celda-interior"></div> -->
            <div class="celda-interior">
              <div class="img-size">
                <img src="/accesorios.svg" alt="" >
              </div>
               <div class="cheftext bolsa-img">Bolsa</div>
            </div>
            <div class="celda-interior">
              <div class="img-size">
                <img src="/cocina.svg" alt="" >
              </div>
              <div class="cheftext">Cuchillo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MAPA -->
  <div class="prox-cursos-titlew"  style="background-image:url('/kraft.jpg')">
    <div class="prox-cursos-title">
      PRÓXIMOS CURSOS
    </div>
  </div>
  <div class="proximos-cursos-wrapper"  style="background-image:url('/kraft.jpg')">
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
      <router-link to="/contact" class="btn-contactanos">CONTÁCTANOS</router-link>
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
    justify-content: center;
    width: 900px;
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
  .mapa-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #f5f3ef;
  }
  .mapa {
    display: flex;
    justify-content: center;
    width: 900px;
    margin-top: 50px;
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
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
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
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
    text-decoration: none;
  }
  .mapa-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
  }
  .mapa {
    display: none;
    // display: flex;
    justify-content: center;
    width: 900px;
    // margin-top: 50px;
    margin-top: 126px;
    margin-bottom: 153px;
    flex-direction: column;
    align-items: center;
  }
  // .titulo-mapa {
  //   font-family: 'Strait', sans-serif;
  //   font-size: 40px;
  //   margin-bottom: 80px;
  // }
  .img-mapa {
    width: 900px;
    height: auto;
    // background-color: coral, crimson, cyan, aquamarine, yellowgreen;
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
  //  @media screen and (max-width: 906px){
  //    .banner {
  //     width: 790px;
  //   }
  //   .cita {
  //     width: 90%;
  //     padding: 0 20px;
  //   }
  //  }
  @media screen and (max-width: 900px) {
    .about {
      width: 90%;
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
    .cita-wrapper {
       height: auto;
    }
    .cita {
      width: 90%;
      padding: 0 20px;
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
      display: none;
    }
    .btn-contactanos {
      margin-top: 5px;
    }
    .curso {
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 375px) {
    .proximos-cursos {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    .prox-cursos-title {
      font-size: 25px;
    }
    .cita-wrapper {
       height: auto;
    }
    .cita {
      width: 250px;
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
      width: 200px;
      height: 150px;
      margin-top: 10px;
      margin-bottom:10px;
    }
    .mapa {
      display: none;
    }
    .btn-contactanos {
      margin-top: 5px;
    }
    .curso {
      margin-top: 10px;
    }
  }
</style>
