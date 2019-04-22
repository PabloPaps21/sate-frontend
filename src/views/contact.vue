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
        Área de interés <span class="advertencia">*</span>
      </div>
      <div class="campo">
        <!-- <input type="select" class="campo-formulario"> -->
        <!-- <select class="campo-formulario-s">
          <option value="food">Comida en Casa</option>
          <option value="market">Mercado Digital</option>
          <option value="experience">Experiencias Culinarias</option>
          <option value="design">Food Design</option>
        </select> -->
        <ul class="lista-area">
          <li>
            <input type="checkbox" name="food" value="food"> Comida en casa
          </li>
          <li>
            <input type="checkbox" name="market" value="market"> Mercado Digital
          </li>
          <li>
            <input type="checkbox" name="experience" value="experience"> Experiencias Culinarias
          </li>
          <li>
            <input type="checkbox" name="design" value="design"> Food Design
          </li>
        </ul>
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
    background-color: #eae5dc;
    justify-content: center;
  }
  .contactanos {
    display: flex;
    width: 700px;
    margin-top: 70px;
    font-family: 'Strait', sans-serif;
  }
  .contactanos-titulo {
    font-size: 30px;
    margin-bottom: 5%;
    color:#3e4e35;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
  }
  .formulario-contactanos-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .formulario-contactanos {
    display: flex;
    width: 700px;
    flex-direction: column;
    text-align: left;
  }
  .campo {
    display: flex;
    justify-content: flex-start;
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
    background-color: #eae5dc;
    height: 25px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .campo-formulario-m {
    width: 700px;
    margin-top: 20px;
    border: 2px solid #3e4e35;
    color:#3e4e35;
    background-color: #eae5dc;
    height:200px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .campo-formulario-s {
    width: 700px;
    margin-top: 20px;
    border: 2px solid #3e4e35;
    color:#3e4e35;
    background-color: #eae5dc;
    height: 30px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .confirmar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .confirmar {
    display: flex;
    width: 700px;
    margin-bottom: 50px;
  }
  .btn-acceder {
    width: 80px;
    height: 35px;
    background-color:#eae5dc;
    color: #3e4e35;
    border: 2px solid #3e4e35;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .pass-usr {
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .lista-area {
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    color: #3e4e35;
    line-height: 30px;
  }
   @media screen and (max-width: 710px) {
    .img-slide-wrapper {
      height: 100px;
    }
    .slide-title {
      font-size: 30px;
      margin-bottom: 2px;
    }
    .contactanos {
      width: 70%;
    }
    .formulario-contactanos {
      width: 70%;
    }
    .confirmar {
      width: 70%;
    }
  }
  @media screen and (max-width: 375px) {
    .img-slide-wrapper {
      height: 136px;
    }
    .slide-title {
      font-size: 30px;
      margin-bottom: 2px;
    }
    .formulario-contactanos {
      width: 60%;
    }
    .confirmar {
      width: 60%x;
    }
  }
</style>
