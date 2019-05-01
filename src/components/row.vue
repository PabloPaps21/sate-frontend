<template>
  <div class="envolver">
    <div class="columnas-wrapper">
      <div class="columnas">
        <div class="columnas-particular">
          <div class="descripcion">
            <img src="/ensalada.png" alt="" class="img-descripcion-checkout">
            <div class="texto-checkout">
              <div>{{ product.name }}</div>
              <div>${{ product.price }}</div>
            </div>
          </div>
          <div class="numeros">
            <div class="precio-unitario">
              ${{ product.price }}
            </div>
            <div class="cantidad">
              <button class="btn-qty" @click="removeProduct"> - </button>
              {{ quantity }}
              <button class="btn-qty" @click="addProduct"> + </button>
            </div>
            <div class="cuenta-check">
              ${{ quantity * product.price }}
            </div>
            <button class="btn-cancel-check" @click="removeAll">X</button>
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
.columnas-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.columnas {
  display: flex;
  width: 900px;
  justify-content: space-around;
  flex-direction: column;
  // background-color: purple;
}
.columnas-particular {
  display: flex;
  width: 100%;
  align-items: center;
}
.descripcion {
  display: flex;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 2;
}
.img-descripcion-checkout{
  height: auto;
  width: 80px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.texto-checkout {
  display: flex;
  line-height: 25px;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
}
.cantidad {
  display: flex;
  justify-content: space-evenly;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  width: 33%;
}
.btn-qty{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 20px;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  color:black;
  background-color: #eae5dc;
  border: 2px solid black;
}
.numeros {
  display: flex;
  width: 100%;
  height: 150px;
  align-items: center;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
}
.precio-unitario {
  display: flex;
  width: 33%;
  justify-content: center;
}
.cuenta-check {
  display: flex;
  width: 33%;
  justify-content: center;
}
.btn-cancel-check {
 display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 20px;
  font-family: 'Strait', sans-serif;
  font-size: 15px;
  color: #b92929;
  background-color: #eae5dc;
  border: 2px solid #b92929;
}
@media screen and (max-width: 814px) {
  .descripcion {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 500px) {
 .columnas {
   flex-direction: column;
   width: 100%;
  //  background-color: yellowgreen;
 }
 .numeros {
   margin-right: 43px;
   flex-direction: column;
 }
 .descripcion {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
@media screen and (max-width: 375px) {
  .columas {
    flex-direction: column;
    width: 100%;
  }
}
</style>
