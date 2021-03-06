<template>
  <div class="register-wrapper">
    <div class="register" v-if="!successScreen">
      <div class="title">Bienvenido a la familia</div>
      <div class="subtitle">
        Registrate en Saté para comenzar a vivir la experiencia culinaria.
      </div>
      <form class="form" @submit.prevent="newUser">
        <label class="label">
          Nombre completo:
          <input type="text" class="input" v-model="data.name">
        </label>
        <label class="label">
          Correo Electrónico
          <input type="text" class="input" v-model="data.email">
        </label>
        <label class="label">
          Contraseña
          <input type="password" class="input" v-model="data.password">
        </label>
        <label class="label">
          Confirma tu contraseña:
          {{ data.password !== passwordConfirmation ? 'Las contraseñas no coinciden' : '' }}
          <input type="password" class="input" v-model="passwordConfirmation">
        </label>
        <div class="terms-input">
          <input type="checkbox" v-model="termsAccepted">
          Acepto los terminos y condiciones de uso.
        </div>
        <div class="error-message" v-if="errorMessage">
          {{ errorMessage }}
        </div>
        <div class="button-wrapper">
          <input
            type="submit"
            class="submit-button"
            :class="[ !validData ? 'disabled' : '' ]"
            value="Registrarse">
        </div>
      </form>
    </div>
    <div class="register" v-else>
      <div class="title">Gracias</div>
      <div class="subtitle">
        Revisa tu bandeja de correo y sigue el link para validar tu
        correo electrónico
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
        name: '',
        email: '',
        password: '',
      },
      passwordConfirmation: '',
      termsAccepted: false,
      successScreen: false,
      errorMessage: null,
    };
  },
  computed: {
    validEmail() {
      if (/(.+)@(.+){2,}\.(.+){2,}/.test(this.data.email)) {
        return true;
      }
      return false;
    },
    validData() {
      if (this.data.name && this.data.password && this.validEmail && this.termsAccepted) {
        return true;
      }
      return false;
    },
  },
  methods: {
    newUser() {
      if (this.validData) {
        this.errorMessage = null;
        this.createUser(this.data)
          .then(() => {
            this.successScreen = true;
          })
          .catch((error) => {
            if (error.response.data === 'User already exists') {
              this.errorMessage = 'El usuario ya esta registrado. Intenta inciar sesión';
            }
          });
      }
    },
    ...mapActions([
      'createUser',
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
.terms-input {
  margin-top: 20px;
  display: flex;
  align-items: baseline;

  input {
    margin-right: 8px;
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
.error-message {
  color: red;
  margin-top: 20px;
}
</style>
