<template>
  <div class="account-wrapper">
    <div class="wishlist">
      <div class="wishlist-products">
        <div v-for="order in orders" :key="order.id">
          Yay
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:3333/order')
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
</style>
