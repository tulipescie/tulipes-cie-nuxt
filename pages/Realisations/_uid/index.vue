<template>
  <section class="container">
    <div id="video-wrapper">
      <iframe
        :src="asText(projet.data.projet_link_vimeo)
        +'?api=1&loop=1&autoplay=0&background=1'"
        frameborder="0"
        v-on:mouseover="playVideoOnMouseOver"
        v-on:mouseleave="stopVideoOnMouseleave"
      ></iframe>
    </div>
    <header>
      <div id="title">
        <h1>{{ asText(projet.data.projet_title) }}</h1>
        <br>
        <h2 v-if="projet.data.projet_title">{{ asText(projet.data.projet_subtitle) }}</h2>
      </div>
      <div>
        <ul>
          <li>
            <strong>Client</strong> :
          </li>
          <li>
            <strong>Secteur</strong> :
          </li>
          <li>
            <strong>Thématique</strong> :
          </li>
          <li>
            <strong>Format</strong> :
          </li>
        </ul>
      </div>

      <div v-if="projet.data.projet_subtitle">{{ asText(projet.data.projet_description) }}</div>
    </header>

    <img :src="projet.data.projet_img_main.url" :alt="projet.data.projet_img_main.url">

    <div v-for="(content, index) in projet.data.projet_content_group" :key="'content-' + index">
      <img
        v-if="isImgValid(content.projet_content_img)"
        :src="content.projet_content_img.url"
        :alt="content.projet_content_img.alt"
      >
      <h3 v-if="isTextValid(content.projet_content_title)">{{ asText(content.projet_content_title)}}</h3>
      <p
        v-if="isTextValid(content.projet_content_description)"
      >{{ asText(content.projet_content_description)}}</p>
    </div>
  </section>
</template>

<script>
// API
import Prismic from 'prismic-javascript'
import Player from '@vimeo/player'

export default {
  name: 'Projet',
  async asyncData({ params, error }) {
    const api = await Prismic.getApi('https://tulipes-cie.prismic.io/api/v2')
    let projet = {}
    return api.getByUID('projet', params.uid)
    .then(document => {
      if (document.data.length === 0) {
        throw({ statusCode: 404, message: 'Post not found' })
      }
      return { projet: document }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Post not found' })
    })
  },
  methods: {
    playVideoOnMouseOver(e) {
      var iframe = e.target
      var player = new Player(iframe)
      var playPromise = player.play()
      if (playPromise !== undefined) {
        playPromise.then(_ => {}).catch(error => {})
      }
      // checker mettre une durée à la vidéo
    },
    stopVideoOnMouseleave(e) {
      var iframe = e.target
      var player = new Player(iframe)
      player.pause()
    }
  }
}
</script>

<style lang="stylus" scoped>
#video-wrapper 
  position relative
  padding-bottom 56.25% /* 169 */
  padding-top 25px
  height 0
  object,
  embed,
  iframe 
    position absolute
    top 0
    left 0
    width 100%
    height 100%
  

header 
  #title 
    text-align center
    h1 
      font-size 50px
    
    h2 
      font-size 25px
      text-transform uppercase
    
  
  ul 
    margin-top 10px
    display flex
    li 
      width 30%
    
  

div 
  img 
    max-width 500px
  

</style>