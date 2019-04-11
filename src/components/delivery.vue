<template>
<div class="delivery-wrapper">
  <div class="delivery">
    <div class="address-selection" v-if="user">
      Selecciona la dirección donde quieres recibir tu pedido:
      <div class="addresses">
        <div class="address"
          v-for="address in user.addresses"
          :key="address.id"
          :class="[address.id === id ? 'selected-address' : '']"
          @click="selectAddress(address)">
          <div class="address-item">Dirección: {{ address.address }}</div>
          <div class="address-item">Interior: {{ address.apartment }}</div>
          <div class="address-item">Colonia: {{ address.city }}</div>
          <div class="address-item">Teléfono: {{ address.phone_number }}</div>
        </div>
      </div>
    </div>
    <div class="delivery-fare">
      <div style="margin-bottom: 20px; font-size: 24px;">Costo del envio:</div>
      ${{ (distance/1000 * 10.1) > 35 || distance === 0 ? (distance/1000 * 10.1) : 35 }}
    </div>
    <div class="button-wrapper" v-if="ready">
      <div class="button" @click="$emit('next')">Siguiente</div>
    </div>
  </div>
</div>
</template>

<script>
/* global google */
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  data() {
    return {
      origin: 'Adolfo Prieto 1521, Del Valle Centro',
      address: 'Extremadura 127, Insurgentes Mixcoac',
      distance: 0,
      id: null,
      ready: false,
    };
  },
  computed: {
    ...mapState([
      'user',
    ]),
  },
  methods: {
    selectAddress(address) {
      // Save current address for delivery;
      this.id = address.id;
      this.calculate(`${address.address}, ${address.city}`);
    },
    calculate(destinations) {
      const service = new google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [this.origin],
          destinations: [destinations],
          travelMode: 'DRIVING',
        }, (response, status) => {
          if (status === 'OK') {
            this.distance = response.rows[0].elements[0].distance.value;
            this.ready = true;
            const deliveryFee = this.distance / 1000 * 10.1;
            this.setDeliveryFee(deliveryFee > 35 ? deliveryFee : 35);
          }
        },
      );
    },
    setDeliveryFee(fee) {
      this.$store.commit('cart/setDeliveryFee', fee);
    },
    ...mapActions([
      'getUser',
    ]),
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.delivery-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eae5dc;
}
.delivery {
  width: 900px;
  display: flex;
  padding: 60px 0;
  flex-wrap: wrap;
}
.address-selection {
  display: flex;
  flex-direction: column;
  font-family: 'Adelle Sans Book';
}
.addresses {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.address {
  width: 100%;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;
  padding: 15px 20px;
  box-sizing: border-box;
  margin-top: 20px;
  cursor: pointer;
}
.delivery-fare {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Strait', sans-serif;
  flex-direction: column;
  font-size: 42px;
}
.address-item {
  padding: 5px;
}
.selected-address {
  border: 2px solid #5d7750;
  color: #5d7750;
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-family: 'Strait', sans-serif;
  font-size: 12px;
  color:black;
  margin-top: 30px;
  height: 38px;
  background-color: #eae5dc;
  border: 2px solid black;
}
</style>
