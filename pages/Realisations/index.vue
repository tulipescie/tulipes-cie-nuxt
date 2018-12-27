<template>
  <section class="container">
    <h1>Réalisations de Tulipes</h1>
    <header>
      Filtres
      <br>
      <button v-on:click="filter('Film')">Films</button>
      <button v-on:click="filter('Musee')">Musées</button>
      <button>Digital VR</button>
      <button>Live</button>
    </header>

    <div>
      <realisation-preview :datas="displayProjects"/>
    </div>
  </section>
</template>

<script>
// API
import Prismic from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'
import htmlSerializer from 'prismic-javascript'

// components
import RealisationPreview from '~/components/Realisations/RealisationPreview.vue'

export default {
  name: 'Realisations',
  components: { RealisationPreview },
  async asyncData(context) {
    var apiEndpoint = 'https://tulipes-cie.prismic.io/api/v2'
    const api = await Prismic.getApi(apiEndpoint)

    let allProjects = {}
    await api
      .query(Prismic.Predicates.at('document.type', 'projet'), {
        orderings: '[my.projet.date desc]'
      })
      .then(response => {
        allProjects = response.results
      })

    return {
      displayProjects: allProjects,
      allProjects: allProjects
    }
  },
  methods: {
    filter (stringtype) {
      this.$data.displayProjects = []
      this.$data.allProjects.forEach(projet => {
        if (projet.data.projet_type === stringtype) {
          this.$data.displayProjects.push(projet)
        }
      });
    }
  }
}
</script>

<style>
</style>
