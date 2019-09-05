<template>
<div class="delivery-wrapper">
  <div class="delivery">
    <div class="address-selection" v-if="user">
      Selecciona la dirección donde quieres recibir tu pedido:
      <div class="addresses">
        <NewAddress class="new-button" />
        <div class="address"
          v-for="address in user.addresses"
          :key="address.id"
          :class="[address.id === id ? 'selected-address' : '']"
          @click="selectAddress(address)">
          <div class="address-row">
            {{ address.street }}, {{ address.number_ext }}, {{ address.number_int }}.
          </div>
          <div class="address-row">
            {{ address.district }}, {{ address.city }}. {{ address.state }}
          </div>
          <div class="address-row">
            Tel. {{ address.phone_number }}
          </div>
        </div>
        <div
          class="address"
          :class="[id === 0 ? 'selected-address' : '']"
          @click="localDelivery">
          <div class="address-row">
            ¿No puedes recibirlo en los horarios indicados?
          </div>
          <div class="address-row">
            Recoje tu comida en nuestra cocina
          </div>
          <div class="address-row">
            Dirección: Adolfo Prieto 1521, Colonia Del Valle Centro
          </div>
          <div class="address-row">
            C.P. 03100, Benito Juárez  Ciudad de México.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
/* global google */
import NewAddress from '@/components/NewAddress.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  data() {
    return {
      origin: 'Adolfo Prieto 1521, Del Valle Centro',
      distance: 0,
      id: null,
      ready: false,
    };
  },
  computed: {
    deliveryFee() {
      return this.$store.state.cart.deliveryFee;
    },
    ...mapState([
      'user',
    ]),
  },
  methods: {
    selectAddress(address) {
      // Save current address for delivery;
      this.id = address.id;
      this.calculate(`${address.street} ${address.number_ext}, ${address.district}`);
    },
    localDelivery() {
      this.ready = true;
      this.id = 0;
      this.setDeliveryFee(0);
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
  components: {
    NewAddress,
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
  padding: 10px 0 0 0;
  flex-wrap: wrap;
}
.address-selection {
  display: flex;
  flex-direction: column;
  font-family: 'Adelle Sans Book';
  width: 100%;
}
.addresses {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.address {
  font-family: 'Adelle Sans Book';
  border: 1px solid rgb(196, 196, 196);
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 24px;
  box-sizing: border-box;
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
.address-row {
  & + .address-row {
    margin-top: 14px;
  }
}
.selected-address {
  border: 1px solid #5d7750;
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
.new-button {
  width: 100%;
  margin: 20px 0;
}
.local-address {
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
@media screen and (max-width: 980px) {
  .delivery {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 480px) {
  .addresses {
    width: 90%;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
  }
  .delivery-fare {
    margin-top: 15px;
  }
  .address-selection {
    margin-left: 13px;
  }
}
</style>
