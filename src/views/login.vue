<template>
  <div class="register-wrapper">
    <div class="register">
      <div class="title">Bienvenido a Saté</div>
      <div class="subtitle">
        Si ya tienes una cuenta con nosotros proporcionanos tu usuario y
        contraseña o <a href="/register">registrate</a>.
      </div>
      <form class="form" @submit.prevent="loginAction">
        <label class="label">
          Correo electrónico:
          <input type="text" class="input" v-model="data.email">
        </label>
        <label class="label">
          Contraseña:
          <input type="password" class="input" v-model="data.password">
        </label>
        <div class="forgot-button">
          <a href="/forgot-password">¿Olvidate tu contraseña?</a>
          <div class="error-message">{{ errorMessage }}</div>
        </div>
        <div class="button-wrapper">
          <input
            type="submit"
            class="submit-button"
            :class="[ !validData ? 'disabled' : '' ]"
            value="Iniciar sesión">
        </div>
      </form>
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
      errorMessage: null,
    };
  },
  computed: {
    validData() {
      if (this.data.email && this.data.password) {
        return true;
      }
      return false;
    },
  },
  methods: {
    loginAction() {
      this.errorMessage = null;
      this.login(this.data)
        .then(() => {
          this.$router.push('/');
        })
        .catch((error) => {
          if (error.response.data[0].field === 'email') {
            this.errorMessage = 'Usuario no registrado';
          } else if (error.response.data[0].field === 'password') {
            this.errorMessage = 'Contraseña incorrecta';
          } else {
            this.errorMessage = 'Algo salio mal';
          }
        });
    },
    ...mapActions([
      'login',
    ]),
  },
};
</script>

<style lang="scss" scoped>
.register-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Adelle Sans Book';
  background-color: #eae5dc;
}
.register {
  width: 500px;
  padding: 60px 0;
}
.title {
  font-family: 'Strait', sans-serif;
  font-size: 36px;
  margin-bottom: 12px;
}
.subtitle {
  font-family: 'Adelle Sans Book';
  margin-bottom: 26px;
  line-height: 20px;
}
.form {
  display: flex;
  width: 100%;
  flex-direction: column;
}
.label {
  width: 100%;
  display: flex;
  flex-direction: column;

  & + .label {
    margin-top: 24px;
  }
}
.input {
  margin-top: 12px;
  font-size: 16px;
  box-sizing: border-box;
  border: 2px solid gray;
  padding: 8px;
  background-color: transparent;

  &:focus {
    border-color: #3e4e35;
  }
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}
.submit-button {
  background: none;
  color: white;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border: 2px solid black;
  font-family: 'Strait', sans-serif;
  background-color: #414f3a;
  padding: 12px 20px;
}
.disabled {
  filter: opacity(30%);
  cursor: not-allowed;
}
.forgot-button {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  a {
    color: #414f3a;
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1px solid gray;
  }

  a:visited {
    color: inherit;
    text-decoration: none;
  }
}
.error-message {
  color: red;
}
</style>
