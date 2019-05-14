<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">Entregas de la semana</div>
      <div class="orders">
        <div v-for="foodItem in totalFood" :key="foodItem.product.id">
          {{ foodItem.product.name }}<br>
          {{ foodItem.quantity }}<br>
        </div>
        <div v-for="order in orders" :key="order.id">
          {{ order.user.name }}<br>
          <div v-for="foodItem in order.products" :key="foodItem.id">
            {{ foodItem.name }}
          </div>
        </div>
        <div @click="downloadFile">Descargar</div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';


const { mapState, mapActions } = createNamespacedHelpers('admin');
export default {
  data() {
    return {
      cvsDelivery: 'data:text/csv;charset=utf-8,',
      totalFood: [],
    };
  },
  computed: {
    ...mapState([
      'orders',
    ]),
  },
  methods: {
    downloadFile() {
      const encodedUri = encodeURI(this.cvsDelivery);
      window.open(encodedUri);
    },
    ...mapActions([
      'getWeekOrders',
    ]),
  },
  mounted() {
    this.getWeekOrders().then(() => {
      this.cvsDelivery += 'Calle,Numero,Ciudad,Estado,Nombre,Correo,Teléfono,Comentarios,Guia,Casa u oficina\r\n';
      for (let i = 0; i < this.orders.length; i += 1) {
        const element = this.orders[i];
        // calle, ext, int, colonia, delegoación, estado, nombre, mail, phone, comments, guia, casa,
        this.cvsDelivery += `${element.address},${element.apartment},${element.city},${element.state},${element.user.name},${element.user.email},${element.phone_number},,,Casa\r\n`;
        for (let j = 0; j < element.products.length; j += 1) {
          const product = element.products[j];
          const totalItem = this.totalFood.find(item => item.product.id === product.id);
          if (!totalItem) {
            this.totalFood.push({
              quantity: product.pivot.quantity,
              product,
            });
          } else {
            totalItem.quantity += product.pivot.quantity;
          }
        }
      }
    });
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
  margin-bottom: 40px;
  width: 100%;
}

</style>
