<template>
  <div class="wrapper">
    <div class="cards" v-if="!newCardForm">
      <div
        class="card-item"
        :class="[ selectedCard.cardId ===  card.id ? 'selected-card' : '']"
        v-for="card in cards"
        :key="card.id"
        @click="selectedCard.cardId = card.id; selectedCard.cvv = ''">
        <div class="card-row">
          <div class="card-logo">
            <img :src="card.payment_method.thumbnail">
          </div>
          <div class="card-data">
            <div class="digits">
              *{{ card.last_four_digits }}
            </div>
            <div class="card-exp">
              Vence: {{ months[card.expiration_month - 1] }} del {{ card.expiration_year }}
            </div>
          </div>
        </div>
        <div class="card-security">
          <div class="card-name">
            <div class="card-title">Nombre:</div>
            {{ card.cardholder.name }}
          </div>
          <div class="security-input-wrapper" v-if="selectedCard.cardId === card.id">
            CVC: <input class="security-input" type="password" v-model="selectedCard.cvv">
          </div>
        </div>
      </div>
      <div class="card-new" @click="newCardForm = true">
        Agregar nueva
      </div>
      <div class="button" @click="createPaymentToken">
        Pagar ${{ payment.toFixed(2) }}
      </div>
    </div>
    <div class="card-form" v-else>
      <label class="label">
        Nombre y apellido
        <input class="input" type="text" v-model="newCard.holderName">
      </label>
      <label class="label">
        Número de tarjeta:
        <input class="input" type="text" v-model="newCard.cardNumber">
      </label>
      <label class="label label--time">
        Mes
        <input class="input" type="text" v-model="newCard.expirationMonth">
      </label>
      <label class="label label--time">
        Año
        <input class="input" type="text" v-model="newCard.expirationYear">
      </label>
      <label class="label label--cvc">
        Código de seguridad
        <input class="input" type="password" autocomplete="false" v-model="newCard.cvv">
      </label>
      <div class="button" @click="createToken">
        Guardar
      </div>
    </div>
    <form id="new" style="display: none">
      <input type="text" data-checkout="cardNumber" v-model="newCard.cardNumber">
      <input type="text" data-checkout="securityCode" v-model="newCard.cvv">
      <input type="text" data-checkout="cardExpirationMonth" v-model="newCard.expirationMonth">
      <input type="text" data-checkout="cardExpirationYear" v-model="newCard.expirationYear">
      <input type="text" data-checkout="cardholderName" v-model="newCard.holderName">
    </form>
    <form id="pay" style="display: none">
      <input type="text" data-checkout="cardId" v-model="selectedCard.cardId">
      <input type="text" data-checkout="securityCode" v-model="selectedCard.cvv">
    </form>
  </div>
</template>

<script>
import axios from 'axios';
/* global Mercadopago */

export default {
  data() {
    return {
      newCard: {
        holderName: '',
        cardNumber: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
      },
      selectedCard: {
        cardId: null,
        cvv: '',
      },
      error: null,
      cardType: null,
      newCardForm: false,
      cards: [],
      months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    };
  },
  props: ['payment'],
  methods: {
    onSuccess(status, response) {
      this.error = null;
      axios.post(`${process.env.VUE_APP_SERVER_URL}/user/cards`, {
        token: response.id,
      }).then(() => {
        this.getCards();
        this.newCardForm = false;
      });
    },
    makePayment(status, response) {
      this.$emit('paymentMade', response.id);
    },
    getCards() {
      axios.get(`${process.env.VUE_APP_SERVER_URL}/user/cards`)
        .then((response) => {
          this.cards = response.data;
        });
    },
    createToken() {
      const form = document.querySelector('#new');
      Mercadopago.createToken(form, this.onSuccess);
    },
    createPaymentToken() {
      const form = document.querySelector('#pay');
      Mercadopago.createToken(form, this.makePayment); // Add callback as second argument
    },
    removeCard(id) {
      axios.delete(`${process.env.VUE_APP_SERVER_URL}/user/cards/${id}`)
        .then(() => {
          this.getCards();
        });
    },
  },
  watch: {
    cardNumber(value) {
      if (value.length >= 6) {
        Mercadopago.getPaymentMethod(
          { bin: value.substring(0, 6) },
          (status, response) => {
            this.setPaymentMethodId(response[0].id);
          },
        );
      }
    },
  },
  mounted() {
    this.getCards();
    Mercadopago.setPublishableKey('TEST-162c4753-5175-4f02-bcfe-e31ab272011c');
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  font-family: 'Adelle Sans Book';
}
.card-form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.label {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.label--time {
  width: 23%;
}
.label--cvc {
  width: 47%;
}
.input {
  margin-top: 12px;
  font-size: 15px;
  box-sizing: border-box;
  border: 1px solid gray;
  padding: 6px 8px;
  background-color: transparent;

  &:focus {
    border-color: #3e4e35;
  }
}
.button {
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
.cards {
  width: 100%;
}
.card-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 6px;
  font-size: 15px;

  & + .card-item {
    margin-top: 16px;
  }
}
.selected-card {
  border: 2px solid #3e4e35;
}
.card-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
}
.card-data {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.card-name {
  padding: 10px;
}
.card-new {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.card-exp {
  color: rgb(180, 33, 33);
  font-size: 14px;
  margin-top: 6px;
}
.card-title {
  margin-bottom: 4px;
  text-transform: uppercase;
  font-size: 13px;
  color: rgb(95, 94, 94);
}
.card-security {
  border-top: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.security-input-wrapper {
  display: flex;
  align-items: baseline;
}
.security-input {
  margin: 0 10px;
  font-size: 15px;
  box-sizing: border-box;
  border: 1px solid gray;
  background-color: transparent;
  width: 50px;

  &:focus {
    border-color: #3e4e35;
  }
}
</style>
