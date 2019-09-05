<template>
<div class="row-wrapper">
  <div class="row">
    <div class="image" :style="{ backgroundImage: `url(${image})` }">
    </div>
    <div class="text">
      <div class="title">
        {{ title }}
      </div>
      <div class="description">
        <slot></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.row-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #eae5dc;
}
.row {
  display: flex;
  width: 900px;
  justify-content: space-between;
  align-items: stretch;
}
.image {
  width: 50%;
  padding-bottom: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text {
  width: 47%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  width: 100%;
  font-family: 'Strait', sans-serif;
  font-size: 35px;
  margin-bottom: 20px;
  line-height: 38px;
}
.description {
  font-family: 'Adelle Sans Book';
  width: 100%;
  text-align: justify;
}
@media screen and (max-width: 900px) {
  .row {
    width: 100%;
  }
  .row-wrapper {
    padding: 0 16px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 800px) {
  .row {
    flex-direction: column;
    align-items: center;
  }
  .image {
    margin-bottom: 30px;
  }
  .text {
    width: 100%;
  }
  .title {
    text-align: center;
  }
}
</style>
