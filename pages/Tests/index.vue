<template>
  <section class="container">
    <!-- <image360 /> -->
    <!-- <video360 /> -->
    <!-- <aframe /> -->
    <!-- <horizontal-scroll /> -->
    <lazy />
  </section>
</template>

<script>
import HorizontalScroll from './HorizontalScroll.vue'
import Aframe from './Aframe.vue'
import Image360 from './Image360.vue'
import Video360 from './Video360.vue'
import Lazy from './Lazy.vue'

import axios from 'axios'
import Prismic from 'prismic-javascript'

export default {
  components: {
    HorizontalScroll,
    Aframe,
    Image360,
    Video360,
    Lazy
  }
}
</script>