<template>
  <div class="account-wrapper">
    <div class="account">
      <div class="header">
        Mi cuenta
      </div>
      <div class="menu">
        <div class="menu-item" @click="$router.push('/account/user')">
          Datos
          <div class="img-line">
            <img src="/mi_cuenta.svg" alt="">
          </div>
        </div>
        <div class="menu-item" @click="$router.push('/account/addresses')">
          Direcciones
          <div class="img-line">
            <img src="/direcciones.svg" alt="">
          </div>
        </div>
        <div class="menu-item" @click="$router.push('/account/wishlist')">
          Lista de deseos
          <div class="img-line">
            <img src="/wish_list.svg" alt="">
          </div>
        </div>
        <div class="menu-item" @click="$router.push('/account/orders')">
          Mis pedidos
          <div class="img-line">
            <img src="/mis_pedidos.svg" alt="">
          </div>
        </div>
      </div>
      <div class="menu-content">
        <router-view></router-view>
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
  background-color: #eae5dc;
}
.account {
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  padding: 20px 0;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: center;
  padding: 30px 0;
  font-size: 56px;
  font-family: 'Strait', sans-serif;
  width: 100%;
}
.menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 29%;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #000;
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 20px 10px 20px;
  box-sizing: border-box;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  cursor: pointer;
}
.menu-content {
  width: 68%;
}
.img-line {
  width: 50px;
}
@media screen and (max-width: 380px) {
  .header {
    font-size: 30px;
  }
}
@media screen and (max-width: 900px) {
  .menu {
    width: 100%;
    padding: 0 20px;
  }
  .menu-content {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
