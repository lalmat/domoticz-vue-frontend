<template>
  <div class="row">
    <div class="col">
      <carousel-3d class="carroussel">
        <slide v-for="(cam, index) in cameras" :key="cam.idx" :index="index">
          <img :src="`${cam.url}&t=${timestamp}`" :alt="cam.name"/>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d';
  
  export default {

    components: {
      Carousel3d,
      Slide
    },

    props: [
      'cameras'
    ],

    data() {
      return {
        timestamp: 0
      }
    },

    mounted() {
      setInterval(() => {
        this.timestamp = new Date().getTime();
      }, 7000);
    }
};
</script>
<style scoped>
.carroussel {
  width:50vw;
}
</style>