<template>
  <label class="label">
    <div v-if="name" class="label-text">{{ name }}</div>
    <input
      class="label-input"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)">
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  flex-direction: column;
  width: 100%;
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

  &:focus {
    border: 2px solid #414f3a;
    padding: 7px 9px;
  }
}
</style>
