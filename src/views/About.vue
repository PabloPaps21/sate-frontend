<template>
  <div class="about">
    <h1>Componente</h1>
    <detail/>
    <cards/>
  </div>
</template>

<script>

import cards from '@/components/cards.vue';
import detail from '@/components/detail.vue';

export default {
  components: {
    detail,
    cards,
  },
};
</script>
