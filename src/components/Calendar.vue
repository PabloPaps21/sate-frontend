<template>
<div class="calendar-wrapper">
  <div class="calendar">
    <div class="tabs">
      <div class="tab" @click="view = 'calendar'" :class="[ view === 'calendar' ? 'active' : '' ]">
        <img src="/calendar.svg" style="width: 20px;">
        Calendario
      </div>
      <div class="tab" @click="view = 'list'" :class="[ view === 'list' ? 'active' : '' ]">
        <img src="/list.svg" style="width: 18px;">
        Lista
      </div>
      <div class="tab"></div>
    </div>
    <div class="calendar-view" v-if="view === 'calendar'">
      <div class="month">
        <div class="title">{{ monthsLabel[currentMonth] }} {{ currentYear }}</div>
        <div class="month-controls">
          <div class="arrow" @click="changeMonth(-1)">
            <img style="height: 20px;" src="/back.svg">
          </div>
          <div class="arrow" @click="changeMonth(1)">
            <img style="height: 20px;" src="/next.svg">
          </div>
        </div>
      </div>
      <div class="headers">
        <div
          class="header"
          v-for="(label, index) in daysLabel"
          :key="index">
          {{ label }}
        </div>
      </div>
      <div class="dates">
        <div class="date-fill" v-for="element in startingDays" :key="`pad-${element}`"></div>
        <div class="date" v-for="day in daysInMonth" :key="`day-${day}`">
          <div class="day-number">{{ day }}</div>
          <div
            class="event"
            v-for="event in events
              .filter(element =>
                moment(element.date).month() === currentMonth &&
                moment(element.date).date() === day)"
            :style="{ backgroundColor: `#${event.event.color}`}"
            @click="currentEvent = event"
            :key="event.id">
            {{ event.event.name }}
          </div>
        </div>
        <div class="date-fill" v-for="element in endingDays" :key="element"></div>
      </div>
      <div v-if="fullView" style="margin-top: 40px">
        <div
          class="list-item"
          v-for="event in filteredEvents"
          :key="event.id">
          {{ event.event.name }}
          <div class="item-actions">
            {{ moment(event.date).format('DD MMMM') }}
            <div class="item-button">Reservar</div>
          </div>
        </div>
      </div>
    </div>
    <div class="list-view" v-if="view === 'list'">
      <div class="month" style="margin-bottom: 34px">
        <div class="title">Proximos eventos</div>
      </div>
      <div class="list-item" v-for="event in filteredEvents" :key="event.id">
        {{ event.event.name }}
        <div class="item-actions">
          {{ moment(event.date).format('DD MMMM') }}
          <div class="item-button">Reservar</div>
        </div>
      </div>
    </div>
    <div
      class="background"
      v-if="currentEvent && currentEvent.event"
      @click.self="currentEvent = null">
      <div class="window">
        <EventDetails
          :event="currentEvent.event"
          :date="currentEvent.date"
          :currentBooked="totalBooked" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

import EventDetails from '@/components/EventDetails.vue';

export default {
  data() {
    return {
      view: 'calendar',
      currentEvent: null,
      events: [],
      moment,
      currentMonth: 0,
      currentYear: 0,
      daysLabel: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
      monthsLabel: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    };
  },
  props: ['monthEvents', 'fullView'],
  computed: {
    daysInMonth() {
      const d = new Date(this.currentYear, this.currentMonth + 1, 0);
      return d.getDate();
    },
    startingDays() {
      const d = new Date(this.currentYear, this.currentMonth, 1);
      return d.getDay();
    },
    endingDays() {
      const total = this.daysInMonth + this.startingDays;
      const elements = 7 - (total % 7);
      return elements === 7 ? 0 : elements;
    },
    totalBooked() {
      let total = 0;
      if (this.currentEvent) {
        for (let i = 0; i < this.currentEvent.users.length; i += 1) {
          const element = this.currentEvent.users[i];
          total += element.pivot.bookings;
        }
      }
      return total;
    },
    filteredEvents() {
      return this.events.filter(event => moment(event.date).toDate() > new Date());
    },
  },
  components: {
    EventDetails,
  },
  methods: {
    changeMonth(val) {
      this.currentMonth += val;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      }
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
      this.$emit('monthChange', this.currentMonth);
      this.$emit('yearChange', this.currentYear);
    },
    getEvents() {
      const startDate = this.moment(`1-${this.currentMonth}-${this.currentYear}`, 'DD-MM-YYYY');
      const endDate = this.moment(startDate);
      endDate.endOf('month');

      // Query events with startDate and endDate
    },
  },
  mounted() {
    this.moment.locale('es');
    const d = new Date();
    this.currentMonth = d.getMonth();
    this.currentYear = d.getFullYear();

    this.getEvents();
    axios.get(`${process.env.VUE_APP_SERVER_URL}/events`)
      .then((response) => {
        this.events = response.data;
      });
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  width: 900px;
  display: flex;
  flex-wrap: wrap;
  font-family: 'Strait', sans-serif;
}
.month {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  width: 100%;
}
.month-controls {
  display: flex;
}
.arrow {
  padding-bottom: 5px;
  font-size: 20px;
  margin-left: 40px;
  cursor: pointer;
}
.title {
  font-size: 35px;
  border-bottom: 1px solid gray;
  padding-bottom: 5px;
}
.headers {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 16px 0;
}
.header {
  width: (100%)/7;
  text-align: center;
}
.dates {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid gray;
}
.date-fill {
  width: (100%)/7;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid gray;
  flex-grow: 1;
}
.date {
  width: (100%)/7;
  height: 100px;
  border: 1px solid gray;
  box-sizing: border-box;
  padding: 5px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.event {
  border-radius: 100px;
  background-color: #414f3a;
  padding: 5px 0;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 14px;
  text-align: center;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(19, 18, 18, 0.555);
  padding-top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}
.window {
  width: 700px;
  background-color: #eae5dc;
  padding: 45px;
}
.calendar-view {
  width: 100%;
}
.list-view {
  width: 100%;
  flex-wrap: wrap;
}
.list-item {
  width: 100%;
  border: 2px solid gray;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;

  & + .list-item {
    margin-top: 15px;
  }
}
.item-actions {
  display: flex;
}
.item-button {
  margin-left: 20px;
}
.tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 0;
}
.tab {
  margin: 0 30px;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1px solid transparent;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
}
.active {
  color: #414f3a;
  border-bottom: 1px solid #414f3a;
}
@media screen and (max-width: 900px) {
  .calendar {
    width: 95%;
  }
}
</style>
