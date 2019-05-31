<template>
  <div class="payment-wrapper">
    <div class="payment">
      <div class="payment-row">
        Mercancia
        <div>${{ cartTotalPrice }}</div>
      </div>
      <div class="payment-row">
        Recipientes
        <div>${{ recipientsPrice }}</div>
      </div>
      <div class="payment-row">
        Envio
        <div>${{ deliveryFee }}</div>
      </div>
      <div class="payment-row total">
        Total
        <div>${{ (cartTotalPrice + recipientsPrice + deliveryFee).toFixed(2) }}</div>
      </div>
      <div style="margin-top: 40px;" id="paypal-button-container"></div>
    </div>
  </div>
</template>

<script>
/* global paypal */
import axios from 'axios';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapGetters } = createNamespacedHelpers('cart');

export default {
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    ...mapState([
      'deliveryFee',
    ]),
    ...mapGetters([
      'cartTotalPrice',
      'recipientsPrice',
      'cartIds',
    ]),
  },
  mounted() {
    if (this.user) {
      [this.data] = this.user.addresses;
    }
    paypal.Buttons({
      createOrder: (data, actions) => actions.order.create({
        purchase_units: [{
          amount: {
            value: (this.cartTotalPrice + this.recipientsPrice + this.deliveryFee).toFixed(2),
          },
        }],
      }),
      onApprove: (data, actions) => actions.order.capture()
        .then(() => {
          const payload = {
            orderID: data.orderID,
            cart: this.cartIds,
          };
          axios.post(`${process.env.VUE_APP_SERVER_URL}/order`, payload).then(() => {
            this.success = true;
          });
        }),
    }).render('#paypal-button-container');
  },
};
</script>

<style lang="scss" scoped>
.payment-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eae5dc;
}
.payment {
  width: 900px;
  display: flex;
  padding: 60px 0;
  flex-direction: column;
  align-items: center;
}
.payment-row {
  font-family: 'Adelle Sans Book';
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
}
.total {
  font-weight: bold;
}
</style>
