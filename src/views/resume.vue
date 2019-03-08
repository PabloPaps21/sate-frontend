<template>
  <div class="envolver">
    <div class="titulo-resumen-wrapper">
      <div class="titulo-resumen">
        Resumen de la compra
      </div>
    </div>
    <!--  -->
    <div class="cuerpo-wrapper">
      <div class="cuerpo">
        <div class="direccion">
          <adress/>
        </div>
        <!--  -->
        <div class="carrito">
          <div class="titulo-wrapper">
            <div class="titulo">
              Carrito
            </div>
            <div class="cerrar">
              <i class="fas fa-window-close"></i>
            </div>
          </div>
          <row/>
          <div class="linea-verde"></div>
          <row/>
            <div class="debajo-producto-wrapper">
              <div class="debajo-producto">
                <div class="checkout">
                  <div class="cantidad-pagar">
                    <div class="subtotal-pagar">
                      SUBTOTAL
                    </div>
                    <div class="cantidad-subtotal">
                      $180.00
                    </div>
                  </div>
                  <button class="pagar">PAGAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import adress from '@/components/adress.vue';
import row from '@/components/row.vue';

export default {
  components: {
    adress,
    row,
  },
};
</script>

<style lang="scss" scoped>
.titulo-resumen-wrapper {
  display: flex;
  justify-content: center;
  width:100%;
  background-color: #e6d6ba;
}
.titulo-resumen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
  color: black;
  height: 80px;
  margin-top: 40px;
}
.cuerpo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color:  #e6d6ba;
}
.cuerpo {
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin-bottom: 50px;
}
.titulo-wrapper {
  display: flex;
  justify-content: space-between;
  font-family: 'Strait', sans-serif;
  color:#3e4e35;
  margin-top: 20px;
  margin-bottom: 40px;
}
.titulo {
 display: flex;
 width: 100%;
 font-size: 30px;
}
.cerrar {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  width: 100%;
}
.btn-espacio {
  width: 30px;
}
.debajo-producto-wrapper {
  display: flex;
  width:100%;
  justify-content: center;
}
.debajo-producto {
  display: flex;
  width:900px;
  justify-content: center;
  margin-bottom: 20px;
}
.vacio {
  display: flex;
  width: 100%;
  height: 150px;
}
.checkout {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
}
.cantidad-pagar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100%;
}
.subtotal-pagar {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.cantidad-subtotal {
  font-family: 'Strait', sans-serif;
  font-size: 17px;
  font-weight: 600;
}
.pagar {
  width:70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-family: 'Strait', sans-serif;
  font-size: 12px;
  color:black;
  margin-left: 30px;
  height: 38px;
  background-color: #eae5dc;
  border: 2px solid black;
}
.linea-verde{
  display: flex;
  border-bottom: 1px solid #3e4e357c;
  font-size: 2px;
  height: 2px;
  margin-bottom: 15px;
  margin-right: 15px;
}
.direccion{
  width: 48%;
}
.carrito{
  width: 48%;
  margin-top: 100px;
}
/deep/ .separador-wrapper {
    background-color: #e6d6ba;
}
/deep/ .cerrar {
  display: none;
}
/deep/ .linea-verde {
  margin-top: 20px;
  margin-left: 12px;
}
/deep/ .formulario-adress-wrapper {
  background-color: #e6d6ba;
  padding: 0px;
}
/deep/ .descripcion {
  background-color: #e6d6ba;
}
/deep/ .numeros {
  background-color: #e6d6ba;
}
/deep/ .pagar {
  background-color: #e6d6ba;
}
/deep/ .formulario-adress {
  padding: 0px;
}
</style>
