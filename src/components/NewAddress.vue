<template>
<div class="new-address-wrapper">
  <div class="new-address" v-if="!open" @click="open = true">
    <div style="width: 100%; display: flex; justify-content: space-between;">
      Agregar dirección
      <div>+</div>
    </div>
  </div>
  <div class="new-address" v-else>
    <label class="label">
      <div class="label-text">Calle*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.street">
    </label>
    <label class="label label-half">
      <div class="label-text">Numero exterior*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.number_ext">
    </label>
    <label class="label label-half">
      <div class="label-text">Numero interior</div>
      <input
        class="label-input"
        type="text"
        v-model="data.number_int">
    </label>
    <label class="label">
      <div class="label-text">Colonia*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.district">
    </label>
    <label class="label">
      <div class="label-text">Ciudad*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.city">
    </label>
    <label class="label">
      <div class="label-text">Estado*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.state">
    </label>
    <label class="label label-half">
      <div class="label-text">Codigo postal*</div>
      <input
        class="label-input"
        type="text"
        v-model="data.postal_code">
    </label>
    <label class="label label-half">
      <div class="label-text">Número de teléfono</div>
      <input
        class="label-input"
        type="text"
        v-model="data.phone_number">
    </label>
    <div class="submit-wrapper">
      <div class="submit" @click="newAddress">
        Guardar
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('user');
export default {
  data() {
    return {
      data: {
        street: '',
        number_ext: '',
        number_int: '',
        district: '',
        city: '',
        state: '',
        postal_code: '',
        phone_number: '',
      },
      open: false,
    };
  },
  methods: {
    newAddress() {
      this.createAddress(this.data).then(() => {
        this.data = {
          street: '',
          number_ext: '',
          number_int: '',
          district: '',
          city: '',
          state: '',
          postal_code: '',
          phone_number: '',
        };
        this.open = false;
      });
    },
    ...mapActions([
      'createAddress',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.new-address-wrapper {
  width: 100%;
}
.new-address {
  width: 100%;
  font-family: 'Adelle Sans Book';
  padding: 24px;
  border: 1px solid gray;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.label {
  display: flex;
  flex-direction: column;
  width: 100%;

  & + .label {
    margin-top: 16px;
  }
}
.label-text {
  color: rgb(82, 82, 82);
  margin-bottom: 8px;
}
.label-input {
  border: 1px solid rgb(196, 196, 196);
  font-size: 16px;
  padding: 8px 10px;
  color: rgb(82, 82, 82);

  &:focus {
    border: 2px solid #414f3a;
    padding: 7px 9px;
  }
}
.label-half {
  width: 48%;
}
.submit-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.submit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  font-size: 15px;
  color:black;
  margin-top: 30px;
  height: 38px;
  border: 1px solid rgb(196, 196, 196);
  cursor: pointer;
}
</style>
