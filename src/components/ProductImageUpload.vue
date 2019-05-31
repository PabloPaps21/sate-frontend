<template>
  <label class="label-file">
    <svg aria-hidden="true" data-prefix="fas" data-icon="upload" class="svg-inline--fa fa-upload fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path></svg>
    <input type="file" @change="uploadImage($event)">
  </label>
</template>


<script>
import axios from 'axios';

export default {
  methods: {
    uploadImage(event) {
      const fd = new FormData();
      const file = event.target.files[0];
      const url = `${process.env.VUE_APP_SERVER_URL}/public-upload`;
      fd.append('image', file);
      axios.post(url, fd)
        .then(({ data }) => {
          this.$emit('completed', data.src);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.label-file {
  border: 1px dotted rgb(196, 196, 196);
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 11px 12px;

  svg {
    height: 14px;
    width: 14px;
    color: black;
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
</style>
