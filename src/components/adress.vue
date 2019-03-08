<template>
  <div class="envolver">
     <div class="separador-wrapper">
      <div class="separador">
        <div class="titulo-separador">
          Datos Envío
        </div>
        <div class="separador-sub">
          Datos que nos serviran para realizar el envío
        </div>
      </div>
    </div>
    <div class="formulario-adress-wrapper">
      <div class="formulario-adresS">
        <div class="pass-usr" style="margin-top: 20px;">
          País: <span class="advertencia">*</span>  México
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Dirección <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Apartamento/Habitación,etc. (opcional)
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Localidad / Ciudad <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Región / Provincia <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Código postal <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Teléfono <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .separador-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
  background-color:#eae5dc;
}
.separador{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #3e4e35;
  margin-top: 50px;
  margin-bottom: 50px;
  color: #e6d6ba;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.separador-sub{
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  margin-top: 20px;
}
.formulario-adress-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.formulario-adress {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.advertencia {
  color:red;
}
.campo-formulario {
  width: 100%;
  margin-top: 20px;
  border:none;
  height: 25px;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.pass-usr {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
</style>
