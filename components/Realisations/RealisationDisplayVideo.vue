<template>
  <iframe
    :src="asText(vimeo)
  +'?api=1&loop=1&autoplay=0&background=1&title=0&byline=0&portrait=0&sidedock=0#t='
  +asText(startTime)
  +'s'"
    frameborder="0"
    v-on:mouseover="playVideoOnMouseOver"
    v-on:mouseleave="stopVideoOnMouseleave"
  ></iframe>
</template>

<script>
import Player from '@vimeo/player'

export default {
  name: 'RealisationDisplayVideo',
  props: ['vimeo', 'startTime'],
  data() {
    return {
      iframes: [],
      players: []
    }
  },
  methods: {
    playVideoOnMouseOver(e) {
      var iframe = e.target
      var player = new Player(iframe)
      var playPromise = player.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {})
      }
    },
    stopVideoOnMouseleave(e) {
      var iframe = e.target
      var player = new Player(iframe)
      player.pause()
    }
  },
  beforeMount() {
    // var iframes = document.getElementsByTagName('iframe')
    // for (let iframe of iframes) {
    //   let player = new Player(iframe)
    //   var playPromise = player.play()
    //   if (playPromise !== undefined) {
    //     playPromise.then(_ => {
    //       player.pause()
    //     }).catch(error => {})
    //   }
    // }
  }
}
</script>

<style lang="sass" scoped>
</style>
