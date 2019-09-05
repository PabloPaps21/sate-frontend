<template>
<div class="wrapper">
  <div class="content">
    <div class="header">
      <div class="header-text">
        Administración
      </div>
    </div>
    <div class="menu">
      <div class="menu-element">
        <div class="link" @click="$router.push('/admin/categories')">
          1. Categorias
        </div>
      </div>
      <div class="menu-element">
        <div class="link" @click="$router.push('/admin/products')">
          2. Productos
        </div>
      </div>
      <div class="menu-element">
        <div class="link" @click="$router.push('/admin/food-schedule')">
          3. Agenda de alimentos
        </div>
      </div>
      <div class="menu-element">
        <div class="link" @click="$router.push('/admin/events')">
          4. Eventos
        </div>
      </div>
      <div class="menu-element">
        <div class="link" @click="$router.push('/admin/week-orders')">
          5. Ordenes
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style style lang="scss" scoped>
.wrapper {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  width: 100%;
  font-family: 'Adelle Sans Book';
}
.content {
  width: 900px;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.header-text {
  font-size: 32px;
}
.menu {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.menu-element {
  width: 50%;
  margin: 16px 0;
  font-size: 24px;
  font-family: 'Strait', sans-serif;
}
.link {
  cursor: pointer;
}
</style>
