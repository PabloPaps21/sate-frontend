<template>
  <div class="envolver">
    <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
      <div class="slide-title">
        Experiencia Saté
      </div>
    </div>
    <div class="about-wrapper">
      <div class="about img-about" style="background-image:url('/food-hero3.jpg')">
      </div>
    </div>
    <div class="exp-titulo-wrapper">
      <div class="exp-titulo">
        Experiencias Culinarias
      </div>
    </div>
    <div class="experiencia-wrapper">
      <div class="experiencia">
        <p>
          Los sabores los podemos percibir de ciertas
          formas que van mucho más allá del paladar,
          podemos degustar con la vista, a través de
          olores o incluso de experiencias que relacionan
          nuestro entorno con la comida. Queremos que vivas
          la comida de todas las maneras que no imaginas
          posibles, para esto diseñamos una serie de experiencias
          culinarias que cambian de acuerdo a la temporada y que
          le van a dar un giro a la manera en la que consumes tus
          alimentos.
        </p>
      </div>
    </div>
    <div class="exp-wrapper">
      <div class="exp">
        <div class="exp-icono" v-scroll-to="'.experiences'">
          <div class="icono-container">
            <img src="/e.multisensoriales2.svg" alt="" class="img-exp"
            style="width:70px; height:61;">
          </div>
          <div class="titulo-exp">EXPERIENCIAS MULTISENSORIALES</div>
        </div>
        <div class="exp-icono" v-scroll-to="'.travel'">
          <div class="icono-container">
            <img src="/viajes_gastronomicos.svg" alt="" class="img-exp">
          </div>
          <div class="titulo-exp">VIAJES
            <br>GASTRONÓMICOS</div>
        </div>
        <div class="exp-icono" v-scroll-to="'.classes'">
          <div class="icono-container">
            <img src="/clases_cocina2.svg" alt="" class="img-exp">
          </div>
          <div class="titulo-exp">
            CLASES DE
            <br>
            COCINA
             </div>
        </div>
        <div class="exp-icono" v-scroll-to="'.catering'">
          <div class="icono-container">
            <img src="/banquetes.svg" alt="" class="img-exp">
          </div>
          <div class="titulo-exp">CATERING Y
            <br> EVENTOS</div>
        </div>
      </div>
    </div>
    <!-- EXPERIENCIAS -->
    <InfoRow
      class="experience-row"
      title="Experiencias Multisensoriales"
      image="/experiencias_multi.jpg">
      <p>Comer es un proceso mucho más complejo que
        simplemente degustar con nuestra boca.
        Inconscientemente todos nuestros sentidos
        están activos al comer e influyen mucho
        más de lo que creemos.</p>
      <p>Queremos invitarte a percibir la comida
        como nunca antes. Pondremos en juego
        tus sentidos para que redescubras
        como están entrelazados e influyen
        (cada uno de ellos) en nuestra percepción.
        Texturas, colores, sonidos y sabores se combinarán
        para crear una experiencia sublime.</p>
    </InfoRow>
    <InfoRow
      class="experience-row"
      title="Viajes Gastronómicos"
      image="/viaje_gastro2.jpg">
      <p>Una de las mejores maneras para
        conocer un país es a través de su
        comida por lo que SATÉ organiza y
        diseña viajes culinarios en varias
        partes del mundo. A través de su
        gastronomía podrás conocer a profundidad
        la historia y riqueza cultural que ofrecen.</p>
      <p>Nos adentraremos
        en mercados locales para descubrir sus
        ingredientes nativos, exploraremos todas
        sus facetas culinarias para develar su esencia,
        desde la comida callejera hasta restaurantes de
        gran nivel. Así mismo conoceremos cocineros locales
        que nos mostraran nuevos platillos y técnicas culinarias.</p>
    </InfoRow>
    <InfoRow
      class="experience-row"
      title="Clases de Cocina"
      image="/clases_cocina3.jpg">
      <p>Date la oportunidad de descubrir el placer
        de cocinar. Una habilidad básica de vida que
        te permitirá alimentarte sanamente, ahorrar
        dinero y ante todo, preparar deliciosos platillos
        para ti y tus seres queridos. Aprenderás en un ambiente
        relajado con una dinámica divertida donde todo el grupo
        participará activamente en la elaboración de comida.</p>
      <p>Saté ofrece una amplia gama
        de cursos en los que podrás aprender a preparar pasta
        fresca, servir una cena japonesa completa o, si lo
        tuyo es la falta de tiempo, recetas fáciles que podrás
        preparar en minutos.</p>
    </InfoRow>
    <InfoRow
      class="experience-row"
      title="Catering y eventos"
      image="/catering3.jpg">
      <p>La comida es el centro de la vida social
        y por lo tanto la calidad de los alimentos
        en cualquier tipo de evento es fundamental.
        Estamos constantemente investigando para poder
        innovar no solamente en términos de sabores y
        platillos sino en la forma de presentarlos y
        servirlos. Utilizamos diversas dinámicas de servicio
        para generar una mayor integración entre los invitados.</p>
      <p>La satisfacción de nuestros
        clientes es nuestra prioridad. Para ello contamos con
        una vasta red de proveedores en México que nos permite crear
        todo tipo de eventos en términos de estilo y tamaño.
        Servimos desde una cena privada en casa para invitados
        especiales o familia hasta bodas o eventos empresariales.</p>
    </InfoRow>
    <div class="events-list-wrapper">
      <div class="events-list">

      </div>
    </div>
    <div class="calendar-wrapper">
      <Calendar />
    </div>
    <Banner class="banner-spacing" />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import InfoRow from '@/components/InfoRow.vue';
import Calendar from '@/components/Calendar.vue';

export default {
  components: {
    Banner,
    InfoRow,
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
  margin-top: 30px;
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
