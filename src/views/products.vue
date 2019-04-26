<template>
  <div class="envolver">
    <products v-if="openModal" @close="openModal = false"/>
    <div class="title-wrapper">
      <div class="title">
        Crear Productos
      </div>
    </div>
    <div class="agregar-wrapper">
      <div class="agregar" style="margin-top: 20px;">
        <div class="agregar-btn">
          <button class="btn-agregar" @click="openModal = true">Agregar</button>
        </div>
      </div>
    </div>
    <div class="renglon-wrapper" v-for="product in products" :key="product.id">
      <div class="renglon">
        <div class="img-prod">
          <img src="avion.png" alt="" class="img-prod">
        </div>
        <div class="nombre-categoria">
          {{ product.name }}
        </div>
        <div class="precio">
          ${{ product.price }}
        </div>
        <button class="btn-eliminar" @click="deleteProduct(product.id)">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import products from '@/components/products-detail.vue';

const { mapState, mapActions } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
      openModal: false,
    };
  },
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
  components: {
    products,
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style style lang="scss" scoped>
  .title-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #eae5dc;
  }
  .title {
    display: flex;
    justify-content: center;
    width: 700px;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .agregar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .agregar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 700px;
    margin-bottom: 50px;
  }
  .btn-agregar {
    width: 85px;
    height: 35px;
    background-color:#eae5dc;
    color: #3e4e35;
    border: 2px solid #3e4e35;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .renglon-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #eae5dc;
  }
  .renglon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    height: 60px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid #3e4e35;
  }
  .nombre-categoria {
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
  }
  .btn-eliminar{
    width: 30px;
    height: 30px;
    background-color:#eae5dc;
    color: #ff2100;
    border: 2px solid #ff2100;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-right: 8px;
  }
  .img-prod {
    width: 60px;
    height: auto;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 8px;
  }
  @media screen and (max-width: 980px) {
    .title {
      width: 90%;
    }
    .renglon {
      width: 90%;
    }
    .agregar {
      width: 90%;
      justify-content: center;
    }
  }
  @media screen and (max-width:  375px) {
    .title {
      font-family: 'Strait', sans-serif;
      font-size: 25px;
    }
  }
</style>
