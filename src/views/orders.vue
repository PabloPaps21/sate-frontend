<template>
  <div class="account-wrapper">
    <div class="wishlist">
      <div class="wishlist-products">
        <div v-for="order in orders" :key="order.id" class="order">
          <div class="date">{{ moment(order.created_at).fromNow() }}</div>
          <div class="product">
            <div class="product-quantity">#</div>
            <div>Producto</div>
          </div>
          <div v-for="product in order.products" :key="product.id" class="product">
            <div class="product-quantity">{{ product.pivot.quantity }}</div>
            <div>{{ product.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      orders: [],
      moment,
    };
  },
  mounted() {
    moment.locale('es');
    axios.get(`${process.env.VUE_APP_SERVER_URL}/order`)
      .then((response) => {
        this.orders = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.account-wrapper {
  display: flex;
  justify-content: center;
  font-family: 'Adelle Sans Book';
}
.wishlist {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.header {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  font-size: 56px;
  font-family: 'Strait', sans-serif;
}
.wishlist-products {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
.order {
  width: 100%;
  margin-bottom: 20px;
}
.product {
  width: 100%;
  padding: 5px 0;
  display: flex;
  border-bottom: 1px solid rgb(207, 207, 207);
}
.product-quantity {
  width: 5%;
}
.date {
  margin-bottom: 5px;
}
</style>
