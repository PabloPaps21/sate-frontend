<template>
  <div>
    <NewAddress class="new-button" />
    <div class="address"
      v-for="address in user.addresses"
      :key="address.id">
      <div class="remove-button" @click="deleteAddress(address.id)">X</div>
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

const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  methods: {
    ...mapActions([
      'deleteAddress',
    ]),
  },
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
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 24px;
  position: relative;
}
.new-button {
  margin-bottom: 24px;
}
.remove-button {
  position: absolute;
  right: 16px;
  top: 16px;
  cursor: pointer;
}
.address-row {
  & + .address-row {
    margin-top: 14px;
  }
}
</style>
