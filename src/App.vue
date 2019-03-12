<template>
  <div id="app">
    <div class="nav-bar-wrapper">
      <div class="nav-bar">
        <img src="/logo.png" alt="Saté" class="logo" @click="$router.push('/')">
        <div class="elementos">
          <div class="search-bar" style="margin-right:10xp;">
            <input type="search" placeholder="Buscar productos..." class="buscar-bar">
          </div>
          <div class="cart" @click="showCart = true">
             <p>{{ totalItems }} productos</p>
             <a href="#"><i class="fas fa-shopping-basket logo-cart"></i></a>
          </div>
          <div class="login">
            <div v-if="!user" @click="$router.push('/login')">Iniciar sesión/Registrarse</div>
            <div v-else @click="logout">Cerrar sesión</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-link-wrapper">
      <div class="nav-link">
        <div class="link">
          <router-link to="/" class="margin-link">Inicio</router-link>
          <router-link to="/food" class="margin-link">Comida en casa</router-link>
          <router-link to="/market" class="margin-link">Mercado digital</router-link>
          <router-link to="/experience" class="margin-link">Experiencias culinarias</router-link>
          <router-link to="/design" class="margin-link">Food design</router-link>
          <router-link to="/contact" class="margin-link">Contacto</router-link>
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
            <div class="footer-margen direccion">
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
    <cart @close="showCart = false" :show="showCart"/>
  </div>
</template>
<script>
import axios from 'axios';
import { createNamespacedHelpers } from 'vuex';
import cart from '@/components/cart.vue';

const { mapActions, mapState } = createNamespacedHelpers('user');

export default {
  data() {
    return {
      showCart: false,
    };
  },
  computed: {
    totalItems() {
      return this.$store.getters['cart/cartTotalItems'];
    },
    ...mapState([
      'user',
    ]),
  },
  components: {
    cart,
  },
  methods: {
    ...mapActions([
      'getUser',
      'logout',
    ]),
  },
  mounted() {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      this.getUser();
    }
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.nav-bar-wrapper {
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #3e4e35;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
}
.logo {
  width: auto;
  height: 71px;
  cursor: pointer;
}
.elementos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart {
  display: flex;
  color: #e6d6ba;
  cursor: pointer;
}
.nav-link-wrapper {
  display: flex;
  height: 90px;
  width: 100%;
  background-color: #414f3a;
  justify-content: center;
  /* position: fixed;
  z-index: 1; */
}
.nav-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
}
.link {
  font-family: 'Strait', sans-serif;
  font-weight: 400;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 14px;
}
.margin-link {
  /* margin-right: 40px; */
  color: #e6d6ba;
}
.buscar-bar {
  border: none;
  height: 18px;
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
.footer-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: #414f3a;
}
.footer {
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.footer-opciones {
  display: flex;
  flex-direction: column;
  width: 330px;
  color:#e6d6ba;
  text-align: left;
  font-size: 16px;
}
.titulo-opcion-footer {
  font-family: 'Strait', sans-serif;
  margin-bottom: 30px;
  color:#e6d6ba;
  text-align: left;
}
.footer-margen {
  margin-top: 10px;
  margin-bottom: 20px;
}
.terminos {
  display: flex;
  margin-top: 30px;
  color:#e6d6ba;
  font-family: 'Strait', sans-serif;
}
.politicas {
  display: flex;
  margin-top: 35px;
  margin-bottom:44px;
  color:#e6d6ba;
  font-family: 'Strait', sans-serif;
}
.mapa-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:5px;
  width: 100%;
  height: auto;
}
.redes-sociales {
  display: flex;
  font-size: 25px;
  margin-right: 30px;
  margin-top: 20px;
  color: #e6d6ba;
}
.instagram {
  margin-left:50px;
  color:#e6d6ba;
}
.footer-link {
  color: #e6d6ba;
}
.logo-cart {
  color: #e6d6ba;
  margin-left: 25px;
  margin-right: 6px;
}
.login{
  color: #e6d6ba;
  font-size: 16px;
  margin-left: 30px;
  display: flex;
  cursor: pointer;
}
.direccion {
  font-family: 'Strait', sans-serif;
  line-height: 24px;
}
@media screen and (max-width: 500px) {
  .footer {
    flex-direction: column;
  }
  .mapa-footer {
    width: 361px;
  }
}
</style>
