<template>
  <div id="app">
    <div class="nav-bar-wrapper">
      <div class="nav-bar">
        <img src="/logo.svg" alt="Saté" class="logo" @click="$router.push('/')">
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
            <div v-if="user" @click="$router.push('/account')" style="margin-right: 18px;">
              Cuenta
            </div>
            <div v-if="user" @click="logout">Cerrar sesión</div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-movil-wrapper">
      <div class="nav-movil">
        <img src="/logo.svg" alt="Saté" class="logo" @click="$router.push('/')">
        <i class="fa fa-bars barras" aria-hidden="true" @click="showMobileNav = true"></i>
      </div>
    </div>
    <div class="nav-link-wrapper" :class="[ showNavbar ? '': 'hidenav']">
      <div class="nav-link">
        <div class="link">
          <router-link to="/" class="margin-link">Inicio</router-link>
          <router-link to="/food" class="margin-link">Comida en casa</router-link>
          <router-link to="/market" class="margin-link">Mercado digital</router-link>
          <router-link to="/experience" class="margin-link">Experiencias culinarias</router-link>
          <router-link to="/design" class="margin-link">Food design</router-link>
          <router-link to="/contact" class="margin-link">Contacto</router-link>
          <router-link to="/calendar" class="margin-link">Calendario</router-link>
        </div>
      </div>
    </div>
    <router-view />
    <footer>
      <div class="footer-wrapper">
        <div class="footer">
          <!-- 1  redes-->
          <div class="footer-opciones" >
            <div class="titulo-opcion-footer">
              Síguenos en:
            </div>
            <div class="redes-sociales">
              <i class="fab fa-facebook">
                <span class="redes-fuente">
                  <a href="https://www.facebook.com/sateconnections/" style="color: #e6d6ba;" target="_blank">
                    Facebook
                  </a>
                </span>
              </i>
              <i class="fab fa-instagram instagram">
                <span class="redes-fuente">
                  <a href="https://www.instagram.com/sate.connections/?hl=es-la" style="color: #e6d6ba;" target="_blank">
                  Instagram
                  </a>
                </span>
              </i>
            </div>
            <div class="terminos">
             <router-link to="/tyc" class="margin-link">Términos y Condiciones</router-link>
            </div>
            <div class="politicas">
              <router-link to="/politics" class="margin-link">Políticas de privacidad</router-link>
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
              <div class="mapouter"><div class="gmap_canvas"><iframe width="300" height="170" id="gmap_canvas" src="https://maps.google.com/maps?q=Adolfo%20Prieto%201521%2C%20Col%20del%20Valle%20Centro&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <cart @close="showCart = false" :show="showCart"/>
    <!-- menu hamburguesa -->
    <div class="menu" v-show="showMobileNav">
      <div class="tache">
        <!-- <i class="fas fa-times" aria-hidden="true" @click="showMobileNav = false"></i> -->
          <img src="/tache.svg" aria-hidden="true"
          @click="showMobileNav = false" class="img-cerrar">
      </div>
      <div class="menu-links">
        <img src="/logo.svg" alt="Saté" class="logo" @click="$router.push('/')">
        <div class="opciones-movil">
          <div class="login margin-link-movil">
            <div v-if="!user" @click="$router.push('/login')">Iniciar sesión/Registrarse</div>
            <div v-if="user" @click="$router.push('/account')" style="margin-right: 18px;">
              Cuenta
            </div>
            <div v-if="user" @click="logout">Cerrar sesión</div>
          </div>
          <div class="cart margin-link-movil" @click="showCart = true">
              <p>{{ totalItems }} productos</p>
              <a href="#"><i class="fas fa-shopping-basket logo-cart"></i></a>
          </div>
          <router-link to="/" class="margin-link-movil">Inicio</router-link>
          <router-link to="/food" class="margin-link-movil">Comida en casa</router-link>
          <router-link to="/market" class="margin-link-movil">Mercado digital</router-link>
          <router-link to="/experience" class="margin-link-movil">
          Experiencias culinarias</router-link>
          <router-link to="/design" class="margin-link-movil">Food design</router-link>
          <router-link to="/contact" class="margin-link-movil">Contacto</router-link>
        </div>
      </div>
    </div>
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
      prevScrollPos: null,
      showNavbar: true,
      showMobileNav: false,
    };
  },
  watch: {
    $route(to) {
      this.showMobileNav = false;
      this.getUser().then(() => {
        if (to.matched.some(record => record.meta.requiresAdmin)) {
          if (!this.user || (this.user && !this.user.is_admin)) {
            this.$router.push('/');
          }
        }
      });
    },
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
    handleScroll() {
      const currentScrollPos = window.pageYOffset;
      if (this.prevScrollPos > currentScrollPos) {
        this.showNavbar = true;
      } else {
        this.showNavbar = false;
      }
      this.prevScrollPos = currentScrollPos;
    },
    ...mapActions([
      'getUser',
      'logout',
    ]),
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    this.prevScrollPos = window.pageYOffset;
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
   font-family: 'Strait', sans-serif;
}
.nav-movil-wrapper {
  display: none;
}
.nav-movil {
  display: none;
}
.hidenav {
  top: 0px !important;
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
  position: sticky;
  top: 90px;
  z-index: 90;
  transition: top 0.2s ease-in-out;
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
  margin-bottom: 16px;
  color:#e6d6ba;
  text-align: left;
  font-size: 16px;
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
  flex-direction: column;
  font-family: 'Strait', sans-serif;
  margin-right: 30px;
  margin-top: 20px;
  color: #e6d6ba;
}
.redes-fuente {
  font-family: 'Strait', sans-serif;
  font-size: 16px;
  color: #e6d6ba;
  text-decoration: none;
}
.instagram {
  margin-top:20px;
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
  font-size: 16px;
}
.logos-redes {
  width: 20px;
  height: 20px;
}
.mapouter {
  position:relative;
  text-align:right;
  height:170px;
  width:300px;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:170px;
  width:300px;
}
@media screen and (max-width: 980px) {
  .footer {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .mapa-footer {
    width: 280px;
  }
  .nav-bar-wrapper {
    display: none;
  }
  .nav-link-wrapper{
    display: none;
  }
  .nav-movil-wrapper {
    display: flex;
    justify-content: center;
    background-color:  #414f3a;
    padding: 10px 0 10px 0;
    width: 100%;
  }
.nav-movil {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  .barras {
    display: flex;
    justify-content: center;
    color:#e6d6ba;
    width: 50px;
  }
  .menu {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #3e4e35;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 100;
    flex-direction: column;
  }
  .opciones-movil {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .margin-link-movil {
    color: #e6d6ba;
    padding: 20px 0 20px 0;
    font-family: 'Strait', sans-serif;
    font-size: 25px;
  }
  .menu-links {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .tache {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    color: #e6d6ba;
    font-size: 30px;
  }
  .img-cerrar {
    width: 25px;
    height: 25px;
  }
}
@media screen and (max-width: 700px) {
  .footer {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
  .mapa-footer {
    width: 280px;
  }
  .nav-bar-wrapper {
    display: none;
  }
  .nav-link-wrapper{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .margin-link-movil {
    font-size: 18px;
  }
  .login {
    margin-left: 0px;
  }
  .footer-opciones {
    width: 90%;
  }
  .mapa-footer {
    width: 100%;
  }
}
</style>
