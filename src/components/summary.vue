<template>
  <div class="cuerpo-wrapper" >
    <div class="carrito">
      <div v-for="item in foodItems" :key="item.id">
        <row :product="item.product"/>
        <div class="linea-verde"></div>
      </div>
      <div v-for="item in marketItems" :key="item.id">
        <row :product="item.product"/>
        <div class="linea-verde"></div>
      </div>
      <div class="debajo-producto-wrapper">
        <div class="debajo-producto">
          <div class="checkout">
            <div class="cantidad-pagar">
              <div class="subtotal-pagar">
                SUBTOTAL
              </div>
              <div class="cantidad-subtotal">
                ${{ cartTotalPrice }}
              </div>
            </div>
            <div class="button" @click="$emit('next')">Siguiente</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import row from '@/components/row.vue';

const { mapGetters } = createNamespacedHelpers('cart');
export default {
  components: {
    row,
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    ...mapGetters([
      'foodItems',
      'marketItems',
      'cartTotalPrice',
    ]),
  },
};
</script>

<style>
.cuerpo-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color:  #eae5dc;
}
.carrito {
  display: flex;
  width: 800px;
  justify-content: space-between;
  margin-bottom: 50px;
  flex-direction: column;
}
.checkout {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}
.debajo-producto-wrapper {
  display: flex;
  width:100%;
  justify-content: center;
}
.cantidad-pagar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  max-height: 100%;
}
.debajo-producto {
  display: flex;
  width:900px;
  justify-content: center;
  margin-bottom: 20px;
}
.vacio {
  display: flex;
  width: 100%;
  height: 150px;
}
.subtotal-pagar {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.cantidad-subtotal {
  font-family: 'Strait', sans-serif;
  font-size: 17px;
  font-weight: 600;
}
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-family: 'Strait', sans-serif;
  font-size: 12px;
  color:black;
  margin-top: 30px;
  height: 38px;
  background-color: #eae5dc;
  border: 2px solid black;
}
@media screen  and (max-width: 980px) {
  .debajo-producto {
    width: 50%;
    justify-content: center;
    align-items: center;
  }
}
@media screen and (max-width: 480px) {
  .debajo-producto {
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
}
</style>
