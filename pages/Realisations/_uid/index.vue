<template>
  <section class="container">
    <h1>projet</h1>
    <br>
    {{ viewProjet }}
  </section>
</template>

<script>
// API
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import htmlSerializer from 'prismic-javascript'

export default {
  name: 'Projet',
  async asyncData(context) {
    console.log(context)
    const api = await Prismic.getApi('https://tulipes-cie.prismic.io/api/v2')
    let realisationsList = {}

    await api.getByUID('projet', context.params.uid).then(document => {
      if (document) {
        console.log(document)
      } else {
        return ''
      }
    })
  },
  methods: {}
}
</script>

<style>
</style>
