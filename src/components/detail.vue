<template>
  <div class="envolver">
    <div class="detalle-wrapper">
      <div class="detalle-producto">
        <img src="/almohadas.png" alt="" class="img-detalle-producto">
        <div class="detalle">
          <div class="nombre-producto aire">
            Producto temporal
          </div>
          <div class="descripcion-producto aire">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Architecto sapiente, molestiae nesciunt commodi quis aliquid.
          </div>
          <div class="add-to-cart" style="margin-bottom:10px">
            <div class="contador">
              <input type="number" name="quantity" min="1" max="20" class="contador-input">
            </div>
            <button style="margin-left:10px;" class="alimento-add-button">Añadir al carrito</button>
          </div>
          <div class="categoria">
            Categoría: primera.
          </div>
          <div class="etiqueta">
            Etiqueta: primera.
          </div>
        </div>
      </div>
    </div>
    <div class="descripcion-wrapper">
      <div class="descripcion">
        <div class="tags">
          <div class="descripcion-tag descripcion-tag-fuente" style="margin-bottom:30px;">
             Descripción
          </div>
          <div class="valoraciones-tag descripcion-tag-fuente">
            Valoraciones (0)
          </div>
        </div>
        <div class="texto-descripcion descripcion-tag-fuente">
          <div style="margin-bottom:30px;">Descripción</div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Odio molestiae obcaecati fuga vitae eligendi nam animi
             repellat quam itaque neque, aliquid non aperiam praesentium
             ab, molestias unde odit repellendus eos!</p>
        </div>
      </div>
    </div>
    <!-- <div class="prod-rel-wrapper">
      <div class="prod-rel-titulo">
        PRODUCTOS RELACIONADOS
      </div>
    </div>
    <div class="productos-relacionados-w">
      <div class="productos-relacionados">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.detalle-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.detalle-producto{
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.detalle{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 50%;
  font-family: 'Strait', sans-serif;
}
.nombre-producto{
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.aire{
  margin-top: 20px;
  margin-bottom: 20px;
}
.add-to-cart{
  display:flex;
}
.img-detalle-producto{
  height: auto;
  width: 257px;
  margin-right: 91px;
}
.contador-input{
  width: 59px;
  height: 39px;
  border: none;
  color:#414f3a;
  font-size: 20px;
  font-family: 'Strait', sans-serif;
  text-align: center;
}
.alimento-add-button{
  width: 136px;
  height: 39px;
  color: black;
  border: 2px solid black;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
}
.descripcion-wrapper{
  display: flex;
  width:100%;
  justify-content: center;
}
.descripcion{
  display:flex;
  width: 900px;
  justify-content: center;
}
.tags{
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
}
.prod-relacionados-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.prod-relacionados{
  display: flex;
  width: 900px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.ingredientes{
  line-height: 2;
}
.texto-descripcion{
  line-height: 2;
}
.descripcion-tag-fuente{
  font-family: 'Strait', sans-serif;
}
.buscar-bar{
  border: none;
  height: 18px;
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
.conoce-titulo-wrapper{
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
}
.prod-rel-wrapper{
  display: flex;
  width: 100%;
  justify-content: center;
}
.prod-rel-titulo{
  display: flex;
  width: 900px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  font-family: 'Strait', sans-serif;
  font-size: 30px;
}
.productos-relacionados-w{
  display: flex;
  width: 100%;
  justify-content: center;
}
.productos-relacionados{
  display: flex;
  justify-content: space-around;
  width: 900px;
  margin-bottom: 50px;
}
.producto-opcion{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 202px;
}
.img-productos{
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
.producto-descripcion{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 20px;
  color: #4d5d44;
  line-height: 2;
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
  border: 2px solid black;
}
</style>
