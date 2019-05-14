<template>
<div class="wrapper">
  <div class="content">
    <div class="images">
      <img :src="currentImage ? currentImage : product.image" alt="" class="product-image">
      <div class="image-gallery" v-if="product.type === 'MARKET'">
        <img
          v-for="image in product.images"
          :key="image.id" :src="image.image_url"
          class="image-button"
          @click="currentImage = image.image_url"
          alt="Product image">
      </div>
    </div>
    <div class="detail">
      <div class="product-name aire">
        <div class="nom-product">
          {{ product.name }}
        </div>
      </div>
      <div class="product-description-text">
        {{ product.description }}
      </div>
      <div class="add-to-cart">
        <div class="cantidad">
          <button class="btn-qty" @click="removeProduct"> - </button>
            <div class="numero">
              {{ quantity }}
            </div>
          <button class="btn-qty" @click="addProduct"> + </button>
        </div>
        <div class="buttons" v-if="product.type === 'MARKET'">
          <!-- <button style="margin-left:10px;" class="alimento-add-button">
            Añadir al carrito
          </button> -->
          <button
            style="margin-left:10px;"
            class="wishlist-add-button"
            @click="addToWishlist"
            v-if="!isOnWishlist">
            Añadir a la wishlist
          </button>
          <button
            style="margin-left:10px;"
            class="wishlist-add-button"
            @click="removeFromWishlist"
            v-else>
            Quitar de la wishlist
          </button>
        </div>
      </div>
      <div class="categoria">
        Categoría: {{ category }}
      </div>
      <div class="etiqueta" v-if="product.type === 'FOOD'">
        Etiqueta: <span v-for="tag in product.tags" :key="tag.id">{{ tag.name }}</span>
      </div>
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
.wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.content {
  display: flex;
  justify-content: space-between;
  width: 90%;
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
  display: flex;
  justify-content: space-between;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
  margin: 20px 0;
}
.add-to-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}
.product-image {
  width: 100%;
  height: auto;
}
.contador-input {
  width: 59px;
  height: 39px;
  border: none;
  color:#414f3a;
  font-size: 20px;
  font-family: 'Strait', sans-serif;
  text-align: center;
}
.alimento-add-button {
  width: 136px;
  height: 39px;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
}
.wishlist-add-button {
  width: 136px;
  height: 39px;
  color: #e6d6ba;
  border: 2px solid black;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
  background-color: #414f3a;
}
.descripcion-wrapper {
  display: flex;
  width:100%;
  justify-content: center;
}
.descripcion {
  display:flex;
  width: 900px;
  justify-content: center;
}
.tags {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.prod-relacionados-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.prod-relacionados {
  display: flex;
  width: 900px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.ingredientes{
  line-height: 2;
}
.texto-descripcion{
  line-height: 2;
}
.descripcion-tag-fuente{
  font-family: 'Strait', sans-serif;
}
.product-description-text {
  margin: 0 0 20px 0;
  font-family: 'Adelle Sans Book';
}
.add-producto{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 30px;
  font-family: 'Strait', sans-serif;
  font-size: 12px;
  color:black;
  border: 2px solid black;
}
.cantidad {
  display: flex;
  align-items: center;
  font-family: 'Strait', sans-serif;
}
.btn-qty{
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
.numero{
  font-size: 30px;
  margin-left: 20px;

  & + .btn-qty {
    margin-left: 20px;
  }
}
.buttons {
  display: flex;
  margin-top: 25px;
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
.etiqueta {
  margin-top: 14px;
}
@media screen and (max-width: 980px) {
  .detalle-producto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-detalle-producto {
    width: 246px;
    height: auto;
    margin-left: 85px;
    display: flex;
    justify-content: center;
  }
  .detalle {
    margin-left: 11%;
  }
}
@media screen and (max-width: 750px) {
   .detalle-producto {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .img-detalle-producto {
    width: 211px;
    margin-left: 85px;
  }
  .detalle {
    margin-left: 37px;
  }
}
@media screen and (max-width: 410px) {
  .detalle-producto {
    flex-direction: column;
  }
  .img-detalle-producto {
    width: 211px;
    margin-left: 99px;
  }
  .detalle {
    margin-left: 37px;
  }
  .add-to-cart {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 78px;
  }
}
@media screen and (max-width: 376px) {
  .add-to-cart {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 78px;
  }
}
</style>
