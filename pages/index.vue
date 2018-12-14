<template>
  <section class="container">
    <div>
      {{ $store.state.datas.homepage }}
      <home-header :homepageDatas="$store.state.datas.homepage"/>
      <home-agence/>
      <home-realisations/>
      <home-bulbe/>
      <home-clients :clientsList="clientsList"/>
      <!-- <home-contact /> -->
    </div>
  </section>
</template>

<script>
import {
  HomeHeader,
  HomeAgence,
  HomeRealisations,
  HomeBulbe,
  HomeClients,
  HomeContact
} from '~/components/Home'

// API
import Prismic from 'prismic-javascript'
import htmlSerializer from 'prismic-javascript'
import PrismicDOM from 'prismic-dom'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeAgence,
    HomeRealisations,
    HomeBulbe,
    HomeClients,
    HomeContact
  },
  async asyncData(context) {
    const api = await Prismic.getApi('https://tulipes-cie.prismic.io/api/v2')
    // let homepageDatas = {}
    // await api.getSingle('homepage').then(document => {
    //   homepageDatas = document.data
    // })

    // let clientsList = []
    // await api.getSingle('liste_clients').then(document => {
    //   clientsList = document.data.clients_list
    // })

    // return {
    //   homepageDatas: homepageDatas,
    //   clientsList: clientsList
    // }
  }
}
</script>

<style lang="scss">
// rajouter div container
h2 {
  color: $tulipes-blue;
}
</style>