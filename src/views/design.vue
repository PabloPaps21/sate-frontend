<template>
  <div class="envolver">
    <div class="iconos-wrapper">
      <div class="iconos">
        <div class="eleccion-icono">
          <img src="/hands.png" alt="" class="img-icono">
          <div class="titulo-icono">
            ASESORIAS
          </div>
        </div>
        <div class="eleccion-icono">
          <img src="/spoon.png" alt="" class="img-icono">
          <div class="titulo-icono">
            ESTILISMO DE ALIMENTOS
          </div>
        </div>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="grid">
        <div class="texto-grid">
          <div class="texto-titulo-grid">
            Experiencias Multisensoriales
          </div>
          <div class="descripcion-grid">
            <p>Comer es un proceso mucho más complejo que
              simplemente degustar con nuestra boca.
              Inconscientemente todos nuestros sentidos
              están activos al comer e influyen mucho
              más de lo que creemos.</p>
            <p style="margin-top:20px;">Queremos invitarte a percibir la comida
              como nunca antes. Pondremos en juego
              tus sentidos para que redescubras
              como están entrelazados e influyen
              (cada uno de ellos) en nuestra percepción.
              Texturas, colores, sonidos y sabores se combinarán
              para crear una experiencia sublime.</p>
          </div>
        </div>
        <div class="img-grid con-grid" style="background-image:url('/estilismo.jpg')"></div>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="grid">
        <div class="img-grid con-grid" style="background-image:url('/temp2.jpg')"></div>
        <div class="texto-grid-der">
          <div class="texto-titulo-grid">
            Viajes Gastronómicos
          </div>
          <div class="descripcion-grid">
            <p>
              Una de las mejores maneras para
              conocer un país es a través de su
              comida por lo que SATÉ organiza y
              diseña viajes culinarios en varias
              partes del mundo. A través de su
              gastronomía podrás conocer a profundidad
              la historia y riqueza cultural que ofrecen.
            </p>
            <p style="margin-top:20px;">
              Nos adentraremos en mercados locales para descubrir
              sus ingredientes nativos, exploraremos todas
              sus facetas culinarias para develar su esencia,
              desde la comida callejera hasta restaurantes de
              gran nivel. Así mismo conoceremos cocineros locales
              que nos mostraran nuevos platillos y técnicas culinarias.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .iconos-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
  }
  .iconos {
    display: flex;
    width:900px;
    margin-top: 50px;
    justify-content: space-between;
  }
  .img-icono {
    height: auto;
    width: 200px;
  }
  .eleccion-icono {
    display: flex;
    width: 400px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titulo-icono {
    text-align: center;
    font-family: 'Strait', sans-serif;
    font-size: 40px;
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
    margin-left: 20px;
  }
  .img-grid{
    width: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .texto-titulo-grid {
    font-family: 'Strait', sans-serif;
    font-size: 49px;
    margin-bottom: 20px;
  }
  .descripcion-grid {
    font-family: 'Strait', sans-serif;
    font-size: 13px;
    line-height: 19px;
    padding: 20px;
    text-align: left;
  }
</style>
