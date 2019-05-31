<template>
<div class="wrapper">
  <div class="content">
    <div class="header">Productos</div>
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-img"
        :style="{ backgroundImage: `url(${product.image ? product.image : '/food-hero3.jpg'})` }">
      </div>
      <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">${{ product.price.toFixed(2) }}</div>
        <div class="edit" @click="$router.push(`/admin/new-product/${product.id}`)">
          Editar
        </div>
        <div class="remove" @click="deleteProduct(product.id)">
          Eliminar
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('admin');
export default {
  computed: {
    ...mapState([
      'products',
    ]),
  },
  methods: {
    ...mapActions([
      'getProducts',
      'deleteProduct',
    ]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style style lang="scss" scoped>
.wrapper {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Adelle Sans Book';
}
.content {
  width: 900px;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header {
  font-size: 32px;
  margin-bottom: 40px;
  width: 100%;
}
.product {
  display: flex;
  width: 49%;
  margin-top: 20px;
}
.product-img {
  height: 80px;
  width: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
}
.product-info {
  display: flex;
  margin-left: 20px;
  flex-wrap: wrap;
}
.product-name {
  font-size: 20px;
  width: 100%;
}
.product-price {
  margin-right: 10px;
  width: 100%;
}
.edit {
  color: rgb(136, 136, 2);
  margin-right: 20px;
  cursor: pointer;
}
.remove {
  color: red;
  cursor: pointer;
}
</style>
