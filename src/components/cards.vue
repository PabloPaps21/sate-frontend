<template>
<div class="envolver">
  <div class="productos-wrapper">
    <div class="productos">
      <div class="productos-opcion">
        <div class="img-productos" style="position: relative;">
          <div style="position: absolute; z-index: 2">{{ quantity }}</div>
          <div class="img-productos"
            style="position: absolute; z-index: 0"
            :class="{ active: quantity }"
            :style="{ backgroundImage: `url(${'/ensalada.png'})` }">
          </div>
        </div>
        <div class="producto-titulo">
          {{ product.name }}
        </div>
        <div class="producto-precio">
          ${{ product.price }}
        </div>
        <div class="producto-descripcion">
            {{ product.description }}
        </div>
        <div v-if="!quantity">
          <div class="add-producto" @click="addProduct">Añadir</div>
        </div>
        <div class="buttons" v-else>
          <div class="add-producto" @click="removeProduct" style="margin-right: 10px">
            -
          </div>
          <div class="add-producto" @click="addProduct">+</div>
        </div>
      </div>
    </div>
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
    ...mapMutations([
      'addToCart',
      'removeFromCart',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.productos-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.productos{
  display: flex;
  justify-content: space-around;
  width: 900px;
  margin-bottom: 50px;
}
.productos-opcion{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 202px;
}
.img-productos{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Strait', sans-serif;
  font-size: 48px;
}
.producto-titulo{
  text-align: center;
  margin-top: 20px;
  font-family: 'Strait', sans-serif;
}
.producto-precio{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Strait', sans-serif;
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
  background-color: #eae5dc;
  border: 2px solid black;
  cursor: pointer;
}
.producto-descripcion{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #4d5d44;
  line-height: 2;
  font-family: 'Strait', sans-serif;
}
.active {
  filter: opacity(30%);
}
.buttons {
  display: flex;
}
</style>
