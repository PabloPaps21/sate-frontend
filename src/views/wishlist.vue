<template>
  <div class="account-wrapper">
    <div class="wishlist">
      <div class="header">
        Lista de deseos
      </div>
      <div class="wishlist-products">
        <cards
          v-for="product in wishlist"
          :key="product.id"
          :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import cards from '@/components/cards.vue';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('wishlist');
export default {
  components: {
    cards,
  },
  computed: {
    ...mapState([
      'wishlist',
    ]),
  },
  methods: {
    ...mapActions([
      'getWishlist',
    ]),
    ...mapMutations([
      'addToWishlist',
      'removeFromWishlist',
    ]),
  },
  mounted() {
    this.getWishlist();
  },
};
</script>

<style lang="scss" scoped>
.account-wrapper {
  display: flex;
  justify-content: center;
  background-color: #eae5dc;
}
.wishlist {
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 20px 0;
}
.header {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  font-size: 56px;
  font-family: 'Strait', sans-serif;
}
.wishlist-products {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
