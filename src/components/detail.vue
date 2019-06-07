<template>
<div class="content">
  <div class="images">
    <img :src="currentImage ? currentImage : product.image" alt="" class="product-image">
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
    <div class="interactions">
      <div class="cantidad">
        <button class="button-quantity " @click="removeProduct"> - </button>
          <div class="value">
            {{ quantity }}
          </div>
        <button class="button-quantity " @click="addProduct"> + </button>
      </div>
      <div class="buttons" v-if="product.type === 'MARKET'">
        <button
          class="wishlist-button"
          @click="addToWishlist"
          v-if="!isOnWishlist">
          Añadir a la wishlist
        </button>
        <button
          class="wishlist-button"
          @click="removeFromWishlist"
          v-else>
          Quitar de la wishlist
        </button>
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
    addToWishlist() {
      this.$store.dispatch('wishlist/addToWishlist', this.product.id);
    },
    removeFromWishlist() {
      this.$store.dispatch('wishlist/removeFromWishlist', this.product.id);
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
  height: auto;
}
.alimento-add-button {
  width: 136px;
  height: 39px;
  color: black;
  border: 2px solid black;
  font-family: 'Strait', sans-serif;
}
.wishlist-button {
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
    width: 50%;
  }
}
</style>
