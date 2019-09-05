<template>
  <div class="register-wrapper">
    <div class="register">
      <div class="title">Estamos a punto de terminar</div>
      <div class="subtitle">
        Para terminar de recuperar el acceso a tu cuenta de Saté necesitamos
        que nos proporciones una nueva contraseña de acceso.
      </div>
      <form class="form" @submit.prevent="forgotPassword">
        <label class="label">
          Contraseña nueva:
          <input type="password" class="input" v-model="data.newPassword">
        </label>
        <div class="button-wrapper">
          <input
            type="submit"
            class="submit-button"
            :class="[ !validData ? 'disabled' : '' ]"
            value="Cambiar contraseña">
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {
        newPassword: '',
        token: null,
      },
    };
  },
  computed: {
    validData() {
      if (this.data.newPassword) {
        return true;
      }
      return false;
    },
  },
  methods: {
    forgotPassword() {
      if (this.validData) {
        axios.post(`${process.env.VUE_APP_SERVER_URL}/reset`, this.data).then(() => {
          this.$router.push('/login');
        });
      }
    },
  },
  mounted() {
    this.data.token = this.$route.params.token;
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
