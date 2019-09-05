<template>
<div class="wrapper">
  <div class="content">
    <div class="header">
      <div class="header-text">
        Productos
      </div>
      <div class="header-button" @click="$router.push('/admin/new-product')" >
        Añadir nuevo
      </div>
    </div>
    <div class="product" v-for="product in products" :key="product.id">
      <div class="product-img"
        :style="{ backgroundImage: `url(${product.image ? product.image : '/food-hero3.jpg'})` }">
      </div>
      <div class="product-info">
        <div class="product-name">{{ product.name }}</div>
        <div class="product-price">${{ product.price.toFixed(2) }}</div>
        <div class="product-actions">
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
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.header-text {
  font-size: 32px;
}
.header-button {
  background-color: #414f3a;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 12px 24px;
  cursor: pointer;
  font-size: 15px;
}
.product {
  display: flex;
  width: 48%;
  margin-top: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
}
.product-img {
  height: 90px;
  width: 90px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex-shrink: 0;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 16px;
}
.product-name {
  font-size: 18px;
  width: 100%;
}
.product-price {
  width: 100%;
}
.product-actions {
  width: 100%;
  display: flex;
  font-size: 15px;
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
