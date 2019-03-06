<template>
<div class="envolver">
  <div class="productos-wrapper">
    <div class="productos">
      <div class="productos-opcion">
        <a href="detail.vue"> <img src="/ensalada.png" alt="" class="img-productos"></a>
        <div class="producto-titulo">
          Producto 1
        </div>
        <div class="producto-precio">
          $70.00
        </div>
        <div class="producto-descripcion">
            Clásica preparada con lechuga,
            jitomate, huevo duro y aceitunas
            con aceite de oliva.
        </div>
        <div>
          <a href="#" class="add-producto">Añadir</a>
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
.productos-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.productos{
  display: flex;
  justify-content: space-around;
  width: 900px;
  margin-bottom: 50px;
}
.productos-opcion{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 202px;
}
.img-prductos{
  width: 200px;
  height: 200px;
}
.producto-titulo{
  text-align: center;
  margin-top: 20px;
  font-family: 'Strait', sans-serif;
}
.producto-precio{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Strait', sans-serif;
}
.add-producto{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 30px;
  font-family: 'Strait', sans-serif;
  font-size: 12px;
  color:black;
  background-color: #eae5dc;
  border: 2px solid black;
}
.producto-descripcion{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #4d5d44;
  line-height: 2;
  font-family: 'Strait', sans-serif;
}
</style>
