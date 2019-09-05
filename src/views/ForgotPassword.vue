<template>
  <div class="register-wrapper">
    <div class="register" v-if="!successScreen">
      <div class="title">¿Olvidaste tu contraseña?</div>
      <div class="subtitle">
        Si ya tenias una cuenta con nosotros pero olvidaste tu contraseña proporcionanos
        tu correo electrónico y te enviaremos instrucciones para restaurar tu contraseña.
      </div>
      <form class="form" @submit.prevent="forgotPassword">
        <label class="label">
          Correo electrónico registrado:
          <input type="text" class="input" v-model="data.email">
        </label>
        <div class="button-wrapper">
          <input
            type="submit"
            class="submit-button"
            :class="[ !validData ? 'disabled' : '' ]"
            value="Recuperar">
        </div>
      </form>
    </div>
    <div class="register" v-else>
      <div class="title">Gracias</div>
      <div class="subtitle">
        Revisa tu bandeja de correo electrónico y sigue las instrucciones
        para restaurar tu contraseña
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        email: '',
      },
      successScreen: false,
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
      if (this.data.email && this.validEmail) {
        return true;
      }
      return false;
    },
  },
  methods: {
    forgotPassword() {
      if (this.validData) {
        axios.post(`${process.env.VUE_APP_SERVER_URL}/forgot`, this.data).then(() => {
          this.successScreen = true;
        });
      }
    },
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
</style>
