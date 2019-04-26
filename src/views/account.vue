<template>
  <div class="account-wrapper">
    <div class="account">
      <div class="header">
        Mi cuenta
      </div>
      <div class="menu">
        <div class="menu-item">
          Datos
          <div class="img-line">
            <img src="/mi_cuenta.svg" alt="">
          </div>
        </div>
        <div class="menu-item">
          Direcciones
          <div class="img-line">
            <img src="/direcciones.svg" alt="">
          </div>
        </div>
        <div class="menu-item">
          Lista de deseos
          <div class="img-line">
            <img src="/wish_list.svg" alt="">
          </div>
        </div>
        <div class="menu-item">
          Mis pedidos
          <div class="img-line">
            <img src="/mis_pedidos.svg" alt="">
          </div>
        </div>
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
  flex-direction: column;
  align-items: center;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #000;
  width: 48%;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  cursor: pointer;
}
.img-line {
  width: 50px;
}
@media screen and (max-width: 380px) {
  .header {
    font-size: 30px;
  }
  .menu-item {
    width: 50%;
    font-size: 16px;
  }
}
</style>
