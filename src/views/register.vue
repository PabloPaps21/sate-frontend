<template>
  <div class="envolver">
    <div class="cuenta-wrapper">
      <div class="cuenta">
        <div class="cuenta-titulo">
          Registro
        </div>
      </div>
    </div>
    <div class="separador-wrapper">
      <div class="separador">
        <div class="titulo-separador">
          Datos de cuenta
        </div>
        <div class="separador-sub">
          Datos para iniciar sesión en Saté
        </div>
      </div>
    </div>
    <div class="formulario-cuenta-wrapper">
      <div class="formulario-cuenta">
        <div class="pass-usr" style="margin-top: 20px;">
          Nombre completo <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Correo electrónico  <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Contraseña <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Repetir contraseña <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario">
        </div>
        </div>
    </div>
        <!--  -->
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
    <div class="confirmar-wrapper">
      <div class="confirmar" style="margin-top: 20px;">
        <div class="acceder-btn">
          <button class="btn-acceder">Registro</button>
        </div>
        <!-- <div class="recuerdame-confirmar">
          <input type="checkbox">Recuérdame
        </div> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cuenta-wrapper {
  display: flex;
  width: 100%;
  background-color: #eae5dc;
  justify-content: center;
}
.cuenta {
  display: flex;
  width: 900px;
  justify-content: center;
}
.cuenta-titulo {
  font-size: 30px;
  margin-top: 60px;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
}
.acceder-wrapper {
  display: flex;
  width: 100%;
  background-color: #eae5dc;
  justify-content: center;
}
.acceder {
  display: flex;
  width: 900px;
}
.acceder-titulo {
  font-size: 30px;
  margin-bottom: 5%;
  font-family: 'Strait', sans-serif;
}
.formulario-cuenta-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.formulario-cuenta {
  display: flex;
  width: 900px;
  flex-direction: column;
  margin-bottom: 30px;
}
.formulario-adress-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.formulario-adress {
  display: flex;
  width: 900px;
  flex-direction: column;
}
.advertencia {
  color:red;
}
.campo-formulario {
  width: 900px;
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
.confirmar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.confirmar {
  display: flex;
  width: 900px;
  margin-bottom: 60px;
}
.btn-acceder {
  width: 69px;
  height: 35px;
  background-color:#eae5dc;
  color: black;
  border: 2px solid #555555;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
}
.recuerdame-confirmar {
  margin-top: 5px;
  margin-left: 5px;
  font-family: 'Strait', sans-serif;
}
.olvidaste-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.olvidaste {
  display: flex;
  width: 900px;
  margin-bottom: 50px;
}
.titulo-olvidaste {
  color: #3e4e35;
  font-family: 'Strait', sans-serif;
}
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
  width: 900px;
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
</style>
