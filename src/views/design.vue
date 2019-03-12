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
        <div class="eleccion-icono">
          <img src="/asesorías.svg" alt="" class="img-icono">
          <div class="titulo-icono">
            ASESORIAS
          </div>
        </div>
        <div class="eleccion-icono">
          <img src="/estilismo.svg" alt="" class="img-icono">
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
            Asesorias
          </div>
          <div class="descripcion-grid">
            <p>En SATÉ contamos con profesionales de la más alta calificación
              para ayudarte a realizar tus proyectos. Acércate a nosotros para
              poder orientarte en los siguientes servicios:</p>
            <p style="margin-top:20px;">
              <ul>
                <li><i class="fas fa-dot-circle"></i>  Creación de recetas</li>
                <li><i class="fas fa-dot-circle"></i> Desarrollo de menús</li>
                <li><i class="fas fa-dot-circle"></i> Campañas publicitarias</li>
                <li><i class="fas fa-dot-circle"></i> Fotografía de Alimentos</li>
                <li><i class="fas fa-dot-circle"></i> Diseño gráfico</li>
                <li><i class="fas fa-dot-circle"></i> Asesoría para restaurantes</li>
                <li><i class="fas fa-dot-circle"></i> Capacitación para personal</li>
              </ul>
            </p>
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
            <p>Dentro de la gama de servicios en SATÉ,
              ofrecemos estilismo de alimentos que consiste
              en presentar la comida de manera armónica y
              atractiva. Dicha presentación tiene varios
              objetivos, como lo son: fotografía para empaques,
              medios publicitarios y editoriales así como videos
              promocionales dentro de la industria de la gastronomía.</p>
          </div>
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
  }
  .iconos {
    display: flex;
    width:900px;
    margin-bottom:16px;
    margin-top: 50px;
    justify-content: space-between;
  }
  .img-icono {
    height: auto;
    width: 100px;
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
    font-size: 20px;
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
    font-size: 16px;
    line-height: 19px;
    padding: 20px;
    text-align: left;
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
    font-size: 16px;
    font-family: 'Strait', sans-serif;
  }
</style>
