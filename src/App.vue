<template>
  <div id="app">
    <div> 
      Main Screen
    </div>
    <router-view :rooms="rooms" :units="units"></router-view>
  </div>
</template>

<script>
import { EventBus } from "./libs/event-bus";
import Domoticz     from "./libs/domoticz";
import RoomsConfig  from "./config";

export default {
  name: "app",

  data() {
    return {
      handler: null,
      units: {
        degrees: '°C',
        humidity: '%'
      },
      rooms: RoomsConfig
    };
  },

  mounted() {
    EventBus.$on('switch_device', this.switch_device);
    this.start_refresh();
  },

  methods: {
    async switch_device(data) {
      console.log('switching', data);
      this.stop_refresh();
      await Domoticz.switch(data.id, data.value);
      this.start_refresh();
    },

    async update_devices() {
      console.log('updating devices...');
      this.rooms = await Domoticz.update_devices(this.rooms);
    },

    start_refresh() {
      if (!this.handler) {
        this.update_devices()
        this.handler = setInterval(this.update_devices, 5000);
      }
    },

    stop_refresh() {
      if (this.handler) {
        clearInterval(this.handler);
        this.handler = null;
      }
    }

  }
};
</script>

<style>
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d8d8d8;
  background-color: #353535;
  font-size:0.8rem;
}
</style>
