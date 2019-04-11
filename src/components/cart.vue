<template>
<div class="cart-wrapper" :style="{ display: show ? 'flex' : 'none' }" @click.self="closeModal">
  <div class="cart">
    <div class="titulo-wrapper">
      <div class="titulo">
        Carrito
      </div>
      <div class="cerrar">
        <i class="fas fa-window-close" @click.self="closeModal"></i>
      </div>
    </div>
    <div class="cart-products">
      <div v-for="item in foodItems" :key="item.id">
        <row :product="item.product"/>
        <div class="linea-verde"></div>
      </div>
      <div v-for="item in marketItems" :key="item.id">
        <row :product="item.product"/>
        <div class="linea-verde"></div>
      </div>
      <div v-if="foodItems.length === 0 && marketItems.length === 0">
        Aun no haz agregado productos a tu carrito de compra.
      </div>
    </div>
    <div class="debajo-producto-wrapper">
      <div class="debajo-producto">
        <div class="checkout">
          <div class="cantidad-pagar">
            <div class="subtotal-pagar">
              SUBTOTAL
            </div>
            <div class="cantidad-subtotal">
              ${{ cartTotalPrice }}
            </div>
          </div>
          <button class="pagar" @click="$router.push('/resume'); closeModal()">
            COMPLETAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import row from '@/components/row.vue';

const { mapGetters } = createNamespacedHelpers('cart');

export default {
  props: {
    show: Boolean,
  },
  computed: {
    ...mapGetters([
      'foodItems',
      'marketItems',
      'cartTotalPrice',
    ]),
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
  components: {
    row,
  },
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: rgba(19, 18, 18, 0.555);
  padding-top: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 200;
}
.cart {
  background-color: #eae5dc;
  width: 30%;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
.titulo-wrapper {
  display: flex;
  justify-content: space-between;
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
  color:#3e4e35;
  margin-top: 20px;
  margin-bottom: 40px;
}
.titulo {
  display: flex;
  width: 100%;
  font-size: 30px;
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
}
.cerrar {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  width: 100%;

  i {
    cursor: pointer;
  }
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
  width: 160px;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  color:black;
  margin-left: 30px;
  height: 45px;
  background-color: #eae5dc;
  border: 2px solid black;
  line-height: 20px;
}
.linea-verde{
  display: flex;
  border-bottom: 1px solid #3e4e357c;
  font-size: 2px;
  height: 2px;
  margin-bottom: 15px;
  margin-right: 15px;
}
/deep/ .columnas-particular {
  flex-direction: column;
  justify-content: flex-start;
}
/deep/ .numeros {
  margin-right: 43px;
  height: 70px;
}
/deep/ .descripcion {
  height: 80px;
}
.cart-products {
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
