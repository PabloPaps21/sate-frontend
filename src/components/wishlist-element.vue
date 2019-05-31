<template>
<div class="product">
  <div class="img-productos" :style="{ backgroundImage: `url(${'/ensalada.png'})` }"></div>
  <div class="product-name">
    {{ product.name }}
  </div>
  <div class="product-price">
    ${{ product.price }}
  </div>
  <div class="product-button" @click="showDetail = true">
    Ver
  </div>
  <div class="product-button" @click="remove">
    Eliminar
  </div>
  <div class="background" v-if="showDetail"  @click.self="showDetail = false">
    <div class="window">
      <detail :product="product" :category="category"/>
    </div>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import detail from '@/components/detail.vue';

const { mapActions } = createNamespacedHelpers('wishlist');
export default {
  data() {
    return {
      showDetail: false,
    };
  },
  props: {
    product: Object,
    category: String,
  },
  components: {
    detail,
  },
  methods: {
    remove() {
      this.removeFromWishlist(this.product.id);
    },
    ...mapActions([
      'removeFromWishlist',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(19, 18, 18, 0.555);
  padding-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
.window {
  width: 900px;
  background-color: #eae5dc;
  padding: 40px 20px;
}
.product {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(207, 207, 207);
  padding: 16px 0;
  align-items: center;
}
.img-productos{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
}
.product-name {
  flex-grow: 1;
  padding-left: 20px;
}
.product-price {
  width: 15%;
}
.product-button {
  width: 15%;
  cursor: pointer;
}
</style>
