<template>
  <div>
    <NewAddress class="new-button" />
    <div class="address"
      v-for="address in user.addresses"
      :key="address.id">
      <div class="address-row">
        {{ address.street }}, {{ address.number_ext }}, {{ address.number_int }}.
      </div>
      <div class="address-row">
        {{ address.district }}, {{ address.city }}. {{ address.state }}
      </div>
      <div class="address-row">
        Tel. {{ address.phone_number }}
      </div>
    </div>
  </div>
</template>

<script>
import NewAddress from '@/components/NewAddress.vue';
import { createNamespacedHelpers } from 'vuex';

const { mapState } = createNamespacedHelpers('user');

export default {
  computed: {
    ...mapState([
      'user',
    ]),
  },
  components: {
    NewAddress,
  },
};
</script>

<style lang="scss" scoped>
.address {
  font-family: 'Adelle Sans Book';
  border: 1px solid rgb(196, 196, 196);
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 24px;
}
.new-button {
  margin-bottom: 24px;
}
.address-row {
  & + .address-row {
    margin-top: 14px;
  }
}
</style>
