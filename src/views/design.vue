<template>
  <div class="envolver">
    <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
      <div class="slide-title">
        Food Design
      </div>
    </div>
    <div class="about-wrapper">
    <div class="about img-about" style="background-image:url('/food-hero3.jpg')">
    </div>
  </div>
    <div class="iconos-wrapper">
      <div class="iconos">
        <div class="eleccion-icono" v-scroll-to="'.advisory'">
           <div class="icono-container">
             <img src="/asesorías.svg" alt="" class="img-icono">
           </div>
          <div class="titulo-icono">
            ASESORIAS
          </div>
        </div>
        <div class="eleccion-icono" v-scroll-to="'.estilism'">
          <div class="icono-container">
            <img src="/estilismo.svg" alt="" class="img-icono">
          </div>
          <div class="titulo-icono">
            ESTILISMO DE ALIMENTOS
          </div>
        </div>
        <div class="eleccion-icono" v-scroll-to="'.waste'">
          <div class="icono-container">
            <img src="/zero_wasted.svg" alt="" class="img-icono">
          </div>
          <div class="titulo-icono">
            ZERO WASTE
          </div>
        </div>
      </div>
    </div>
    <InfoRow
      class="experience-row"
      title="Asesorias"
      image="/asesorias.jpg">
      <p> En Saté contamos con profesionales con
        experiencia en cocina, diseño o administración
        para poder ayudarte a hacer tus proyectos realidad
        de la mejor manera. Acércate a nosotros con tus ideas
        y nosotros te orientamos en áreas que incluyen creación
        de recetas, desarrollo de menús, campañas publicitarias,
        fotografía de alimentos, diseño de productos para tu cocina,
        asesoría para restaurantes y capacitación de personal.</p>
    </InfoRow>
    <InfoRow
      class="experience-row"
      title="Estilismo de Alimentos"
      image="/estilismo.jpg">
      <p>Dentro de la gama de servicios en SATÉ,
        ofrecemos estilismo de alimentos que consiste
        en presentar la comida de manera armónica y atractiva.
        Dicha presentación tiene varios objetivos, como lo son:
        fotografía para empaques, medios publicitarios y editoriales
        así como videos promocionales dentro de la industria de la gastronomía.</p>
    </InfoRow>
    <InfoRow
      class="experience-row"
      title="Zero Waste"
      image="/zero_waste.jpg">
      <p>Para nosotros es muy importante ser una empresa
        sustentable, que no genere desechos y sea saludable
        para todos, queremos que nuestros usuarios consuman
        conscientemente, para esto ofrecemos una gama de productos
        hechos a partir de materiales naturales que evitan el consumo
        innecesario de plástico.</p>
      <p>Con nuestra experiencia en esta área y los
        productos que manejamos queremos ayudarte a
        convertir tu negocio en uno que no genere
        desechos y que invite a la gente a reducir su
        consumo de plástico.</p>
    </InfoRow>
    <Banner class="banner-spacing" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import InfoRow from '@/components/InfoRow.vue';

export default {
  components: {
    Banner,
    InfoRow,
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
  .iconos-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
    margin-bottom: 50px;
  }
  .iconos {
    display: flex;
    width:900px;
    margin-bottom:16px;
    margin-top: 50px;
    justify-content: space-between;
  }
   .icono-container {
    height: 70px;
    width: 70px;
  }
  .img-icono {
    height: 61px;
    width: 70px;
  }
  .eleccion-icono {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titulo-icono {
    text-align: center;
    font-family: 'Strait', sans-serif;
    font-size: 18px;
    margin-top: 10px;
    color: #3e4e35;
  }
  .grid-wrapper {
    display: flex;
    width: 100%;
    background-color: #eae5dc;
    justify-content: center
  }
  .grid {
    display: flex;
    width: 900px;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }
  .texto-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 50%;
  }
  .texto-grid-der {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    width: 50%;
    // margin-left: 20px;
  }
  .img-grid{
    width: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .texto-titulo-grid {
    font-family: 'Strait', sans-serif;
    font-size: 35px;
    margin-bottom: 20px;
    margin-left: 17px;
    display: flex;
    justify-content: center;
  }
  .descripcion-grid {
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    text-align: left;
    line-height: 25px;
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
    text-decoration: none;
  }
  .punto {
    font-size: 8px;
  }
  .lista {
    line-height: 30px;
  }
  .grid-w-m {
    display: none;
    // display: flex;
    // justify-content: center;
    // width: 100%;
    // background-color: #eae5dc;
  }
  .grid-m {
    display: flex;
    width: 350px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .img-movil{
    display: flex;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .titulo-movil {
    display: flex;
    justify-content: center;
    font-family: 'Strait', sans-serif;
    font-size: 22px;
    margin-bottom: 20px;
  }
  .descripcion-movil {
    display: flex;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
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
  @media screen and (max-width:980px){
    .grid {
      width: 90%;
      justify-content: center;
    }
    .iconos {
      width: 90%;
    }
    .banner {
      width: 90%;
    }
    .exp-icono {
      margin-top: 20px;
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
    .iconos {
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
      // display:none;
      justify-content: center;

      flex-direction: column;
      width: 100%;
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
    width: 350px;
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
    .exp-icono {
      margin-top: 20px;
    }
    .titulo-exp {
      margin-top: 0px;
    }
    .texto-titulo-grid {
      margin-top: 30px;
    }
    .uno{order: 1;}
    .dos{order: 2;}
  }
  ///movil
  // @media screen and (min-width: 376px) {
  //   .grid-w-m {
  //     display: none;
  //   }
  // }
  ////media
  @media screen and (max-width: 480px) {
    .img-slide-wrapper {
      height: 136px;
    }
    .slide-title {
      font-size: 30px;
      margin-bottom: 2px;
    }
    .iconos {
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
     .texto-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      width: 50%;
    }
    .texto-titulo-grid {
      margin-top: 30px;
      justify-content: center;
      text-align: center;
      margin-left: 0px;
    }
    .img-grid {
      width: 150px;
      height: 150px;
    }
    .descripcion-grid {
      padding: 20px 2px;
      width: 290px;
      text-align: justify;
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
    width: 350px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    }
    .exp-icono {
      margin-top: 20px;
    }
    .titulo-exp {
      margin-top: 0px;
    }
    .texto-grid-der {
      width: 250px;
      justify-content: center;
      align-items: center;
      margin-left: 0px;
    }
    .eleccion-icono {
      margin-top: 30px;
    }
    .cero{order: 0;}
    .uno{order: 1;}
    .dos{order: 2;}
  }
</style>
