<template>
  <div>
    <div class="row">

      <div class="col-6">
        <bedroom v-for="bedroom in dz.bedrooms" 
          :key="bedroom.name"
          :bedroom="bedroom" 
          :units="units"/>
      </div>

      <security-panel />
      <b-button v-b-modal.security-panel>Alarme</b-button>
    </div>
  </div>
</template>

<script>
import Bedroom from "../components/Bedroom";
import SecurityPanel from "../components/SecurityPanel";

export default {
  components: {
    'bedroom': Bedroom,
    'security-panel': SecurityPanel
  },
  props: [
    'dz',
    'units'
  ]  
}
</script>