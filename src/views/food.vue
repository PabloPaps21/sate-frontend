<template>
  <div class="envolver">
    <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
      <div class="slide-title">Bienvenido a casa</div>
    </div>
    <div class="instructions-wrapper" style="background-image:url('/kraft.jpg')">
      <div class="instructions">
        <div class="order">
          <img src="/sate-icono-02-1.png" alt="menu" class="img-order">
            <div class="title-order">1. Haz tu pedido</div>
            <div class="subtitle-order">Elige la comida del menú  y
              completa tu orden hasta el viernes.</div>
        </div>
        <div class="order">
            <img src="/sate-icono-04-1.png" alt="menu">
            <div class="title-order">2. Prepararemos tu comida</div>
            <div class="subtitle-order">Se compran únicamente los ingredientes necesarios para
              los pedidos, evitando desperdicio de comida.</div>
        </div>
        <div class="order">
            <img src="/sate-icono-02-1.png" alt="menu">
            <div class="title-order">3. Recibe tu pedido</div>
            <div class="subtitle-order">Recibirás tu pedido el domingo por la tarde en
              la puerta de tu casa.
              Refrigera de inmediato y disfruta cualquier día de la semana.</div>
        </div>
      </div>
    </div>
    <div class="conoce-titulo-wrapper">
      <div class="conoce-titulo">
        Conoce más
        <!-- revisar tamaño de los videos  -->
      </div>
    </div>
    <div class="conoce-wrapper">
      <div class="conoce">
        <div class="video-conoce" style="background-color: coral;">
          <video width="300" controls autoplay>
            <source src="/videos/delivery_que_es.mov" type="video/mp4">
          </video>
        </div>
        <div class="video-conoce">
          <video width="300" controls autoplay>
            <source src="/videos/delivery_como_funciona_final.mov" type="video/mp4">
          </video>
        </div>
        <div class="video-conoce">
          <video width="300" controls autoplay>
            <source src="/videos/delivery_como_calentar.mov" type="video/mp4">
          </video>
        </div>
      </div>
    </div>
     <div class="week-wrapper">
      <div class="week">
        <div class="week-title">
          Menú de la semana
        </div>
        <div class="week-date">
          28/ENE/2019
        </div>
        <div class="cita-index">
            Esperamos que encuentres la comida que más se acomode a tus necesidades.
        </div>
        <div class="cita-index">
            Con cariño preparada para ti.
        </div>
      </div>
    </div>
    <div class="category" v-for="category in allFood" :key="category.id">
      <div class="menu-wrapper">
        <div class="menu">
          <div class="menu-title">
            {{ category.name }}
          </div>
        </div>
      </div>
      <div class="alimentos-wrapper">
        <div class="alimentos">
          <cards
            v-for="product in category.products"
            :key="product.id"
            :product="product" />
        </div>
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
      'allFood',
    ]),
  },
  methods: {
    ...mapActions([
      'getAllFood',
    ]),
  },
  mounted() {
    this.getAllFood();
  },
};
</script>

<style lang="scss" scoped>
  .img-slide-wrapper {
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
  .slide-title {
    color: #fff;
    margin-bottom: 30px;
    font-size: 56px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
  }
  .instructions-wrapper {
    display: flex;
    height: 350px;
    width: 100%;
    justify-content: center;
  }
  .instructions {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 20px;
    width: 900px;
  }
  .order {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
  }
  .img-order {
    width: 100px;
    height: auto;
  }
  .title-order {
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .subtitle-order {
    text-align: center;
    font-family: 'Strait', sans-serif;
    font-size: 15px;
    line-height: 25px;
  }
  .conoce-titulo-wrapper {
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: center;
    background-color: #eae5dc;
  }
  .conoce-titulo {
    display: flex;
    width: 900px;
    justify-content: center;
    font-family: 'Strait', sans-serif;
    font-size: 40px;
    align-items: center;
    margin-top: 40px;
  }
  .conoce-wrapper {
    display: flex;
    height: 230px;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
  }
  .conoce {
    display:  flex;
    width: 900px;
    justify-content: space-evenly;
    margin-top: 40px;
  }
  .video-conoce {
    display: flex;
    width: 400px;
    height: 174px;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
  .conoce-container {
    width: auto;
    height: 174px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .week-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    background-color: #eae5dc;
    justify-content: center;
  }
  .week {
    display: flex;
    width: 900px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
  }
  .week-title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-size: 20px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
    font-size: 35px;
  }
  .week-date {
    text-align: center;
    margin-bottom: 50px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
    font-size: 35px;
  }
  .cita-index {
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 16px;
  }
  .menu-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    background-color: #eae5dc;
    justify-content: center;
  }
  .menu {
    display: flex;
    width: 900px;
  }
  .menu-title {
    font-size: 30px;
    margin-bottom: 30px;
    margin-top:30px;
    font-family: 'Strait', sans-serif;
  }
  .alimentos-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
  }
  .alimentos {
    display: flex;
    justify-content: space-around;
    width: 900px;
    margin-bottom: 50px;
  }
  .alimento-opcion {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 202px;
  }
  .img-alimentos {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
  .alimento-titulo {
    text-align: center;
    margin-top: 20px;
    font-family: 'Strait', sans-serif;
  }
  .alimento-precio {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
    font-family: 'Strait', sans-serif;
  }
  .alimento-descripcion {
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
    color: #4d5d44;
    line-height: 2;
    font-family: 'Strait', sans-serif;
  }
  .alimento-add {
    width: 69px;
    height: 35px;
    background-color:#eae5dc;
    color: black;
    border: 2px solid #555555;
    margin-bottom: 20px;
  }
  .alimento-add-button {
    width: 136px;
    height: 39px;
    background-color:#eae5dc;
    color: black;
    border: 2px solid black;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
  }
  .add-comida {
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
