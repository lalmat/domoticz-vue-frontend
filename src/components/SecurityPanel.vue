<template>
  <b-modal id="security-panel" title="Security Panel" :hide-footer="true">
    <iframe :url="url" class="security-panel"></iframe>
  </b-modal>
  
</template>

<script>
export default {
  data() {
    return {
      url: `${process.env.VUE_APP_DOMOTICZ}/secpanel/index.html#fr`
    }
  }
}
</script>
<style scoped>
.security-panel {
  height:400px;
  width:400px;
}
</style>