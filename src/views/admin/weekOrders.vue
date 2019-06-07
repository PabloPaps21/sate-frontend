<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">Entregas de la semana</div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';


const { mapState } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState([
      'orders',
    ]),
  },
  mounted() {
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
  margin-bottom: 40px;
  width: 100%;
}

</style>
