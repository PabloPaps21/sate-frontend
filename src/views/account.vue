<template>
  <div class="account-wrapper">
    <div class="account">
      <div class="header">
        Mi cuenta
      </div>
      <div class="menu">
        <div class="menu-item">Datos</div>
        <div class="menu-item">Direcciones</div>
        <div class="menu-item">Lista de deseos</div>
        <div class="menu-item">Mis pedidos</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.account-wrapper {
  display: flex;
  justify-content: center;
}
.account {
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 20px 0;
}
.header {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  font-size: 56px;
  font-family: 'Strait', sans-serif;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.menu-item {
  border: 2px solid #000;
  width: 48%;
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  cursor: pointer;
}
</style>
