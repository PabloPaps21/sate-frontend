<template>
  <div id="app">
    <!-- ¿¿¿<div id="nav">
       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/inicio">Inicio</router-link>|
      <router-link to="/food">Comida en casa</router-link>|
      <router-link to="/market">Mercado digital</router-link>|
      <router-link to="/experience">Experiencias culinarias</router-link>|
      <router-link to="/design">Food design</router-link>|
      <router-link to="/contact">Contacto</router-link>
    </div> -->
    <div class="nav-bar-wrapper">
      <div class="nav-bar">
        <img src="/logo.png" alt="Saté" class="logo">
        <div class="elementos">
          <div class="search-bar" style="margin-right:10xp;">
            <input type="search" placeholder="Buscar productos..." class="buscar-bar">
          </div>
          <div class="cart">
             <p>0 productos</p>
             <a href="cuenta.html"><i class="fas fa-shopping-basket logo-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-link-wrapper">
      <div class="nav-link">
        <div class="link">
          <router-link to="/inicio" class="margin-link">Inicio</router-link>
          <router-link to="/food" class="margin-link">Comida en casa</router-link>
          <router-link to="/market" class="margin-link">Mercado digital</router-link>
          <router-link to="/experience" class="margin-link">Experiencias culinarias</router-link>
          <router-link to="/design" class="margin-link">Food design</router-link>
          <router-link to="/contact" class="margin-link">Contacto</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <footer>
      <div class="footer-wrapper">
        <div class="footer">
          <!-- 1  redes-->
          <div class="footer-opciones" >
            <div class="titulo-opcion-footer">
              Síguenos en:
            </div>
            <div class="redes-sociales">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-instagram instagram"></i>
            </div>
            <div class="terminos">
              <a href="#" class="footer-link">Terminos y condiciones</a>
            </div>
            <div class="politicas">
              <a href="#" class="footer-link">Políticas de privacidad</a>
            </div>
          </div>
          <!-- 2 direccion-->
          <div class="footer-opciones">
            <div class="titulo-opcion-footer">
              Comunícate con nosotros
            </div>
            <div class="footer-margen contacto-footer">
              contacto@sate.com.mx
            </div>
            <div class="contacto-footer direccion">
              Adolfo Prieto 1521,
              Col del Valle Centro,
              03100 Ciudad de México, CDMX
            </div>
          </div>
          <!-- 3 mapa-->
          <div class="footer-opciones">
            <div class="titulo-opcion-footer">
              Encuentranos en:
            </div>
            <div class="mapa-footer">
              <img src="/mapa.png" alt="mapa" class="mapa-footer">
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.nav-bar-wrapper{
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #3e4e35;
  justify-content: center;
}
.nav-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
}
.logo{
  width: auto;
  height: 71px;
}
.elementos{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart{
  display: flex;
  color: #e6d6ba;
}
.nav-link-wrapper{
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #414f3a;
  justify-content: center;
  /* position: fixed;
  z-index: 1; */
}
.nav-link{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
}
.link{
  font-family: 'Strait', sans-serif;
  font-weight: 400;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
}
.margin-link{
  /* margin-right: 40px; */
  color: #e6d6ba;
}
.buscar-bar{
  border: none;
  height: 18px;
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
.footer-wrapper{
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #414f3a;
}
.footer{
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.footer-opciones{
  display: flex;
  flex-direction: column;
  width: 330px;
  color:#eae5dc;
  text-align: left;
}
.titulo-opcion-footer{
  font-family: 'Strait', sans-serif;
  margin-bottom: 30px;
  color:#eae5dc;
  text-align: left;
}
.footer-margen{
  margin-top: 10px;
  margin-bottom: 20px;
}
.terminos{
  display: flex;
  margin-top: 30px;
  color:#eae5dc;
  font-family: 'Strait', sans-serif;
}
.politicas{
  display: flex;
  margin-top: 35px;
  margin-bottom:44px;
  color:#eae5dc;
  font-family: 'Strait', sans-serif;
}
.mapa-footer{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5px;
  width: 450px;
  height: auto;
}
</style>
