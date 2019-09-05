<template>
<div class="cart-row">
  <div
    :style="{ backgroundImage: `url('${product.image}')` }"
    class="product-image">
  </div>
  <div class="product-name">{{ product.name }}</div>
  <div class="controls-row">
    <div class="price">
      ${{ product.price }}
    </div>
    <div class="quantity-controls">
      <button class="btn-qty" @click="removeProduct"> - </button>
      {{ quantity }}
      <button class="btn-qty" @click="addProduct"> + </button>
    </div>
    <div class="total">
      ${{ quantity * product.price }}
    </div>
    <button class="remove-button" @click="removeAll">X</button>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('cart');
export default {
  props: {
    product: Object,
  },
  computed: {
    quantity() {
      const cartItem = this.items.find(item => item.product.id === this.product.id);
      if (!cartItem) {
        return null;
      }
      return cartItem.quantity;
    },
    ...mapState([
      'items',
    ]),
  },
  methods: {
    addProduct() {
      this.addToCart(this.product);
    },
    removeProduct() {
      this.removeFromCart(this.product);
    },
    removeAll() {
      while (this.quantity > 0) {
        this.removeFromCart(this.product);
      }
    },
    ...mapMutations([
      'addToCart',
      'removeFromCart',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.cart-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  font-family: 'Adelle Sans Book';
}
.product-image {
  width: 10%;
  flex-shrink: 0;
  padding-bottom: 10%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.product-name {
  width: 25%;
  flex-shrink: 0;
}
.price {
  width: 30%;
  text-align: center;
}
.total {
  width: 30%;
  text-align: center;
}
.btn-qty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  color: black;
  background-color: transparent;
  border: 2px solid black;
}
.quantity-controls {
  display: flex;
  width: 30%;
  align-items: center;
  font-size: 15px;
  justify-content: space-between;
}
.remove-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  color: #b92929;
  background-color: #eae5dc;
  border: 2px solid #b92929;
}
.controls-row {
  display: flex;
  align-items: center;
  width: 60%;
}
@media screen and (max-width: 480px) {
  .product-image {
    width: 25%;
    padding-bottom: 25%;
  }
  .product-name {
    width: 70%;
  }
  .cart-row {
    flex-wrap: wrap;
  }
  .controls-row {
    width: 100%;
    margin-top: 20px;
    justify-content: space-around;
  }
}
</style>
