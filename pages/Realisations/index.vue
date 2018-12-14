<template>
  <section class="container">
    <h1>Réalisations de Tulipes</h1>

    <header>
      Filtres <br>
      <button>Films</button>
      <button>Musées</button>
      <button>Digital VR</button>
      <button>Live</button>
    </header>

    <div>
      <realisation-display :datas="realisationsList"/>
    </div>
  </section>
</template>

<script>
// API 
import Prismic from "prismic-javascript"
import PrismicDOM from "prismic-dom"
import htmlSerializer from "prismic-javascript"

// components
import RealisationDisplay from "~/components/Realisations/RealisationDisplay.vue"

export default {
  name: 'Realisations',
  components: {RealisationDisplay},
  async asyncData(context) {
    var apiEndpoint = "https://tulipes-cie.prismic.io/api/v2";
    const api = await Prismic.getApi(apiEndpoint);

    let realisationsList = {}
    await api.query(
        Prismic.Predicates.at('document.type', 'projet'),
        { orderings : '[my.projet.date desc]' }
      ).then((response) => {
        realisationsList = response.results;
      });

    return { 
      realisationsList: realisationsList
    }
  }
}
</script>

<style>
</style>
