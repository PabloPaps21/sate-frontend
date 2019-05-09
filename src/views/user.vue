<template>
  <div class="account-wrapper">
    <div class="user-item">
      <div>Nombre completo:</div>
      <div>{{ user.name }}</div>
    </div>
    <div class="user-item">
      <div>Correo electrónico:</div>
      <div>{{ user.email }}</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('user');
export default {
  computed: {
    ...mapState([
      'user',
    ]),
  },
  methods: {
    ...mapActions([
      'getUser',
    ]),
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss" scoped>
.account-wrapper {
  display: flex;
  font-family: 'Adelle Sans Book';
  flex-direction: column;
  width: 100%;
}
.user-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
</style>
