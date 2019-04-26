<template>
  <div class="envolver">
    <div class="detalle-wrapper">
      <div class="detalle-producto" style="width: 90%">
        <img src="/ensalada.png" alt="" class="img-detalle-producto">
        <div class="detalle" style="width: 80%">
          <div class="nombre-producto aire">
            <div class="nom-product">
              {{ product.name }}
            </div>
            <!-- <div class="cerrar">
             <button class="btn-cancel-check">X</button>
            </div> -->
          </div>
          <div class="descripcion-producto aire">
            {{ product.description }}
          </div>
          <div class="add-to-cart" style="margin-bottom:10px">
            <div class="cantidad">
              <button class="btn-qty" @click="removeProduct"> - </button>
                <div class="numero">
                  {{ quantity }}
                </div>
              <button class="btn-qty" @click="addProduct"> + </button>
            </div>
            <div class="botones" v-if="product.type === 'MARKET'">
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
          <div class="etiqueta">
            Etiqueta: <span v-for="tag in product.tags" :key="tag.id">{{ tag.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="descripcion-wrapper">
      <div class="descripcion">
        <div class="tags">
          <div class="descripcion-tag descripcion-tag-fuente" style="margin-bottom:30px;">
             Descripción
          </div>
          <div class="valoraciones-tag descripcion-tag-fuente">
            Valoraciones (0)
          </div>
        </div>
        <div class="texto-descripcion descripcion-tag-fuente">
          <div style="margin-bottom:30px;">Descripción</div>
           <p>{{ product.description }}</p>
        </div>
      </div>
    </div> -->
    <!-- <div class="prod-rel-wrapper">
      <div class="prod-rel-titulo">
        PRODUCTOS RELACIONADOS
      </div>
    </div>
    <div class="productos-relacionados-w">
      <div class="productos-relacionados">
      </div>
    </div> -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapMutations } = createNamespacedHelpers('cart');
export default {
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
.detalle-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
.detalle-producto {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.detalle {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  font-family: 'Strait', sans-serif;
}
.nombre-producto {
  display: flex;
  justify-content: space-between;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.cerrar {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
}
.aire {
  margin-top: 20px;
  margin-bottom: 20px;
}
.add-to-cart {
  display:flex;
  justify-content: space-between;
}
.img-detalle-producto {
  height: auto;
  width: 320px;
  margin-right: 91px;
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
.wishlist-add-button{
  width: 136px;
  height: 39px;
  color: #e6d6ba;
  border: 2px solid black;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
  background-color: #414f3a;
}
.descripcion-wrapper{
  display: flex;
  width:100%;
  justify-content: center;
}
.descripcion{
  display:flex;
  width: 900px;
  justify-content: center;
}
.tags{
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.prod-relacionados-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.prod-relacionados{
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
.buscar-bar{
  border: none;
  height: 18px;
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
.conoce-titulo-wrapper{
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
}
.prod-rel-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.prod-rel-titulo{
  display: flex;
  width: 900px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.productos-relacionados-w{
  display: flex;
  width: 100%;
  justify-content: center;
}
.productos-relacionados{
  display: flex;
  justify-content: space-around;
  width: 900px;
  margin-bottom: 50px;
}
.producto-opcion{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 202px;
}
.img-productos{
  width: 200px;
  height: 200px;
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
.producto-descripcion{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #4d5d44;
  line-height: 2;
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
  border: 2px solid black;
}
.cantidad {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: 'Strait', sans-serif;
  width: 33%;
  height: 30px;
  margin-top: 30px;
}
.btn-qty{
  // border:none;
  // font-size: 20px;
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
.numero{
  font-size: 30px;
}
.botones {
  display: flex;
  margin-top: 25px;
}
@media screen and (max-width: 980px) {
  .detalle-producto {
    flex-direction: column;
    justify-content: center;
  }
  .img-detalle-producto {
    width: 224px;
    height: 224px;
    margin-left: 33%;
  }
  .detalle {
    margin-left: 11%;
  }
}
@media screen and (max-width: 750px) {
   .detalle-producto {
    flex-direction: column;
  }
  .img-detalle-producto {
    width: 211px;
    margin-left: 53px;
  }
  .detalle {
    margin-left: 37px;
  }
}
@media screen and (max-width: 375px) {
  .detalle-producto {
    flex-direction: column;
  }
  .img-detalle-producto {
    width: 211px;
    margin-left: 36px;
  }
  .detalle {
    margin-left: 37px;
  }
}
</style>
