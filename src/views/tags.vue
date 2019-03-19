<template>
  <div class="envolver">
    <tags/>
    <div class="title-wrapper">
      <div class="title">
        Crear Etiquetas
      </div>
    </div>
    <div class="agregar-wrapper">
      <div class="agregar" style="margin-top: 20px;">
        <div class="agregar-btn">
          <button class="btn-agregar">Agregar</button>
        </div>
      </div>
    </div>
    <div class="renglon-wrapper">
      <div class="renglon">
        <div class="nombre-categoria">
          Ensaladas sin sales
        </div>
        <button class="btn-eliminar">X</button>
      </div>
    </div>
    <div class="renglon-wrapper">
      <div class="renglon">
        <div class="nombre-categoria">
          No Gluten
        </div>
        <button class="btn-eliminar">X</button>
      </div>
    </div>
    <div class="renglon-wrapper">
      <div class="renglon">
        <div class="nombre-categoria">
          Sin Azúcar
        </div>
        <button class="btn-eliminar">X</button>
      </div>
    </div>
  </div>
</template>

<script>
import tags from '@/components/tags-detail.vue';

export default {
  components: {
    tags,
  },
};
</script>
<style style lang="scss" scoped>
  .title-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #eae5dc;
  }
  .title {
    display: flex;
    justify-content: center;
    width: 700px;
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .agregar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
  }
  .agregar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 700px;
    margin-bottom: 50px;
  }
  .btn-agregar {
    width: 85px;
    height: 35px;
    background-color:#eae5dc;
    color: #3e4e35;
    border: 2px solid #3e4e35;
    margin-bottom: 20px;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
  }
  .renglon-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #eae5dc;
  }
  .renglon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 700px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2px solid #3e4e35;
  }
  .nombre-categoria {
    font-family: 'Adelle Sans Book';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    margin-left: 8px;
  }
  .btn-eliminar{
    width: 30px;
    height: 30px;
    background-color:#eae5dc;
    color: #ff2100;
    border: 2px solid #ff2100;
    font-family: 'Strait', sans-serif;
    font-size: 20px;
    margin-right: 8px;
  }
</style>
