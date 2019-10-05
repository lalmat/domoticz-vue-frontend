<template>
  <div>
    <div class="row">

      <div class="col-6">
        <bedroom v-for="bedroom in bedrooms" 
          :key="bedroom.name"
          :bedroom="bedroom" 
          :units="units"/>
      </div>

      <div class="col-6">
        <cameras :cameras="config.cameras" />
      </div>

    </div>

    <div class="row">
      <security-panel />
      <b-button v-b-modal.security-panel>Alarme</b-button>
    </div>
  </div>
</template>

<script>
import Bedroom from "../components/Bedroom";
import Cameras from "../components/Cameras";
import SecurityPanel from "../components/SecurityPanel";

export default {
  components: {
    'bedroom': Bedroom,
    'security-panel': SecurityPanel,
    'cameras': Cameras
  },

  props: [
    'config',
    'units'
  ],

  computed: {
    bedrooms() {
      return (this.config.rooms) ? this.config.rooms.filter( room => room.type == "bedroom" ) : [];
    }
  },

}
</script>