<template>
<div class="cart-wrapper" :style="{ display: show ? 'flex' : 'none' }" @click.self="closeModal">
  <div class="cart">
    <row/>
    <row/>
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
          <button class="paypal">paypal</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import row from '@/components/row.vue';

export default {
  props: {
    show: Boolean,
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
  background-color: rgba(19, 18, 18, 0.555);
  padding-top: 0px;
  display: flex;
  justify-content: flex-end;
  z-index: 200;
}
.cart {
  background-color: #eae5dc;
  width: 400px;
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
}
.cantidad-pagar {
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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
.paypal {
  width:70px;
}
/deep/ .columnas-particular {
  flex-direction: column;
  justify-content: flex-start;
}
/deep/ .numeros {
  margin-right: 43px;
}
</style>
