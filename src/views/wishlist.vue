<template>
  <div class="account-wrapper">
    <div class="wishlist">
      <div class="wishlist-products">
        <wishlistCard v-for="product in wishlist" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import wishlistCard from '@/components/wishlist-element.vue';

const { mapState, mapMutations, mapActions } = createNamespacedHelpers('wishlist');
export default {
  components: {
    wishlistCard,
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
  font-family: 'Adelle Sans Book';
}
.wishlist {
  display: flex;
  flex-direction: column;
  width: 100%;
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
