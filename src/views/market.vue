<template>
  <div class="envolver">
    <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
      <div class="slide-title"> Mercado Digital</div>
    </div>
    <div class="week-wrapper">
      <div class="week">
        <div class="week-title">
          Productos
        </div>
        <!-- <div class="week-date">
          28/ENE/2019
        </div> -->
        <div class="cita-index">
          Con tu ayuda, beneficiarás a muchas personas.
        </div>
        <!-- <div class="cita-index">
            Con cariño preparada para ti.
        </div> -->
      </div>
    </div>
    <div class="alimentos-wrapper">
      <div class="alimentos">
        <cards
          v-for="product in allProducts"
          :key="product.id"
          :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import cards from '@/components/cards.vue';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  components: {
    cards,
  },
  computed: {
    ...mapState([
      'allProducts',
    ]),
  },
  methods: {
    ...mapActions([
      'getAllProducts',
    ]),
  },
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style lang="scss" scoped>
  .img-slide-wrapper{
    display: flex;
    height: 444px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .slide-title{
    color:#e6d6ba;
    margin-bottom: 30px;
    font-size: 56px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
  }
   .week-wrapper{
    display: flex;
    width: 100%;
    height: auto;
    background-color:#e6d6ba;
    justify-content: center;
  }
  .week{
    display: flex;
    width: 900px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  .week-title{
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
    font-size: 35px;
    color: #3e4e35;
  }
  .cita-index{
    text-align: center;
    margin-bottom: 40px;
    font-family: 'Strait', sans-serif;
    font-size: 16px;
    color: #3e4e35;
  }
  .menu-wrapper{
    display: flex;
    width: 100%;
    height: auto;
    background-color: #eae5dc;
    justify-content: center;
  }
  .menu{
    display: flex;
    width: 900px;
  }
  .menu-title{
    font-size: 30px;
    margin-bottom: 30px;
    margin-top:30px;
    font-family: 'Strait', sans-serif;
  }
  .alimentos-wrapper{
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #e6d6ba;
  }
  .alimentos{
    display: flex;
    justify-content: space-around;
    width: 900px;
    margin-bottom: 50px;
    flex-wrap: wrap;
  }
  .alimento-opcion{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 202px;
  }
  .img-alimentos{
    width: 200px;
    height: 200px;
  }
  .alimento-titulo{
    text-align: center;
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
  }
  .alimento-precio{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Strait', sans-serif;
  }
  .alimento-descripcion{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
    color: #4d5d44;
    line-height: 2;
    font-family: 'Strait', sans-serif;
  }
  .add-comida{
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
  }
</style>
