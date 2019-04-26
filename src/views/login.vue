<template>
  <div class="envolver">
    <div class="cuenta-wrapper">
      <div class="cuenta">
        <div class="cuenta-titulo">
          Mi cuenta
        </div>
      </div>
    </div>
    <div class="acceder-wrapper">
      <div class="acceder">
        <div class="acceder-titulo">
          Acceder
        </div>
      </div>
    </div>
    <div class="formulario-cuenta-wrapper">
      <div class="formulario">
        <div class="pass-usr">
          Correo electrónico  <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="text" class="campo-formulario" v-model="data.email">
        </div>
        <div class="pass-usr" style="margin-top: 20px;">
          Contraseña <span class="advertencia">*</span>
        </div>
        <div class="campo">
          <input type="password" class="campo-formulario" v-model="data.password">
        </div>
      </div>
    </div>
    <div class="confirmar-wrapper">
      <div class="confirmar" style="margin-top: 20px;">
        <div class="acceder-btn">
          <button class="btn-acceder" @click="loginButton">Acceder</button>
        </div>
        <!-- <div class="recuerdame-confirmar">
          <input type="checkbox">Recuérdame
        </div> -->
      </div>
    </div>
    <div class="olvidaste-wrapper">
      <div class="olvidaste">
        <div class="titulo-olvidaste">
          <a href="#" class="titulo-olvidaste">¿Olvidaste tu contraseña</a>
        </div>
      </div>
    </div>
    <div class="registro-wrapper">
      <div class="registro">
        <div class="titulo-registro">
           <router-link to="/register" class="titulo-registro">Regístrate en Saté</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapActions } = createNamespacedHelpers('user');

export default {
  data() {
    return {
      data: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    loginButton() {
      this.login(this.data).then(() => {
        this.$router.push('/');
      });
    },
    ...mapActions([
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.cuenta-wrapper {
  display: flex;
  width: 100%;
  background-color: #eae5dc;
  justify-content: center;
}
.cuenta {
  display: flex;
  width: 900px;
  justify-content: center;
}
.cuenta-titulo {
  font-size: 30px;
  margin-top: 10%;
  margin-bottom: 10%;
  font-family: 'Strait', sans-serif;
}
.acceder-wrapper {
  display: flex;
  width: 100%;
  background-color: #eae5dc;
  justify-content: center;
}
.acceder {
  display: flex;
  width: 600px;
}
.acceder-titulo {
  font-size: 30px;
  margin-bottom: 5%;
  font-family: 'Strait', sans-serif;
}
.formulario-cuenta-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.formulario-cuenta {
  display: flex;
  width: 900px;
  flex-direction: column;
}
.advertencia {
  color:red;
}
.campo-formulario {
  display: flex;
  width: 600px;
  margin-top: 20px;
  height: 25px;
  font-family: 'Strait', sans-serif;
  font-size: 20px;
  border: 2px solid #3e4e35;
  color: #3e4e35;
  background-color: #eae5dc;
}
.pass-usr {
  font-family: 'Strait', sans-serif;
  font-size: 20px;
}
.confirmar-wrapper {
  display:flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.confirmar {
  display: flex;
  width: 600px;
}
.btn-acceder {
  width: 69px;
  height: 35px;
  background-color:#eae5dc;
  color: black;
  border: 2px solid #555555;
  margin-bottom: 20px;
  font-family: 'Strait', sans-serif;
}
.recuerdame-confirmar {
  margin-top: 5px;
  margin-left: 5px;
  font-family: 'Strait', sans-serif;
}
.olvidaste-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.olvidaste {
  display: flex;
  width: 600px;
  margin-bottom: 30px;
  margin-top: 16px;
}
.titulo-olvidaste {
  color: #3e4e35;
  font-family: 'Strait', sans-serif;
}
.registro-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eae5dc;
}
.registro {
  display: flex;
  width: 600px;
  margin-bottom: 6%;
}
.titulo-registro {
  color: #3e4e35;
  font-family: 'Strait', sans-serif;
}
@media screen and (max-width: 680px) {
   .acceder {
    width: 95%;
  }
  .formulario {
    width: 95%;
  }
  .campo-formulario {
    width: 95%;
    justify-content: center;
  }
  .confirmar {
    width: 95%;
  }
  .olvidaste {
    width: 95%;
  }
  .registro {
    width: 95%;
  }
}
@media screen and (max-width: 375px) {
  .acceder {
    width: 90%;
  }
  .formulario {
    width: 90%;
  }
  .campo-formulario {
    width: 90%;
    justify-content: center;
  }
  .confirmar {
    width: 90%;
  }
  .olvidaste {
    width: 90%;
  }
  .registro {
    width: 90%;
  }
}
</style>
