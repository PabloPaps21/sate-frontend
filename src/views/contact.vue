<template>
<div class="envolver">
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
      <div class="pass-usr">
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
        Mensaje<span class="advertencia">*</span>
      </div>
      <div class="campo">
        <input type="text" class="campo-formulario">
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
<style lang="scss">
  .contactanos-wrapper{
    display: flex;
    width: 100%;
    background-color: #eae5dc;
    justify-content: center;
  }
  .contactanos{
    display: flex;
    width: 900px;
    margin-top: 30px;
    font-family: 'Strait', sans-serif;
  }
  .contactanos-titulo{
    font-size: 30px;
    margin-bottom: 5%;
  }
  .formulario-contactanos-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .formulario-contactanos{
    display: flex;
    width: 900px;
    flex-direction: column;
    text-align: left;
  }
  .nombre-usr{
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .advertencia{
    color:red;
  }
  .campo-formulario{
    width: 900px;
    margin-top: 20px;
    border:none;
    height: 25px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .confirmar-wrapper{
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .confirmar{
    display: flex;
    width: 900px;
  }
  .btn-acceder{
    width: 69px;
    height: 35px;
    background-color:#eae5dc;
    color: black;
    border: 2px solid #555555;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
  }
  .pass-usr{
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
</style>
