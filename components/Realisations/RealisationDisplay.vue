<template>
  <div id="realisations-container">
    <div class="projet" 
    v-if="isTextValid(projet.data.projet_link_vimeo)"
    v-for="(projet, index) in datas" :key="'projet-' + index">
      <div>
      <nuxt-link :to="`/realisations/${projet.uid}`">
        {{ asText(projet.data.projet_title) }}
        <br>
        {{ asText(projet.data.projet_subtitle) }}
        <realisation-display-video 
        :vimeo="projet.data.projet_link_vimeo"
        :startTime="projet.data.projet_video_start" />
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import RealisationDisplayVideo from './RealisationDisplayVideo.vue'
import Player from '@vimeo/player'

export default {
  name: 'RealisationDisplay',
  props: ['datas'],
  components: { RealisationDisplayVideo },
  data() {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
#realisations-container 
  width: 100%
  height: 70vh
  margin: 0 auto
  display: flex
  flex-wrap: wrap
  text-align: center
  align-items: left
  justify-content: left
  flex-direction: row 
  .projet
    max-width: 32%
    iframe 
      width: 100%
    

</style>
