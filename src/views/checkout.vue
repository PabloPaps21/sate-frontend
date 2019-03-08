<template>
<div class="envolver">
  <div class="columnas-header-wrapper">
    <div class="columnas-header">
      <div class="encabezado">
        <div class="head-producto">
          PRODUCTO
        </div>
        <div class="segunda-mitad">
          <div class="head-precio">
            PRECIO
          </div>
          <div class="head-cantidad">
            CANTIDAD
          </div>
          <div class="head-total">
            TOTAL
          </div>
          <div class="btn-espacio">
          </div>
        </div>
      </div>
    </div>
  </div>
  <row/>
  <row/>
  <row/>
  <div class="debajo-producto-wrapper">
    <div class="debajo-producto">
      <div class="vacio">
      </div>
      <div class="checkout">
        <div class="cantidad-pagar">
          <div class="subtotal-pagar">
            SUBTOTAL
          </div>
          <div class="cantidad-subtotal">
            $180.00
          </div>
        </div>
        <button class="paypal">paypal</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import row from '@/components/row.vue';

export default {
  components: {
    row,
  },
};
</script>

<style lang="scss" scoped>
.columnas-header-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.columnas-header {
  display: flex;
  width: 900px;
  justify-content: center;
  margin-top: 20px;
}
.encabezado {
  font-family: 'Strait', sans-serif;
  font-weight: 400;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 20px;
}
.head-producto {
  display: flex;
  justify-content: center;
  width: 100%;
}
.segunda-mitad {
  display: flex;
  justify-content: center;
  width: 100%;
}
.head-precio {
  display: flex;
  justify-content: center;
  width: 33%;
}
.head-cantidad {
  display: flex;
  justify-content: center;
  width: 33%;
}
.head-total {
  display: flex;
  justify-content: center;
  width: 33%;
}
.btn-espacio {
  width: 30px;
}
.debajo-producto-wrapper {
  display: flex;
  width:100%;
  justify-content: center;
  background-color: #eae5dc;
}
.debajo-producto {
  display: flex;
  width:900px;
  justify-content: center;
  margin-bottom: 20px;
}
.vacio {
  display: flex;
  width: 50%;
  height: 150px;
  background-color: coral;
}
.checkout {
  display: flex;
  width: 50%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.cantidad-pagar {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.subtotal-pagar {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.cantidad-subtotal {
  font-family: 'Strait', sans-serif;
  font-size: 22px;
  font-weight: 600;
}
.paypal {
  width:70px;
}
@media screen and (max-width: 500px) {
  .encabezado {
    display: none;
  }
  .subtotal-pagar {
    font-size: 20px;
  }
  .cantidad-subtotal {
    font-size: 17px;
  }
  .vacio {
    width: 100%;
  }
  .cantidad-pagar {
    flex-direction: column;
  }
}
</style>
