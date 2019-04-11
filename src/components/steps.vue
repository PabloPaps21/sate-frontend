<template>
  <div class="steps-wrapper">
    <div class="steps">
      <div
        class="step-wrapper"
        v-for="(step, index) in items"
        :key="index"
        :class="{ completed: value + 1 > index }">
        <div class="step-bridge" v-if="index !== 0"></div>
        <div class="step" @click="changeStep(index)">
          <div class="step-text">
            {{ step }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
    value: Number,
  },
  methods: {
    changeStep(step) {
      if (this.value + 1 > step) {
        this.$emit('input', step);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.steps-wrapper {
  display: flex;
  width: 50%;
  padding: 40px 0;
  justify-content: center;
  font-family: 'Adelle Sans Book';
}
.steps {
  width: 75%;
  display: flex;
  justify-content: center;
}
.step-wrapper {
  display: flex;
  align-items: center;
  flex-grow: 1;

  &:first-of-type {
    flex-grow: 0;
  }
}
.step {
  width: 16px;
  height: 16px;
  background-color: #e6d6ba;
  border-radius: 50%;
  position: relative;
}
.step-bridge {
  flex-grow: 1;
  background-color: #e6d6ba;
  height: 2px;
}
.step-text {
  position: absolute;
  left: 50%;
  top: 20px;
  font-size: 14px;
  transform: translate(-50%, 0);
  color: #e6d6ba;
  white-space: nowrap;
}
.completed {
  .step {
    background-color: #3e4e35 !important;
    cursor: pointer;

    .step-text {
      color: #3e4e35;
    }
  }
  .step-bridge {
    background-color: #3e4e35 !important;
  }
}
@media only screen and (max-width: 600px) {
  .step-text {
    display: none;
  }
}
</style>
