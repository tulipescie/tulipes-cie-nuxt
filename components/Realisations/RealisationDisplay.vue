<template>
  <div id="realisations-container">
    <div class="projet" v-for="(projet, index) in datas" :key="'projet-' + index">
      <nuxt-link :to="`/realisations/${projet.uid}`">
      <!-- {{ projet.data.projet_title }} -->
        {{ asText(projet.data.projet_title) }}
        <br>
        {{ asText(projet.data.projet_subtitle) }}
        <iframe :src="asText(projet.data.projet_link_vimeo)
        +'?api=1&loop=1&autoplay=0&background=1'" frameborder="0"
        v-on:mouseover="playVideoOnMouseOver"
        v-on:mouseleave="stopVideoOnMouseleave"></iframe>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import PrismicDOM from "prismic-dom"
import htmlSerializer from "prismic-javascript"
import Player from '@vimeo/player';

export default {
  name: 'RealisationDisplay',
  props: ['datas'],
  methods: {
    playVideoOnMouseOver (e) {
      // on récupère la vidéo cible
      var iframe = e.target;
      // on la passe dans l'API Viméo
      var player = new Player(iframe);
      player.play();
      
      // checker mettre une durée à la vidéo
    },
    stopVideoOnMouseleave (e) {
      // on récupère la vidéo cible
      var iframe = e.target;
      // on la passe dans l'API Viméo
      var player = new Player(iframe);
      player.pause();
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
