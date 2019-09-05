<template>
  <div class="wrapper">
    <div class="content">
      <div class="column">
        <div class="header">Categorias</div>
        <div class="input-wrapper">
          <AdminInput
            class="main-input"
            v-model="categoryName" />
          <div class="button" @click="newCategory">+</div>
        </div>
        <div
          class="item-card"
          v-for="category in categories"
          :key="category.id">
          {{ category.name }}
          <div class="remove-button" @click="deleteCategory(category.id)">X</div>
        </div>
      </div>
      <div class="column">
        <div class="header">Etiquetas</div>
        <div class="input-wrapper">
          <AdminInput
            class="main-input"
            v-model="tagName" />
          <div class="button" @click="newTag">+</div>
        </div>
        <div
          class="item-card"
          v-for="tag in tags"
          :key="tag.id">
          {{ tag.name }}
          <div class="remove-button" @click="deleteTag(tag.id)">X</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AdminInput from '@/components/AdminInput.vue';

const { mapState, mapActions } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
      tagName: '',
      categoryName: '',
    };
  },
  computed: {
    ...mapState([
      'categories',
      'tags',
    ]),
  },
  methods: {
    newCategory() {
      this.createCategory({ name: this.categoryName })
        .then(() => {
          this.categoryName = '';
        });
    },
    newTag() {
      this.createTag({ name: this.tagName })
        .then(() => {
          this.tagName = '';
        });
    },
    ...mapActions([
      'getCategories',
      'deleteCategory',
      'createCategory',
      'getTags',
      'deleteTag',
      'createTag',
    ]),
  },
  components: {
    AdminInput,
  },
  mounted() {
    this.getCategories();
    this.getTags();
  },
};
</script>
<style style lang="scss" scoped>
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
.column {
  width: 48%;
  display: flex;
  flex-direction: column;
}
.header {
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%;
}
.item-card {
  width: 100%;
  border: 1px solid rgb(196, 196, 196);
  padding: 12px 10px;
  margin: 6px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.label-input {
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 10px;
  color: #525252;
}
.input-wrapper {
  display: flex;
  align-items: stretch;
  margin-bottom: 14px;
  justify-content: space-between;
}
.main-input {
  width: 88%;
}
.button {
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  background-color: #414f3a;
  color: white;
  font-size: 24px;
  padding-top: 3px;
  cursor: pointer;
}
.remove-button {
  cursor: pointer;
}
</style>
