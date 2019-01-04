<template>
  <ul>
    <li style="display: inline-block">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
      <img style="width: 30%;" v-lazy="imgUrl">
    </li>

    <!-- <li style="display: inline-block">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
      <img :src="imgUrl" style="width: 30%;" alt="">
    </li> -->
  </ul>
</template>

<script>
if (process.browser) {
  require('vue-lazyload')
}

export default {
  data() {
    return {
      imgUrl: '/img/bulbe.jpg'
    }
  }
//   asyncData() {
//     return {
//       imgUrl: '/img/bulbe.jpg'
//     }
//   }
}
</script>


<style>
img[lazy='loading'] {
  opacity: 0;
}
img[lazy='error'] {
  border: 5px solid red;
}
img[lazy='loaded'] {
  webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 2s; /* Firefox < 16 */
  -ms-animation: fadein 2s; /* Internet Explorer */
  -o-animation: fadein 2s; /* Opera < 12.1 */
  animation: fadein 2s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
