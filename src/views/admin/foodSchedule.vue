<template>
  <div class="wrapper">
    <div class="content">
      <div class="header">Calendario de alimentos</div>
      <div class="calendar">
        <datepicker
          :inline="true"
          v-model="startDate"
          :language="es"
          :disabledDates="disabledDates"
          :highlighted="highlighted"
          @selected="selectedDate" />
        <div class="selected-dates">
          <div class="date-info">
            <div class="selection-header">Inicio:</div>
            {{ startMoment ?
              startMoment.format(('MMMM DD YYYY, h:mm a')) : 'Selecciona una fecha' }}
          </div>
          <div class="date-info">
            <div class="selection-header">Final:</div>
            {{ endMoment ?
              endMoment.format(('MMMM DD YYYY, h:mm a')) : 'Selecciona una fecha' }}
          </div>
        </div>
        <div class="save-button" :class="[ activeButton ? '' : 'not-active' ]" @click="submitMenu">
          Guardar
        </div>
      </div>
      <div class="food">
        <div v-for="category in allFood" :key="category.id" class="category">
          <div class="category-name">{{ category.name }}</div>
          <div
            v-for="product in category.products"
            :key="product.id"
            class="product"
            @click="clickFood(product.id)">
            {{ product.name }}
            <div style="font-size: 14px">
              {{ selectedIds.indexOf(product.id) === -1 ? 'Agregar' : 'Eliminar' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import moment from 'moment';
import { es } from 'vuejs-datepicker/dist/locale';
import datepicker from 'vuejs-datepicker';

const { mapState, mapActions } = createNamespacedHelpers('products');
export default {
  data() {
    return {
      es,
      startDate: null,
      disabledDates: {
        days: [0, 2, 3, 4, 5, 6],
      },
      highlighted: {
        includeDisabled: true,
      },
      selectedIds: [],
    };
  },
  computed: {
    activeButton() {
      if (this.startMoment && this.endMoment && this.selectedIds.length > 0) {
        return true;
      }
      return false;
    },
    startMoment() {
      if (!this.startDate) {
        return null;
      }
      const startMoment = moment(this.startDate);
      startMoment.hour(0);
      startMoment.minute(0);
      return startMoment;
    },
    endMoment() {
      if (!this.startDate) {
        return null;
      }
      const startMoment = moment(this.startDate);
      const resultDate = startMoment.add(6, 'd');
      resultDate.hour(18);
      resultDate.minute(0);
      return resultDate;
    },
    ...mapState([
      'allFood',
    ]),
  },
  methods: {
    selectedDate(date) {
      this.highlighted.from = date;
      const resultDate = moment(date).add(6, 'd').toDate();
      this.highlighted.to = resultDate;
    },
    clickFood(id) {
      const index = this.selectedIds.indexOf(id);
      if (index === -1) {
        this.selectedIds.push(id);
      } else {
        this.selectedIds.splice(index, 1);
      }
    },
    submitMenu() {
      if (this.activeButton) {
        const dbStartDate = this.startMoment.format('YYYY-MM-DD HH:mm:ss');
        const dbEndDate = this.endMoment.format('YYYY-MM-DD HH:mm:ss');

        this.createMenu({
          start_date: dbStartDate,
          end_date: dbEndDate,
          selected_ids: this.selectedIds,
        });
      }
    },
    ...mapActions([
      'getAllFood',
      'getTags',
      'createMenu',
    ]),
  },
  components: {
    datepicker,
  },
  mounted() {
    this.getAllFood();
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
.calendar {
  width: 35%;
}
.category {
  width: 100%;
  margin-bottom: 24px;
}
.category-name {
  font-size: 22px;
  margin-bottom: 12px;
}
.food {
  width: 60%;
}
.product {
  width: 100%;
  border: 1px solid #3e4e357c;
  margin: 10px 0;
  padding: 12px 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.selected-dates {
  margin-top: 30px;
}
.date-info {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.selection-header {
  font-weight: 700;
  margin-bottom: 8px;
}
.save-button {
  background-color: #414f3a;
  color: #fff;
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 16px 0;
  cursor: pointer;

  &:hover {
    background-color: lighten(#414f3a, 10%);
  }
}
.not-active {
  filter: opacity(50%);
}
</style>
