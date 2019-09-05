<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">Nuevo evento</div>
      <form class="form">
        <div class="form-element">
          <AdminInput
            name="Nombre del evento"
            v-model="data.name" />
        </div>
        <div class="form-element">
          <label class="price-label">
            <div class="label-text">Precio</div>
            <div class="price-input">
              $<input
                class="label-input"
                type="text"
                v-model="data.price">
            </div>
          </label>
        </div>
        <div class="form-element">
          <AdminInput
            name="Descripción"
            v-model="data.description" />
        </div>
        <div class="color-buttons">
          <div class="color-label">Color de etiqueta:</div>
          <div
            class="color-button"
            :class="[ data.color === '61728f' ? 'focused-color' : ''  ]"
            @click="data.color = '61728f'"
            style="background-color: #61728f">
          </div>
          <div
            class="color-button"
            :class="[ data.color === '8f5f70' ? 'focused-color' : ''  ]"
            @click="data.color = '8f5f70'"
            style="background-color: #8f5f70">
          </div>
          <div
            class="color-button"
            :class="[ data.color === '7b5e8b' ? 'focused-color' : ''  ]"
            @click="data.color = '7b5e8b'"
            style="background-color: #7b5e8b">
          </div>
          <div
            class="color-button"
            :class="[ data.color === '5f8f7e' ? 'focused-color' : ''  ]"
            @click="data.color = '5f8f7e'"
            style="background-color: #5f8f7e">
          </div>
          <div
            class="color-button"
            :class="[ data.color === '8F7E61' ? 'focused-color' : ''  ]"
            @click="data.color = '8F7E61'"
            style="background-color: #8F7E61">
          </div>
        </div>
        <div class="form-element">
          <div class="image-label">
            <div class="label-text">Imagen principal</div>
            <label class="image-input">
              <div
                class="image-preview"
                :style="{ backgroundImage: `url(${data.image})` }">
              </div>
              {{ data.image ? 'Cambiar imagen' : 'Subir imagen' }}
              <input type="file" @change="uploadImage($event)">
            </label>
          </div>
        </div>
        <div style="width: 100%; margin-top: 12px;">
          <div class="form-element-full">
            <div class="label-text">Imagenes</div>
            <div class="images-list">
              <div
                v-for="(url, index) in data.images"
                :key="index"
                class="uploaded-image"
                :style="{ backgroundImage: `url(${url})` }"
                @click="clickImage(url)">
              </div>
              <ImageUpload @completed="addImage" />
            </div>
          </div>
        </div>
        <div class="button-wrapper">
          <div class="button" @click="newEvent">{{ editId ? 'Actualizar' : 'Crear' }}</div>
        </div>
      </form>
      <div class="line"></div>
      <div class="calendar-wrapper">
        <div class="calendar-header">Fechas</div>
        <div class="date-input">
          <datepicker
            :inline="true"
            v-model="currentDate"
            :language="es" />
          <vue-timepicker
            class="timepicker"
            hide-clear-button
            v-model="currentTime" />
          <div class="button calendar-button" @click="newDate">Añadir</div>
        </div>
        <div class="dates-list" v-if="event">
          <div class="date" v-for="date in event.dates" :key="date.id">
            {{ moment(date.date).format('MMMM Do YYYY, h:mm a') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
import { createNamespacedHelpers } from 'vuex';
import { es } from 'vuejs-datepicker/dist/locale';
import VueTimepicker from 'vue2-timepicker';
import datepicker from 'vuejs-datepicker';
import AdminInput from '@/components/AdminInput.vue';
import ImageUpload from '@/components/ProductImageUpload.vue';

const { mapState, mapActions } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
      moment,
      es,
      editId: null,
      data: {
        name: '',
        price: null,
        description: '',
        image: '',
        color: '',
        images: [],
      },
      currentTime: {
        HH: '00',
        mm: '00',
      },
      currentDate: Date(),
    };
  },
  components: {
    AdminInput,
    datepicker,
    VueTimepicker,
    ImageUpload,
  },
  methods: {
    uploadImage(event) {
      const fd = new FormData();
      const file = event.target.files[0];
      const url = `${process.env.VUE_APP_SERVER_URL}/public-upload`;
      fd.append('image', file);
      axios.post(url, fd)
        .then(({ data }) => {
          this.data.image = data.src;
        });
    },
    newEvent() {
      if (this.editId) {
        this.editEvent({ id: this.editId, data: this.data });
      } else {
        this.createEvent(this.data).then((result) => {
          window.location.href = `/admin/events/${result.id}`;
        });
      }
    },
    newDate() {
      const startDate = this.moment(this.currentDate);
      startDate.hour(parseInt(this.currentTime.HH, 10));
      startDate.minute(parseInt(this.currentTime.mm, 10));
      this.createDate({
        data: {
          date: startDate.format('YYYY/MM/DD HH:mm:ss'),
        },
        id: this.editId,
      }).then(() => {
        this.currentDate = Date();
        this.currentTime.HH = '00';
        this.currentTime.mm = '00';
      });
    },
    addImage(url) {
      this.data.images.push(url);
    },
    clickImage(url) {
      const index = this.data.images.indexOf(url);
      this.data.images.splice(index, 1);
    },
    ...mapActions([
      'createEvent',
      'editEvent',
      'createDate',
      'getEvent',
    ]),
  },
  computed: {
    ...mapState([
      'event',
    ]),
  },
  mounted() {
    this.editId = this.$route.params.id;
    if (this.editId) {
      this.getEvent(this.editId).then(() => {
        this.data.name = this.event.name;
        this.data.price = this.event.price;
        this.data.description = this.event.description;
        this.data.image = this.event.image;
        this.data.color = this.event.color;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Adelle Sans Book';
}
.content {
  width: 900px;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.header {
  font-size: 32px;
  margin-bottom: 20px;
  width: 100%;
}
.form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.form-element {
  width: 48%;
  margin: 12px 0;
}
.price-label {
  display: flex;
  flex-direction: column;
  width: 40%;
}
.label-text {
  color: rgb(82, 82, 82);
  margin-bottom: 8px;
}
.label-input {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
  font-size: 16px;
  padding: 8px 10px;
  color: rgb(82, 82, 82);
  width: 100%;

  &:focus {
    border: 2px solid #414f3a;
    padding: 7px 9px;
  }
}
.price-input {
  display: flex;
  align-items: baseline;

  .label-input {
    margin-left: 8px;
  }
}
input[type=file] {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
.image-input {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 6px;
  font-size: 16px;
  color: rgb(82, 82, 82);
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  line-height: 20px;
  cursor: pointer;
}
.image-preview {
  height: 38px;
  background-color: #414f3a;
  width: 38px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.button-wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
}
.button {
  background-color: #414f3a;
  color: white;
  padding: 12px 30px;
  font-size: 15px;
  cursor: pointer;
}
.calendar-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.calendar-header {
  width: 100%;
  margin: 20px 0;
}
.date-input {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.timepicker {
  margin-top: 30px;

  /deep/ .active {
    background: #414f3a !important;
  }
}
.dates-list {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.calendar-button {
  margin-top: 20px;
  align-self: flex-end;
}
.date {
  width: 100%;
  border: 1px solid #3e4e357c;
  padding: 12px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  & + .date {
    margin-top: 20px;
  }
}
.images-list {
  display: flex;
}
.uploaded-image {
  border: 1px dotted rgb(196, 196, 196);
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 10px;
}
.color-buttons {
  display: flex;
  width: 48%;
  flex-wrap: wrap;
  margin: 12px 0;
}
.color-label {
  width: 100%;
  margin-bottom: 8px;
}
.color-button {
  min-height: 36px;
  max-height: 36px;
  min-width: 36px;
  max-width: 38px;
  background-color: black;
  border-radius: 6px;

  & + .color-button {
    margin-left: 10px;
  }
}
.focused-color {
  border: 3px solid rgb(0, 119, 255);
  min-height: 30px;
  max-height: 30px;
  min-width: 30px;
  max-width: 30px;
}
</style>
