<template>
<div class="envolver">
  <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
    <div class="slide-title">
      Contacto
    </div>
  </div>
  <div class="contactanos-wrapper">
    <div class="contactanos">
      <div class="contactanos-titulo">
        Contáctanos
      </div>
    </div>
  </div>
  <div class="formulario-contactanos-wrapper">
    <div class="formulario-contactanos">
      <div class="nombre-usr">
        Nombre<span class="advertencia">*</span>
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario">
      </div>
      <div class="nombre-usr" style="margin-top:20px;">
        Email <span class="advertencia">*</span>
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario">
      </div>
      <div class="nombre-usr" style="margin-top:20px;">
        Teléfono
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario">
      </div>
      <div class="nombre-usr" style="margin-top:20px;">
        Área de interés
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario">
      </div>
      <div class="nombre-usr" style="margin-top:20px;">
        Mensaje<span class="advertencia">*</span>
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario-m">
      </div>
    </div>
  </div>
  <div class="confirmar-wrapper">
    <div class="confirmar" style="margin-top: 20px;">
      <div class="acceder-btn">
        <button class="btn-acceder">Enviar</button>
      </div>
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
  .contactanos-wrapper {
    display: flex;
    width: 100%;
    background-color: #e6d6ba;
    justify-content: center;
  }
  .contactanos {
    display: flex;
    width: 900px;
    margin-top: 70px;
    font-family: 'Strait', sans-serif;
  }
  .contactanos-titulo {
    font-size: 30px;
    margin-bottom: 5%;
    color:#3e4e35;
  }
  .formulario-contactanos-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #e6d6ba;
  }
  .formulario-contactanos {
    display: flex;
    width: 900px;
    flex-direction: column;
    text-align: left;
  }
  .campo {
    display: flex;
    justify-content: center;
  }
  .nombre-usr {
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    color:#3e4e35;
  }
  .advertencia {
    color:red;
  }
  .campo-formulario {
    width: 700px;
    margin-top: 20px;
    border: 2px solid #3e4e35;
    color:#3e4e35;
    background-color: #e6d6ba;
    height: 25px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .campo-formulario-m {
    width: 700px;
    margin-top: 20px;
    border: 2px solid #3e4e35;
    color:#3e4e35;
    background-color: #e6d6ba;
    height:200px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .confirmar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #e6d6ba;
  }
  .confirmar {
    display: flex;
    width: 900px;
    margin-bottom: 50px;
  }
  .btn-acceder {
    width: 80px;
    height: 35px;
    background-color:#e6d6ba;
    color: #3e4e35;
    border: 2px solid #3e4e35;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-left: 96px;
  }
  .pass-usr {
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
</style>
