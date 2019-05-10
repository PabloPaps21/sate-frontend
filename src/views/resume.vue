<template>
  <div class="envolver" style="background-color: #e6d6ba;">
    <div class="titulo-resumen-wrapper">
      <div class="titulo-resumen">
        Resumen de la compra
      </div>
    </div>
    <!--  -->
    <div class="cuerpo-wrapper" v-if="!success">
      <steps v-model="currentStep" :items="steps"/>
    </div>
    <component v-bind:is="`step${currentStep+1}`" v-if="!success" @next="currentStep += 1" />
    <div
      v-else
      style="display: flex; height: 400px; justify-content: center; align-items: center;">
      Tu orden se ha procesado correctamente. Gracias por tu compra. <a href="/">Ir a inicio</a>
    </div>
  </div>
</template>

<script>
/* global paypal */
import { createNamespacedHelpers } from 'vuex';
import steps from '@/components/steps.vue';
import delivery from '@/components/delivery.vue';
import summary from '@/components/summary.vue';
import payment from '@/components/payment.vue';

const { mapGetters } = createNamespacedHelpers('cart');

export default {
  data() {
    return {
      steps: ['Resumen', 'Envio', 'Pago'],
      currentStep: 0,
      data: {
        address: '',
        apartment: '',
        city: '',
        state: '',
        postal_code: '',
        phone_number: '',
      },
      success: false,
    };
  },
  props: {
    show: Boolean,
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
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
    steps,
    step1: summary,
    step2: delivery,
    step3: payment,
  },
  mounted() {
    if (this.user) {
      [this.data] = this.user.addresses;
    }
    paypal.Buttons({
      createOrder: (data, actions) => actions.order.create({
        purchase_units: [{
          amount: {
            value: this.cartTotalPrice,
          },
        }],
      }),
      onApprove: (data, actions) => actions.order.capture()
        .then(() => {
          this.success = true;
        }),
    }).render('#paypal-button-container');
  },
};
</script>

<style lang="scss" scoped>
.titulo-resumen-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  background-color: #eae5dc;
  flex-direction: column;
}
.titulo-resumen {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
  color: #3e4e35;
  height: 80px;
  margin-top: 40px;
}
.cuerpo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color:  #eae5dc;
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
  z-index: 0;
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
  margin-top: 40px;
}
/deep/ .columnas-wrapper {
  background-color: transparent;
}
/deep/ .cerrar {
  display: none;
}
/deep/ .linea-verde {
  margin-top: 20px;
  margin-left: 12px;
}
/deep/ .formulario-adress-wrapper {
  padding: 0px;
}
/deep/ .formulario-adress {
  padding: 0px;
}
.separador-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
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
  margin-bottom: 10px;
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
  border: 2px solid #3e4e35;
  color: #3e4e35;
  background-color: #eae5dc;
  height: 25px;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.pass-usr {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  color: #3e4e35;
}
@media screen and (max-width: 375px) {
  .titulo-resumen {
    width: 100%;
    font-size: 25px;
  }
}
</style>
