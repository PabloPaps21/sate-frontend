<template>
  <div class="checkout-wrapper">
    <div class="checkout">
      <div class="steps-wrapper">
        <steps v-model="currentStep" :items="steps"/>
      </div>
      <div class="column" v-if="currentStep !== 0">
        <div class="column-header">
          Detalles
        </div>
        <CardPayment
          v-if="currentStep === 2"
          @paymentMade="pay"
         :payment="cartTotalPrice + recipientsPrice + deliveryFee" />
        <Delivery v-if="currentStep === 1" />
        <div
          class="next-button"
          @click="currentStep = 2"
          v-if="currentStep === 1">
          Siguiente
        </div>
        <div class="booking-success" v-if="currentStep === 3">
          Gracias por tu compra. En breve recibiras un correo con los detalles
        </div>
      </div>
      <div class="column">
        <div class="column-header">
          Tu orden
        </div>
        <div v-for="item in foodItems" :key="item.id" class="order-item">
          <div class="image" :style="{ backgroundImage: `url('${item.product.image}')` }"></div>
          <div class="item-name">{{ item.product.name }}</div>
          <div class="item-quantity">
            <div class="quantity">
              {{ item.quantity }}
            </div>
          </div>
          <div class="item-price">${{ item.product.price * item.quantity }}</div>
        </div>
        <div v-for="item in marketItems" :key="item.id" class="order-item">
          <div class="image" :style="{ backgroundImage: `url('${item.product.image}')` }"></div>
          <div class="item-name">{{ item.product.name }}</div>
          <div class="item-quantity">
            <div class="quantity">
              {{ item.quantity }}
            </div>
          </div>
          <div class="item-price">${{ item.product.price * item.quantity }}</div>
        </div>
        <div class="totals">
          <div class="parcial-total">
            Envio
            <div class="total-value">${{ deliveryFee }}</div>
          </div>
          <div class="parcial-total">
            Contenedores
            <div class="total-value">${{ recipientsPrice }}</div>
          </div>
          <div class="full-total">
            Total
            <div class="total-value">
              ${{ cartTotalPrice + recipientsPrice + deliveryFee }}
            </div>
          </div>
        </div>
        <div
          class="next-button"
          @click="currentStep = 1"
          v-if="currentStep === 0">
          Siguiente
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

import CardPayment from '@/components/CardPayment.vue';
import Delivery from '@/components/Delivery.vue';
import steps from '@/components/steps.vue';
import axios from 'axios';

const { mapGetters, mapState } = createNamespacedHelpers('cart');
export default {
  data() {
    return {
      steps: ['Resumen', 'Envio', 'Pago'],
      currentStep: 0,
    };
  },
  computed: {
    ...mapState([
      'deliveryFee',
    ]),
    ...mapGetters([
      'foodItems',
      'marketItems',
      'cartTotalPrice',
      'recipientsPrice',
    ]),
  },
  methods: {
    pay(token) {
      axios.post(`${process.env.VUE_APP_SERVER_URL}/order`, {
        amount: this.cartTotalPrice + this.recipientsPrice + this.deliveryFee,
        cardToken: token,
      }).then(() => {
        this.currentStep = 3;
      });
    },
  },
  components: {
    steps,
    CardPayment,
    Delivery,
  },
  mounted() {
    if (!this.$store.state.user.user) {
      this.$router.push('/login');
    }
  },
};
</script>

<style lang="scss" scoped>
.checkout-wrapper {
  background-color: #eae5dc;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Adelle Sans Book';
}
.checkout {
  width: 900px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 50px;
}
.steps-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}
.column {
  width: 47.5%;
}
.column-header {
  font-family: 'Strait', sans-serif;
  padding-bottom: 12px;
  border-bottom: 1px solid gray;
  font-size: 18px;
  margin-bottom: 12px;
}
.order-item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & + .order-item {
    margin-top: 12px;
  }
}
.image {
  width: 12%;
  padding-bottom: 12%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.item-name {
  width: 40%;
}
.item-quantity {
  width: 18%;
  text-align: center;
}
.quantity {
  border: 1px solid gray;
  width: fit-content;
  padding: 5px 8px 2px 8px;
  font-size: 14px;
}
.item-price {
  text-align: center;
  width: 18%;
}
.totals {
  margin-top: 16px;
  border-top: 1px solid gray;
  padding-top: 10px;
}
.parcial-total {
  margin-top: 6px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.full-total {
  margin-top: 10px;
  font-weight: bolder;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.next-button {
  width: 100%;
  margin-top: 25px;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  background-color: #3e4e35;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
.booking-success {
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
