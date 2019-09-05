<template>
<div class="banner-wrapper">
  <div class="banner">
    <div class="text">
        Se parte de la experiencia Saté
    </div>
    <router-link to="/contact" class="button">CONTÁCTANOS</router-link>
  </div>
</div>
</template>

<style lang="scss" scoped>
.banner-wrapper {
  display: flex;
  width: 100%;
  height: 140px;
  background-color: #403726;
  justify-content: center;
}
.banner {
  display: flex;
  width: 900px;
  color:#fff;
  justify-content: space-between;
  align-items: center;
  font-family: 'Strait', sans-serif;
}
.text {
  font-size: 22px;
}
.button {
  background-color: #403726;
  color: #fff;
  border: 2px solid #fff;
  width: 120px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  text-decoration: none;
}
</style>
