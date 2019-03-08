<template>
  <div class="about">
    <div class="background">
      <div class="window">
        <detail/>
      </div>
    </div>
  </div>
</template>

<script>
import detail from '@/components/detail.vue';

export default {
  components: {
    detail,
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(19, 18, 18, 0.555);
  padding-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
.window {
  width: 900px;
  background-color: #eae5dc;
  padding: 40px 20px;
}
</style>
