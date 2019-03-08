<template>
  <div class="envolver">
    <div class="columnas-wrapper">
      <div class="columnas">
        <div class="columnas-particular">
          <div class="descripcion">
            <img src="/avion.png" alt="" class="img-descripcion-checkout">
            <div class="texto-checkout">
              <div>Sandalias1</div>
              <div>$9.99</div>
            </div>
          </div>
          <div class="numeros">
            <div class="precio-unitario">
              $9.99
            </div>
            <div class="cantidad">
              <button class="btn-qty"> + </button>
              0
              <button class="btn-qty"> - </button>
            </div>
            <div class="cuenta-check">
              $9.99
            </div>
            <button class="btn-cancel-check">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>

<style lang="scss" scoped>
.columnas-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.columnas {
  display: flex;
  width: 900px;
  justify-content: space-around;
  flex-direction: column;
}
.columnas-particular {
  display: flex;
  width: 100%;
  align-items: center;
}
.descripcion {
  display: flex;
  height: 150px;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.img-descripcion-checkout{
  height: auto;
  width: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.texto-checkout {
  display: flex;
  line-height: 25px;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
}
.cantidad {
  display: flex;
  justify-content: space-evenly;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  width: 33%;
}
.btn-qty{
  border:none;
}
.numeros {
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  justify-content: center
}
.precio-unitario {
  display: flex;
  width: 33%;
  justify-content: center;
}
.cuenta-check {
  display: flex;
  width: 33%;
  justify-content: center;
}
@media screen and (max-width: 500px) {
 .columnas-particular {
   flex-direction: column;
 }
 .numeros {
   margin-right: 43px;
 }
}
</style>
