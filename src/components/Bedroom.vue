<template>
  <div class="row bedroom-item p-1 m-1">
    <div class="col-2">
      <i class="fas fa-bed bedroom-icon" />
    </div>
    <div class="col-3">
      {{ bedroom.name }}
    </div>
    <div class="col-2">
        <i class="fas fa-thermometer-half" /><br />
        {{ temperature.value }}{{ units.degrees }}
    </div>   
    <div class="col-2">
      <i class="fas fa-tint" /><br />
      {{ humidity.value }}{{ units.humidity }} 
    </div> 
    <div class="col-3">
      <b-button-group>
        <b-button @click="switch_device(light.idx, light.inverse)"><i :class="light_class" /></b-button>
        <b-button @click="switch_device(shutter.idx, shutter.inverse)"><i :class="shutter_class" /></b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
  import Devicer      from "../libs/devicer";
  import { EventBus } from "../libs/event-bus";
  export default {
    props:[
      'bedroom', 
      'units'
    ],

    computed: {
      temperature() {
        return Devicer.parse(this.bedroom.devices.temp, 'Temp', 1);
      },

      humidity() {
        return Devicer.parse(this.bedroom.devices.temp, 'Humidity', 1);
      },

      light() {
        return Devicer.parse(this.bedroom.devices.light, 'Status');
      },

      light_class() {
        return {
          'fa-lightbulb': (this.light.state != '-'),
          'fa-ban'      : (this.light.state == '-'),
          'far'         : (this.light.state == 'Off'),
          'fas'         : (this.light.state == 'On' || this.light.state == '-'),
          'text-warning': (this.light.state == 'On')
        }
      },

      shutter() {
        return Devicer.parse(this.bedroom.devices.shutter, 'Status');
      },

      shutter_class() {
        return {
          'fa-square'   : (this.shutter.state != "-"),
          'fa-ban'      : (this.shutter.state == '-'),
          'far'         : (this.shutter.state == 'Off'),
          'fas'         : (this.shutter.state == 'On' || this.shutter.state == '-'),
          'text-success': (this.shutter.state == 'On')
        }
      },

    },

    methods: {
      switch_device(id, value) {
        EventBus.$emit('switch_device', {id, value});
      }
    }
}
</script>
<style scoped>
.bedroom-item {
  background-color: rgba(255, 255, 225, 0.3);
  border-radius: 0.2rem;
}
.bedroom-icon {
  font-size:1.3rem; 
  vertical-align: -0.8rem;
}
</style>