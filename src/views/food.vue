<template>
  <div class="envolver">
    <div class="img-slide-wrapper" style="background-image:url('/food-hero3.jpg')">
      <div class="slide-title">Bienvenido a casa</div>
    </div>
    <div class="instructions-wrapper" style="background-image:url('/kraft.jpg')">
      <div class="instructions">
        <div class="order">
          <img src="/sate-icono-02-1.png" alt="menu" class="img-order" style="width=100%">
            <div class="title-order">1. Haz tu pedido</div>
            <div class="subtitle-order">Elige la comida del menú  y
              completa tu orden hasta el viernes.</div>
        </div>
        <div class="order">
            <img src="/sate-icono-04-1.png" alt="menu" class="img-order" style="width=100%">
            <div class="title-order">2. Prepararemos tu comida</div>
            <div class="subtitle-order">Se compran únicamente los ingredientes necesarios para
              los pedidos, evitando desperdicio de comida.</div>
        </div>
        <div class="order">
            <img src="/recibe.png" alt="menu" class="img-order" style="width=100%">
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
      <div class="conoce" v-observe-visibility="startVideos">
        <div class="video-conoce">
          <div class="wistia_responsive_padding"
          style="padding:100.0% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper"
            style="height:100%;left:0;position:absolute;top:0;width:100%;">
            <div class="wistia_embed wistia_async_wvcu18vq9l videoFoam=true"
            style="height:100%;position:relative;width:100%">&nbsp;
            </div>
          </div
        ></div>
        </div>
        <div class="video-conoce">
          <div class="wistia_responsive_padding"
          style="padding:100.0% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper"
            style="height:100%;left:0;position:absolute;top:0;width:100%;">
              <div class="wistia_embed wistia_async_xnjec0vnze videoFoam=true"
              style="height:100%;position:relative;width:100%">
                &nbsp;
              </div>
            </div>
          </div>
        </div>
        <div class="video-conoce">
          <div class="wistia_responsive_padding" style="padding:100.0% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper"
            style="height:100%;left:0;position:absolute;top:0;width:100%;">
              <div class="wistia_embed wistia_async_hvnlliwk8y videoFoam=true"
              style="height:100%;position:relative;width:100%">
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="week-wrapper">
      <div class="week">
        <div class="week-title">
          Menú de la semana
        </div>
        <div class="week-date">
          {{ startMoment.format('DD/MMM/YY') }} - {{ endMoment.format('DD/MMM/YY') }}
        </div>
        <div class="cita-index">
            Esperamos que encuentres la comida que más se acomode a tus necesidades.
        </div>
        <div class="cita-index">
            Con cariño preparada para ti.
        </div>
      </div>
    </div>
    <div class="categories-menu-wrapper">
      <div class="categories-menu">
        <div
          class="category-button"
          v-for="category in filteredFood"
          :key="category.id"
          v-scroll-to="`#category-${category.id}`">
          {{ category.name }}
        </div>
      </div>
    </div>
    <div class="tags-wrapper">
      <div class="tags">
        <div class="tags-description">
          Da clic para filtrar nuestros alimentos segun tus necesidades personales:
        </div>
        <div
          class="tag"
          v-for="tag in tags"
          :class="[selectedTags.includes(tag.id) ? '' : 'unselected']"
          @click="clickTag(tag.id)"
          :key="tag.id">
          {{ tag.name }}
        </div>
      </div>
    </div>
    <div
      class="category"
      v-for="category in filteredFood"
      :key="category.id"
      :id="`category-${category.id}`">
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
            :category="category.name"
            :product="product" />
        </div>
      </div>
    </div>
    <div class="completar-wrapper">
      <div class="completar">
        <router-link to="/checkout" class="btn-completar">COMPLETAR PEDIDO</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* global Wistia */
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
import cards from '@/components/cards.vue';

const { mapState, mapActions } = createNamespacedHelpers('products');

export default {
  data() {
    return {
      selectedTags: [],
    };
  },
  components: {
    cards,
  },
  computed: {
    filteredFood() {
      if (this.selectedTags.length > 0) {
        const result = this.allFood
          .filter(category => category.products.length > 0)
          .map(category => ({
            id: category.id,
            name: category.name,
            products: category.products.filter(product => product.tags
              .some(tag => this.selectedTags.includes(tag.id))),
          }));
        return result;
      }
      return this.allFood.filter(category => category.products.length > 0);
    },
    startMoment() {
      const startDate = moment();
      startDate.day(1);
      startDate.startOf('day');
      return startDate;
    },
    endMoment() {
      const endMoment = moment();
      endMoment.day(7);
      endMoment.hour(18);
      endMoment.startOf('hour');
      return endMoment;
    },
    ...mapState([
      'allFood',
      'tags',
    ]),
  },
  methods: {
    clickTag(id) {
      const index = this.selectedTags.indexOf(id);
      if (index !== -1) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(id);
      }
    },
    startVideos() {
      const firstStep = Wistia.api('wvcu18vq9l');
      const secondStep = Wistia.api('xnjec0vnze');
      const thirdStep = Wistia.api('hvnlliwk8y');

      firstStep.bind('end', () => {
        secondStep.play();
      });
      secondStep.bind('end', () => {
        thirdStep.play();
      });
      firstStep.play();
    },
    ...mapActions([
      'getAllFood',
      'getTags',
    ]),
  },
  mounted() {
    this.getAllFood();
    this.getTags().then(() => {
      for (let i = 0; i < this.tags.length; i += 1) {
        const element = this.tags[i];
        this.selectedTags.push(element.id);
      }
    });
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
    color:  #e6d6ba;
    margin-bottom: 30px;
    font-size: 56px;
    font-family: 'Strait', sans-serif;
    font-weight: 400;
  }
  .instructions-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .instructions {
    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    width: 900px;
  }
  .order {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 31%;
  }
  .img-order {
    width: 100px;
    height: auto;
  }
  .title-order {
    text-align: center;
    font-family: 'Strait', sans-serif;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 20px;
  }
  .subtitle-order {
    text-align: center;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
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
    width: 31%;
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
    margin-top: 80px;
  }
  .week-title {
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
    font-family: 'Strait', sans-serif;
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
    // font-family: 'Strait', sans-serif;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
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
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    color:#3e4e35;
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
    flex-wrap: wrap;
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
  .tags-wrapper {
    display: flex;
    width: 100%;
    height: auto;
    background-color: #eae5dc;
    justify-content: center;
  }
  .tags {
    width: 900px;
    display: flex;
    margin: 10px 0 50px 0;
    flex-wrap: wrap;
  }
  .tags-description {
    width: 100%;
    font-family: 'Adelle Sans Book';
    margin-bottom: 10px;
  }
  .tag {
    border: 2px solid #3e4e35;
    padding: 6px 10px;
    cursor: pointer;
    font-family: 'Adelle Sans Book';
    font-size: 14px;
    margin: 5px 0;

    &+ .tag {
      margin-left: 16px;
    }
  }
  .unselected {
    filter: opacity(.5);
  }
  .completar-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #eae5dc;
  }
  .completar {
    display: flex;
    justify-content: center;
    width: 900px;
    margin-bottom: 50px;
  }
  .btn-completar {
    background-color: #414f3a;
    color: #fff;
    border: 2px solid #414f3a;
    width:190px;
    height:48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-family: 'Strait', sans-serif;
    text-decoration: none;
  }
  .categories-menu-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #eae5dc;
  }
  .categories-menu {
    width: 900px;
    display: flex;
    padding: 14px 0 20px 0;
    justify-content: center;
  }
  .category-button {
    font-family: 'Strait', sans-serif;
    padding-bottom: 5px;
    margin: 0 16px;
    border-bottom: 2px solid #414f3a;
    font-size: 20px;
    cursor: pointer;
  }
  ///query
  @media screen and (max-width: 980px) {
    .conoce {
      width: 80%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .video-conoce {
      width: 100%;
      & + .video-conoce {
        margin-top: 25px;
      }
    }
    .instructions {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      //  margin-top: 20px;
    }
    .week-title {
      font-size: 30px;
    }
    .week-date {
      font-size: 30px;
    }
    .alimentos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .menu {
      width: 100%;
      justify-content: center;
    }
    .conoce {
      width: 45%;
    }
    .tags {
      width: 90%;
    }
    .cita-index {
      padding: 0 25px 0 25px;
    }
    .order {
      width: 80%;
      & + .order {
        margin-top: 25px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .img-slide-wrapper {
      height: 136px;
    }
    .slide-title {
      font-size: 25px;
      margin-bottom: 2px;
    }
    .instructions-wrapper {
      // height: 1000px;
    }
    .instructions {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      //  margin-top: 20px;
    }
    .conoce {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      overflow-x: hidden;
    }
    .week-title {
      font-size: 30px;
    }
    .week-date {
      font-size: 30px;
    }
    .conoce {
      width: 90%;
    }
    .tags {
      justify-content: center;
    }
    .cita-index {
      padding: 0 25px 0 25px;
    }
  }
</style>
