<template>
  <div class="envolver">
    <div class="about-wrapper">
    <div class="about img-about" style="background-image:url('/food-hero3.jpg')">
    </div>
  </div>
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
    font-size: 13px;
    line-height: 19px;
    padding: 20px;
    text-align: left;
  }
</style>
