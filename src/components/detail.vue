<template>
<div class="content">
  <div class="images">
    <div
      :style="{ backgroundImage: `url('${currentImage ? currentImage : product.image}')` }"
      class="product-image">
    </div>
    <div
      class="image-gallery"
      v-if="product.type === 'MARKET' && product.images && product.images.length > 0">
      <img
        v-for="image in product.images"
        :key="image.id" :src="image.image_url"
        class="image-button"
        @click="currentImage = image.image_url">
    </div>
  </div>
  <div class="detail">
    <div class="product-name">
      {{ product.name }}
    </div>
    <div class="description">
      {{ product.description }}
    </div>
    <div class="price">
      ${{ product.price }}
    </div>
    <div class="interactions">
      <div class="cantidad">
        <button class="button-quantity " @click="removeProduct"> - </button>
          <div class="value">
            {{ quantity }}
          </div>
        <button class="button-quantity " @click="addProduct"> + </button>
      </div>
      <div class="buttons">
        <button
          class="cart-button"
          @click="addProduct"
          v-if="quantity === 0">
          Añadir al carrito
        </button>
        <button
          class="cart-button"
          @click="removeAllFromCart(product)"
          v-else>
          Quitar del carrito
        </button>
        <div class="wishlist-button" v-if="product.type === 'MARKET'" @click="clickOnWishlist">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 19.481 19.481" enable-background="new 0 0 19.481 19.481" width="20px" height="20px">
            <path
              d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169
              1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379
              0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838
              0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z"
              class="active-path"
              stroke="#414f3a"
              :fill="isOnWishlist ? '#414f3a' : 'transparent'"/>
          </svg>
          Wishlist
        </div>
      </div>
    </div>
    <div class="category">
      Categoría: {{ category }}
    </div>
    <div class="tags" v-if="product.type === 'FOOD'">
      Etiqueta: <span v-for="tag in product.tags" :key="tag.id" class="tag">{{ tag.name }}</span>
    </div>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('cart');
export default {
  data() {
    return {
      currentImage: null,
    };
  },
  props: {
    product: Object,
    category: String,
  },
  computed: {
    quantity() {
      const cartItem = this.items.find(item => item.product.id === this.product.id);
      if (!cartItem) {
        return 0;
      }
      return cartItem.quantity;
    },
    isOnWishlist() {
      return this.$store.state.wishlist.wishlist.some(item => item.id === this.product.id);
    },
    ...mapState([
      'items',
    ]),
  },
  methods: {
    clickOnWishlist() {
      if (this.isOnWishlist) {
        this.$store.dispatch('wishlist/removeFromWishlist', this.product.id);
      } else {
        this.$store.dispatch('wishlist/addToWishlist', this.product.id);
      }
    },
    addProduct() {
      this.addToCart(this.product);
    },
    removeProduct() {
      this.removeFromCart(this.product);
    },
    ...mapMutations([
      'addToCart',
      'removeFromCart',
      'removeAllFromCart',
    ]),
  },
  mounted() {
    this.$store.dispatch('wishlist/getWishlist');
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
.alimento-add-button {
  width: 136px;
  height: 39px;
  color: black;
  border: 2px solid black;
  font-family: 'Strait', sans-serif;
}
.cart-button {
  width: 136px;
  height: 39px;
  color: #e6d6ba;
  border: 2px solid black;
  font-family: 'Strait', sans-serif;
  background-color: #414f3a;
}
.wishlist-button {
  display: flex;
  width: 20px;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  margin-left: 35px;

  svg {
    margin-bottom: 4px;
  }
}
.ingredientes{
  line-height: 2;
}
.description {
  margin-bottom: 15px;
  font-family: 'Adelle Sans Book';
  width: 100%;
}
.price {
  margin-bottom: 20px;
  font-size: 18px;
}
.cantidad {
  display: flex;
  align-items: center;
  font-family: 'Strait', sans-serif;
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
  align-items: center;
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
.tags {
  margin-top: 14px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.tag {
  margin-left: 8px;
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
