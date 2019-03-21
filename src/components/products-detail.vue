<template>
  <div class="background">
    <div class="window">
      <div class="envolver">
        <div class="title-wrapper">
          <div class="title">
            Crear Productos
          </div>
        </div>
        <div class="formulario-contactanos-wrapper">
          <div class="formulario-contactanos">
            <div class="renglon">
              <div class="nombre-campo">
                Nombre
              </div>
              <div class="campo">
                <input type="text" class="campo-formulario" v-model="data.name">
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
                Descripción
              </div>
              <div class="campo">
                <input type="text" class="campo-formulario" v-model="data.description">
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
               Precio
              </div>
              <div class="campo">
                <input type="text" class="campo-formulario" v-model="data.price">
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
               Tipo producto
              </div>
              <div class="campo">
               <select class="campo-formulario" v-model="data.type">
                <option value="FOOD">Mercado</option>
                <option value="MARKET">Alimento</option>
              </select>
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
               Categoria
              </div>
              <div class="campo">
               <select class="campo-formulario" v-model="data.category">
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {{ category.name }}
                </option>
              </select>
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
               Elige una imagen
              </div>
              <div class="campo">
                <input
                  type="file"
                  id="imagen"
                  name="imagen"
                  accept="image/png, image/jpeg"
                  class="campo-formulario">
              </div>
            </div>
            <div class="renglon">
              <div class="nombre-campo">
                Elige etiqueta
              </div>
              <div class="campo">
                <div class="lista-etiqueta">
                  <div v-for="tag in tags" :key="tag.id">
                    <input type="checkbox" name="etiqueta1" :value="tag.id" v-model="data.tags">
                    {{ tag.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="guardar-btn">
              <button class="btn-guardar" style="margin-top:20px;" @click="newProduct">
                Guardar
              </button>
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
  data() {
    return {
      data: {
        name: '',
        description: '',
        price: '',
        type: 'FOOD',
        image: '',
        tags: [],
        category: null,
      },
    };
  },
  computed: {
    ...mapState([
      'tags',
      'categories',
    ]),
  },
  methods: {
    newProduct() {
      this.createProduct(this.data)
        .then(() => {
          this.$emit('close');
        });
    },
    ...mapActions([
      'getTags',
      'getCategories',
      'createProduct',
    ]),
  },
  mounted() {
    this.getTags();
    this.getCategories();
  },
};
</script>

<style lang="scss">
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
    color: #3e4e35;
  }
  .formulario-contactanos-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: #eae5dc;
  }
  .formulario-contactanos {
    display: flex;
    width: 700px;
    text-align: left;
    flex-direction: column;
    justify-content: space-between;
  }
  .campo-formulario{
    display: flex;
    justify-content: center;
    height: 30px;
    border: 2px solid #3e4e35;
    background-color:#eae5dc;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    color:#3e4e35;
  }
  .nombre-campo {
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    color:#3e4e35;
  }
  .guardar-btn {
    display: flex;
    justify-content: flex-end;
  }
  .btn-guardar {
    width: 84px;
    height: 35px;
    background-color:#eae5dc;
    color: #3e4e35;
    border: 2px solid #3e4e35;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-bottom: 20px;
    text-align: right;
  }
  .renglon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .lista-etiqueta {
    color: #3e4e35;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
