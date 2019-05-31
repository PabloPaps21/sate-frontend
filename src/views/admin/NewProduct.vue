<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">Nuevo producto</div>
      <form class="form" @submit.prevent="createNewProduct">
        <div class="form-element">
          <AdminInput
            name="Nombre del producto"
            v-model="data.name" />
        </div>
        <div class="form-element">
          <label class="price-label">
            <div class="label-text">Precio</div>
            <div class="price-input">
              $<input
                class="label-input"
                type="text"
                v-model="data.price">
            </div>
          </label>
        </div>
        <div class="form-element">
          <AdminInput
            name="Descripción"
            v-model="data.description" />
        </div>
        <div class="form-element">
          <div class="label-text">Tipo</div>
          <div class="radio-select">
            <div
              class="radio-button"
              @click="data.type = 'FOOD'"
              :class="{ 'active-radio': data.type === 'FOOD' }">
              Comida
            </div>
            <div
              class="radio-button"
              @click="data.type = 'MARKET'"
              :class="{ 'active-radio': data.type === 'MARKET' }">
              Mercado
            </div>
          </div>
        </div>
        <div class="form-element">
          <div class="image-label">
            <div class="label-text">Imagen principal</div>
            <label class="image-input">
              <div
                class="image-preview"
                :style="{ backgroundImage: `url(${data.image})` }">
              </div>
              {{ data.image ? 'Cambiar imagen' : 'Subir imagen' }}
              <input type="file" @change="uploadImage($event)">
            </label>
          </div>
        </div>
        <div class="line"></div>
        <div style="width: 100%;" v-show="data.type === 'FOOD'">
          <div class="form-element-full">
            <div class="label-text">Categoria</div>
            <div class="radio-select">
              <div
                class="radio-button"
                @click="data.category = category.id"
                :class="{ 'active-radio': data.category === category.id }"
                style="margin: 5px;"
                v-for="category in categories" :key="category.id">
                {{ category.name }}
              </div>
            </div>
          </div>
          <div class="form-element-full">
            <div class="label-text">Etiquetas</div>
            <div class="radio-select">
              <div
                class="radio-button"
                @click="clickTag(tag.id)"
                :class="{ 'active-radio': data.tags.includes(tag.id) }"
                style="margin: 5px;"
                v-for="tag in tags" :key="tag.id">
                {{ tag.name }}
              </div>
            </div>
          </div>
        </div>
        <div style="width: 100%;" v-show="data.type === 'MARKET'">
          <div class="form-element-full">
            <div class="label-text">Imagenes</div>
            <div class="images-list">
              <div
                v-for="(url, index) in data.images"
                :key="index"
                class="uploaded-image"
                :style="{ backgroundImage: `url(${url})` }"
                @click="clickImage(url)">
              </div>
              <ImageUpload @completed="addImage" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div style="width: 100%; display: flex; justify-content: flex-end;">
          <div class="button" @click="createNewProduct">Enviar</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { createNamespacedHelpers } from 'vuex';
import AdminInput from '@/components/AdminInput.vue';
import ImageUpload from '@/components/ProductImageUpload.vue';

const { mapActions, mapState } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
      editId: null,
      data: {
        name: '',
        price: null,
        description: '',
        image: '',
        type: null,
        category: null,
        tags: [],
        images: [],
      },
    };
  },
  components: {
    AdminInput,
    ImageUpload,
  },
  computed: {
    ...mapState([
      'categories',
      'tags',
      'product',
    ]),
  },
  methods: {
    createNewProduct() {
      if (this.editId) {
        this.editProduct({ id: this.editId, data: this.data })
          .then(() => {
            this.$router.push('/admin/products');
          });
      } else {
        this.createProduct(this.data)
          .then(() => {
            this.$router.push('/admin/products');
          });
      }
    },
    clickTag(tagId) {
      const index = this.data.tags.indexOf(tagId);
      if (index > -1) {
        this.data.tags.splice(index, 1);
      } else {
        this.data.tags.push(tagId);
      }
    },
    uploadImage(event) {
      const fd = new FormData();
      const file = event.target.files[0];
      const url = `${process.env.VUE_APP_SERVER_URL}/public-upload`;
      fd.append('image', file);
      axios.post(url, fd)
        .then(({ data }) => {
          this.data.image = data.src;
        });
    },
    clickImage(url) {
      const index = this.data.images.indexOf(url);
      this.data.images.splice(index, 1);
    },
    addImage(url) {
      this.data.images.push(url);
    },
    ...mapActions([
      'getCategories',
      'getTags',
      'createProduct',
      'getProduct',
      'editProduct',
    ]),
  },
  mounted() {
    this.getCategories();
    this.getTags();

    this.editId = this.$route.params.id;
    if (this.editId) {
      this.getProduct(this.editId).then(() => {
        this.data.name = this.product.name;
        this.data.price = this.product.price;
        this.data.description = this.product.description;
        this.data.image = this.product.image;
        this.data.type = this.product.type;
        this.data.category = this.product.category_id;

        for (let i = 0; i < this.product.tags.length; i += 1) {
          const element = this.product.tags[i];
          this.data.tags.push(element.id);
        }

        for (let i = 0; i < this.product.images.length; i += 1) {
          const element = this.product.images[i];
          this.data.images.push(element.image_url);
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Adelle Sans Book';
}
.content {
  width: 900px;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header {
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%;
}
.form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.form-element {
  width: 48%;
  margin: 12px 0;
}
.form-element-full {
  width: 100%;
  margin: 12px 0;
}
.price-label {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.label-text {
  color: rgb(82, 82, 82);
  margin-bottom: 8px;
}
.label-input {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 10px;
  color: rgb(82, 82, 82);
  width: 100%;

  &:focus {
    border: 2px solid #414f3a;
    padding: 7px 9px;
  }
}
.price-input {
  display: flex;
  align-items: baseline;

  .label-input {
    margin-left: 8px;
  }
}
.radio-select {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: rgb(82, 82, 82);
}
.radio-button {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
  padding: 10px 30px;
  color: rgb(82, 82, 82);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
}
.active-radio {
  border: 2px solid #414f3a;
  padding: 9px 29px;
}
input[type=file] {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.image-input {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
  font-size: 16px;
  color: rgb(82, 82, 82);
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  line-height: 20px;
  cursor: pointer;
}
.image-preview {
  height: 38px;
  background-color: #414f3a;
  width: 38px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.line {
  border-bottom: 1px solid rgb(196, 196, 196);
  width: 100%;
  margin: 20px 0;
}
.images-list {
  display: flex;
}
.uploaded-image {
  border: 1px dotted rgb(196, 196, 196);
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
}
.button {
  background-color: #414f3a;
  color: white;
  padding: 12px 30px;
  font-size: 15px;
}
</style>
