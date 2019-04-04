<template>
  <div class="productos-wrapper">
    <div class="productos">
      <div class="productos-opcion">
        <div class="img-productos" style="position: relative;" @click="showDetail = true;">
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
          <div class="add-producto-font" @click="addProduct">Añadir</div>
        </div>
        <div class="buttons" v-else>
          <div class="add-producto" @click="removeProduct" style="margin-right: 10px">
            -
          </div>
          <div class="add-producto" @click="addProduct">+</div>
        </div>
      </div>
    </div>
    <div class="background" v-show="showDetail"  @click.self="showDetail = false">
      <div class="window">
        <detail :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import detail from '@/components/detail.vue';

const { mapState, mapMutations } = createNamespacedHelpers('cart');
export default {
  data() {
    return {
      showDetail: false,
    };
  },
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
  components: {
    detail,
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
.productos-wrapper{
  display: flex;
  width: 30%;
  justify-content: center;
  background-color: #eae5dc;
}
.productos{
  display: flex;
  justify-content: space-around;
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
  font-family: 'Adelle Sans Book';
  font-weight: normal;
  font-style: normal;
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
  font-size: 26px;
  color:#3e4e35;
  background-color: #eae5dc;
  border: 2px solid #3e4e35;
  cursor: pointer;
}
.add-producto-font {
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 30px;
  font-family: 'Strait', sans-serif;
  color:#3e4e35;
  background-color: #eae5dc;
  border: 2px solid #3e4e35;
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
