<template>
<div class="content" v-if="event">
  <div class="images" v-if="currentStep === 1">
    <div
      :style="{ backgroundImage: `url('${event.image}')` }"
      class="product-image">
    </div>
  </div>
  <div class="detail" v-if="currentStep === 1">
    <div class="product-name">
      {{ event.name }}
    </div>
    <div class="description">
      {{ event.description }}
    </div>
    <div class="interactions">
      <div class="quantity">
        <div class="quantity-text">
          Personas:
        </div>
        <button class="button-quantity " @click="decreaseBooking"> - </button>
        <div class="value">
          {{ quantity }}
        </div>
        <button class="button-quantity " @click="increaseBooking"> + </button>
      </div>
      <div class="buttons">
        <button
          @click="currentStep = 2"
          class="button">
          Reservar
        </button>
      </div>
    </div>
    <div class="bookings">
      Cupo: {{ currentBooked }}/{{ event.max_bookings }}
    </div>
  </div>
  <div class="payment-data" v-if="currentStep === 2">
    <CardPayment :payment="quantity * event.price" @paymentMade="pay" />
  </div>
  <div class="booking-details" v-if="currentStep === 2">
    Detalles de tu reservación:
    <div class="details-header">Fecha del evento:</div>
    <div>{{ moment(date).format('DD MMMM') }}</div>
    <div class="details-header">Personas reservadas:</div>
    <div>{{ quantity }}</div>
    <div class="details-header">Precio total:</div>
    <div>{{ (quantity * event.price).toFixed(2) }}</div>
  </div>
  <div class="booking-success" v-if="currentStep === 3">
    Gracias por tu compra. En breve recibiras un correo con los detalles
  </div>
</div>
</template>

<script>
import moment from 'moment';
import CardPayment from '@/components/CardPayment.vue';
import axios from 'axios';

export default {
  data() {
    return {
      currentImage: null,
      quantity: 1,
      currentStep: 1,
      moment,
    };
  },
  props: {
    event: Object,
    currentBooked: Number,
    date: String,
  },
  methods: {
    pay(token) {
      axios.post(`${process.env.VUE_APP_SERVER_URL}/order`, {
        amount: this.quantity * this.event.price,
        cardToken: token,
      }).then(() => {
        this.currentStep = 3;
      });
    },
    increaseBooking() {
      if (this.quantity + this.currentBooked < this.event.max_bookings) {
        this.quantity += 1;
      }
    },
    decreaseBooking() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
  },
  components: {
    CardPayment,
  },
  mounted() {
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.images {
  width: 35%;
}
.detail {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  font-family: 'Strait', sans-serif;
  width: 60%;
}
.product-name {
  font-family: 'Strait', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
}
.interactions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.product-image {
  width: 100%;
  padding-bottom: 100%;
  background-position: center;
  background-size: cover;
}
.button {
  width: 136px;
  height: 39px;
  color: #e6d6ba;
  border: 2px solid black;
  font-family: 'Strait', sans-serif;
  background-color: #414f3a;
}
.ingredientes{
  line-height: 2;
}
.description {
  margin-bottom: 25px;
  font-family: 'Adelle Sans Book';
  width: 100%;
}
.quantity {
  display: flex;
  align-items: center;
  font-family: 'Strait', sans-serif;
}
.quantity-text {
  margin-right: 15px;
}
.button-quantity {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  color:black;
  background-color: none;
  border: 2px solid black;
}
.value {
  font-size: 30px;
  margin-left: 20px;

  & + .button-quantity {
    margin-left: 20px;
  }
}
.buttons {
  display: flex;
}
.image-gallery {
  width: 100%;
  max-width: 100%;
  display: flex;
  margin-top: 20px;
  overflow-x: scroll;
}
.image-button {
  height: 40px;
  width: auto;
  margin-right: 10px;
}
.bookings {
  margin-top: 14px;
  width: 100%;
}
.payment-data {
  width: 50%;
}
.booking-details {
  width: 46%;
}
.details-header {
  margin-top: 20px;
}
.booking-success {
  width: 100%;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .content {
    flex-direction: column;
  }
  .images {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
  }
  .detail {
    width: 100%;
  }
  .product-image {
    width: 80%;
    padding-bottom: 80%;
  }
  .interactions {
    flex-direction: column;
  }
  .wishlist-button {
    margin-top: 25px;
  }
}
</style>
